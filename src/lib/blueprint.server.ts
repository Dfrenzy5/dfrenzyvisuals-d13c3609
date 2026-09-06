/**
 * Server-only helpers for the AI Content Creator Blueprint funnel.
 * Nothing in this file may be imported from client code (enforced by the
 * `.server.ts` filename convention).
 */

export const BLUEPRINT_BUCKET = "blueprint-assets";
export const BLUEPRINT_OBJECT = "The_AI_Content_Creator_Blueprint.pdf";
export const BLUEPRINT_SOURCE = "AI Content Creator Blueprint";
/** Signed URLs are short-lived; the email links to a re-issuing endpoint instead. */
export const SIGNED_URL_TTL_SECONDS = 15 * 60;

export const SITE_ORIGIN = "https://dfrenzyvisuals.com";

export function normalizeEmail(raw: unknown): string {
  return typeof raw === "string" ? raw.trim().toLowerCase() : "";
}

const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

export function isValidEmail(email: string): boolean {
  return email.length <= 254 && EMAIL_RE.test(email);
}

/** Create a short-lived signed URL for the private Blueprint PDF. */
export async function createBlueprintSignedUrl(): Promise<string | null> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin.storage
    .from(BLUEPRINT_BUCKET)
    .createSignedUrl(BLUEPRINT_OBJECT, SIGNED_URL_TTL_SECONDS, {
      download: "The-AI-Content-Creator-Blueprint.pdf",
    });
  if (error || !data?.signedUrl) {
    console.error("blueprint: signed url failed", error);
    return null;
  }
  return data.signedUrl;
}

/** Stable, secret-free link that re-issues a fresh signed URL on every click. */
export function downloadEndpoint(token: string): string {
  return `${SITE_ORIGIN}/api/public/blueprint/download?token=${token}`;
}

export function blueprintEmailHtml(opts: { firstName?: string | null; downloadUrl: string }) {
  const greeting = opts.firstName ? `Hi ${escapeHtml(opts.firstName)},` : "Hi there,";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>Your AI Content Creator Blueprint</title></head>
<body style="margin:0;padding:0;background:#050608;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Your free AI Content Creator Blueprint from DFrenzy Visuals is ready to download.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050608;padding:32px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0b0d12;border:1px solid rgba(0,213,255,0.22);border-radius:16px;">
        <tr><td style="padding:36px 32px 8px 32px;text-align:center;">
          <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:5px;color:#39e0ff;">DFRENZY VISUALS</div>
          <h1 style="margin:18px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:24px;line-height:1.25;letter-spacing:2px;color:#ffffff;">YOUR AI CONTENT<br/>CREATOR BLUEPRINT</h1>
        </td></tr>
        <tr><td style="padding:20px 32px 0 32px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.7;color:#b9c2cf;">
          <p style="margin:0 0 14px;">${greeting}</p>
          <p style="margin:0 0 14px;">Thanks for requesting the Blueprint. It's the visual framework we use inside DFrenzy Visuals to produce AI images, video and content at a professional standard — the workflow, the tool stack, and the production tips behind our films.</p>
          <p style="margin:0 0 14px;">Inside: the create → automate → publish → grow → profit pipeline, 100+ AI tools worth knowing, and pro tips straight from our own production line.</p>
        </td></tr>
        <tr><td style="padding:26px 32px 6px 32px;text-align:center;">
          <a href="${opts.downloadUrl}" style="display:inline-block;padding:16px 26px;border-radius:999px;background:#00d5ff;color:#04070a;font-family:Helvetica,Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:2.5px;text-decoration:none;">DOWNLOAD THE AI CONTENT CREATOR BLUEPRINT</a>
        </td></tr>
        <tr><td style="padding:16px 32px 32px 32px;text-align:center;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#7b8494;">
          <p style="margin:0 0 8px;">This link stays valid — if a download ever expires, just click it again and a fresh secure link is issued.</p>
          <p style="margin:0;">DFrenzy Visuals — AI cinematic studio.<br/><a href="${SITE_ORIGIN}" style="color:#39e0ff;text-decoration:none;">dfrenzyvisuals.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

/** Sends the Blueprint delivery email through Resend. Never throws. */
export async function sendBlueprintEmail(opts: {
  to: string;
  firstName?: string | null;
  downloadUrl: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY is not configured" };
  }
  const from = process.env["BLUEPRINT_FROM_EMAIL"] ?? "DFrenzy Visuals <hello@dfrenzyvisuals.com>";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [opts.to],
        subject: "Your AI Content Creator Blueprint Is Ready",
        html: blueprintEmailHtml({ firstName: opts.firstName, downloadUrl: opts.downloadUrl }),
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`blueprint: resend failed [${res.status}]: ${body}`);
      return { ok: false, error: `Resend ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("blueprint: resend threw", err);
    return { ok: false, error: "network" };
  }
}

/** Coarse per-client rate limit: max `limit` submissions per rolling window. */
export async function checkRateLimit(
  clientHash: string,
  limit = 8,
  windowMinutes = 60,
): Promise<boolean> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const now = new Date();
  const { data } = await supabaseAdmin
    .from("blueprint_rate_limits")
    .select("id, attempts, window_start")
    .eq("client_hash", clientHash)
    .maybeSingle();

  if (!data) {
    await supabaseAdmin
      .from("blueprint_rate_limits")
      .insert({ client_hash: clientHash, attempts: 1, window_start: now.toISOString() });
    return true;
  }

  const windowStart = new Date(data.window_start);
  const expired = now.getTime() - windowStart.getTime() > windowMinutes * 60_000;
  if (expired) {
    await supabaseAdmin
      .from("blueprint_rate_limits")
      .update({ attempts: 1, window_start: now.toISOString() })
      .eq("id", data.id);
    return true;
  }
  if (data.attempts >= limit) return false;
  await supabaseAdmin
    .from("blueprint_rate_limits")
    .update({ attempts: data.attempts + 1 })
    .eq("id", data.id);
  return true;
}

export async function hashClient(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(`blueprint:${value}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
