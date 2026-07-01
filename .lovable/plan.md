# DFRENZY VISUALS V2.0 — Upgrade Plan

This is a large scope. I'll ship it in **4 focused phases** so you can review after each and redirect if anything drifts. Each phase is a shippable milestone, not a half-built prototype.

Before I start, three quick decisions I need from you (below the plan).

---

## Phase 1 — Foundation & Brand Positioning
Sets the tone everything else builds on.

- **Design tokens**: extend `src/styles.css` with premium blacks, soft silver, gold accents, layered gradients, film-grain utility, lens-bloom glow, cinematic easing.
- **Typography**: larger hero scale, tighter letter-spacing on display, refined body rhythm, clearer H1→H6 hierarchy.
- **Navigation upgrade**: glassmorphism + scroll-aware shrink, animated underline links, persistent "Book a Discovery Call" CTA, improved mobile drawer.
- **Hero rebuild**: new headline "Where AI Meets Cinematic Storytelling", outcome-focused subcopy, volumetric light + film grain + lens bloom over existing particle canvas, dual CTAs (Book a Discovery Call / Watch Showreel), showreel modal.
- **Floating "Start Your Project"** button (keeps WhatsApp button).

## Phase 2 — Homepage Storytelling
Reorders home into the narrative you specified.

Order: Hero → Featured Showreel → Trusted By → Featured Projects → Services → Creative Process → Testimonials → Awards → FAQ → Contact CTA → Footer.

- New sections: **Featured Showreel** (large cinematic player), **Trusted By** (client logo strip), **Creative Process** (5-step visual timeline), **Awards/Recognition**, **FAQ** (accordion), **Contact CTA** band.
- Reuse/upgrade existing Services, Stats, Testimonials from `HomeSections.tsx`.
- Expanded 4-column **Footer** with Quick links / Services / Resources / Newsletter + legal row.

## Phase 3 — Portfolio & Case Studies
Turns the portfolio into the strongest section.

- Richer project schema: challenge, solution, tools, AI workflow, software, duration, deliverables, results, gallery, BTS.
- **Dedicated case-study route** `/portfolio/$slug` for flagship projects (UNBLISS, Legacy Summit, Beyond Horizon) with problem → concept → production → AI pipeline → outcome → credits.
- Dynamic filtering + hover-lift cards, per-project OG metadata + VideoObject/CreativeWork JSON-LD.

## Phase 4 — Services, Contact, SEO, Perf, A11y
Polish and credibility.

- **Services page**: 8 premium panels (AI Commercial, Product Viz, Corporate Films, Music Videos, AI Series, ArchViz, Luxury Brand Content, Creative Direction), each with description / deliverables / timeline / ideal clients / CTA.
- **About page**: vision, mission, philosophy, why AI, how we work.
- **Contact upgrade**: discovery form with project type, budget, timeline, brief upload field, WhatsApp + email + calendar link.
- **SEO**: per-route titles/descriptions/OG/Twitter, Organization + WebSite + VideoObject + FAQPage JSON-LD, sitemap route, robots.txt, canonical tags.
- **Performance**: lazy-load all media, `decoding="async"`, code-split routes, font-display swap.
- **A11y**: focus rings, aria-labels on icon buttons, semantic landmarks, `prefers-reduced-motion` guards on heavy animations.
- **Custom 404** page.

## Out of scope (flagging explicitly)
These are in your list but need product decisions or 3rd-party accounts — I'll stub UI where relevant and note what's needed:

- **Cinematic showreel video loop** in hero background — needs a video file/URL from you. I'll use a high-quality poster + subtle motion until provided.
- **Calendar integration** (Calendly/Cal.com) — needs your booking link.
- **Newsletter** — needs Cloud enabled + provider (Resend/Mailchimp). I'll ship as UI only unless you say otherwise.
- **Insights/blog articles** — I'll scaffold the route + one placeholder post; real content comes from you.
- **Background ambient audio** — I'll skip unless you explicitly want it; it hurts perceived quality on most visits.
- **Awards/press mentions/client logos** — I'll use tasteful placeholders you can swap.

## Technical notes
- All new sections in `src/components/home/*` for clarity.
- Case-study route uses TanStack file-based routing (`portfolio.$slug.tsx`) with per-route `head()`.
- JSON-LD added via route `head().scripts`.
- No backend added; forms remain client-side unless you enable Cloud.

---

## Questions before I start

1. **Showreel video**: do you have a YouTube/Vimeo/MP4 URL for the hero background loop and the Featured Showreel section? (If no, I'll use a poster image + motion for now.)
2. **Booking link**: Calendly/Cal.com URL for "Book a Discovery Call"? (If no, it opens the contact form.)
3. **Scope confirmation**: green-light **all 4 phases**, or start with Phase 1 + 2 and review before Phase 3?
