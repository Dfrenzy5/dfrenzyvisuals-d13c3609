import { createFileRoute } from "@tanstack/react-router";
import { Box, Gem, Crown, Check, Cpu, Zap, Infinity as InfinityIcon } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DFRENZY VISUALS" },
      { name: "description", content: "AI film packages: Basic, Pro, and Studio+ tiers for cinematic AI productions." },
      { property: "og:title", content: "Pricing — DFRENZY VISUALS" },
      { property: "og:description", content: "AI film packages." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "BASIC",
    Icon: Box,
    price: 199,
    features: ["AI Shorts (15–30 sec)", "Cinematic Poster", "2 Revisions", "AI Visuals", "Background Music"],
    highlight: false,
  },
  {
    name: "PRO",
    Icon: Gem,
    price: 499,
    features: ["AI Trailer (60–90 sec)", "Script + Voiceover", "Motion Design", "Sound Design", "3 Revisions"],
    highlight: true,
  },
  {
    name: "STUDIO+",
    Icon: Crown,
    price: 999,
    features: ["Full AI Film Production", "Brand Storytelling", "Advanced VFX", "Unlimited Revisions", "Priority Support"],
    highlight: false,
  },
];

function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      <div className="text-center">
        <h1 className="font-display text-4xl font-black tracking-[0.2em] text-foreground sm:text-6xl">PRICING</h1>
        <p className="mt-3 font-display text-[11px] tracking-[0.5em] text-neon-bright">AI · FILM · PACKAGES</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`group relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-2 ${
              t.highlight
                ? "border-neon bg-neon/5 neon-glow md:scale-105"
                : "border-neon/20 glass-panel hover:border-neon/60"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full border border-neon bg-background px-4 py-1 font-display text-[10px] font-bold tracking-[0.3em] text-neon-bright neon-glow">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="flex flex-col items-center text-center">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                  t.highlight ? "border-neon neon-glow" : "border-neon/40"
                }`}
              >
                <t.Icon className="h-7 w-7 text-neon-bright" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-[0.3em] text-foreground">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black text-foreground">${t.price}</span>
              </div>
              <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">/PROJECT</span>
            </div>

            <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-neon/15 pt-6 text-sm text-foreground/90">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-bright" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-full border px-6 py-3 font-display text-xs font-semibold tracking-[0.35em] transition-all ${
                t.highlight
                  ? "border-neon bg-neon/10 text-neon-bright hover:neon-glow"
                  : "border-neon/40 text-foreground hover:border-neon hover:text-neon-bright hover:neon-glow"
              }`}
            >
              SELECT PLAN
            </button>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl border border-neon/20 glass-panel p-6 sm:grid-cols-3">
        {[
          { Icon: Cpu, t: "AI POWERED", s: "CINEMATIC QUALITY" },
          { Icon: Zap, t: "FAST DELIVERY", s: "ON TIME, EVERY TIME" },
          { Icon: InfinityIcon, t: "UNLIMITED VISION", s: "WE BRING IDEAS TO LIFE" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon/40">
              <Icon className="h-5 w-5 text-neon-bright" />
            </div>
            <div>
              <div className="font-display text-sm font-bold tracking-[0.25em] text-foreground">{t}</div>
              <div className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">{s}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}