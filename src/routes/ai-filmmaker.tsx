import { createFileRoute, Link } from "@tanstack/react-router";
import { Clapperboard, Cpu, Scissors, AudioLines, ShieldCheck } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import { Container } from "@/components/ui-studio/Container";
import { Reveal } from "@/components/ui-studio/Reveal";
import { studioLinkClass } from "@/components/ui-studio/StudioButton";
import { CASE_STUDIES } from "@/data/case-studies";

const TITLE = "Daniel Ebhowe — AI Filmmaker & Director | DFRENZY VISUALS";
const DESCRIPTION =
  "Daniel Ebhowe is an AI filmmaker, director and creative director, and the founder of DFRENZY VISUALS — a cinematic AI production studio making films, commercials and trailers through an AI-native, director-led pipeline.";
const URL = `${SITE_URL}/ai-filmmaker`;

export const Route = createFileRoute("/ai-filmmaker")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Daniel Ebhowe",
          jobTitle: "AI Filmmaker, Director & Creative Director",
          url: URL,
          description: DESCRIPTION,
          worksFor: {
            "@type": "Organization",
            name: "DFRENZY VISUALS",
            url: `${SITE_URL}/`,
          },
          founder: true,
          knowsAbout: [
            "AI filmmaking",
            "AI film production",
            "Cinematic direction",
            "Generative AI video production",
            "Post-production and sound design",
          ],
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "AI Filmmaking Pipeline Certified",
            credentialCategory: "Certification",
            recognizedBy: { "@type": "Organization", name: "Higgsfield Academy" },
          },
        }),
      },
    ],
  }),
  component: AiFilmmakerPage,
});

const CRAFT = [
  {
    Icon: Clapperboard,
    title: "DIRECTING",
    body: "Visual language, composition, pacing and cinematic storytelling.",
  },
  {
    Icon: Cpu,
    title: "AI PRODUCTION",
    body: "Generative workflows for characters, environments, visual effects and cinematic sequences.",
  },
  {
    Icon: Scissors,
    title: "EDITORIAL",
    body: "Editing, rhythm, transitions, continuity and narrative structure.",
  },
  {
    Icon: AudioLines,
    title: "SOUND & FINISHING",
    body: "Sound design, music, dialogue, color and final cinematic polish.",
  },
];

function AiFilmmakerPage() {
  const selected = CASE_STUDIES.slice(0, 6);

  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative px-6 pb-16 pt-32 sm:pt-40 md:px-10">
        <Container className="max-w-5xl text-center">
          <Reveal>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              THE DIRECTOR
            </p>
            <h1 className="mt-4 font-display text-3xl font-black tracking-[0.14em] text-foreground sm:text-5xl">
              AI FILMMAKER — DANIEL EBHOWE
            </h1>
            <p className="mt-4 font-display text-[10px] tracking-[0.34em] text-neon-bright sm:text-xs">
              AI FILMMAKER. DIRECTOR. CREATIVE DIRECTOR.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Daniel Ebhowe is the filmmaker. DFRENZY VISUALS is his cinematic AI
              production studio.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* About */}
      <section aria-labelledby="about-filmmaker" className="relative px-6 py-16 md:px-10">
        <Container className="max-w-3xl">
          <Reveal>
            <h2
              id="about-filmmaker"
              className="font-display text-2xl font-black tracking-[0.16em] text-foreground sm:text-3xl"
            >
              ABOUT THE FILMMAKER
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Daniel Ebhowe is the filmmaker and creative director behind DFRENZY VISUALS,
                an AI-native cinematic production studio built around one belief: emerging
                technology should expand what filmmakers can create, not replace the craft of
                filmmaking.
              </p>
              <p>
                His work combines cinematic direction, visual storytelling, generative AI,
                editing, sound design and post-production to create films, commercials,
                trailers, branded stories and immersive visual experiences. Each project moves
                through the same director-led pipeline — concept and script, visual
                development, AI film production, editorial, sound and final finishing.
              </p>
              <p>
                As an AI filmmaker, Daniel focuses on using AI as a production instrument —
                with human direction, storytelling and editorial judgment remaining at the
                heart of every frame. That approach lets DFRENZY VISUALS deliver AI video
                production at cinematic quality, on timelines traditional production cannot
                match.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy" className="relative px-6 py-16 md:px-10">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-neon/20 glass-panel p-8 sm:p-12">
              <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
                FILMMAKING PHILOSOPHY
              </p>
              <h2
                id="philosophy"
                className="mt-3 font-display text-2xl font-black tracking-[0.14em] text-foreground sm:text-4xl"
              >
                AI IS THE TOOL. STORY IS THE DIRECTOR.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  AI can generate images, environments, characters and motion. But cinematic
                  storytelling still depends on direction, intention, rhythm, performance,
                  composition and editorial judgment.
                </p>
                <p>
                  Daniel's approach is therefore director-led: technology accelerates
                  production while storytelling remains human-led.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* The Craft */}
      <section aria-labelledby="the-craft" className="relative px-6 py-16 md:px-10">
        <Container className="max-w-6xl">
          <Reveal>
            <h2
              id="the-craft"
              className="text-center font-display text-2xl font-black tracking-[0.18em] text-foreground sm:text-4xl"
            >
              THE CRAFT
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CRAFT.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-neon/20 glass-panel p-7 transition-all hover:-translate-y-1 hover:border-neon/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon/40 bg-neon/5">
                    <Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-sm font-bold tracking-[0.2em] text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section aria-labelledby="credentials" className="relative px-6 py-16 md:px-10">
        <Container className="max-w-3xl">
          <Reveal>
            <h2
              id="credentials"
              className="text-center font-display text-2xl font-black tracking-[0.18em] text-foreground sm:text-3xl"
            >
              CREDENTIALS
            </h2>
            <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-neon/20 glass-panel p-8 text-center">
              <ShieldCheck className="h-6 w-6 shrink-0 text-neon-bright" strokeWidth={1.5} />
              <div className="text-left">
                <div className="font-display text-sm font-bold tracking-[0.18em] text-foreground">
                  HIGGSFIELD ACADEMY
                </div>
                <div className="mt-1 text-xs text-neon-bright">
                  AI Filmmaking Pipeline Certified
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Selected work */}
      <section aria-labelledby="selected-work" className="relative px-6 py-16 md:px-10">
        <Container className="max-w-6xl">
          <Reveal>
            <h2
              id="selected-work"
              className="text-center font-display text-2xl font-black tracking-[0.18em] text-foreground sm:text-4xl"
            >
              SELECTED WORK
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {selected.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-neon/20 glass-panel transition-all hover:-translate-y-1 hover:border-neon/60"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.poster}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-[9px] tracking-[0.3em] text-neon-bright">
                      {p.category.toUpperCase()}
                    </div>
                    <div className="mt-2 font-display text-sm font-bold tracking-[0.14em] text-foreground">
                      {p.title.toUpperCase()}
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">
                      {p.subtitle}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className={studioLinkClass("secondary", "md")}>
              VIEW ALL WORK
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="final-cta" className="relative px-6 py-24 md:px-10">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2
              id="final-cta"
              className="font-display text-2xl font-black tracking-[0.16em] text-foreground sm:text-4xl"
            >
              HAVE A STORY WORTH MAKING?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Let's turn your idea into a cinematic experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className={studioLinkClass("primary", "lg")}>
                START YOUR PROJECT
              </Link>
              <Link to="/portfolio" className={studioLinkClass("secondary", "lg")}>
                VIEW THE WORK
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
