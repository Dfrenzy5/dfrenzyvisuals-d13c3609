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

    // This form only sends an email; it does not require Supabase or database storage.
    const emailResult = await sendContactNotification(validated);

    if (!emailResult.ok) {
      console.error("contact: notification email failed", emailResult.error);
      return {
        ok: false,
        error:
          "We couldn't send your enquiry. Please try again or contact us directly by email or WhatsApp.",
      };
    }

    return { ok: true, emailSent: true };
  });
