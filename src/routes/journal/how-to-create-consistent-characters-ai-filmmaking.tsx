import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Quote } from "lucide-react";

import { SITE_URL } from "@/lib/site";

const PATH = "/journal/how-to-create-consistent-characters-ai-filmmaking";
const URL = `${SITE_URL}${PATH}`;

const TITLE =
  "How to Create Consistent Characters in AI Filmmaking | DFRENZY VISUALS";

const DESCRIPTION =
  "A practical guide to creating consistent AI characters across shots, scenes and longer-form films using references, character bibles, controlled generation and continuity workflows.";

const PUBLISHED = "2026-09-20";
const UPDATED = "2026-09-20";

export const Route = createFileRoute(
  "/journal/how-to-create-consistent-characters-ai-filmmaking",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI character consistency, consistent characters AI filmmaking, AI filmmaking, AI film characters, character continuity, AI video workflow, Grok AI filmmaking, DFRENZY VISUALS",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),

  component: ArticlePage,
});

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-10 text-3xl font-bold tracking-tight text-white md:text-4xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75">{children}</p>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/40">
        <Quote className="h-4 w-4" />
        DFRENZY'S TAKE
      </div>

      <div className="text-xl font-semibold leading-8 text-white md:text-2xl">
        {children}
      </div>
    </div>
  );
}

function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: {
      "@type": "Person",
      name: "Daniel Ebhowe",
      jobTitle: "AI Filmmaker & Creative Director",
      url: `${SITE_URL}/ai-filmmaker`,
    },
    publisher: {
      "@type": "Organization",
      name: "DFRENZY VISUALS",
      url: SITE_URL,
    },
    keywords:
      "AI character consistency, AI filmmaking, character continuity, AI video workflow",
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <Link
          to="/journal"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Journal
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.18em] text-white/40">
          <span>DFRENZY AI DAILY</span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            SEPTEMBER 20, 2026
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          How to Create Consistent Characters in AI Filmmaking
        </h1>

        <p className="mt-7 max-w-3xl text-xl leading-8 text-white/55">
          Character consistency is one of the biggest challenges in AI
          filmmaking. Here's a practical workflow for keeping the same
          character recognizable across shots, scenes and longer-form films.
        </p>

        <div className="mt-8 border-y border-white/10 py-5 text-sm text-white/45">
          By{" "}
          <span className="font-medium text-white/75">
            Daniel Ebhowe
          </span>{" "}
          — AI Filmmaker & Creative Director, DFRENZY VISUALS
          <br />
          September 20, 2026
        </div>

        <div className="mt-12 space-y-8">
          <P>
            {/* Article content goes here */}
          </P>

          {/* More sections will be added here */}
        </div>
      </article>
    </main>
  );
}
