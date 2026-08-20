import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  GitCompareArrows,
  Workflow,
  Wrench,
  Lightbulb,
  Download,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { Container, Section } from "@/components/ui-studio/Container";
import { Reveal } from "@/components/ui-studio/Reveal";
import { studioLinkClass } from "@/components/ui-studio/StudioButton";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blueprint")({
  head: () => ({
    meta: [
      { title: "The AI Content Creator Blueprint — Free Guide | DFrenzy Visuals" },
      {
        name: "description",
        content:
          "Download the free AI Content Creator Blueprint — the exact visual framework DFrenzy Visuals uses to create professional AI images, videos, and content.",
      },
      {
        property: "og:title",
        content: "The AI Content Creator Blueprint — Free Guide | DFrenzy Visuals",
      },
      {
        property: "og:description",
        content:
          "A free visual guide to creating professional AI images, videos, and content — the exact framework DFrenzy Visuals uses in production.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/blueprint` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/blueprint` },
    ],
  }),
  component: BlueprintPage,
});

const DOWNLOAD_PATH =
  "/__l5e/assets-v1/3470b1af-bf16-4758-adf2-4e53852396d3/The_AI_Content_Creator_Blueprint.pdf";

// TODO(NOT-WIRED): The Buttondown account is not yet live. Replace YOUR_USERNAME below
// with the real Buttondown username (https://buttondown.info) in BOTH this file and
// src/components/SiteFooter.tsx. Until then this form posts to a non-existent Buttondown
// endpoint and subscriptions will NOT be recorded — the email capture is a PLACEHOLDER only.
const BUTTONDOWN_USERNAME = "YOUR_USERNAME";

const WHATS_INSIDE = [
  {
    Icon: Sparkles,
    title: "The AI Revolution",
    desc: "Why content creation has fundamentally changed — and why holding out is no longer an option.",
  },
  {
    Icon: GitCompareArrows,
    title: "Before vs. After",
    desc: "10X faster turnaround. 70% lower production cost. Same cinematic standard.",
  },
  {
    Icon: Workflow,
    title: "The Exact Workflow",
    desc: "Create → Automate → Publish → Grow → Profit. A repeatable pipeline from blank page to shipped work.",
  },
  {
    Icon: Wrench,
    title: "100+ AI Tools Worth Knowing",
    desc: "A curated stack across image, video, voice, and editing — not a list, a shortlist.",
  },
  {
    Icon: Lightbulb,
    title: "Pro Tips From Our Pipeline",
    desc: "Production-tested techniques straight from DFrenzy Visuals' own AI-native workflow.",
  },
];

