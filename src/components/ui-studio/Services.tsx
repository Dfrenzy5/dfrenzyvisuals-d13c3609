import { Link } from "@tanstack/react-router";
import {
  Film,
  Megaphone,
  Package,
  Building2,
  Camera,
  Music,
  ArrowUpRight,
} from "lucide-react";
import { Container, Section } from "./Container";
import { Reveal } from "./Reveal";

const SERVICES = [
  { Icon: Film, title: "Commercials", body: "Broadcast-grade brand films built for scale — from concept to master." },
  { Icon: Megaphone, title: "Branded Storytelling", body: "Long-form narrative content that turns audiences into believers." },
  { Icon: Package, title: "Product Films", body: "Cinematic product reveals engineered for launches and campaigns." },
  { Icon: Building2, title: "Architectural Visualization", body: "Photoreal spaces and developments rendered before they're built." },
  { Icon: Camera, title: "Virtual Production", body: "AI-native pipelines that compress timelines without compressing craft." },
  { Icon: Music, title: "Music & Culture", body: "Music visuals, artist films, and cultural moments with cinematic weight." },
] as const;

export function Services() {
  return (
    <Section id="services" ariaLabelledby="services-heading">
      <Container>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-eyebrow">What we do</p>
            <h2 id="services-heading" className="mt-3 text-h2 text-foreground">
              Services
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A modern creative studio powered by an AI-native production pipeline —
              built for brands who need cinematic quality at velocity.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-neon/40 px-5 py-2.5 font-display text-[10px] tracking-[0.3em] text-foreground transition-all hover:border-neon hover:text-neon-bright"
          >
            START A PROJECT <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl hairline surface-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative h-full surface-1 p-8 transition-colors hover:surface-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-neon/30 bg-neon/5">
                  <s.Icon className="h-5 w-5 text-neon-bright" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-base font-bold tracking-[0.15em] text-foreground">
                  {s.title.toUpperCase()}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-neon-bright group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}