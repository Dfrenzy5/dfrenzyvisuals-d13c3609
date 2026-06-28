## DFrenzy Visuals — Premium UX & Performance Overhaul

This is a large, multi-area overhaul. I'll execute it in focused phases so each ships as a coherent improvement rather than a sprawling rewrite. Confirm the scope below (or trim it) and I'll start with Phase 1.

### Phase 1 — Foundations (performance + global polish)
- Lazy-load heavy media: convert hero particle canvas, welcome video poster, and portfolio thumbnails to IntersectionObserver-gated mounts; add `loading="lazy"` + `decoding="async"` everywhere; add explicit `width/height` (or `aspect-*`) to kill CLS.
- Memoize hot components (`SiteHeader`, `WhatsAppButton`, portfolio cards) and split the index route's intro state machine out of the render path with `useReducer` + refs to stop per-frame re-renders.
- Header: shrink to ~64px, add `backdrop-blur-xl` + translucent bg only when `scrollY > 8`, active nav underline via `useRouterState`, animated mobile drawer (Sheet).
- Global motion tokens (fade / scale / slide / blur) wired through Tailwind v4 `@theme` + `@utility`; remove ad-hoc keyframes that aren't reused.
- Smooth scroll + `prefers-reduced-motion` guard.

### Phase 2 — Hero + Welcome refinement
- Hero: tighten type scale (display 5xl→8xl fluid), add a clear sub-tagline naming the 5 pillars (AI Films, Commercials, Corporate, Events, Creative), increase CTA breathing room, add a soft gold light-sweep behind the logo, reduce particle count on mobile.
- Welcome: large cinematic play button opens a fullscreen YouTube modal with dark overlay + elegant scale-in. Poster stays as 9:16 placeholder until a video URL is provided — I'll add a `WELCOME_VIDEO_ID` const at the top of the component so you can drop in the YouTube ID later.

### Phase 3 — Portfolio as case studies
- New `Documentaries` + `Commercials` categories added to filters.
- Card redesign: large thumbnail, gold category badge, title, 1-line pro description, hover zoom + gold ring + glass overlay, play glyph.
- Modal upgrade: embedded player + structured meta panel (Overview, Production Type, Creative Direction, Client, Tools) + "Start Your Project" CTA → `/contact`.
- Grid uses `auto-fill` with min track so filtered views stay aligned without gaps.

### Phase 4 — New sections (Services, About, Testimonials)
- Add `ServicesGrid` section to home: 6 cards (AI Film Production, Commercials, Corporate Storytelling, Event Coverage, Music Visuals, Brand Promos) — icon, title, value line, hover elevation.
- Add `AboutStudio` section: Mission / Vision / Creative Philosophy / AI-Powered Filmmaking — 2x2 luxury glass grid.
- Add `Testimonials` carousel (embla) with large gold quote marks + optional avatar slot.
- **Stats counter rewrite**: `requestAnimationFrame` with `easeOutCubic`, runs once via IntersectionObserver, ~1500ms, snapshot the start timestamp so no skipped frames or stutter.

### Phase 5 — Pricing, Contact, Footer, SEO/a11y
- Pricing: elevate the PRO card (scale 1.05, gold ring, "RECOMMENDED" ribbon), comparison-style feature rows, clearer CTA.
- Contact: prominent WhatsApp / Email / Location / Socials block above the form; better field spacing; success state with checkmark scale-in.
- Footer: 4-column (Quick Links, Services, Connect, Brand) + back-to-top FAB.
- Per-route `head()` polish: unique titles/descriptions, og:image per leaf, Organization + WebSite JSON-LD on root, BreadcrumbList on portfolio.
- Accessibility pass: aria-labels on every icon button, visible focus rings, contrast audit on muted text over glass, keyboard-trap check on modals.

### Out of scope (ask if you want these)
- Real CMS/database for case studies (I'll keep them in a typed `FILMS` array).
- Multi-language / i18n.
- Replacing the existing cosmic/neon visual identity with a different palette — I'll keep neon-cyan-on-black-with-gold-accents (current direction), not pivot to pure black/gold.

### Notes
- I won't add fake testimonials or invented client names — placeholders will be clearly marked so you can swap in real ones.
- Welcome video URL: please send the YouTube link when ready; I'll wire the ID into the constant.
- This will touch most files under `src/`; expect ~15-20 edits per phase.

Reply with **go** to start Phase 1, or tell me which phases to skip / reorder.