const STATS = [
  { value: 500, suffix: "+", label: "Clients Empowered" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Commitment" },
];

function BlueprintPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire the subscribe to Buttondown in a popup without navigating away.
    if (typeof window !== "undefined") {
      window.open(
        `https://buttondown.com/${BUTTONDOWN_USERNAME}`,
        "popupwindow",
        "scrollbars=yes,width=560,height=620",
      );
      (e.currentTarget as HTMLFormElement).submit();
    }
  };

  return (
    <main className="relative">
      {/* ===== HERO ===== */}
      <Section className="overflow-hidden pt-32 sm:pt-40" ariaLabelledby="bp-hero">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(0,213,255,0.12), transparent 55%), radial-gradient(circle at 80% 30%, rgba(124,58,237,0.12), transparent 50%)",
          }}
        />
        <Container size="reading" className="text-center">
          <Reveal>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              FREE GUIDE · DFRENZY VISUALS
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="bp-hero"
              className="mt-4 font-display text-4xl font-black tracking-[0.12em] text-foreground sm:text-6xl"
            >
              THE AI CONTENT
              <br />
              CREATOR BLUEPRINT
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A free visual guide to creating professional AI images, videos, and
              content — the exact framework DFrenzy Visuals uses in production.
            </p>
          </Reveal>

          {/* Pull quote */}
          <Reveal delay={240}>
            <figure className="relative mx-auto mt-12 max-w-2xl">
              <Quote
                aria-hidden
                className="absolute -left-2 -top-4 h-16 w-16 text-neon/15 sm:h-20 sm:w-20"
                strokeWidth={1}
              />
              <blockquote className="relative z-10 rounded-2xl border border-neon/20 glass-panel p-8 sm:p-10">
                <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-2xl">
                  “AI won't replace creators. But creators who use AI will replace
                  those who don't.”
                </p>
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={320}>
            <a
              href="#get-access"
              className={studioLinkClass("primary", "lg") + " mt-10"}
            >
              GET INSTANT ACCESS
            </a>
          </Reveal>
        </Container>
      </Section>

      {/* ===== WHAT'S INSIDE ===== */}
      <Section ariaLabelledby="bp-inside">
        <Container size="std">
          <Reveal className="text-center">
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              WHAT'S INSIDE
            </p>
            <h2
              id="bp-inside"
              className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
            >
              THE BLUEPRINT
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4">
            {WHATS_INSIDE.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="group flex items-start gap-5 rounded-2xl border border-neon/20 glass-panel p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-neon hover:neon-glow sm:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon/40 bg-neon/5 transition-colors group-hover:border-neon">
                    <Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[10px] tracking-[0.3em] text-neon-bright/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-base font-bold tracking-[0.12em] text-foreground sm:text-lg">
                        {title.toUpperCase()}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== STATS STRIP ===== */}
      <Section className="pt-0" ariaLabel="Studio stats">
        <Container size="std">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-neon/20 glass-panel p-8 sm:gap-6 sm:p-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-black tracking-wider text-neon-bright sm:text-4xl">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground sm:text-xs">
                  {s.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== EMAIL CAPTURE ===== */}
      <Section id="get-access" ariaLabelledby="bp-access" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,213,255,0.10), transparent 60%)",
          }}
        />
        <Container size="reading" className="text-center">
          <Reveal>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              FREE DOWNLOAD
            </p>
            <h2
              id="bp-access"
              className="mt-3 font-display text-3xl font-black tracking-[0.18em] text-foreground sm:text-5xl"
            >
              GET THE BLUEPRINT
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Enter your email to get instant access.
            </p>
          </Reveal>

          <Reveal delay={120}>
            {!submitted ? (
              <form
                action={`https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`}
                method="post"
                target="popupwindow"
                onSubmit={onSubmit}
                className="embeddable-buttondown-form mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-3"
              >
                <label htmlFor="bp-email" className="sr-only">
                  Email address
                </label>
                <div className="flex overflow-hidden rounded-full hairline surface-2">
                  <input
                    id="bp-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                  />
                  <input
                    type="submit"
                    value="GET ACCESS"
                    className="cursor-pointer border-l border-neon/20 bg-neon/10 px-5 font-display text-[10px] tracking-[0.3em] text-neon-bright transition-colors hover:bg-neon/20"
                  />
                </div>
                <p className="text-[11px] text-muted-foreground/70">
                  No spam. Just cinematic dispatches from the studio, when there's
                  something worth sharing.
                </p>
              </form>
            ) : (
              <div className="mx-auto mt-10 w-full max-w-md animate-warp-in">
                <div className="flex items-center justify-center gap-2 text-neon-bright">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-display text-[11px] tracking-[0.3em]">
                    ACCESS UNLOCKED
                  </span>
                </div>
                <a
                  href={DOWNLOAD_PATH}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className={studioLinkClass("primary", "lg") + " mt-5 w-full"}
                >
                  <Download className="h-4 w-4" />
                  DOWNLOAD NOW
                </a>
                <p className="mt-4 text-[11px] text-muted-foreground/70">
                  The PDF opens in a new tab. Check your inbox to confirm your
                  subscription.
                </p>
              </div>
            )}
          </Reveal>

        </Container>
      </Section>

      {/* ===== TRUST FOOTER LINE ===== */}
      <Section className="pt-0">
        <Container size="reading">
          <Reveal>
            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              Built by{" "}
              <Link
                to="/"
                className="font-display tracking-[0.15em] text-neon-bright transition-colors hover:text-neon"
              >
                DFRENZY VISUALS
              </Link>{" "}
              — the AI cinematic studio behind{" "}
              <span className="text-foreground">Infidelity Unlimited</span>,{" "}
              <Link
                to="/portfolio/$slug"
                params={{ slug: "unbliss" }}
                className="text-foreground underline decoration-neon/40 underline-offset-4 transition-colors hover:text-neon-bright"
              >
                UNBLISS
              </Link>
              , and 1000+ delivered projects.
            </p>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
