/**
 * Server-only helpers for the contact form.
 * Nothing in this file may be imported from client code (enforced by the
 * `.server.ts` filename convention).
 */

import { isValidEmail, normalizeEmail } from "./blueprint.server";

export const CONTACT_PROJECT_TYPES = [
  "AI Trailer",
  "Music Visual",
  "Brand Promo",
  "Short Film",
  "Full AI Film Production",
] as const;

export interface ContactInput {
  name: string;
  email: string;
  projectType: string;
  message: string;
  /** Honeypot — must stay empty. */
  company?: string;
}

export function validateContactInput(data: ContactInput):
  | { ok: true; name: string; email: string; projectType: string; message: string }
  | { ok: false; error: string } {
  const name = typeof data.name === "string" ? data.name.trim().slice(0, 120) : "";
  const email = normalizeEmail(data.email);
  const projectType =
    typeof data.projectType === "string" ? data.projectType.trim().slice(0, 80) : "";
  const message = typeof data.message === "string" ? data.message.trim().slice(0, 5000) : "";

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!isValidEmail(email)) return { ok: false, error: "Please enter a valid email address." };
  if (!CONTACT_PROJECT_TYPES.includes(projectType as (typeof CONTACT_PROJECT_TYPES)[number])) {
    return { ok: false, error: "Please select a project type." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Please tell us a little more about your project." };
  }
  return { ok: true, name, email, projectType, message };
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

function contactEmailHtml(opts: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><title>New project enquiry</title></head>
<body style="margin:0;padding:0;background:#050608;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050608;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0b0d12;border:1px solid rgba(0,213,255,0.22);border-radius:16px;">
        <tr><td style="padding:32px 32px 8px 32px;">
          <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:5px;color:#39e0ff;">DFRENZY VISUALS</div>
          <h1 style="margin:16px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:20px;letter-spacing:2px;color:#ffffff;">NEW PROJECT ENQUIRY</h1>
        </td></tr>
        <tr><td style="padding:20px 32px 32px 32px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.7;color:#b9c2cf;">
          <p style="margin:0 0 6px;"><strong style="color:#ffffff;">Name:</strong> ${escapeHtml(opts.name)}</p>
          <p style="margin:0 0 6px;"><strong style="color:#ffffff;">Email:</strong> ${escapeHtml(opts.email)}</p>
          <p style="margin:0 0 16px;"><strong style="color:#ffffff;">Project type:</strong> ${escapeHtml(opts.projectType)}</p>
          <p style="margin:0 0 6px;"><strong style="color:#ffffff;">Message:</strong></p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(opts.message)}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

/** Sends the enquiry notification to the studio inbox through Resend. Never throws. */
export async function sendContactNotification(opts: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY is not configured" };
  }
  const from =
    process.env["CONTACT_FROM_EMAIL"] ??
    process.env["BLUEPRINT_FROM_EMAIL"] ??
    "DFrenzy Visuals <hello@dfrenzyvisuals.com>";
  const to = process.env["CONTACT_TO_EMAIL"] ?? "dfrenzyvisuals@gmail.com";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: opts.email,
        subject: `New enquiry: ${opts.projectType} — ${opts.name}`,
        html: contactEmailHtml(opts),
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`contact: resend failed [${res.status}]: ${body}`);
      return { ok: false, error: `Resend ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("contact: resend threw", err);
    return { ok: false, error: "network" };
  }
}
