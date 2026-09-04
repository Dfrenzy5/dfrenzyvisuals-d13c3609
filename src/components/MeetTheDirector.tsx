import { Link } from "@tanstack/react-router";
import { Clapperboard } from "lucide-react";
import { Container } from "@/components/ui-studio/Container";
import { Reveal } from "@/components/ui-studio/Reveal";
import { studioLinkClass } from "@/components/ui-studio/StudioButton";

export function MeetTheDirector() {
  return (
    <section
      id="director"
      aria-labelledby="director-heading"
      className="relative px-6 py-24 sm:py-28 md:px-10"
    >
      <Container className="max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <Reveal variant="blur">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-neon/20 glass-panel">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,oklch(0.78_0.18_230/0.18),transparent_65%)]"
              />
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neon/40 bg-neon/5">
                  <Clapperboard className="h-7 w-7 text-neon-bright" strokeWidth={1.25} />
                </div>
                <div className="font-display text-sm font-black tracking-[0.28em] text-foreground">
                  DANIEL EBHOWE
                </div>
                <div className="font-display text-[9px] tracking-[0.32em] text-neon-bright">
                  DIRECTOR PORTRAIT
                </div>
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
              THE DIRECTOR
            </p>
            <h2
              id="director-heading"
              className="mt-3 font-display text-3xl font-black tracking-[0.14em] text-foreground sm:text-4xl"
            >
              MEET THE FILMMAKER BEHIND THE VISION.
            </h2>
            <div className="mt-6">
              <div className="font-display text-xl font-bold tracking-[0.18em] text-foreground">
                Daniel Ebhowe
              </div>
              <div className="mt-1 font-display text-[10px] tracking-[0.32em] text-neon-bright">
                AI FILMMAKER · DIRECTOR · CREATIVE DIRECTOR
              </div>
            </div>
            <div className="mt-6 max-w-[62ch] space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Daniel Ebhowe is the filmmaker and creative director behind DFRENZY VISUALS,
                an AI-native cinematic production studio built around one belief: emerging
                technology should expand what filmmakers can create, not replace the craft of
                filmmaking.
              </p>
              <p>
                His work combines cinematic direction, visual storytelling, generative AI,
                editing, sound design and post-production to create films, commercials,
                trailers, branded stories and immersive visual experiences.
              </p>
              <p>
                As an AI filmmaker, Daniel focuses on using AI as a production instrument —
                with human direction, storytelling and editorial judgment remaining at the
                heart of every frame.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ai-filmmaker" className={studioLinkClass("primary", "md")}>
                EXPLORE THE DIRECTOR
              </Link>
              <Link to="/contact" className={studioLinkClass("secondary", "md")}>
                START A PROJECT
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
