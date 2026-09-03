import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clapperboard, Film, Sparkles, Crown, Plus } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { Container, Section } from "@/components/ui-studio/Container";
import { Reveal } from "@/components/ui-studio/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Cinematic AI Production | DFRENZY VISUALS" },
      {
        name: "description",
        content:
          "Production levels for cinematic AI film: Cinematic Content, Cinematic Commercial, Narrative Film and Studio Production. From ₦150,000 — custom quotes for larger projects.",
      },
      { property: "og:title", content: "Pricing — Cinematic AI Production | DFRENZY VISUALS" },
      {
        property: "og:description",
        content:
          "Choose a production level — Cinematic Content, Cinematic Commercial, Narrative Film or Studio Production — or request a custom quote.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/pricing` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/pricing` }],
  }),
  component: PricingPage,
});

type Tier = {
  num: string;
  name: string;
  Icon: typeof Film;
  price: string;
  intl: string;
  badge?: string;
  premium?: boolean;
  description: string;
  includesLabel: string;
  includes: string[];
  idealLabel: string;
  ideal: string[];
  note?: string;
  cta: string;
};

const tiers: Tier[] = [
  {
    num: "01",
    name: "CINEMATIC CONTENT",
    Icon: Sparkles,
    price: "From ₦150,000",
    intl: "International: $150+",
    description:
      "For brands, creators and businesses that need premium cinematic content without a large production scope.",
    includesLabel: "INCLUDES",
    includes: [
      "15–30 second cinematic video",
      "Creative concept development",
      "AI-generated cinematic visuals",
      "Up to 5 visual shots",
      "Music & basic sound design",
      "Brand integration",
      "Professional editing",
      "1 revision round",
      "HD delivery",
    ],
    idealLabel: "IDEAL FOR",
    ideal: ["Social media campaigns", "Product teasers", "Brand announcements", "Short promotional content"],
    cta: "START A PROJECT",
  },
  {
    num: "02",
    name: "CINEMATIC COMMERCIAL",
    Icon: Clapperboard,
    price: "From ₦350,000",
    intl: "International: $300+",
    badge: "MOST POPULAR",
    description: "Our signature production for brands that want advertising that feels like cinema.",
    includesLabel: "INCLUDES",
    includes: [
      "30–60 second cinematic commercial",
      "Creative direction",
      "Script development or script refinement",
      "Storyboard / shot planning",
      "Character or product consistency",
      "Multi-scene AI production",
      "Cinematic camera direction",
      "AI voiceover where required",
      "Professional sound design",
      "Music",
      "Colour finishing",
      "2 revision rounds",
      "Multiple delivery formats",
    ],
    idealLabel: "IDEAL FOR",
    ideal: [
      "Product launches",
      "Brand campaigns",
      "Corporate advertising",
      "Social campaigns",
      "Promotional films",
    ],
    cta: "START A PROJECT",
  },
  {
    num: "03",
    name: "NARRATIVE FILM",
    Icon: Film,
    price: "From ₦750,000",
    intl: "International: $600+",
    description:
      "For stories that require characters, worlds, dialogue and cinematic continuity — not simply an advertisement.",
    includesLabel: "INCLUDES",
    includes: [
      "60 seconds–3 minutes",
      "Story development",
      "Scriptwriting / screenplay refinement",
      "Character development",
      "Character consistency across scenes",
      "Visual development & moodboards",
      "Multi-scene cinematic production",
      "Dialogue / AI voice performance",
      "Advanced VFX where required",
      "Cinematic sound design",
      "Music",
      "Professional editing",
      "Colour grading",
      "2 revision rounds",
      "Final master + social cutdowns",
    ],
    idealLabel: "IDEAL FOR",
    ideal: [
      "Short films",
      "Brand stories",
      "Film trailers",
      "Narrative campaigns",
      "Music visuals",
      "Concept films",
    ],
    cta: "START A PROJECT",
  },
  {
    num: "04",
    name: "STUDIO PRODUCTION",
    Icon: Crown,
    price: "CUSTOM QUOTE",
    intl: "International: Projects start from $1,200+",
    premium: true,
    description:
      "For ambitious productions that go beyond a single film. From cinematic short films to episodic productions and feature-length projects, we build a dedicated AI-native production pipeline around the project.",
    includesLabel: "PRODUCTION MAY INCLUDE",
    includes: [
      "Full screenplay development",
      "Character bible & visual bible",
      "World / environment development",
      "Scene & shot design",
      "AI cinematography",
      "Character performance",
      "Dialogue & voice production",
      "Advanced VFX",
      "Multi-scene continuity",
      "Sound design & original music",
      "Editing & colour finishing",
      "Multiple aspect ratios",
      "Episode production",
      "Trailer & promotional cutdowns",
    ],
    idealLabel: "SUITABLE FOR",
    ideal: [
      "AI short films",
      "Film trailers",
      "Web series",
      "Episodic productions",
      "Music films",
      "Branded entertainment",
      "Feature-length AI films",
      "Large-scale creative campaigns",
    ],
    note: "Final pricing is determined by screenplay length, number of scenes, characters, visual complexity, production requirements and delivery scope.",
    cta: "DISCUSS YOUR PROJECT",
  },
];

