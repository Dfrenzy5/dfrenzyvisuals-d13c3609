import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";

export interface BlueprintRegistrationInput {
  email: string;
  firstName?: string;
  marketingConsent?: boolean;
  /** Honeypot — must stay empty. */
  company?: string;
}

export interface BlueprintRegistrationResult {
  ok: boolean;
  /** Short-lived signed URL for an immediate in-browser download. */
  downloadUrl?: string;
  /** Stable, secret-free endpoint that re-issues a fresh signed URL. */
  downloadLink?: string;
  emailSent?: boolean;
  alreadyRegistered?: boolean;
  error?: string;
}

export const registerBlueprintLead = createServerFn({ method: "POST" })
  .inputValidator((data: BlueprintRegistrationInput) => data)
  .handler(async ({ data }): Promise<BlueprintRegistrationResult> => {
    const {
      normalizeEmail,
      isValidEmail,
      createBlueprintSignedUrl,
      downloadEndpoint,
      sendBlueprintEmail,
      checkRateLimit,
      hashClient,
      BLUEPRINT_SOURCE,
    } = await import("./blueprint.server");

    // Honeypot: silently accept-but-reject bots.
    if (data.company && data.company.trim() !== "") {
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    const email = normalizeEmail(data.email);
    if (!isValidEmail(email)) {
      return { ok: false, error: "Please enter a valid email address." };
    }

    const firstName =
      typeof data.firstName === "string" && data.firstName.trim() !== ""
        ? data.firstName.trim().slice(0, 80)
        : null;
    const marketingConsent = data.marketingConsent === true;

    // Rate limit by client IP (falls back to the email when no IP header exists).
    let clientKey = email;
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
      console.error("blueprint: rate limit check failed", err);
    }

    // Find or create the lead — never create duplicates.
    const { data: existing, error: lookupError } = await supabaseAdmin
      .from("blueprint_leads")
      .select("id, download_token, first_name, marketing_consent")
      .eq("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("blueprint: lookup failed", lookupError);
      return { ok: false, error: "We couldn't save your details. Please try again." };
    }

    let token: string;
    let alreadyRegistered = false;

    if (existing) {
      alreadyRegistered = true;
      token = existing.download_token;
      const update: Record<string, unknown> = {};
      if (firstName && !existing.first_name) update["first_name"] = firstName;
      if (marketingConsent && !existing.marketing_consent) {
        update["marketing_consent"] = true;
        update["consent_timestamp"] = new Date().toISOString();
      }
      if (Object.keys(update).length > 0) {
        await supabaseAdmin.from("blueprint_leads").update(update).eq("id", existing.id);
      }
    } else {
      const { data: inserted, error: insertError } = await supabaseAdmin
        .from("blueprint_leads")
        .insert({
          email,
          first_name: firstName,
          source: BLUEPRINT_SOURCE,
          marketing_consent: marketingConsent,
          consent_timestamp: marketingConsent ? new Date().toISOString() : null,
        })
        .select("id, download_token")
        .single();

      if (insertError || !inserted) {
        // Race with a concurrent insert on the unique email index.
        const { data: retry } = await supabaseAdmin
          .from("blueprint_leads")
          .select("id, download_token")
          .eq("email", email)
          .maybeSingle();
        if (!retry) {
          console.error("blueprint: insert failed", insertError);
          return { ok: false, error: "We couldn't save your details. Please try again." };
        }
        token = retry.download_token;
        alreadyRegistered = true;
      } else {
        token = inserted.download_token;
      }
    }

    const signedUrl = await createBlueprintSignedUrl();
    const downloadLink = downloadEndpoint(token);

    const emailResult = await sendBlueprintEmail({
      to: email,
      firstName,
      downloadUrl: downloadLink,
    });

    await supabaseAdmin
      .from("blueprint_leads")
      .update({
        last_emailed_at: emailResult.ok ? new Date().toISOString() : null,
        email_delivery_status: emailResult.ok ? "sent" : `failed: ${emailResult.error ?? "unknown"}`,
      })
      .eq("email", email);

    return {
      ok: true,
      ...(signedUrl ? { downloadUrl: signedUrl } : {}),
      downloadLink,
      emailSent: emailResult.ok,
      alreadyRegistered,
    };
  });
