import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

// Premium black & gold welcome section with vertical (9:16) video placeholder.
// Swap the inner placeholder div for a YouTube/Vimeo iframe or <video> later
// without changing the surrounding layout.

const GOLD = "#D4AF37";
const GOLD_BRIGHT = "#F4D77A";

const TRUSTED = [
  "AI Film Production",
  "Commercial Advertising",
  "Brand Storytelling",
  "Corporate Events",
  "Creative Direction",
  "Cinematic Visual Experiences",
];

export function WelcomeMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Pre-computed gold particle field (deterministic for SSR)
  const particles = Array.from({ length: 40 }, (_, i) => {
    const seed = i * 9301 + 49297;
    return {
      left: ((seed * 7) % 1000) / 10,
      top: ((seed * 13) % 1000) / 10,
      size: ((seed * 3) % 4) + 1,
      delay: ((seed * 5) % 80) / 10,
      duration: 8 + ((seed * 11) % 80) / 10,
    };
  });

  return (
    <section
      ref={ref}
      id="welcome-message"
      aria-labelledby="welcome-heading"
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.10), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.06), transparent 55%), linear-gradient(180deg, #050505 0%, #0a0805 50%, #050505 100%)",
      }}
    >
      {/* Light rays */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[120%] w-[120%] -translate-x-1/2"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 30%, transparent 0deg, rgba(212,175,55,0.08) 18deg, transparent 36deg, transparent 90deg, rgba(244,215,122,0.06) 110deg, transparent 130deg, transparent 220deg, rgba(212,175,55,0.07) 240deg, transparent 260deg)",
          mixBlendMode: "screen",
          filter: "blur(40px)",
        }}
      />

      {/* Gold particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: GOLD_BRIGHT,
              boxShadow: `0 0 ${p.size * 4}px ${GOLD}`,
              opacity: 0.55,
              animation: `debris-drift ${p.duration}s ${p.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div
        className="mx-auto flex max-w-6xl flex-col items-center text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Eyebrow */}
        <span
          className="mb-5 inline-flex items-center gap-3 font-display text-[0.65rem] tracking-[0.5em] sm:text-xs"
          style={{ color: GOLD }}
        >
          <span className="h-px w-10" style={{ background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
          A PERSONAL INVITATION
          <span className="h-px w-10" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
        </span>

        {/* Headline */}
        <h2
          id="welcome-heading"
          className="font-display text-3xl leading-tight sm:text-5xl md:text-6xl"
          style={{
            backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, ${GOLD_BRIGHT} 55%, ${GOLD} 100%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 40px rgba(212,175,55,0.25)",
          }}
        >
          Welcome to DFrenzy Visuals
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Where cinematic storytelling, AI innovation, and world-class visual
          production come together to transform ideas into unforgettable
          experiences.
        </p>

        {/* Video frame — 16:9 cinematic embed */}
        <div
          className="group relative mt-14 w-full max-w-5xl"
          style={{
            transform: visible
              ? `translate3d(${parallax.x * 6}px, ${parallax.y * 6}px, 0) scale(1)`
              : "scale(0.95)",
            transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* Outer gold glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[32px] blur-2xl"
            style={{
              background: `radial-gradient(ellipse at center, ${GOLD}55, transparent 70%)`,
            }}
          />

          {/* Gradient gold border */}
          <div
            className="relative rounded-[24px] p-[1.5px] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            style={{
              background: `linear-gradient(140deg, ${GOLD_BRIGHT} 0%, ${GOLD} 30%, rgba(212,175,55,0.15) 55%, ${GOLD} 80%, ${GOLD_BRIGHT} 100%)`,
              boxShadow:
                "0 30px 80px -20px rgba(212,175,55,0.35), 0 0 60px rgba(212,175,55,0.15)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[22px]"
              style={{
                aspectRatio: "16 / 9",
                background:
                  "linear-gradient(160deg, rgba(20,16,8,0.85), rgba(0,0,0,0.9))",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Inner glass sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(212,175,55,0.12) 100%)",
                }}
              />

              {/* YouTube embed */}
              <iframe
                src="https://www.youtube.com/embed/MfaQvFxn6pg?rel=0&modestbranding=1&playsinline=1"
                title="DFrenzy Visuals — Welcome Message"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />

              {/* Corner accents */}
              {(["tl", "tr", "bl", "br"] as const).map((c) => (
                <span
                  key={c}
                  aria-hidden
                  className="pointer-events-none absolute z-20 h-5 w-5"
                  style={{
                    top: c.startsWith("t") ? 10 : "auto",
                    bottom: c.startsWith("b") ? 10 : "auto",
                    left: c.endsWith("l") ? 10 : "auto",
                    right: c.endsWith("r") ? 10 : "auto",
                    borderTop: c.startsWith("t") ? `1px solid ${GOLD}` : undefined,
                    borderBottom: c.startsWith("b") ? `1px solid ${GOLD}` : undefined,
                    borderLeft: c.endsWith("l") ? `1px solid ${GOLD}` : undefined,
                    borderRight: c.endsWith("r") ? `1px solid ${GOLD}` : undefined,
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trusted for */}
        <div className="mt-16 w-full max-w-3xl">
          <p
            className="mb-6 font-display text-[0.65rem] tracking-[0.5em]"
            style={{ color: GOLD }}
          >
            TRUSTED FOR
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {TRUSTED.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/80 sm:text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(212,175,55,0.25)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                  <path
                    d="M2 6.5l2.5 2.5L10 3.5"
                    stroke={GOLD_BRIGHT}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/portfolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-9 py-4 font-display text-xs tracking-[0.35em] transition-transform hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${GOLD_BRIGHT} 0%, ${GOLD} 50%, #a67c1a 100%)`,
              color: "#0a0805",
              boxShadow:
                "0 12px 30px -8px rgba(212,175,55,0.6), inset 0 1px 0 rgba(255,255,255,0.45)",
            }}
          >
            <span className="relative z-10">EXPLORE OUR PORTFOLIO</span>
            <span
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                animation: "sweep-once 1.6s ease-in-out infinite",
              }}
            />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full px-9 py-4 font-display text-xs tracking-[0.35em] transition-colors"
            style={{
              color: GOLD_BRIGHT,
              border: `1px solid ${GOLD}80`,
              background: "rgba(212,175,55,0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  );
}