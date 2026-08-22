import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Filter, ArrowRight, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "The Journal — Studio Updates & AI Film Events | DFrenzy Visuals" },
      {
        name: "description",
        content:
          "Live updates on DFrenzy Visuals' AI film projects, festival entries, and industry events.",
      },
      { property: "og:title", content: "The Journal — Studio Updates & AI Film Events" },
      {
        property: "og:description",
        content:
          "Live updates on DFrenzy Visuals' AI film projects, festival entries, and industry events.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/journal` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/journal` }],
  }),
  component: JournalPage,
});

// ─────────────────────────────────────────────────────────────────────────────
// Journal data — add new entries here. Newest first (reverse-chronological).
// To add an entry: append an object to JOURNAL_ENTRIES below.
// ─────────────────────────────────────────────────────────────────────────────
type JournalCategory = "Portfolio" | "Event";
type JournalStatus = "In Production" | "Submitted" | "Live" | "Archived" | "Completed";

interface JournalEntry {
  id: string;
  date: string;
  category: JournalCategory;
  title: string;
  description: string;
  status?: JournalStatus;
  url?: { label: string; href: string };
  to?: { label: string; route: string; params?: Record<string, string> };
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "3am-the-hotel-dreams-submitted",
    date: "August 2026",
    category: "Event",
    title: "Submitted — 3AM (The Hotel Dreams) for Suite Dreams GenJam",
    description:
      "Entered the Suite Dreams GenJam challenge for Machine Cinema's Warsaw Glitch festival with an original AI short film.",
    status: "Submitted",
    to: { label: "Watch Film", route: "/portfolio/$slug", params: { slug: "3am-the-hotel-dreams" } },
  },
  {
    id: "certified-higgsfield-academy",
    date: "July 2026",
    category: "Event",
    title: "Certified — The AI Filmmaking Pipeline (Higgsfield Academy)",
    description:
      "Completed the Cinema Studio Pro Guide certification through Higgsfield Academy, reinforcing DFrenzy Visuals' AI filmmaking pipeline expertise.",
    status: "Completed",
  },
  {
    id: "the-leopard-king-live",
    date: "August 2026",
    category: "Portfolio",
    title: "The Leopard King — Now Live",
    description:
      "A three-act cinematic trailer built entirely with AI — Seedance 2.0 animation, Grok storyboarding, and an original Suno score. Watch the full piece in our portfolio.",
    status: "Live",
    to: { label: "Watch Film", route: "/portfolio/$slug", params: { slug: "the-leopard-king" } },
  },
  {
    id: "warsaw-glitch-suite-dreams",
    date: "August 2026",
    category: "Event",
    title: 'Competing in Warsaw Glitch — "Suite Dreams" AI Filmmaking Challenge',
    description:
      "A Seedance 2.5 cyberpunk fantasy concept built around the Warsaw Presidential Hotel as lead character. Entry deadline August 28.",
    status: "In Production",
  },
  {
    id: "the-inheritance-the-reading",
    date: "August 2026",
    category: "Portfolio",
    title: "THE INHERITANCE: The Reading",
    description:
      "A 29-shot AI-generated festival short film, targeting the Astana AI Film Festival and Token AI Film Festival.",
    status: "In Production",
  },
  {
    id: "diamond-project-business-conference-promo",
    date: "August 2026",
    category: "Portfolio",
    title: "Diamond Project Business Conference Promo",
    description:
      "A 10-clip cinematic event promo produced for a Lagos business conference.",
    status: "In Production",
  },
];

const FILTERS = ["All", "Portfolio", "Events & Festivals"] as const;

const STATUS_STYLES: Record<JournalStatus, string> = {
  "In Production": "border-neon/50 bg-neon/10 text-neon-bright",
  Submitted: "border-accent/50 bg-accent/10 text-accent-foreground",
  Live: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  Archived: "border-neon/20 bg-background/40 text-muted-foreground",
  Completed: "border-neon-bright/50 bg-neon-bright/10 text-neon-bright",
};

function JournalCard({ entry }: { entry: JournalEntry }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-neon/20 glass-panel p-6 transition-all hover:-translate-y-1 hover:border-neon hover:neon-glow md:p-7">
      {/* Top row: date + category */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground">
          <Calendar className="h-3.5 w-3.5 text-neon-bright" />
          <span>{entry.date.toUpperCase()}</span>
        </div>
        <span className="rounded-full border border-neon/40 bg-background/60 px-3 py-1 font-display text-[9px] tracking-[0.3em] text-neon-bright backdrop-blur-md">
          {entry.category.toUpperCase()}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-4 font-display text-xl font-bold tracking-[0.05em] text-foreground md:text-2xl">
        {entry.title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {entry.description}
      </p>

      {/* Footer: status + link */}
      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-neon/15 pt-5">
        {entry.status && (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-display text-[9px] font-semibold tracking-[0.25em] ${STATUS_STYLES[entry.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {entry.status.toUpperCase()}
          </span>
        )}
        {entry.url && (
          <a
            href={entry.url.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-display text-[10px] font-semibold tracking-[0.3em] text-neon-bright transition-colors hover:text-foreground"
          >
            {entry.url.label.toUpperCase()}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
        {entry.to && (
          <Link
            to={entry.to.route}
            params={entry.to.params}
            className="inline-flex items-center gap-1.5 font-display text-[10px] font-semibold tracking-[0.3em] text-neon-bright transition-colors hover:text-foreground"
          >
            {entry.to.label.toUpperCase()}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}

function JournalPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible =
    filter === "All"
      ? JOURNAL_ENTRIES
      : JOURNAL_ENTRIES.filter((e) =>
          filter === "Events & Festivals" ? e.category === "Event" : e.category === "Portfolio",
        );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      {/* Hero */}
      <div className="text-center">
        <h1 className="font-display text-4xl font-black tracking-[0.2em] text-foreground sm:text-6xl">
          The Journal
        </h1>
        <p className="mt-4 mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Studio updates, festival entries, and dispatches from the AI filmmaking frontier.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <Filter className="h-3.5 w-3.5 text-neon-bright" />
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 font-display text-[10px] font-semibold tracking-[0.25em] transition-all ${
              filter === f
                ? "border-neon bg-neon/10 text-neon-bright neon-glow"
                : "border-neon/20 text-muted-foreground hover:border-neon/60 hover:text-foreground"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((entry) => (
          <JournalCard key={entry.id} entry={entry} />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-8 rounded-xl border border-neon/20 glass-panel p-12 text-center">
          <p className="font-display text-xs tracking-[0.3em] text-muted-foreground">
            NO ENTRIES IN THIS CATEGORY YET — CHECK BACK SOON.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-neon/20 glass-panel p-8 text-center">
        <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
          WORK WITH THE STUDIO
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Building something cinematic? DFRENZY VISUALS crafts AI-powered films, trailers, and
          brand stories — end to end.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-neon bg-neon/10 px-6 py-3 font-display text-xs font-semibold tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
        >
          START YOUR PROJECT <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
