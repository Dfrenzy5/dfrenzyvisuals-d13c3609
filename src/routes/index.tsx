import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Film, DollarSign, Send, ChevronDown } from "lucide-react";
import dfLogo from "@/assets/df-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DFRENZY VISUALS — AI Cinematic Film Studio" },
      { name: "description", content: "Enter a futuristic AI film studio where movies, trailers, and music visuals are created inside a digital dimension." },
      { property: "og:title", content: "DFRENZY VISUALS — AI Cinematic Film Studio" },
      { property: "og:description", content: "AI Cinematic Film Studio. Trailers, music visuals, brand promos." },
    ],
  }),
  component: Index,
});

function Index() {
  const nav = [
    { to: "/portfolio" as const, label: "PORTFOLIO", sub: "CINEMATIC WORKS", Icon: Film },
    { to: "/pricing" as const, label: "PRICING", sub: "PACKAGES", Icon: DollarSign },
    { to: "/contact" as const, label: "CONTACT", sub: "COLLABORATE", Icon: Send },
  ];
  return (
    <div className="relative flex flex-col items-center px-6 pb-20 pt-8 text-center">
      {/* Hero logo */}
      <div className="animate-warp-in relative">
        <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-neon/20 blur-3xl" />
        <img
          src={dfLogo}
          alt="DFRENZY VISUALS"
          width={420}
          height={420}
          className="mx-auto h-48 w-48 object-contain drop-shadow-[0_0_40px_oklch(0.78_0.18_230/0.6)] sm:h-64 sm:w-64 md:h-80 md:w-80"
        />
      </div>

      <h1 className="animate-warp-in mt-4 font-display text-3xl font-black tracking-[0.15em] text-foreground sm:text-5xl md:text-6xl">
        DFRENZY <span className="neon-text">VISUALS</span>
      </h1>
      <p className="animate-warp-in mt-3 font-display text-[11px] tracking-[0.5em] text-neon-bright sm:text-sm">
        AI · CINEMATIC · FILM · STUDIO
      </p>

      {/* CTA */}
      <Link
        to="/portfolio"
        className="group animate-warp-in relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-neon/60 bg-neon/5 px-10 py-4 font-display text-xs font-semibold tracking-[0.4em] text-foreground transition-all hover:neon-glow hover:text-neon-bright"
      >
        <span className="sweep-line relative">ENTER EXPERIENCE</span>
      </Link>
      <ChevronDown className="mt-6 h-6 w-6 animate-float text-neon-bright/60" />

      {/* Holographic stage */}
      <div className="relative mt-12 w-full max-w-5xl">
        {/* Stage rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[420px] w-[420px] rounded-full border border-neon/20 sm:h-[560px] sm:w-[560px]" />
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/15 sm:h-[440px] sm:w-[440px]" />
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/10 sm:h-[320px] sm:w-[320px]" />
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-12 md:gap-20">
          {nav.map(({ to, label, sub, Icon }, i) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col items-center gap-3"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-neon/20 blur-2xl transition-all group-hover:bg-neon/40 group-hover:blur-3xl" />
                <div className="animate-float flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon/60 bg-background/40 backdrop-blur-md transition-all group-hover:scale-110 group-hover:border-neon group-hover:neon-glow sm:h-28 sm:w-28">
                  <Icon className="h-7 w-7 text-neon-bright sm:h-10 sm:w-10" strokeWidth={1.5} />
                </div>
              </div>
              <div className="font-display text-xs font-bold tracking-[0.3em] text-foreground sm:text-sm">
                {label}
              </div>
              <div className="font-display text-[9px] tracking-[0.35em] text-neon-bright/70 sm:text-[10px]">
                {sub}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