const addOns: { name: string; price: string }[] = [
  { name: "ADDITIONAL REVISION ROUND", price: "From ₦50,000" },
  { name: "ADDITIONAL SOCIAL CUTDOWN", price: "From ₦30,000" },
  { name: "ADDITIONAL VOICE CHARACTER", price: "From ₦25,000" },
  { name: "ADDITIONAL SCENE", price: "From ₦75,000" },
  { name: "ADDITIONAL CHARACTER", price: "From ₦50,000" },
  { name: "ADVANCED VFX / COMPLEX ACTION SEQUENCE", price: "Quoted per scene" },
  { name: "EXTENDED RUNTIME", price: "Quoted according to production complexity" },
  { name: "RUSH PRODUCTION", price: "+25–50%" },
  { name: "4K / PREMIUM MASTERING", price: "Available on selected projects" },
];

const everyProject = [
  {
    title: "CREATIVE DIRECTION",
    body: "A human-led creative process from concept to final frame.",
  },
  {
    title: "AI PRODUCTION",
    body: "Professional generative workflows selected according to the project's visual requirements.",
  },
  {
    title: "POST-PRODUCTION",
    body: "Editing, sound, colour and finishing are treated as part of the filmmaking process — not an afterthought.",
  },
  {
    title: "USAGE RIGHTS",
    body: "Commercial usage rights for the final delivered master are provided according to the project agreement. Extended licensing, paid-media usage, exclusivity or third-party usage may require additional licensing fees.",
  },
];

function TierCard({ t }: { t: Tier }) {
  const accent = t.badge
    ? "border-neon bg-neon/5 neon-glow"
    : t.premium
      ? "border-neon/45 bg-gradient-to-b from-neon/[0.07] to-transparent"
      : "border-neon/20 glass-panel hover:border-neon/50";

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border p-7 transition-all duration-500 md:p-9 ${accent}`}
    >
      {t.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="rounded-full border border-neon bg-background px-4 py-1 font-display text-[10px] font-bold tracking-[0.3em] text-neon-bright neon-glow">
            {t.badge}
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-[11px] tracking-[0.45em] text-muted-foreground">{t.num}</div>
          <h2 className="mt-2 font-display text-xl font-black tracking-[0.18em] text-foreground sm:text-2xl">
            {t.name}
          </h2>
        </div>
        <div
          className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border ${
            t.badge || t.premium ? "border-neon" : "border-neon/35"
          }`}
        >
          <t.Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
        </div>
      </div>

      <div className="mt-6 border-y border-neon/15 py-5">
        <div className="font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          {t.price}
        </div>
        {t.premium && (
          <div className="mt-2 font-display text-sm font-semibold tracking-[0.1em] text-neon-bright">
            Projects start from ₦1,500,000
          </div>
        )}
        <div className="mt-2 font-display text-[11px] tracking-[0.25em] text-muted-foreground">{t.intl}</div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-foreground/80">{t.description}</p>

      <div className="mt-7">
        <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">{t.includesLabel}</div>
        <ul className="mt-4 flex flex-col gap-2.5 text-sm text-foreground/90">
          {t.includes.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-neon-bright" strokeWidth={2} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">{t.idealLabel}</div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t.ideal.join(" · ")}</p>
      </div>

      {t.note && (
        <div className="mt-7 rounded-xl border border-neon/15 bg-background/40 p-4">
          <div className="font-display text-[10px] tracking-[0.35em] text-muted-foreground">PRICING NOTE</div>
          <p className="mt-2 text-xs leading-relaxed text-foreground/70">{t.note}</p>
        </div>
      )}

      <div className="flex-1" />

      <Link
        to="/contact"
        className={`mt-8 block w-full rounded-full border px-6 py-3.5 text-center font-display text-[11px] font-semibold tracking-[0.35em] transition-all ${
          t.badge || t.premium
            ? "border-neon bg-neon/10 text-neon-bright hover:neon-glow"
            : "border-neon/40 text-foreground hover:border-neon hover:text-neon-bright hover:neon-glow"
        }`}
      >
        {t.cta}
      </Link>
    </article>
  );
}

