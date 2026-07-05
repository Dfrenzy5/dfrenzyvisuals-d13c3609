import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Compass,
  Sparkles,
  Clapperboard,
  Rocket,
  Trophy,
  Award,
  Star,
  ChevronDown,
  Play,
  ArrowRight,
} from "lucide-react";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film5 from "@/assets/film-5.jpg";
import unbliss from "@/assets/unbliss.jpg";

/* ---------------- Featured Showreel ---------------- */

export function FeaturedShowreel() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="showreel"
      aria-labelledby="showreel-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
          THE STUDIO IN MOTION
        </p>
        <h2
          id="showreel-heading"
          className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
        >
          FEATURED SHOWREEL
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Selected work from the studio — commercials, brand films, product launches,
          and cinematic storytelling built on an AI-native production pipeline.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative mx-auto mt-12 block w-full max-w-5xl overflow-hidden rounded-3xl border border-neon/25 glass-panel"
          aria-label="Play featured showreel"
        >
          <div className="relative aspect-video">
            <img
              src="https://img.youtube.com/vi/79u3BUYXS9E/maxresdefault.jpg"
              alt="DFrenzy Visuals showreel poster"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-neon bg-neon/10 backdrop-blur-md transition-transform group-hover:scale-110 sm:h-28 sm:w-28">
                <Play className="h-10 w-10 fill-neon-bright text-neon-bright" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-left md:p-10">
              <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                2026 · SHOWREEL
              </div>
              <div className="mt-2 font-display text-2xl font-black tracking-[0.15em] text-foreground md:text-4xl">
                A YEAR OF CINEMA
              </div>
            </div>
          </div>
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Showreel player"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-neon/40 neon-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-deep">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/79u3BUYXS9E?autoplay=1"
                title="DFrenzy Visuals Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- Trusted By ---------------- */

const TRUSTED = [
  "LEGACY SUMMIT",
  "AURA STUDIOS",
  "NORTHWIND",
  "ATLAS MEDIA",
  "HELIOS",
  "MERIDIAN",
  "OBSIDIAN CO.",
];

