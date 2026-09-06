import { createFileRoute } from "@tanstack/react-router";

/**
 * Secure Blueprint download. Takes an opaque per-lead token, verifies it
 * server-side, records the download, and redirects to a short-lived signed
 * URL. The permanent storage path is never exposed.
 */
export const Route = createFileRoute("/api/public/blueprint/download")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const token = url.searchParams.get("token")?.trim() ?? "";

        const UUID_RE =
          /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (!UUID_RE.test(token)) {
          return new Response("Invalid or expired download link.", { status: 400 });
        }

        const { createBlueprintSignedUrl } = await import("@/lib/blueprint.server");
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const { data: lead, error } = await supabaseAdmin
          .from("blueprint_leads")
          .select("id, download_count")
          .eq("download_token", token)
          .maybeSingle();

        if (error || !lead) {
          return new Response("Invalid or expired download link.", { status: 404 });
        }

        const signedUrl = await createBlueprintSignedUrl();
        if (!signedUrl) {
          return new Response("The download is temporarily unavailable.", { status: 503 });
        }

        await supabaseAdmin
          .from("blueprint_leads")
          .update({
            download_count: (lead.download_count ?? 0) + 1,
            last_downloaded_at: new Date().toISOString(),
          })
          .eq("id", lead.id);

        return new Response(null, {
          status: 302,
          headers: { location: signedUrl, "cache-control": "no-store" },
        });
      },
    },
  },
});