function PricingPage() {
  return (
    <div className="pb-10">
      {/* Header */}
      <Section className="pb-0">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-display text-[11px] tracking-[0.5em] text-neon-bright">PRICING</p>
              <h1 className="mt-5 font-display text-3xl font-black leading-[1.1] tracking-[0.06em] text-foreground sm:text-5xl">
                CINEMATIC PRODUCTION, BUILT AROUND YOUR VISION.
              </h1>
              <p className="mt-6 text-sm leading-relaxed text-foreground/75 sm:text-base">
                Every DFRENZY VISUALS project is different. Our pricing reflects the level of creative
                direction, visual complexity, storytelling, AI production, and post-production required to
                bring your idea to life.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Choose a production level below, or request a custom quote for larger projects.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Tiers */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80} className={t.premium ? "lg:col-span-2" : undefined}>
                <TierCard t={t} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Add-ons */}
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-black tracking-[0.15em] text-foreground sm:text-3xl">
                OPTIONAL PRODUCTION ADD-ONS
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">Need more from your production?</p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neon/20 bg-neon/15 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((a) => (
              <div key={a.name} className="flex flex-col gap-2 bg-background/85 p-6">
                <div className="flex items-start gap-2">
                  <Plus className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-neon-bright" />
                  <span className="font-display text-[11px] font-semibold tracking-[0.2em] text-foreground">
                    {a.name}
                  </span>
                </div>
                <span className="pl-5.5 text-sm text-neon-bright">{a.price}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Every project includes */}
      <Section>
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-black tracking-[0.15em] text-foreground sm:text-3xl">
              EVERY PROJECT INCLUDES
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {everyProject.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-neon/20 glass-panel p-7">
                  <h3 className="font-display text-sm font-bold tracking-[0.3em] text-neon-bright">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Scope protection */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-2xl border border-neon/15 bg-background/40 p-7 md:grid-cols-2 md:p-9">
            <div>
              <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
                REVISION &amp; SCOPE POLICY
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                Revision rounds cover reasonable creative adjustments within the agreed production scope.
                Major changes to approved concepts, scripts, characters, scenes or production direction may
                require an additional fee.
              </p>
            </div>
            <div>
              <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
                PRODUCTION COSTS
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                Production fees cover the agreed creative and production scope. Third-party costs such as
                premium AI generation credits, licensed music, stock assets, specialist services or other
                external production expenses may be quoted separately where applicable.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-neon/25 glass-panel px-7 py-12 text-center md:px-12">
              <h2 className="font-display text-xl font-black tracking-[0.2em] text-foreground sm:text-2xl">
                NOT SURE WHICH PACKAGE YOU NEED?
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-foreground/75">
                You don't need to determine the production complexity yourself. Tell us what you want to
                create, your intended audience, desired runtime and deadline. We'll recommend the appropriate
                production level and provide a clear project quote before production begins.
              </p>
              <p className="mt-8 font-display text-lg font-black tracking-[0.2em] text-neon-bright sm:text-2xl">
                HAVE A STORY IN MIND? LET'S BUILD IT.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Request a project consultation.</p>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-full border border-neon bg-neon/10 px-10 py-4 font-display text-[11px] font-semibold tracking-[0.35em] text-neon-bright transition-all hover:neon-glow"
              >
                DISCUSS YOUR PROJECT
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
