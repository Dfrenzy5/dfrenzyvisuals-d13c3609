import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Film,
  Megaphone,
  Building2,
  Sparkles,
  Music,
  Clapperboard,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    Icon: Film,
    title: "AI Film Production",
    desc: "Cinematic short films and narrative pieces crafted with AI-assisted direction.",
  },
  {
    Icon: Megaphone,
    title: "Commercial Advertising",
    desc: "High-conversion ad films that elevate products into experiences.",
  },
  {
    Icon: Building2,
    title: "Corporate Storytelling",
    desc: "Brand documentaries and founder stories with editorial polish.",
  },
  {
    Icon: Sparkles,
    title: "Luxury Event Coverage",
    desc: "Premium event films that capture energy, prestige, and presence.",
  },
  {
    Icon: Music,
    title: "Music Visuals",
    desc: "World-building music videos with bold visual identity.",
  },
  {
    Icon: Clapperboard,
    title: "Brand Promos & Trailers",
    desc: "Teasers, trailers, and launch films built for scroll-stopping impact.",
  },
];

function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            WHAT WE CRAFT
          </p>
          <h2
            id="services-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
          >
            SERVICES
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            A full-spectrum cinematic studio — from concept to final frame, powered by
            AI and directed with craft.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-neon/20 glass-panel p-7 transition-all duration-500 hover:-translate-y-1 hover:border-neon hover:neon-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon/40 bg-neon/5 transition-colors group-hover:border-neon">
                <Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-[0.15em] text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats (smooth counter, runs once) ---------------- */

const STATS = [
  { value: 120, suffix: "+", label: "Productions Delivered" },
  { value: 45, suffix: "+", label: "Brands Served" },
  { value: 9, suffix: "M+", label: "Cumulative Views" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
            return;
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
}

function Counter({ to, suffix, start }: { to: number; suffix: string; start: boolean }) {
  const [n, setN] = useState(0);
  const raf = useRef<number | null>(null);
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const DURATION = 1500;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (ts: number) => {
      if (startedAt.current == null) startedAt.current = ts;
      const elapsed = ts - startedAt.current;
      const t = Math.min(elapsed / DURATION, 1);
      setN(Math.round(easeOutCubic(t) * to));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current != null) cancelAnimationFrame(raf.current);
    };
  }, [start, to]);

  return (
    <span className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

function StatsRow() {
  const { ref, seen } = useInView<HTMLDivElement>(0.4);
  return (
    <section className="relative px-6 py-16 md:px-10">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 rounded-2xl border border-neon/20 glass-panel p-8 sm:gap-6 sm:p-10 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-black tracking-wider text-neon-bright sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} start={seen} />
            </div>
            <div className="mt-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground sm:text-xs">
              {s.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

const PILLARS = [
  {
    title: "Mission",
    body: "Turn ambitious ideas into cinematic experiences that move audiences and build brands.",
  },
  {
    title: "Vision",
    body: "A world where every founder, artist, and brand can tell a Hollywood-grade story.",
  },
  {
    title: "Creative Philosophy",
    body: "Craft first. We treat every frame, beat, and transition as an editorial decision.",
  },
  {
    title: "AI-Powered Filmmaking",
    body: "We pair human direction with generative tools to compress weeks of production into days.",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div>
          <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            INSIDE THE STUDIO
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
          >
            ABOUT DFRENZY
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            DFrenzy Visuals is a cinematic AI film studio building the next generation
            of trailers, commercials, music visuals, and brand films. We sit at the
            intersection of editorial direction, generative AI, and post-production
            craft — delivering work that feels engineered, not assembled.
          </p>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neon/40 px-6 py-3 font-display text-xs tracking-[0.3em] text-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
          >
            EXPLORE OUR WORK
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-neon/20 glass-panel p-6 transition-all hover:-translate-y-1 hover:border-neon/60"
            >
              <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
                {p.title.toUpperCase()}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "DFrenzy delivered a launch film that genuinely shifted how people perceive our brand. Cinematic, fast, on-spec.",
    name: "Brand Lead",
    role: "Consumer Tech",
  },
  {
    quote:
      "The trailer felt like a feature film. We doubled engagement and got picked up in trade press within a week.",
    name: "Marketing Director",
    role: "Lifestyle Label",
  },
  {
    quote:
      "Working with DFrenzy is the closest thing to having an in-house production studio. Editorial taste + speed.",
    name: "Founder",
    role: "Creative Agency",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;
  const go = (d: number) => setI((p) => (p + d + total) % total);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const t = TESTIMONIALS[i];
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
          WHAT CLIENTS SAY
        </p>
        <h2
          id="testimonials-heading"
          className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-4xl"
        >
          TESTIMONIALS
        </h2>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-neon/20 glass-panel p-10 sm:p-14">
          <Quote
            aria-hidden
            className="absolute -left-2 -top-2 h-24 w-24 text-neon/15 sm:h-32 sm:w-32"
            strokeWidth={1}
          />
          <div key={i} className="animate-warp-in">
            <p className="relative z-10 text-lg italic leading-relaxed text-foreground sm:text-xl">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon/40 bg-neon/10 font-display text-sm font-bold text-neon-bright">
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-display text-xs font-bold tracking-[0.2em] text-foreground">
                  {t.name.toUpperCase()}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neon/40 text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-8 bg-neon-bright" : "w-1.5 bg-neon/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neon/40 text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Composite ---------------- */

export function HomeSections() {
  return (
    <>
      <ServicesGrid />
      <StatsRow />
      <About />
      <Testimonials />
    </>
  );
}