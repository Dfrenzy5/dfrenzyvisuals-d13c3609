import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import type { ContactInput } from "./contact.server";

export interface ContactResult {
  ok: boolean;
  /** True when the studio notification email was accepted by Resend. */
  emailSent?: boolean;
  error?: string;
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => data)
  .handler(async ({ data }): Promise<ContactResult> => {
    const { validateContactInput, sendContactNotification } = await import(
      "./contact.server"
    );
    const { checkRateLimit, hashClient } = await import("./blueprint.server");

    // Honeypot: silently accept-but-reject bots.
    if (data.company && data.company.trim() !== "") {
      return { ok: true, emailSent: false };
    }

    const validated = validateContactInput(data);
    if (!validated.ok) return { ok: false, error: validated.error };

    // Rate limit by client IP (falls back to the email when no IP header exists).
    let clientKey = validated.email;
    try {
      const fwd =
        getRequestHeader("cf-connecting-ip") ??
        getRequestHeader("x-forwarded-for") ??
        getRequestHeader("x-real-ip");
      if (fwd) clientKey = fwd.split(",")[0]!.trim();
      else {
        const req = getRequest();
        if (req?.headers.get("x-forwarded-for"))
          clientKey = req.headers.get("x-forwarded-for")!.split(",")[0]!.trim();
      }
    } catch {
      /* header access is best-effort */
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    try {
      const allowed = await checkRateLimit(await hashClient(clientKey));
      if (!allowed) {
        return {
          ok: false,
          error: "Too many requests. Please try again in a little while.",
        };
      }
    } catch (err) {
      console.error("contact: rate limit check failed", err);
    }

    const { data: inserted, error: insertError } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: validated.name,
        email: validated.email,
        project_type: validated.projectType,
        message: validated.message,
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      console.error("contact: insert failed", insertError);
      return {
        ok: false,
        error:
          "We couldn't send your enquiry. Please try again or contact us directly by email or WhatsApp.",
      };
    }

    const emailResult = await sendContactNotification(validated);

    await supabaseAdmin
      .from("contact_submissions")
      .update({
        email_delivery_status: emailResult.ok
          ? "sent"
          : `failed: ${emailResult.error ?? "unknown"}`,
      })
      .eq("id", inserted.id);

    return { ok: true, emailSent: emailResult.ok };
  });
