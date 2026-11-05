import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { LazyMount } from "@/components/ui-studio/LazyMount";
import { SITE_URL } from "@/lib/site";

// Below-the-fold: split into their own chunks and mount as they approach viewport.
const FeaturedShowcase = lazy(() =>
  import("@/components/ui-studio/FeaturedShowcase").then((m) => ({ default: m.FeaturedShowcase })),
);
const Services = lazy(() =>
  import("@/components/ui-studio/Services").then((m) => ({ default: m.Services })),
);
const TrustedBy = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.TrustedBy })),
);
const DirectorsChoice = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.DirectorsChoice })),
);
const FeaturedProjects = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.FeaturedProjects })),
);
const CreativeProcess = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.CreativeProcess })),
);
const CreativeLab = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.CreativeLab })),
);
const Testimonials = lazy(() =>
  import("@/components/HomeSections").then((m) => ({ default: m.Testimonials })),
);
const StatsRow = lazy(() =>
  import("@/components/HomeSections").then((m) => ({ default: m.StatsRow })),
);
const Awards = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.Awards })),
);
const MeetTheDirector = lazy(() =>
  import("@/components/MeetTheDirector").then((m) => ({ default: m.MeetTheDirector })),
);
const FAQ = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.FAQ })),
);
const ContactCTA = lazy(() =>
  import("@/components/HomeExtras").then((m) => ({ default: m.ContactCTA })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DFRENZY VISUALS | AI Cinematic Film Studio" },
      {
  name: "description",
  content:
    "DFRENZY VISUALS is a Nigerian AI filmmaking and cinematic video production studio. Founded by Daniel Ebhowe, a Nigerian AI filmmaker and creative director, creating AI films, commercials, trailers and branded visual content for global clients.",
},
      {
        property: "og:title",
        content: "DFRENZY VISUALS — AI Cinematic Film Studio",
      },
      {
        property: "og:description",
        content:
          "AI Cinematic Film Studio. Trailers, music visuals, brand promos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "DFRENZY VISUALS",
          url: `${SITE_URL}/`,
          publisher: { "@type": "Organization", name: "DFRENZY VISUALS", url: `${SITE_URL}/` },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE_URL}/#dfrenzy-visuals`,
          name: "DFRENZY VISUALS",
          alternateName: "DfrenzyVisuals",
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/favicon.png`,
          description:
            "AI cinematic film studio producing commercials, branded storytelling, product films, and virtual production through an AI-native pipeline. Based in Lagos and Uyo, Nigeria.",
          email: "dfrenzyvisuals@gmail.com",
          telephone: "+2347044775158",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
          sameAs: [
            "https://www.youtube.com/@DFRENZYVISUALS",
            "https://instagram.com/dfrenzyvisuals",
          ],
          areaServed: "NG",
          serviceType: [
            "AI Video Production",
            "Commercial Advertising",
            "Branded Storytelling",
            "Product Films",
            "Virtual Production",
            "Music & Culture Videos",
          ],
        }),
      },
            {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daniel Ebhowe",
          jobTitle: "AI Filmmaker, Director, Creative Director",
          nationality: "Nigerian",
          url: `${SITE_URL}/ai-filmmaker`,
          worksFor: { "@type": "Organization", name: "DFRENZY VISUALS", url: `${SITE_URL}/` },
          sameAs: [
            "https://www.youtube.com/@DFRENZYVISUALS",
            "https://instagram.com/dfrenzyvisuals",
          ],
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certificate",
            name: "AI Filmmaking Pipeline Certification",
            recognizedBy: { "@type": "Organization", name: "Higgsfield Academy" },
            identifier: "HFA-2026-6SOBWU3TUBDE",
            dateCreated: "2026-07-18",
          },
        }),
      },
            {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How long does a typical project take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most trailers and promos deliver in 2–4 weeks. AI short films and event films are typically 3–6 weeks depending on scope.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with international clients?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We work remotely with clients, creators, brands, and production partners across different markets.",
              },
            },
            {
              "@type": "Question",
              name: "What kind of brands do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Luxury brands, real-estate developers, technology companies, corporates, agencies, and artists who want cinematic storytelling.",
              },
            },
            {
              "@type": "Question",
              name: "Do we own the final work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Usage rights for the delivered work are agreed as part of each project. Source files can also be made available where agreed.",
              },
            },
            {
              "@type": "Question",
              name: "How does the AI pipeline change quality?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "AI compresses production without compressing craft. Direction, editorial, color, and sound are still human-led.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

// Compressed cinematic timeline: total ~1.2s so hero becomes interactive
// almost instantly while beats still land in sequence.
const PHASE_TIMINGS = {
  energy: 120,
  logo: 260,
  identity: 480,
  tagline: 680,
  cta: 880,
  idle: 1200,
} as const;

type Phase =
  | "cosmic"
  | "energy"
  | "logo"
  | "identity"
  | "tagline"
  | "cta"
  | "idle"
  | "warp";

function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const intensityRef = useRef(0); // 0..1 drives particle gather
  const [phase, setPhase] = useState<Phase>("cosmic");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [showreelLoaded, setShowreelLoaded] = useState(false);
  const [showreelMuted, setShowreelMuted] = useState(true);
  const showreelFrameRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();

  // ----- Phase timeline -----
  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const queue: Array<[number, Phase]> = [
      [PHASE_TIMINGS.energy, "energy"],
      [PHASE_TIMINGS.logo, "logo"],
      [PHASE_TIMINGS.identity, "identity"],
      [PHASE_TIMINGS.tagline, "tagline"],
      [PHASE_TIMINGS.cta, "cta"],
      [PHASE_TIMINGS.idle, "idle"],
    ];
    queue.forEach(([ms, p]) => {
      timeouts.push(setTimeout(() => setPhase(p), ms));
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Mouse parallax is limited to fine-pointer devices to avoid touch-device work.
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    let latestEvent: PointerEvent | null = null;
    const onMove = (event: PointerEvent) => {
      latestEvent = event;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        if (latestEvent && heroRef.current) {
          const x = (latestEvent.clientX / window.innerWidth - 0.5) * 2;
          const y = (latestEvent.clientY / window.innerHeight - 0.5) * 2;
          const hero = heroRef.current;
          hero.style.setProperty("--parallax-center-x", `${x * -8}px`);
          hero.style.setProperty("--parallax-center-y", `${y * -8}px`);
          for (let factor = 0; factor < 5; factor++) {
            hero.style.setProperty(`--parallax-x-${factor}`, `${x * factor * 2}px`);
            hero.style.setProperty(`--parallax-y-${factor}`, `${y * factor * 2}px`);
          }
        }
        frame = 0;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // intensity ramps as phases progress (drives canvas attraction)
  useEffect(() => {
    const map: Record<Phase, number> = {
      cosmic: 0.05,
      energy: 0.85,
      logo: 0.55,
      identity: 0.35,
      tagline: 0.25,
      cta: 0.2,
      idle: 0.2,
      warp: 1,
    };
    intensityRef.current = map[phase];
  }, [phase]);

  // ----- Adaptive particle field: pauses off-screen and when the tab is hidden. -----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.5);
    const frameInterval = isMobile ? 1000 / 24 : 1000 / 30;
    let width = 0;
    let height = 0;
    let raf = 0;
    let lastFrame = 0;
    let pageVisible = !document.hidden;
    let heroVisible = false;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particleCount = isMobile ? 28 : 90;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2,
    }));

    const drawFrame = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const intensity = intensityRef.current;

      for (const particle of particles) {
        const dx = cx - particle.x;
        const dy = cy - particle.y;
        const distance = Math.hypot(dx, dy) + 0.001;
        const pull = (intensity * 0.12) / Math.max(distance * 0.005, 0.4);
        particle.vx = (particle.vx + (dx / distance) * pull) * 0.96;
        particle.vy = (particle.vy + (dy / distance) * pull) * 0.96;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r * (1 + intensity * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${particle.a * (0.5 + intensity * 0.6)})`;
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = isMobile ? 2 : 6 + intensity * 10;
        ctx.fill();
      }

      if (intensity > 0.4) {
        const radius = 60 + Math.sin(now / 200) * 8;
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.4);
        gradient.addColorStop(0, `rgba(58, 168, 255, ${0.55 * intensity})`);
        gradient.addColorStop(0.4, `rgba(0, 213, 255, ${0.25 * intensity})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 2.4, 0, Math.PI * 2);
        ctx.fill();

        if (intensity > 0.7) {
          ctx.strokeStyle = "rgba(180, 230, 255, 0.18)";
          ctx.lineWidth = 0.6;
          for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2 + now / 1400;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(angle) * radius * 3.2, cy + Math.sin(angle) * radius * 3.2);
            ctx.stroke();
          }
        }
      }
    };

    const stop = () => {
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };
    const tick = (now: number) => {
      if (!pageVisible || !heroVisible) {
        stop();
        return;
      }
      if (now - lastFrame >= frameInterval) {
        drawFrame(now);
        lastFrame = now;
      }
      raf = window.requestAnimationFrame(tick);
    };
    const start = () => {
      if (!pageVisible || !heroVisible || raf) return;
      lastFrame = 0;
      raf = window.requestAnimationFrame(tick);
    };
    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    const observer = typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => {
          heroVisible = Boolean(entry?.isIntersecting);
          if (heroVisible) start();
          else stop();
        }, { rootMargin: "80px 0px" })
      : null;

    observer?.observe(canvas);
    if (!observer) {
      heroVisible = true;
      start();
    }
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      stop();
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", resize);
    };
  }, []);
  const toggleShowreelSound = useCallback(() => {
    const nextMuted = !showreelMuted;
    setShowreelMuted(nextMuted);
    showreelFrameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: nextMuted ? "mute" : "unMute", args: [] }), "*",
    );
  }, [showreelMuted]);

  const handleEnter = useCallback(() => {
    document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const skipIntro = useCallback(() => {
    setPhase("idle");
    setCountdown(null);
  }, []);

  // ----- Phase helpers -----
  const show = {
    logo: ["logo", "identity", "tagline", "cta", "idle", "warp"].includes(phase),
    identity: ["identity", "tagline", "cta", "idle", "warp"].includes(phase),
    tagline: ["tagline", "cta", "idle", "warp"].includes(phase),
    cta: ["cta", "idle", "warp"].includes(phase),
    idleNav: phase === "idle" || phase === "warp",
  };

  const icons = [
    { to: "/portfolio" as const, emoji: "🎬", tip: "CINEMATIC WORKS" },
    { to: "/pricing" as const, emoji: "💰", tip: "PACKAGES" },
    { to: "/contact" as const, emoji: "📡", tip: "COLLABORATE" },
  ];

  return (
    <>
    <section id="showreel" aria-label="DFRENZY VISUALS official cinematic showreel" className="relative isolate w-full overflow-hidden bg-black">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="relative aspect-video w-full overflow-hidden bg-[#05080d]">
          {showreelLoaded ? (
            <iframe ref={showreelFrameRef} className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube-nocookie.com/embed/K1Y7HWuhqcU?autoplay=1&mute=1&loop=1&playlist=K1Y7HWuhqcU&playsinline=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&origin=https%3A%2F%2Fdfrenzyvisuals.com"
              title="DFRENZY VISUALS — Official Cinematic Showreel 2026"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin" loading="eager" allowFullScreen />
          ) : (
            <img src="https://i.ytimg.com/vi/K1Y7HWuhqcU/maxresdefault.jpg"
              alt="DFRENZY VISUALS official cinematic showreel" className="absolute inset-0 h-full w-full object-cover"
              width="1280" height="720" loading="eager" fetchPriority="high" decoding="sync"
              onError={(event) => { event.currentTarget.src = "https://i.ytimg.com/vi/K1Y7HWuhqcU/hqdefault.jpg"; }} />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start gap-3 p-5 sm:p-10 lg:p-14">
            <p className="font-display text-[0.6rem] font-semibold tracking-[0.32em] text-[#00E5FF] sm:text-xs">DFRENZY VISUALS PRESENTS</p>
            <h1 className="max-w-4xl font-display text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-6xl">AI CINEMATIC FILM STUDIO</h1>
            <p className="max-w-2xl text-xs leading-relaxed text-white/85 sm:text-base">Nigerian-led cinematic storytelling, AI film production and premium visual content for brands and global audiences.</p>
            <div className="pointer-events-auto flex flex-wrap items-center gap-3">
              {!showreelLoaded ? (
                <button type="button" onClick={() => setShowreelLoaded(true)}
                  className="border border-[#00E5FF] bg-black/65 px-4 py-3 font-display text-[0.62rem] font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
                  PLAY SHOWREEL
                </button>
              ) : (
                <button type="button" onClick={toggleShowreelSound} aria-label={showreelMuted ? "Turn showreel sound on" : "Mute showreel"}
                  className="border border-white/65 bg-black/55 px-4 py-3 font-display text-[0.62rem] font-semibold tracking-[0.2em] text-white backdrop-blur-sm transition hover:border-[#00E5FF] hover:text-[#00E5FF]">
                  {showreelMuted ? "SOUND ON" : "MUTE"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      id="hero"
      ref={heroRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #10162A 0%, #080F1A 45%, #000000 100%)",
        color: "#00E5FF",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        id="particle-bg"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Subtle UI scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 cinematic-scanlines opacity-40" />

      {/* Floating debris / asteroids */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const size = 2 + (i % 4);
          const left = (i * 71) % 100;
          const top = (i * 47) % 100;
          const delay = (i * 0.7) % 6;
          const duration = 12 + (i % 5) * 2;
          return (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: i % 3 === 0 ? "#3ABDFF" : "#00D4FF",
                boxShadow: "0 0 6px rgba(0,213,255,0.7)",
                opacity: 0.4,
                animation: `debris-drift ${duration}s ${delay}s ease-in-out infinite`,
                transform: `translate3d(var(--parallax-x-${i % 5}, 0px), var(--parallax-y-${i % 5}, 0px), 0)`,
              }}
            />
          );
        })}
      </div>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* HUD frame corners */}
      <div className="pointer-events-none absolute inset-6 hidden sm:block">
        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <span
            key={c}
            className="absolute h-6 w-6 border-[#00E5FF]/60"
            style={{
              top: c.startsWith("t") ? 0 : "auto",
              bottom: c.startsWith("b") ? 0 : "auto",
              left: c.endsWith("l") ? 0 : "auto",
              right: c.endsWith("r") ? 0 : "auto",
              borderTopWidth: c.startsWith("t") ? 1 : 0,
              borderBottomWidth: c.startsWith("b") ? 1 : 0,
              borderLeftWidth: c.endsWith("l") ? 1 : 0,
              borderRightWidth: c.endsWith("r") ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Center stack */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          animation: phase === "warp" ? "warp-zoom 1.1s ease-in forwards" : undefined,
          transformOrigin: "center",
          transform: phase === "warp"
            ? undefined
            : "translate3d(var(--parallax-center-x, 0px), var(--parallax-center-y, 0px), 0)",
          transition: "transform 400ms ease-out",
        }}
      >
        {/* Volumetric light rays from logo */}
        {show.logo && (
          <div
            className="pointer-events-none absolute left-1/2 top-[110px] -translate-x-1/2 sm:top-[110px]"
            style={{
              width: 600,
              height: 600,
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(0,213,255,0.18) 8deg, transparent 16deg, transparent 90deg, rgba(0,213,255,0.12) 100deg, transparent 110deg, transparent 180deg, rgba(58,189,255,0.15) 192deg, transparent 204deg, transparent 270deg, rgba(0,213,255,0.1) 282deg, transparent 294deg)",
              mixBlendMode: "screen",
              filter: "blur(6px)",
              opacity: 0.7,
              transform: "translate(-50%, -50%)",
              animation: "spin 24s linear infinite",
            }}
          />
        )}

        {/* Countdown 3·2·1 between energy and logo phases */}
        {countdown !== null && (phase === "energy" || phase === "cosmic") && (
          <div
            key={countdown}
            className="pointer-events-none absolute z-20 font-display text-[120px] sm:text-[180px]"
            style={{
              color: "#00D4FF",
              textShadow: "0 0 40px #00D4FF, 0 0 80px #3ABDFF",
              animation: "warp-in 0.9s ease-out both",
              opacity: 0.85,
            }}
          >
            {countdown}
          </div>
        )}

        {/* LOGO */}
        <div
          className="relative h-[180px] w-[180px] sm:h-[220px] sm:w-[220px]"
          style={{
            opacity: show.logo ? 1 : 0,
            animation: show.logo ? "logo-glitch 1.6s cubic-bezier(.2,.7,.2,1) both" : undefined,
          }}
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/apple-touch-icon.png')",
              backgroundSize: "contain",
              filter:
                "drop-shadow(0 0 24px #00E5FF) drop-shadow(0 0 60px rgba(58,168,255,0.6))",
            }}
          />
          {/* pulsing rings during idle */}
          {show.idleNav &&
            [0, 0.8, 1.6].map((d, i) => (
              <span
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00E5FF]/40"
                style={{
                  animation: `ring-pulse 2.4s ${d}s ease-out infinite`,
                }}
              />
            ))}
        </div>

        {/* IDENTITY — full brand name with light sweep */}
        <div
          className="relative mt-4 overflow-hidden"
          style={{
            opacity: show.identity ? 1 : 0,
            transition: "opacity 600ms ease-out",
          }}
        >
          <h2
            className="font-display text-2xl tracking-[0.5em] sm:text-4xl"
            style={{
              color: "#FFFFFF",
              textShadow: "0 0 18px rgba(0,213,255,0.8)",
            }}
          >
            DFRENZY VISUALS
          </h2>
          {show.identity && (
            <span
              className="pointer-events-none absolute inset-0 block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
                mixBlendMode: "screen",
                animation: "sweep-once 1.2s ease-out 0.1s both",
              }}
            />
          )}
        </div>

        {/* TAGLINE — HUD scan reveal */}
        <div
          className="relative mt-5 overflow-hidden"
          style={{
            opacity: show.tagline ? 1 : 0,
            transition: "opacity 500ms ease-out",
          }}
        >
          <p className="font-display text-xs tracking-[0.55em] sm:text-sm" style={{ color: "#00D4FF" }}>
            AI CINEMATIC FILM STUDIO
          </p>
          {show.tagline && phase === "tagline" && (
            <span
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,229,255,0.7), transparent)",
                animation: "hud-scan 1.2s ease-out both",
              }}
            />
          )}
        </div>

        {/* Dual CTA */}
        <div
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          style={{
            opacity: show.cta ? 1 : 0,
            transform: show.cta ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 700ms ease-out, transform 700ms ease-out",
          }}
        >
        <Link
          to="/contact"
          className="group relative cursor-pointer px-9 py-4 font-display text-sm font-bold tracking-[0.35em] transition-all"
          style={{
            color: "#02121a",
            background: "linear-gradient(135deg,#3ABDFF 0%,#00E5FF 55%,#3ABDFF 100%)",
            border: "1px solid rgba(0,229,255,0.9)",
            boxShadow:
              "0 8px 24px rgba(0,229,255,0.35), inset 0 1px 0 rgba(255,255,255,0.5)",
          }}
        >
          <span className="relative z-10">START YOUR PROJECT</span>
        </Link>
        <button
          onClick={handleEnter}
          className="group relative cursor-pointer px-9 py-4 font-display text-sm tracking-[0.35em] transition-all"
          style={{
            color: "#E6FBFF",
            background: "transparent",
            border: "1px solid rgba(0,229,255,0.5)",
            boxShadow:
              "0 0 24px rgba(0,229,255,0.2), inset 0 0 24px rgba(0,229,255,0.06)",
          }}
        >
          <span className="relative z-10">WATCH SHOWREEL</span>
          {/* idle pulse rings around button */}
          {show.idleNav &&
            [0, 0.6, 1.2].map((d, i) => (
              <span
                key={i}
                className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#00E5FF]/30"
                style={{ animation: `ring-pulse 2.6s ${d}s ease-out infinite` }}
              />
            ))}
          {/* hover sweep */}
          <span
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,229,255,0.25), transparent)",
                animation: "sweep-once 1.4s ease-in-out infinite",
              }}
            />
          </span>
        </button>
        </div>
      </div>

      {/* Icon nav — appears with cta */}
      <div
        className="absolute bottom-12 z-10 flex gap-12 sm:gap-[60px]"
        style={{
          opacity: show.cta ? 1 : 0,
          transform: show.cta ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 800ms ease-out 200ms, transform 800ms ease-out 200ms",
        }}
      >
        {icons.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="group flex cursor-pointer flex-col items-center text-center text-3xl transition-transform hover:scale-110"
          >
            <span className="drop-shadow-[0_0_10px_#00E5FF]">{it.emoji}</span>
            <span
              className="mt-1 block text-[0.65rem] tracking-[0.3em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: "#00E5FF" }}
            >
              {it.tip}
            </span>
          </Link>
        ))}
      </div>

      {/* Skip intro */}
      {phase !== "idle" && phase !== "warp" && (
        <button
          onClick={skipIntro}
          className="absolute right-6 top-6 z-20 font-display text-[0.65rem] tracking-[0.35em] text-[#00E5FF]/70 transition hover:text-[#00E5FF]"
        >
          SKIP ▸
        </button>
      )}

      {/* Warp tunnel overlay */}
      {phase === "warp" && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,229,255,0.25), rgba(0,0,0,0.95) 70%)",
              animation: "warp-zoom 1.1s ease-in forwards",
            }}
          />
          {Array.from({ length: 40 }).map((_, i) => {
            const a = (i / 40) * Math.PI * 2;
            return (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 h-[2px] w-[60vw] origin-left bg-gradient-to-r from-[#00E5FF] to-transparent"
                style={{
                  transform: `rotate(${a}rad)`,
                  opacity: 0.6,
                  animation: "sweep-once 1.1s ease-in forwards",
                }}
              />
            );
          })}
        </div>
      )}
    </div>
    <WelcomeMessage />
        <Suspense fallback={<div style={{ minHeight: 600 }} />}>
      <LazyMount minHeight={640}><FeaturedShowcase /></LazyMount>
    </Suspense>

    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mb-12">
        <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
          ABOUT DFRENZY VISUALS
        </p>
        <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Cinematic AI Filmmaking, Directed by Humans.
        </h2>
      </div>

      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div className="relative mx-auto w-full max-w-md md:mx-0">
          <div className="absolute -inset-3 rounded-2xl border border-[#00E5FF]/20" aria-hidden="true" />
          <img
            src="/cinematic-amber-blue-studio-portrait.webp"
            alt="Daniel Ebhowe, AI Filmmaker and Creative Director of DFRENZY VISUALS"
            className="relative aspect-[4/5] w-full rounded-xl object-cover object-center shadow-2xl"
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            width="1122"
            height="1402"
          />
          <p className="mt-4 font-display text-xs tracking-[0.25em] text-white/70">
            DANIEL EBHOWE · FOUNDER & CREATIVE DIRECTOR
          </p>
        </div>

        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Daniel Ebhowe
          </p>
          <p className="mt-2 text-sm font-semibold tracking-[0.18em] text-[#00E5FF]">
            AI FILMMAKER & CREATIVE DIRECTOR
          </p>

          <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
            <p>
              DFRENZY VISUALS is a cinematic AI video production studio based in
              Nigeria, creating films, commercials, trailers, music visuals and
              branded content with advanced generative AI workflows.
            </p>
            <p>
              Founded by Daniel Ebhowe, a Nigerian AI filmmaker and creative director,
              DFRENZY VISUALS combines cinematic storytelling, AI-generated
              visuals, character consistency, virtual environments and
              professional post-production to create distinctive visual
              experiences for brands, filmmakers, agencies and international
              clients.
            </p>
            <p>
              From concept development and visual direction to AI video
              generation, editing, sound and final delivery, our workflow is
              built around one goal: turning ambitious ideas into cinematic
              stories.
            </p>
            <p>
              We specialize in AI filmmaking, cinematic AI commercials, AI film
              production, AI trailers and branded visual content, with a
              particular focus on character-driven storytelling and high-end
              cinematic presentation.
            </p>
          </div>

          <p className="mt-7">
            <Link
              to="/ai-filmmaker"
              className="font-display text-sm font-semibold tracking-[0.18em] text-[#00E5FF] transition-opacity hover:opacity-70"
            >
              MEET DANIEL EBHOWE — AI FILMMAKER →
            </Link>
          </p>
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.18em] text-[#00E5FF]">
            BASED IN NIGERIA. CREATING FOR A GLOBAL AUDIENCE.
          </p>
        </div>
      </div>
    </section>
    <Suspense fallback={null}>
      <LazyMount minHeight={180}><TrustedBy /></LazyMount>
      <LazyMount minHeight={180}><StatsRow /></LazyMount>
      <LazyMount minHeight={720}><FeaturedProjects /></LazyMount>
      <LazyMount minHeight={640}><Services /></LazyMount>
      <LazyMount minHeight={480}><DirectorsChoice /></LazyMount>
      <LazyMount minHeight={520}><CreativeProcess /></LazyMount>
      <LazyMount minHeight={520}><CreativeLab /></LazyMount>
      <LazyMount minHeight={520}><Testimonials /></LazyMount>
      <LazyMount minHeight={420}><Awards /></LazyMount>
      <LazyMount minHeight={600}><MeetTheDirector /></LazyMount>
      <LazyMount minHeight={520}><FAQ /></LazyMount>
      <LazyMount minHeight={360}><ContactCTA /></LazyMount>
    </Suspense>
    </>
  );
}
