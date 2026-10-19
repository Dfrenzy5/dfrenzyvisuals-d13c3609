import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";

export interface ContactEnquiryInput { name: string; email: string; projectType: string; message: string; company?: string }
export interface ContactEnquiryResult { ok: boolean; error?: string }

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(String.fromCharCode(34), "&quot;").replaceAll(String.fromCharCode(39), "&#39;");
}

export const sendContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: ContactEnquiryInput) => data)
  .handler(async ({ data }): Promise<ContactEnquiryResult> => {
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    const projectType = typeof data.projectType === "string" ? data.projectType.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";
    if (typeof data.company === "string" && data.company.trim()) return { ok: false, error: "We could not send your enquiry. Please try again." };
    if (name.length < 2 || name.length > 120) return { ok: false, error: "Please enter your name (up to 120 characters)." };
    const { isValidEmail } = await import("./blueprint.server");
    if (!isValidEmail(email)) return { ok: false, error: "Please enter a valid email address." };
    const allowedProjects = ["AI Trailer", "Music Visual", "Brand Promo", "Short Film", "Full AI Film Production", "Other / Not sure yet"];
    if (!allowedProjects.includes(projectType)) return { ok: false, error: "Please select a valid project type." };
    if (message.length < 10 || message.length > 5000) return { ok: false, error: "Please enter a message between 10 and 5,000 characters." };
    let clientKey = email;
    try {
      const forwarded = getRequestHeader("cf-connecting-ip") ?? getRequestHeader("x-forwarded-for") ?? getRequestHeader("x-real-ip");
      if (forwarded) clientKey = forwarded.split(",")[0]!.trim();
      else { const req = getRequest(); const xff = req?.headers.get("x-forwarded-for"); if (xff) clientKey = xff.split(",")[0]!.trim(); }
    } catch { /* best-effort rate-limit identity */ }
    try {
      const { checkRateLimit, hashClient } = await import("./blueprint.server");
      const allowed = await checkRateLimit(await hashClient("contact:" + clientKey), 5, 60);
      if (!allowed) return { ok: false, error: "Too many enquiries were submitted. Please try again later or contact us by email or WhatsApp." };
    } catch (error) { console.error("contact: rate-limit check failed", error); }
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) { console.error("contact: RESEND_API_KEY is not configured"); return { ok: false, error: "The contact service is temporarily unavailable. Please email dfrenzyvisuals@gmail.com or contact us on WhatsApp." }; }
    const from = process.env["CONTACT_FROM_EMAIL"] ?? process.env["BLUEPRINT_FROM_EMAIL"] ?? "DFrenzy Visuals <hello@dfrenzyvisuals.com>";
    const to = process.env["CONTACT_TO_EMAIL"] ?? "dfrenzyvisuals@gmail.com";
    const html = "<!doctype html><html><body><h2>New website enquiry — DFRENZY VISUALS</h2>" +
      "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>" +
      "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>" +
      "<p><strong>Project type:</strong> " + escapeHtml(projectType) + "</p>" +
      "<p><strong>Message:</strong></p><p style=\"white-space:pre-wrap\">" + escapeHtml(message) + "</p>" +
      "<hr/><p>Sent through dfrenzyvisuals.com/contact</p></body></html>";
    const text = "New website enquiry — DFRENZY VISUALS\n\nName: " + name + "\nEmail: " + email + "\nProject type: " + projectType + "\n\nMessage:\n" + message;
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
        body: JSON.stringify({ from, to: [to], reply_to: email, subject: "Website enquiry: " + projectType + " — " + name, html, text }),
      });
      if (!response.ok) { const detail = await response.text(); console.error("contact: Resend failed [" + response.status + "]: " + detail); return { ok: false, error: "Email delivery failed. Please email dfrenzyvisuals@gmail.com or contact us on WhatsApp." }; }
      return { ok: true };
    } catch (error) { console.error("contact: Resend request failed", error); return { ok: false, error: "Email delivery failed. Please email dfrenzyvisuals@gmail.com or contact us on WhatsApp." }; }
  });
