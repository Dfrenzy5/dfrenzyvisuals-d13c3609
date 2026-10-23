import { createServerFn } from "@tanstack/react-start";
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

    // Honeypot: silently accept-but-reject bots.
    if (data.company && data.company.trim() !== "") {
      return { ok: true, emailSent: false };
    }

    const validated = validateContactInput(data);
    if (!validated.ok) return { ok: false, error: validated.error };

    // Email-only contact flow: no Supabase/database dependency.
    const emailResult = await sendContactNotification(validated);

    if (!emailResult.ok) {
      console.error("contact: notification email failed", emailResult.error);
      // Surface only a short diagnostic code, never the API key or provider response body.
      const diagnostic = emailResult.error ?? "unknown";
      return {
        ok: false,
        error: `Email delivery failed (${diagnostic}). Please contact us directly by email or WhatsApp.`,
      };
    }

    return { ok: true, emailSent: true };
  });