export function TrustedBy() {
  return (
    <section
      aria-label="Trusted by"
      className="relative px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-[10px] tracking-[0.5em] text-neon-bright">
          TRUSTED BY BRANDS &amp; PRODUCERS WORLDWIDE
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {TRUSTED.map((name) => (
            <span
              key={name}
              className="font-display text-xs tracking-[0.35em] text-muted-foreground/80 sm:text-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured Projects ---------------- */

const FEATURED_PROJECTS = [
  {
    slug: "unbliss",
    title: "UNBLISS",
    tag: "CINEMATIC TRAILER",
    image: "https://img.youtube.com/vi/aoc6ZZt9DN0/maxresdefault.jpg",
  },
  {
    slug: "beyond-horizon",
    title: "BEYOND HORIZON",
    tag: "AI TRAILER",
    image: "https://img.youtube.com/vi/79u3BUYXS9E/maxresdefault.jpg",
  },
  {
    slug: "legacy-business-summit-2026",
    title: "LEGACY SUMMIT 2026",
    tag: "EVENT FILM",
    image: "https://img.youtube.com/vi/pdDdO2WOlR4/maxresdefault.jpg",
  },
  {
    slug: "future-unleashed",
    title: "FUTURE UNLEASHED",
    tag: "COMMERCIAL",
    image: "https://img.youtube.com/vi/woZwTipsk9o/maxresdefault.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              SELECTED WORK
            </p>
            <h2
              id="featured-projects-heading"
              className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
            >
              FEATURED PROJECTS
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-neon/40 px-5 py-2.5 font-display text-[10px] tracking-[0.3em] text-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
          >
            VIEW ALL <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {FEATURED_PROJECTS.map((p) => (
            <Link
              key={p.title}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-neon/20 glass-panel"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-display text-[10px] tracking-[0.35em] text-neon-bright">
                  {p.tag}
                </div>
                <div className="mt-1 font-display text-lg font-black tracking-[0.15em] text-foreground sm:text-xl">
                  {p.title}
                </div>
              </div>
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 transition-all group-hover:ring-1 group-hover:ring-neon/60" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Creative Process ---------------- */

const PROCESS = [
  { Icon: Lightbulb, title: "Discovery", body: "Story, audience, brand, and outcome — aligned before a single frame." },
  { Icon: Compass, title: "Direction", body: "Moodboards, script, and visual language that set the film's DNA." },
  { Icon: Sparkles, title: "AI Pipeline", body: "Generative production paired with human editorial craft." },
  { Icon: Clapperboard, title: "Post & Finishing", body: "Editing, color, sound design, motion, and delivery-grade finishing." },
  { Icon: Rocket, title: "Launch", body: "Master files and every cutdown your rollout needs." },
];

export function CreativeProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            HOW WE WORK
          </p>
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
          >
            CREATIVE PROCESS
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((s, i) => (
            <li
              key={s.title}
              className="group relative rounded-2xl border border-neon/20 glass-panel p-6 transition-all hover:-translate-y-1 hover:border-neon hover:neon-glow"
            >
              <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                STEP {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neon/40 bg-neon/5">
                <s.Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold tracking-[0.15em] text-foreground">
                {s.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Awards / Recognition ---------------- */

const AWARDS = [
  { Icon: Trophy, title: "Featured Studio", note: "AI Filmmaking Showcase 2026" },
  { Icon: Award, title: "Best Cinematic Trailer", note: "Independent Selection" },
  { Icon: Star, title: "5.0 Client Rating", note: "Across launched productions" },
  { Icon: Sparkles, title: "Early AI Pipeline Adopter", note: "Since 2023" },
];

export function Awards() {
  return (
    <section
      aria-labelledby="awards-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            RECOGNITION
          </p>
          <h2
            id="awards-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
          >
            AWARDS &amp; PRESS
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-neon/20 glass-panel p-6 text-center transition-all hover:-translate-y-1 hover:border-neon/60"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-neon/40 bg-neon/5">
                <a.Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
              </div>
              <div className="mt-4 font-display text-sm font-bold tracking-[0.15em] text-foreground">
                {a.title.toUpperCase()}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{a.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most trailers and promos deliver in 2–4 weeks. AI short films and event films are typically 3–6 weeks depending on scope.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We operate remotely and have delivered work for clients across Africa, Europe, and North America.",
  },
  {
    q: "What kind of brands do you work with?",
    a: "Luxury brands, real-estate developers, technology companies, corporates, agencies, and artists who want cinematic storytelling.",
  },
  {
    q: "Do we own the final work?",
    a: "Yes. Clients receive full usage rights to the delivered masters, with source files available on request.",
  },
  {
    q: "How does the AI pipeline change quality?",
    a: "AI compresses production without compressing craft. Direction, editorial, color, and sound are still human-led.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            QUESTIONS
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-4xl"
          >
            FREQUENTLY ASKED
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-neon/20 glass-panel"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neon/5"
                >
                  <span className="font-display text-sm tracking-[0.1em] text-foreground sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-neon-bright transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */

/* ---------------- Director's Choice ---------------- */

export function DirectorsChoice() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="directors-choice"
      aria-labelledby="directors-choice-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            DIRECTOR&apos;S CHOICE
          </p>
          <h2
            id="directors-choice-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
          >
            ONE FILM WE&apos;RE PROUD OF
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A single project hand-picked by the director — the piece that best
            captures where craft, story, and our AI pipeline meet.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play Unbliss cinematic trailer"
            className="group relative block overflow-hidden rounded-3xl border border-neon/30 glass-panel"
          >
            <div className="relative aspect-video">
              <img
                src={unbliss}
                alt="UNBLISS — cinematic trailer poster"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon bg-neon/10 backdrop-blur-md transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play className="h-8 w-8 fill-neon-bright text-neon-bright" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-left md:p-8">
                <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                  CINEMATIC TRAILER
                </div>
                <div className="mt-2 font-display text-2xl font-black tracking-[0.15em] text-foreground md:text-3xl">
                  UNBLISS
                </div>
              </div>
            </div>
          </button>

          <div>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              WHY THIS FILM
            </p>
            <h3 className="mt-3 font-display text-2xl font-black tracking-[0.14em] text-foreground sm:text-3xl">
              A LOVE STORY TOLD BY UNSEEN WITNESSES.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Moody, atmospheric, emotionally precise — Unbliss is the clearest
              expression of the studio&apos;s voice: cinematic direction,
              patient camera, and an AI pipeline used to serve the story, never
              to replace it.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-deep/40 p-5">
              <div>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  FORMAT
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">Short Film Trailer</dd>
              </div>
              <div>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  RUNTIME
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">01:42</dd>
              </div>
              <div>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  DIRECTION
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">DFrenzy Visuals</dd>
              </div>
              <div>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  PIPELINE
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">AI-Native</dd>
              </div>
            </dl>
            <Link
              to="/portfolio/$slug"
              params={{ slug: "unbliss" }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-neon bg-neon/10 px-6 py-3 font-display text-[11px] tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
            >
              VIEW FULL CASE STUDY
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Unbliss trailer player"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-neon/40 neon-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-deep">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/aoc6ZZt9DN0?autoplay=1"
                title="UNBLISS trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------- Creative Lab ---------------- */

const LAB_ITEMS = [
  {
    tag: "EXPERIMENT · 001",
    title: "Volumetric Portraits",
    body: "Studies in light, motion, and grain — testing how AI-generated portraiture holds up on a cinema screen.",
    image: film2,
  },
  {
    tag: "EXPERIMENT · 002",
    title: "AI-Directed World Design",
    body: "Building sci-fi environments from a written treatment — from moodboard to moving frame in a single afternoon.",
    image: film3,
  },
  {
    tag: "EXPERIMENT · 003",
    title: "Sound-Led Editing",
    body: "Cutting picture to sound design first, then reshaping generated coverage to match rhythm and breath.",
    image: film5,
  },
];

export function CreativeLab() {
  return (
    <section
      id="creative-lab"
      aria-labelledby="creative-lab-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              R&amp;D · CREATIVE LAB
            </p>
            <h2
              id="creative-lab-heading"
              className="mt-3 font-display text-3xl font-black tracking-[0.14em] text-foreground sm:text-5xl"
            >
              INSIDE THE LAB
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Not every frame becomes a film. The Creative Lab is where we
              stress-test new tools, build custom pipelines, and translate raw
              experiments into cinematic language.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-neon/40 px-5 py-2.5 font-display text-[10px] tracking-[0.3em] text-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
          >
            EXPLORE WORK <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LAB_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-neon/20 glass-panel transition-all hover:-translate-y-1 hover:border-neon hover:neon-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                    {item.tag}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-black tracking-[0.14em] text-foreground">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA (below) ---------------- */

export function ContactCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-neon/30 glass-panel p-10 text-center sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-1 -z-10 opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.78 0.18 230 / 0.35), transparent 70%)",
          }}
        />
        <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
          READY TO CREATE?
        </p>
        <h2
          id="cta-heading"
          className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black tracking-[0.14em] text-foreground sm:text-5xl"
        >
          LET&apos;S BUILD YOUR NEXT CINEMATIC MOMENT.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Tell us about your project — brand film, launch trailer, event coverage,
          or something new. We&apos;ll respond within one business day.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-neon bg-neon/10 px-8 py-4 font-display text-xs tracking-[0.35em] text-neon-bright transition-all hover:neon-glow"
          >
            START YOUR PROJECT <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/2347044775158"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 px-8 py-4 font-display text-xs tracking-[0.35em] text-foreground transition-all hover:border-neon hover:text-neon-bright"
          >
            CHAT ON WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Floating Start Project button ---------------- */

export function FloatingStartProject() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Link
      to="/contact"
      aria-label="Start your project"
      className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-neon bg-background/70 px-5 py-3 font-display text-[10px] tracking-[0.3em] text-neon-bright shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:neon-glow sm:inline-flex"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 400ms, transform 400ms",
      }}
    >
      <Sparkles className="h-3.5 w-3.5" />
      START YOUR PROJECT
    </Link>
  );
}