import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, X, Filter } from "lucide-react";
import film1 from "@/assets/film-1.jpg";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film4 from "@/assets/film-4.jpg";
import film5 from "@/assets/film-5.jpg";
import film6 from "@/assets/film-6.jpg";
import unbliss from "@/assets/unbliss.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — DFRENZY VISUALS" },
      { name: "description", content: "AI cinematic works: trailers, music visuals, brand promos, and experimental shorts." },
      { property: "og:title", content: "Portfolio — DFRENZY VISUALS" },
      { property: "og:description", content: "AI cinematic film gallery." },
    ],
  }),
  component: PortfolioPage,
});

type Film = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  youtube?: string;
};

const FILTERS = ["ALL", "AI FILMS", "TRAILERS", "MUSIC VISUALS", "PROMOS", "EVENTS"] as const;

const FILMS: Film[] = [
  { id: "unbliss", title: "UNBLISS", subtitle: "SOME LOVE STORIES HAVE WITNESSES", category: "TRAILERS", image: unbliss },
  { id: "1", title: "BEYOND HORIZON", subtitle: "AI TRAILER", category: "TRAILERS", image: film1 },
  { id: "2", title: "UNBREAKABLE", subtitle: "MUSIC VISUAL", category: "MUSIC VISUALS", image: film2 },
  { id: "3", title: "THE LAST SIGNAL", subtitle: "SHORT FILM", category: "AI FILMS", image: film3 },
  { id: "4", title: "FUTURE UNLEASHED", subtitle: "BRAND PROMO", category: "PROMOS", image: film4 },
  { id: "5", title: "ECHOES OF TOMORROW", subtitle: "AI FILM", category: "AI FILMS", image: film5 },
  { id: "6", title: "GALACTIC SUMMIT", subtitle: "EVENT VISUAL", category: "EVENTS", image: film6 },
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
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((f) => (
          <button
            key={f.id}
            onClick={() => setOpen(f)}
            className="group relative overflow-hidden rounded-xl border border-neon/20 glass-panel text-left transition-all hover:-translate-y-1 hover:border-neon hover:neon-glow"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-neon bg-neon/10 backdrop-blur-md">
                  <Play className="h-5 w-5 fill-neon-bright text-neon-bright" />
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="font-display text-[9px] tracking-[0.35em] text-neon-bright">{f.subtitle}</div>
              <div className="mt-1 font-display text-base font-bold tracking-widest text-foreground">{f.title}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Cinema mode modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-neon/40 text-foreground transition-all hover:border-neon hover:neon-glow"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-neon/40 neon-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-deep">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}