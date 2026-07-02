import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Filter, ArrowRight } from "lucide-react";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film5 from "@/assets/film-5.jpg";
import unbliss from "@/assets/unbliss.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | DFrenzy Visuals — Cinematic AI Film Studio" },
      { name: "description", content: "Explore DFrenzy Visuals' portfolio of AI films, trailers, music visuals, brand promos, and event visuals crafted inside a cinematic AI universe." },
      { property: "og:title", content: "Portfolio | DFrenzy Visuals" },
      { property: "og:description", content: "AI films, trailers, music visuals, and brand promos from DFrenzy Visuals." },
    ],
  }),
  component: PortfolioPage,
});

type Film = {
  id: string;
  slug?: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  youtube?: string;
  description?: string;
  productionType?: string;
  creativeDirection?: string;
  client?: string;
  tools?: string;
};

const FILTERS = [
  "ALL",
  "AI FILMS",
  "TRAILERS",
  "COMMERCIALS",
  "MUSIC VISUALS",
  "PROMOS",
  "EVENTS",
  "DOCUMENTARIES",
] as const;

function ytId(url: string): string {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{6,})/);
  return m ? m[1] : url;
}

const FILMS: Film[] = [
  {
    id: "unbliss",
    slug: "unbliss",
    title: "UNBLISS",
    subtitle: "SOME LOVE STORIES HAVE WITNESSES",
    category: "TRAILERS",
    image: unbliss,
    youtube: "https://youtu.be/aoc6ZZt9DN0",
    description:
      "A poetic cinematic trailer charting a love story told through unseen witnesses — moody, atmospheric, and emotionally precise.",
    productionType: "AI-Assisted Cinematic Trailer",
    creativeDirection: "Editorial / Romantic Drama",
    tools: "AI Generative Pipeline, DaVinci Resolve, Logic Pro",
  },
  {
    id: "1",
    slug: "beyond-horizon",
    title: "BEYOND HORIZON",
    subtitle: "AI TRAILER",
    category: "TRAILERS",
    image: "https://img.youtube.com/vi/79u3BUYXS9E/maxresdefault.jpg",
    youtube: "https://youtu.be/79u3BUYXS9E",
    description:
      "Sci-fi feature trailer exploring the edges of human ambition and the dawn of a new frontier.",
    productionType: "AI Cinematic Trailer",
    creativeDirection: "Sci-Fi Epic",
    tools: "Generative Video, Premiere Pro, Cinema 4D",
  },
  {
    id: "2",
    slug: "unbreakable",
    title: "UNBREAKABLE",
    subtitle: "MUSIC VISUAL",
    category: "MUSIC VISUALS",
    image: film2,
    description: "Rhythm-driven music film with high-contrast visual identity and bold choreography of light.",
    productionType: "Music Visual",
    creativeDirection: "Bold / Editorial",
  },
  {
    id: "3",
    slug: "the-last-signal",
    title: "THE LAST SIGNAL",
    subtitle: "SHORT FILM",
    category: "AI FILMS",
    image: film3,
    description: "A near-future short film about the last broadcast leaving Earth and the people who hear it.",
    productionType: "AI Short Film",
    creativeDirection: "Speculative Drama",
  },
  {
    id: "4",
    slug: "future-unleashed",
    title: "FUTURE UNLEASHED",
    subtitle: "BRAND PROMO",
    category: "PROMOS",
    image: "https://img.youtube.com/vi/woZwTipsk9o/maxresdefault.jpg",
    youtube: "https://youtu.be/woZwTipsk9o",
    description: "Launch promo built to position a brand as the next category leader — kinetic, confident, future-facing.",
    productionType: "Brand Promo",
    creativeDirection: "Kinetic / Modernist",
  },
  {
    id: "5",
    slug: "echoes-of-tomorrow",
    title: "ECHOES OF TOMORROW",
    subtitle: "AI FILM",
    category: "AI FILMS",
    image: film5,
    description: "An atmospheric AI film about memory, machines, and the future we leave for others.",
    productionType: "AI Short Film",
    creativeDirection: "Atmospheric / Contemplative",
  },
  {
    id: "6",
    slug: "legacy-business-summit-2026",
    title: "LEGACY BUSINESS SUMMIT 2026",
    subtitle: "EVENT HIGHLIGHT",
    category: "EVENTS",
    image: "https://img.youtube.com/vi/pdDdO2WOlR4/maxresdefault.jpg",
    youtube: "https://youtu.be/pdDdO2WOlR4",
    description:
      "A cinematic highlight showcasing the energy, excellence, and world-class production of Legacy Business Summit 2026. Capturing keynote moments, audience engagement, networking, and the premium atmosphere of one of Africa's leading business events.",
    productionType: "Event Coverage",
    creativeDirection: "Premium Documentary",
    client: "Legacy Business Summit",
  },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("ALL");
  const [open, setOpen] = useState<Film | null>(null);

  const visible = filter === "ALL" ? FILMS : FILMS.filter((f) => f.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-display text-4xl font-black tracking-[0.2em] text-foreground sm:text-6xl">
          PORTFOLIO
        </h1>
        <p className="mt-3 font-display text-[11px] tracking-[0.5em] text-neon-bright">
          AI · CINEMATIC · WORKS
        </p>
      </div>

      {/* Featured */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-neon/30 glass-panel">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <img src={unbliss} alt="UNBLISS" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <button
            onClick={() => setOpen(FILMS[0])}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play UNBLISS"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon bg-neon/10 backdrop-blur-md transition-all hover:scale-110 hover:neon-glow">
              <Play className="h-8 w-8 fill-neon-bright text-neon-bright" />
            </span>
          </button>
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">FEATURED CINEMATIC</div>
            <h2 className="mt-2 font-display text-3xl font-black tracking-widest text-foreground md:text-5xl">UNBLISS</h2>
            <p className="mt-1 text-sm tracking-widest text-muted-foreground">SOME LOVE STORIES HAVE WITNESSES</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <Filter className="h-3.5 w-3.5 text-neon-bright" />
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 font-display text-[10px] font-semibold tracking-[0.25em] transition-all ${
              filter === f
                ? "border-neon bg-neon/10 text-neon-bright neon-glow"
                : "border-neon/20 text-muted-foreground hover:border-neon/60 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {visible.map((f) => (
          <button
            key={f.id}
            onClick={() => setOpen(f)}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-neon/20 glass-panel text-left transition-all hover:-translate-y-1 hover:border-neon hover:neon-glow"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={f.image}
                alt={`${f.title} — ${f.subtitle}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-neon/40 bg-background/60 px-3 py-1 font-display text-[9px] tracking-[0.3em] text-neon-bright backdrop-blur-md">
                {f.category}
              </span>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-neon bg-neon/10 backdrop-blur-md">
                  <Play className="h-5 w-5 fill-neon-bright text-neon-bright" />
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="font-display text-[9px] tracking-[0.35em] text-neon-bright">{f.subtitle}</div>
              <div className="mt-1 font-display text-base font-bold tracking-widest text-foreground">{f.title}</div>
              {f.description && (
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              )}
            </div>
          </button>
        ))}
        {visible.length === 0 && (
          <div className="col-span-full rounded-xl border border-neon/20 glass-panel p-12 text-center">
            <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
              NO PROJECTS IN THIS CATEGORY YET — CHECK BACK SOON.
            </p>
          </div>
        )}
      </div>

      {/* Cinema mode modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${open.title} case study`}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 text-foreground transition-all hover:border-neon hover:neon-glow"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-neon/40 neon-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-deep">
              {open.youtube ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${ytId(open.youtube)}?autoplay=1`}
                  title={open.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img src={open.image} alt={open.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-sm">
                    <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">CINEMA MODE</div>
                    <div className="mt-2 font-display text-3xl font-black tracking-widest text-foreground md:text-5xl">{open.title}</div>
                    <p className="mt-2 text-sm tracking-widest text-muted-foreground">{open.subtitle}</p>
                    <a
                      href="https://www.youtube.com/@DFRENZYVISUALS"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 flex items-center gap-2 rounded-full border border-neon bg-neon/10 px-6 py-3 font-display text-xs tracking-[0.3em] text-neon-bright hover:neon-glow"
                    >
                      <Play className="h-4 w-4 fill-current" /> WATCH ON YOUTUBE
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Case study panel */}
            <div className="grid gap-8 bg-background p-6 sm:p-10 md:grid-cols-[1.4fr_1fr]">
              <div>
                <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                  {open.category}
                </div>
                <h3 className="mt-2 font-display text-2xl font-black tracking-widest text-foreground sm:text-3xl">
                  {open.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.3em] text-muted-foreground">
                  {open.subtitle}
                </p>
                {open.description && (
                  <p className="mt-5 text-sm leading-relaxed text-foreground/90">
                    {open.description}
                  </p>
                )}
                <Link
                  to="/contact"
                  onClick={() => setOpen(null)}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-neon bg-neon/10 px-6 py-3 font-display text-xs tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
                >
                  START YOUR PROJECT <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <dl className="space-y-4 rounded-xl border border-neon/15 bg-deep/40 p-5">
                {[
                  ["Production Type", open.productionType],
                  ["Creative Direction", open.creativeDirection],
                  ["Client", open.client],
                  ["Tools", open.tools],
                ]
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                        {String(k).toUpperCase()}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground/90">{v}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}