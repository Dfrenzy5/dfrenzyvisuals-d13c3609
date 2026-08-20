/**
 * Canonical production origin for DFRENZY VISUALS.
 * All absolute SEO URLs (canonical, og:url, sitemap, structured data)
 * must be built from this constant — never from a deployment URL.
 */
export const SITE_URL = "https://dfrenzyvisuals.com";

export const canonical = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
