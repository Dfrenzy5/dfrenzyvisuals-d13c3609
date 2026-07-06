import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film5 from "@/assets/film-5.jpg";
import unbliss from "@/assets/unbliss.jpg";

type Project = {
  slug: string;
  title: string;
  category: string;
  categoryKey: string;
  summary: string;
  poster: string;
  youtube?: string;
  services?: string;
  client?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "unbliss",
    title: "UNBLISS",
    category: "Cinematic Trailer",
    categoryKey: "brand-films",
    summary:
      "A poetic love story told through unseen witnesses — moody, atmospheric, and emotionally precise.",
    poster: unbliss,
    youtube: "aoc6ZZt9DN0",
    services: "Direction · AI Pipeline · Edit · Sound",
  },
  {
    slug: "beyond-horizon",
    title: "BEYOND HORIZON",
    category: "AI Sci-Fi Trailer",
    categoryKey: "brand-films",
    summary:
      "A sci-fi feature trailer generated end-to-end with a directed AI pipeline — cinematic scale, not synthetic.",
    poster: "https://img.youtube.com/vi/79u3BUYXS9E/maxresdefault.jpg",
    youtube: "79u3BUYXS9E",
    services: "Direction · World Design · Edit",
  },
  {
    slug: "future-unleashed",
    title: "FUTURE UNLEASHED",
    category: "Commercial",
    categoryKey: "commercials",
    summary:
      "A kinetic brand launch built to position a category-defining company — confident, future-facing, and typographic.",
    poster: "https://img.youtube.com/vi/woZwTipsk9o/maxresdefault.jpg",
    youtube: "woZwTipsk9o",
    services: "Creative Direction · Motion · Edit",
  },
  {
    slug: "legacy-business-summit-2026",
    title: "LEGACY SUMMIT 2026",
    category: "Event Film",
    categoryKey: "commercials",
    summary:
      "Premium event coverage capturing the prestige and executive presence of one of Africa's leading business summits.",
    poster: "https://img.youtube.com/vi/pdDdO2WOlR4/maxresdefault.jpg",
    youtube: "pdDdO2WOlR4",
    services: "Direction · Edit · Color · Sound",
    client: "Legacy Business Summit",
  },
  {
    slug: "unbreakable",
    title: "UNBREAKABLE",
    category: "Music Visual",
    categoryKey: "music",
    summary:
      "A rhythm-driven music visual — bodies of light, high-contrast portraiture, cut sharp to the beat grid.",
    poster: film2,
    services: "Direction · Edit · Color",
  },
  {
    slug: "the-last-signal",
    title: "THE LAST SIGNAL",
    category: "AI Short Film",
    categoryKey: "animation",
    summary:
      "A near-future short film about the last broadcast leaving Earth — intimate close-ups against a quiet apocalypse.",
    poster: film3,
    services: "Direction · Writing · AI Pipeline",
  },
  {
    slug: "echoes-of-tomorrow",
    title: "ECHOES OF TOMORROW",
    category: "Atmospheric AI Film",
    categoryKey: "animation",
    summary:
      "A meditative AI film on memory and machine consciousness — long holds, patient camera, dust in light.",
    poster: film5,
    services: "Direction · AI Pipeline · Edit · Sound",
  },
];

const FILTERS: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "commercials", label: "Commercials" },
  { key: "brand-films", label: "Brand Films" },
  { key: "music", label: "Music" },
  { key: "animation", label: "Animation" },
];

