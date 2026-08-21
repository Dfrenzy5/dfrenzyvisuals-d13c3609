
# Dfrenzy Visuals 4.0 — Cinematic Studio Upgrade

This is an upgrade on top of the current site, not a rewrite. Every existing route, video, logo, case study, portfolio slug, SEO tag, and integration (WhatsApp, YouTube, sitemap) stays. What changes is the design language, layout system, and interaction quality — so the site reads as a premium creative studio instead of a portfolio.

## Brand repositioning (copy pass, no route changes)

- Reframe hero + about copy: "Cinematic creative studio. AI-native production pipeline." AI is a capability line, not the headline.
- Service framing: Commercials, Branded Storytelling, Product Films, Architectural Visualization, Virtual Production, Music Visuals.
- Keep existing project titles, videos, and case studies; adjust taglines/intros to match the studio voice.

## Design system (single source of truth in `src/styles.css`)

- **Grid & container tokens:** `--container-max: 1440px`, `--container-std: 1280px`, `--reading: 760px`. New `Container` wrapper component so every section aligns.
- **Spacing scale:** replace ad-hoc paddings with tokens `--s-4 … --s-256` (4/8/12/16/24/32/48/64/80/96/128/160/192/256). Utilities `pad-y-*`, `stack-*` for vertical rhythm.
- **Typography:** define `--fs-display / h1 / h2 / h3 / body-lg / body / caption` with clamp() for fluid scaling; keep Orbitron for display, Inter for body. Reading blocks capped at 760px.
- **Color:** layered dark palette — `--bg-0` deep space, `--bg-1` panel, `--bg-2` elevated, `--line` hairline, `--text / --text-muted`, single accent kept as existing neon cyan (`--neon`) used sparingly (primary CTA, key highlights, focus rings). Remove neon glow from body copy.
- **Radii & elevation:** `--r-sm/md/lg/xl`, `--shadow-1/2/3` for subtle elevation on cards and glass.
- **Motion tokens:** `--ease-out-cine`, durations 200/400/700ms; global `prefers-reduced-motion` guard.

## Reusable component library (`src/components/ui-studio/`)

New primitives, refactored into every page:

- `Container`, `Section` (spacing + optional eyebrow/heading/lede).
- `Button` variants: `primary` (filled accent), `secondary` (outlined), `ghost` (minimal). Consistent radius, focus ring, hover.
- `Card` variants: `ProjectCard`, `ServiceCard`, `CaseStudyCard`, `ArticleCard`, `TestimonialCard` — all share elevation, hover lift, media aspect handling.
- `Field`, `Textarea`, `FormMessage` — large inputs, labels, validation, loading, success states. Contact form migrates onto these.
- `Reveal` — fade / slide / blur / mask reveal on scroll (IntersectionObserver, disabled under reduced motion).
- `MediaVideo` — lazy, muted, looped, poster fallback, autoplay only when in view.

Existing shadcn primitives stay; new studio primitives wrap them where useful.

## Layout system

- 12 / 8 / 4 column responsive grid via CSS `grid-template-columns: repeat(var(--cols), 1fr)` with breakpoints on `Container`.
- Every page section refactored to use `Section` + `Container` for consistent alignment.

## Navigation & Footer

- **Header:** transparent on load, glass blur + hairline border after 8px scroll (already partly there — smoothed transition, reduced height jump, unified CTA "Start Your Project" replacing the current "Book a Discovery Call" button, links to `/contact`). Polished mobile drawer (Sheet) with staggered link reveal, close on route change.
- **Footer:** redesigned into 5 columns — Studio (about + short mission), Work (portfolio + case studies), Services, Resources (FAQ, Process, Contact), Connect (social + email + WhatsApp). Newsletter placeholder input (non-functional stub, marked as such). Copyright + back-to-top.

## Page-by-page upgrades (routes unchanged)

- `/` Home: keep the cinematic intro sequence; replace subsequent sections with the new `Section`/`Container` rhythm. Order: Hero → Showreel → Trusted By → Services strip → Selected Work (existing FeaturedProjects) → Process → Awards → FAQ → Contact CTA. Copy repositioned to studio voice.
- `/portfolio`: keep filter + Cinema Mode; migrate cards to `ProjectCard`, tighter grid, better hover.
- `/portfolio/$slug`: keep all 7 case studies + JSON-LD; wrap sections in `Section`, improve typographic hierarchy, add prev/next.
- `/pricing`: keep 3 tiers + prices; restyle as premium studio packages with clearer feature lists and a single primary CTA per card.
- `/contact`: keep terminal aesthetic option but move primary form to the new `Field` system with validation + success state; keep email + WhatsApp entry points.

## Motion & scroll

- Global `Reveal` on section entry (fade + 12px slide, 500ms). No parallax on mobile. Respect `prefers-reduced-motion` (all animations become instant).
- Smooth section transitions via consistent spacing tokens rather than JS.

## Performance & a11y

- Videos: `preload="none"`, `loading="lazy"` on iframes, poster images, autoplay only for in-view muted loops.
- Images: keep local assets, add `width`/`height` + `loading="lazy"` + `decoding="async"` where missing.
- Focus rings on all interactive elements via a shared `focus-visible` utility.
- Single `<main>` per route, semantic landmarks, aria-labels on icon buttons, color contrast checked against tokens.

## SEO

- Keep all existing per-route `head()`, canonical, JSON-LD, sitemap, robots.
- Add `og:type` per route where missing; verify `og:url` self-references.

## Technical notes

- All work is presentation-layer: new/updated files under `src/styles.css`, `src/components/ui-studio/*`, and edits to existing routes/components. No backend, no schema, no new deps beyond what's installed.
- No changes to `router.tsx`, `routeTree.gen.ts`, server functions, or WhatsApp button behavior.
- Rollout in one pass, verified by build + a Playwright screenshot sweep of `/`, `/portfolio`, `/portfolio/unbliss`, `/pricing`, `/contact` at mobile + desktop.

## Out of scope (call out before starting if you want them in)

- New portfolio content, new videos, or new case studies.
- Newsletter backend, blog/Resources articles, testimonials content (placeholders only unless you provide copy).
- CMS, i18n, analytics, or auth.

Approve and I'll ship it in one implementation pass.
