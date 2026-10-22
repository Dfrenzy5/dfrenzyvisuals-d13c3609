import { createMiddleware } from "@tanstack/react-start";

/**
 * Project-specific bearer attacher (replaces the generated attachSupabaseAuth).
 *
 * Why: the generated middleware statically imports the browser Supabase
 * client, which THROWS on first use when the public VITE_ env vars are absent
 * — e.g. on builds produced outside the Lovable sandbox (Vercel/GitHub) where
 * .env is not available. That turn every public server function (contact
 * form, Blueprint lead capture) into a hard failure in the browser.
 *
 * This version:
 *  - no-ops silently when the public env vars are missing (all server
 *    functions in this app are public; no bearer is required),
 *  - otherwise attaches the session access token exactly like the generated
 *    middleware, so future authenticated server functions keep working,
 *  - never lets a client/session error bubble into a failed submission.
 */
export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    const url = import.meta.env["VITE_SUPABASE_URL"];
    const key =
      import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ??
      import.meta.env["VITE_SUPABASE_ANON_KEY"];

    if (!url || !key) return next({ headers: {} });

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
    } catch (err) {
      // Never block a public server-function call on auth plumbing.
      console.error("[auth middleware] bearer attach skipped", err);
      return next({ headers: {} });
    }
  },
);
