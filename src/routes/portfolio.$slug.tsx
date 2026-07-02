import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { CASE_STUDIES, getCaseStudy } from "@/data/case-studies";
import type { CaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.study;
    const url = `https://dfrenzyvisuals.lovable.app/portfolio/${params.slug}`;
    const title = s ? `${s.title} — Case Study | DFrenzy Visuals` : "Case Study | DFrenzy Visuals";
    const desc = s?.subtitle ?? "Cinematic AI case study by DFrenzy Visuals.";
    const image = s?.poster ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(image ? [{ property: "og:image", content: image }] : []),
        ...(image ? [{ name: "twitter:image", content: image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: s.title,
                description: s.subtitle,
                genre: s.category,
                author: { "@type": "Organization", name: "DFrenzy Visuals" },
                dateCreated: s.year,
                url,
                image: s.poster,
                ...(s.youtube
                  ? {
                      video: {
                        "@type": "VideoObject",
                        name: s.title,
                        description: s.subtitle,
                        thumbnailUrl: s.poster,
                        embedUrl: `https://www.youtube.com/embed/${s.youtube}`,
                        uploadDate: `${s.year}-01-01`,
                      },
                    }
                  : {}),
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-black tracking-widest text-foreground">
        CASE STUDY NOT FOUND
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        This project doesn't exist — or it isn't publicly showcased yet.
      </p>
      <Link
        to="/portfolio"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-neon bg-neon/10 px-6 py-3 font-display text-xs tracking-[0.3em] text-neon-bright hover:neon-glow"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> BACK TO PORTFOLIO
      </Link>
    </div>
  ),
  component: CaseStudyPage,
});

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-neon/10 py-14">
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <div>
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
            {eyebrow}
          </div>
          <h2 className="mt-2 font-display text-xl font-black tracking-[0.15em] text-foreground sm:text-2xl">
            {title}
          </h2>
        </div>
        <div className="text-[15px] leading-relaxed text-foreground/90">{children}</div>
      </div>
    </section>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <article className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.35em] text-muted-foreground transition-colors hover:text-neon-bright"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> ALL PROJECTS
      </Link>

      {/* Hero */}
      <header className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <div className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            {study.category.toUpperCase()}
          </div>
          <h1 className="mt-3 font-display text-4xl font-black tracking-[0.14em] text-foreground sm:text-6xl">
            {study.title}
          </h1>
          <p className="mt-3 max-w-xl text-base tracking-wide text-muted-foreground sm:text-lg">
            {study.subtitle}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-neon/15 bg-deep/40 p-5">
          {[
            ["Client", study.client],
            ["Year", study.year],
            ["Duration", study.duration],
            ["Role", study.role],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-[9px] tracking-[0.4em] text-neon-bright">
                  {String(k).toUpperCase()}
                </dt>
                <dd className="mt-1 text-xs text-foreground/90 sm:text-sm">{v}</dd>
              </div>
            ))}
        </dl>
      </header>

      {/* Media */}
      <div className="relative mt-10 overflow-hidden rounded-3xl border border-neon/30 glass-panel">
        <div className="relative aspect-video">
          {study.youtube ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${study.youtube}`}
              title={study.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src={study.poster}
                alt={study.title}
                className="h-full w-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon bg-neon/10">
                  <Play className="h-8 w-8 fill-neon-bright text-neon-bright" />
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Body sections */}
      <div className="mt-6">
        <Section eyebrow="01" title="THE PROBLEM">
          <p>{study.problem}</p>
        </Section>
        <Section eyebrow="02" title="THE CONCEPT">
          <p>{study.concept}</p>
        </Section>
        <Section eyebrow="03" title="MOODBOARD">
          <ul className="grid gap-2 sm:grid-cols-2">
            {study.moodboard.map((m) => (
              <li
                key={m}
                className="rounded-xl border border-neon/15 bg-deep/40 px-4 py-3 text-sm text-foreground/90"
              >
                {m}
              </li>
            ))}
          </ul>
        </Section>
        <Section eyebrow="04" title="PRODUCTION">
          <p>{study.production}</p>
        </Section>
        <Section eyebrow="05" title="AI PIPELINE">
          <ol className="space-y-3">
            {study.aiPipeline.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-xs tracking-[0.3em] text-neon-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>
        <Section eyebrow="06" title="EDITING & FINISHING">
          <p>{study.editing}</p>
        </Section>
        <Section eyebrow="07" title="FINAL OUTCOME">
          <p>{study.outcome}</p>
        </Section>
        <Section eyebrow="08" title="CLIENT IMPACT">
          <ul className="space-y-2">
            {study.impact.map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-bright" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          {study.tools.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neon/30 bg-neon/5 px-3 py-1 font-display text-[10px] tracking-[0.3em] text-neon-bright"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* CTA + next */}
      <div className="mt-16 grid gap-4 rounded-3xl border border-neon/25 glass-panel p-8 sm:grid-cols-2 sm:p-10">
        <div>
          <div className="font-display text-[10px] tracking-[0.5em] text-neon-bright">
            NEXT UP
          </div>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="mt-2 block font-display text-xl font-black tracking-[0.14em] text-foreground transition-colors hover:text-neon-bright sm:text-2xl"
          >
            {next.title} <ArrowRight className="ml-1 inline h-5 w-5" />
          </Link>
          <p className="mt-1 text-sm text-muted-foreground">{next.subtitle}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 sm:items-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-neon bg-neon/10 px-6 py-3 font-display text-xs tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
          >
            START YOUR PROJECT <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}