export function FeaturedShowcase() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.categoryKey === filter)),
    [filter],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const on = () => setReduced(m.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);

  // Defer non-critical work (video iframes, autoplay) until section is near viewport
  // AND the page has become interactive. Keeps LCP/TTI free of YouTube network cost.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const idle = (cb: () => void) => {
      const w = window as typeof window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      };
      if (w.requestIdleCallback) w.requestIdleCallback(cb, { timeout: 1500 });
      else setTimeout(cb, 800);
    };
    idle(() => setHydrated(true));
  }, []);

  // Track active card by proximity to scroller center.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const compute = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [visible.length]);

  // Reset scroll to start when filter changes.
  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTo({ left: 0, behavior: reduced ? "auto" : "smooth" });
  }, [filter, reduced]);

  // Wheel-to-horizontal within the scroller.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
      const canScrollLeft = el.scrollLeft > 2;
      if ((e.deltaY > 0 && canScrollRight) || (e.deltaY < 0 && canScrollLeft)) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollToIdx = useCallback(
    (idx: number) => {
      const card = cardRefs.current[idx];
      const el = scrollerRef.current;
      if (!card || !el) return;
      const cardRect = card.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const delta = cardRect.left - elRect.left - (elRect.width - cardRect.width) / 2;
      el.scrollBy({ left: delta, behavior: reduced ? "auto" : "smooth" });
    },
    [reduced],
  );

  const prev = () => scrollToIdx(Math.max(0, active - 1));
  const next = () => scrollToIdx(Math.min(visible.length - 1, active + 1));

  // Auto-advance slider (pauses on hover / focus / reduced motion).
  useEffect(() => {
    if (reduced || paused || visible.length <= 1) return;
    const id = setInterval(() => {
      const nextIdx = (active + 1) % visible.length;
      scrollToIdx(nextIdx);
    }, 7000);
    return () => clearInterval(id);
  }, [active, paused, reduced, visible.length, scrollToIdx]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const activeProject = visible[active];
  const progressPct = visible.length > 1 ? ((active + 1) / visible.length) * 100 : 100;

  return (
    <section
      id="featured-work"
      ref={sectionRef}
      aria-labelledby="featured-work-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient cinematic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-x-0 top-0 h-1/2 opacity-60"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, oklch(0.78 0.18 230 / 0.12), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 opacity-50"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 100%, oklch(0.78 0.18 320 / 0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              FEATURED WORK
            </p>
            <h2
              id="featured-work-heading"
              className="mt-3 font-display text-3xl font-black tracking-[0.14em] text-foreground sm:text-5xl"
            >
              SELECTED FILMS &amp; COMMERCIALS
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A curated collection of cinematic commercials, branded films, product
              visualizations, architectural experiences, and AI-powered storytelling
              created for ambitious brands.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neon/40 px-5 py-2.5 font-display text-[10px] tracking-[0.3em] text-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
          >
            VIEW ALL <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 font-display text-[10px] tracking-[0.3em] transition-all ${
                  isActive
                    ? "border-neon bg-neon/10 text-neon-bright neon-glow"
                    : "border-neon/20 text-muted-foreground hover:border-neon/60 hover:text-foreground"
                }`}
              >
                {f.label.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carousel */}
      <div
        className="group/showcase relative mt-12"
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous project"
          className="pointer-events-auto absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-neon/40 bg-background/60 p-3 text-foreground opacity-0 backdrop-blur-md transition-all hover:border-neon hover:text-neon-bright group-hover/showcase:opacity-100 disabled:cursor-not-allowed disabled:opacity-0 md:flex"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          disabled={active === visible.length - 1}
          aria-label="Next project"
          className="pointer-events-auto absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-neon/40 bg-background/60 p-3 text-foreground opacity-0 backdrop-blur-md transition-all hover:border-neon hover:text-neon-bright group-hover/showcase:opacity-100 disabled:cursor-not-allowed disabled:opacity-0 md:flex"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          role="region"
          aria-label="Featured projects carousel"
          tabIndex={0}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth px-[10vw] pb-6 focus:outline-none md:gap-8 md:px-[14vw]"
          style={{ scrollbarWidth: "none" }}
        >
          {visible.map((p, i) => {
            const isActive = i === active;
            return (
              <article
                key={p.slug}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                aria-label={`${p.title} — ${p.category}`}
                className="relative shrink-0 snap-center"
                style={{ width: "min(80vw, 1120px)" }}
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-deep shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "scale-100 opacity-100 ring-1 ring-neon/40 neon-glow"
                      : "scale-[0.92] opacity-70"
                  }`}
                >
                  {/* Poster */}
                  <img
                    src={p.poster}
                    alt={`${p.title} poster`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Active video preview — only when section is in view and page is idle */}
                  {isActive && inView && hydrated && p.youtube && !reduced && (
                    <iframe
                      key={p.youtube}
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${p.youtube}?autoplay=1&mute=1&loop=1&playlist=${p.youtube}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3`}
                      title={`${p.title} preview`}
                      loading="lazy"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      aria-hidden="true"
                      tabIndex={-1}
                    />
                  )}

                  {/* Vignette + info gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-background/40 transition-opacity duration-700 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Project number */}
                  <div className="absolute left-5 top-5 font-display text-[10px] tracking-[0.4em] text-neon-bright/90 md:left-8 md:top-8">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                    <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                      {p.category.toUpperCase()}
                    </div>
                    <div className="mt-1 font-display text-xl font-black tracking-[0.14em] text-foreground sm:text-2xl md:text-3xl">
                      {p.title}
                    </div>
                    <p
                      className={`mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground transition-opacity duration-500 sm:text-sm ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {p.summary}
                    </p>
                  </div>

                  {/* Hover overlay with CTA */}
                  {isActive && (
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: p.slug }}
                      aria-label={`View ${p.title} case study`}
                      className="absolute right-5 top-5 z-10 hidden items-center gap-2 rounded-full border border-neon/50 bg-background/60 px-4 py-2 font-display text-[10px] tracking-[0.3em] text-neon-bright opacity-0 backdrop-blur-md transition-all hover:border-neon hover:neon-glow group-hover/showcase:opacity-100 md:inline-flex md:right-8 md:top-8"
                    >
                      <Play className="h-3 w-3 fill-current" /> VIEW CASE STUDY
                    </Link>
                  )}
                </div>

                {/* Full-card click target on mobile */}
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  aria-label={`View ${p.title} case study`}
                  className="absolute inset-0 md:hidden"
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* Info panel + progress */}
      <div className="mx-auto mt-10 max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center justify-between gap-6">
          <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
            FEATURED PROJECTS
          </div>
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
            {String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
          </div>
        </div>
        <div className="mt-3 h-px w-full overflow-hidden bg-white/10">
          <div
            className="h-full bg-neon-bright transition-[width] duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {activeProject && (
          <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                {activeProject.category.toUpperCase()}
              </div>
              <h3 className="mt-2 font-display text-2xl font-black tracking-[0.14em] text-foreground sm:text-3xl">
                {activeProject.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {activeProject.summary}
              </p>
              <Link
                to="/portfolio/$slug"
                params={{ slug: activeProject.slug }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-neon bg-neon/10 px-6 py-3 font-display text-[11px] tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
              >
                VIEW FULL CASE STUDY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <dl className="grid gap-4 rounded-2xl border border-white/10 bg-deep/40 p-6 sm:grid-cols-2 md:grid-cols-1">
              {activeProject.services && (
                <div>
                  <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                    SERVICES
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90">{activeProject.services}</dd>
                </div>
              )}
              {activeProject.client && (
                <div>
                  <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                    CLIENT
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90">{activeProject.client}</dd>
                </div>
              )}
              <div>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  CATEGORY
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">{activeProject.category}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}