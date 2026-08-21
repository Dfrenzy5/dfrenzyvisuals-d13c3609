import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import dfLogo from "@/assets/df-logo.png";
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
          "Enter a futuristic AI film studio where movies, trailers, and music visuals are created inside a digital dimension.",
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
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
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
  const intensityRef = useRef(0); // 0..1 drives particle gather
  const [phase, setPhase] = useState<Phase>("cosmic");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [countdown, setCountdown] = useState<number | null>(null);
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

  // Mouse parallax (subtle camera drift)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
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

  // ----- Particle field (cosmic + energy formation + idle drift) -----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const N = reduced ? 40 : isMobile ? 80 : 180;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2,
      hue: Math.random() < 0.15 ? 210 : 195,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const k = intensityRef.current;

      for (const p of particles) {
        // attraction toward center scaled by k
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.hypot(dx, dy) + 0.001;
        const pull = (k * 0.12) / Math.max(dist * 0.005, 0.4);
        p.vx += (dx / dist) * pull;
        p.vy += (dy / dist) * pull;
        // damping
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const glow = 0.5 + k * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (1 + k * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.a * glow})`;
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = 8 + k * 18;
        ctx.fill();
      }

      // central energy core during energy + logo phases
      if (k > 0.4) {
        const radius = 60 + Math.sin(performance.now() / 200) * 8;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.4);
        grad.addColorStop(0, `rgba(58, 168, 255, ${0.55 * k})`);
        grad.addColorStop(0.4, `rgba(0, 213, 255, ${0.25 * k})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 2.4, 0, Math.PI * 2);
        ctx.fill();

        // lightning-ish radial spokes during energy formation
        if (k > 0.7) {
          ctx.strokeStyle = `rgba(180, 230, 255, ${0.18})`;
          ctx.lineWidth = 0.6;
          const arms = 12;
          for (let i = 0; i < arms; i++) {
            const a = (i / arms) * Math.PI * 2 + performance.now() / 1400;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(a) * radius * 3.2, cy + Math.sin(a) * radius * 3.2);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ----- CTA click → warp transition then navigate -----
  const handleEnter = useCallback(() => {
    setPhase("warp");
    setTimeout(() => {
      navigate({ to: "/portfolio" });
    }, 1100);
  }, [navigate]);

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
    <div
      id="hero"
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
                transform: `translate3d(${parallax.x * (i % 5) * 2}px, ${parallax.y * (i % 5) * 2}px, 0)`,
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
            : `translate3d(${parallax.x * -8}px, ${parallax.y * -8}px, 0)`,
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
              backgroundImage: `url('${dfLogo}')`,
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
          <h1 className="font-display text-2xl tracking-[0.5em] sm:text-4xl" style={{ color: "#FFFFFF", textShadow: "0 0 18px rgba(0,213,255,0.8)" }}>
            {"'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            # DFRENZY VISUALS — AUTHORITY & BRAND POSITIONING UPGRADE\n\nI want to strengthen DFrenzy Visuals from a visual portfolio into a credible, authoritative AI cinematic film studio.\n\nIMPORTANT:\n\nDo NOT redesign the website from scratch.\n\nDo NOT change the existing luxury/cinematic visual identity.\n\nDo NOT remove existing portfolio projects.\n\nDo NOT invent awards, clients, statistics, testimonials, qualifications or achievements.\n\nThe goal is to make it immediately clear to visitors, search engines and AI systems what DFrenzy Visuals is, what it specializes in, and why its work deserves attention.\n\nPRIMARY DOMAIN:\n\nhttps://dfrenzyvisuals.com\n\n---\n\n## 1. STRENGTHEN THE HOMEPAGE AUTHORITY\n\nAdd a premium section after the Hero/Welcome Video.\n\nHeadline:\n\n\"DFRENZY VISUALS — AI CINEMATIC FILM STUDIO\"\n\nSupporting text:\n\n\"DFrenzy Visuals is a Nigeria-based AI cinematic film studio creating premium films, commercials, documentaries, branded stories, promotional content and cinematic visual experiences for brands, businesses, organizations and storytellers worldwide.\"\n\nAdd:\n\n### AI-NATIVE PRODUCTION\n\nModern AI filmmaking workflows combined with professional creative direction.\n\n### CINEMATIC STORYTELLING\n\nAI is the tool. Storytelling, emotion, visual language and creative direction remain at the center of every production.\n\n### GLOBAL CREATIVE DELIVERY\n\nBased in Nigeria and available to work with clients and creative partners internationally.\n\nMake this section elegant and consistent with the existing design.\n\n---\n\n## 2. ADD \"WHY DFRENZY VISUALS?\"\n\nCreate a premium section titled:\n\n\"WHY DFRENZY VISUALS?\"\n\nUse four pillars:\n\n01 — AI FILMMAKING\n\nWe use emerging AI technologies as part of a deliberate cinematic production workflow.\n\n02 — CREATIVE DIRECTION\n\nEvery project begins with concept, visual language, storytelling and creative intent.\n\n03 — END-TO-END PRODUCTION\n\nConcept development, visual creation, editing, sound, music and final delivery.\n\n04 — HUMAN + AI CREATIVITY\n\nAI expands production possibilities while human creative direction remains central.\n\nDo not use unsupported claims such as \"best\", \"number one\", \"leading\", or \"award-winning\".\n\n---\n\n## 3. CREATE THE AI FILMMAKER PAGE\n\nCreate:\n\n/ai-filmmaker\n\nPage title:\n\n\"AI Filmmaker & Creative Director | DFrenzy Visuals\"\n\nUse only these factual details:\n\nName:\n\nDaniel Ehi\n\nPosition:\n\nFounder & Creative Director, DFrenzy Visuals\n\nBio:\n\n\"Daniel Ehi is the founder and creative director of DFrenzy Visuals, a Nigeria-based AI cinematic film studio. His work focuses on AI filmmaking, cinematic visual storytelling, commercial production, promotional content and creative direction, combining emerging AI technologies with traditional filmmaking principles to create compelling visual experiences.\"\n\nInclude:\n\n- Professional portrait/photo area\n\n- Biography\n\n- Creative philosophy\n\n- AI filmmaking approach\n\n- Selected projects\n\n- Commercial work\n\n- Films\n\n- Documentaries\n\n- Portfolio CTA\n\n- Contact CTA\n\nDo not invent credentials or achievements.\n\n---\n\n## 4. CREATE \"THE DFRENZY PRODUCTION PROCESS\"\n\nAdd a section explaining the production workflow:\n\n01 — DISCOVERY\n\nUnderstand the idea, audience, objectives and requirements.\n\n02 — CONCEPT\n\nDevelop the story, visual language and creative strategy.\n\n03 — VISUAL DEVELOPMENT\n\nDevelop characters, environments, compositions and sequences.\n\n04 — PRODUCTION\n\nCreate and direct the visual material using the appropriate AI workflow.\n\n05 — POST-PRODUCTION\n\nEditing, sound design, music, voice, colour and finishing.\n\n06 — DELIVERY\n\nDeliver the final production in the required formats.\n\nMake the presentation cinematic and lightweight.\n\n---\n\n## 5. STRENGTHEN THE PORTFOLIO\n\nKeep the existing portfolio categories and projects.\n\nCreate a stronger \"Selected Work\" presentation on the homepage.\n\nPrioritize the strongest projects rather than showing everything.\n\nEach featured project should display:\n\n- Project title\n\n- Category\n\n- Short description\n\n- Poster/thumbnail\n\n- Play button\n\n- View Project / Case Study CTA\n\nFor major projects, prepare the structure for dedicated case-study pages containing:\n\nProject Overview\n\nCreative Concept\n\nCreative Direction\n\nProduction Approach\n\nVisual Style\n\nAI Workflow\n\nPost-Production\n\nFinal Film\n\nOnly display information that is factual and available.\n\n---\n\n## 6. STRENGTHEN SERVICES\n\nMake the existing services clearly communicate:\n\nAI Film Production\n\nAI Commercials\n\nProduct Films\n\nBrand Storytelling\n\nDocumentaries\n\nEvent Films\n\nTrailers\n\nPromotional Videos\n\nMusic Visuals\n\nCreative Direction\n\nEach service should connect naturally to relevant portfolio work.\n\n---\n\n## 7. STRENGTHEN THE JOURNAL / THE SIGNAL\n\nPosition the existing Journal/Signal section as:\n\n\"THE SIGNAL\"\n\nSubheading:\n\n\"Insights from the intersection of AI, cinema and visual storytelling.\"\n\nOrganize content around:\n\nAI FILMMAKING\n\nCOMMERCIAL PRODUCTION\n\nCREATIVE TECHNOLOGY\n\nBEHIND THE SCENES\n\nCASE STUDIES\n\nINDUSTRY INSIGHTS\n\nKeep articles useful and original.\n\n---\n\n## 8. IMPROVE FAQ CONTENT\n\nStrengthen the FAQ with questions such as:\n\nWhat is DFrenzy Visuals?\n\nWhat is AI filmmaking?\n\nWhat services does DFrenzy Visuals offer?\n\nWhere is DFrenzy Visuals based?\n\nDoes DFrenzy Visuals work internationally?\n\nHow does AI film production work?\n\nHow much does AI video production cost?\n\nCan DFrenzy Visuals produce commercials?\n\nCan DFrenzy Visuals produce documentaries?\n\nCan DFrenzy Visuals produce full films?\n\nMake the answers accessible as normal website content, not only hidden inside JavaScript.\n\n---\n\n## 9. FINAL REQUIREMENT\n\nThe website should communicate this clearly:\n\n\"DFrenzy Visuals is a Nigeria-based AI cinematic film studio creating films, commercials, documentaries, branded stories, promotional videos and cinematic visual experiences for clients in Nigeria, Africa and internationally.\"\n\nDo not keyword-stuff.\n\nDo not make the site feel like an SEO website.\n\nIt should continue to feel like a premium cinematic production studio.\n\nBefore finishing, verify that no existing content, portfolio project, navigation item or functionality has been accidentally removed."}
          </h1>
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
    <Suspense fallback={null}>
      <TrustedBy />
      <StatsRow />
      <Services />
      <DirectorsChoice />
      <CreativeProcess />
      <CreativeLab />
      <Testimonials />
      <Awards />
      <FAQ />
      <ContactCTA />
    </Suspense>
    </>
  );
}