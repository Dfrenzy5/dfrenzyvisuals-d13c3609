/**
 * Thin analytics shim. Forwards events to whatever analytics layer the site
 * already has (gtag / dataLayer) without adding a new platform. If none is
 * present the events are no-ops in production and logged in dev.
 */
export type AnalyticsEvent =
  | "blueprint_page_view"
  | "blueprint_form_started"
  | "blueprint_email_submitted"
  | "blueprint_registration_success"
  | "blueprint_registration_failed"
  | "blueprint_download_clicked"
  | "blueprint_email_delivery_success"
  | "blueprint_email_delivery_failed";

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (name: string, opts?: { props: Props }) => void;
  };
  try {
    w.gtag?.("event", event, props);
    w.plausible?.(event, { props });
    if (w.dataLayer && !w.gtag) w.dataLayer.push({ event, ...props });
    if (import.meta.env.DEV) console.debug("[analytics]", event, props);
  } catch {
    /* analytics must never break the funnel */
  }
}
