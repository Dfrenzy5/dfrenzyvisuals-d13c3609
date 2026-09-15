import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Quote,
} from "lucide-react";

import { SITE_URL } from "@/lib/site";

const PATH = "/journal/ai-cinema-festival-era-africa";
const URL = `${SITE_URL}${PATH}`;

const TITLE =
  "DFRENZY AI DAILY — AI Cinema Has Entered Its Festival Era — And Africa Is Part of the Story";

const DESCRIPTION =
  "Daniel Ebhowe of DFRENZY VISUALS explores NAIFF 2026, Godzilla in Lagos and the growing festival ecosystem around African AI filmmaking.";

const PUBLISHED = "2026-09-15";
const UPDATED = "2026-09-15";

export const Route = createFileRoute(
  "/journal/ai-cinema-festival-era-africa",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI cinema, AI filmmaking, NAIFF, Naija AI Film Festival, Godzilla in Lagos, African AI filmmaking, AI films, Nigeria AI filmmakers",
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

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-white/50">{label}</div>
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
      "AI cinema, AI filmmaking, NAIFF, African AI filmmaking, Godzilla in Lagos",
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        {/* Back to Journal */}
        <Link
          to="/journal"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Journal
        </Link>

        {/* Category / Date */}
        <div className="flex flex-wrap items-center gap-4 text-xs tracking-[0.18em] text-white/40">
          <span>DFRENZY AI DAILY</span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            SEPTEMBER 15, 2026
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          AI Cinema Has Entered Its Festival Era — And Africa Is Part of the
          Story
        </h1>

        {/* Intro */}
        <p className="mt-7 max-w-3xl text-xl leading-8 text-white/55">
          AI filmmaking is moving beyond the stage of technological
          experimentation. Festivals, filmmakers and audiences are beginning to
          treat AI-generated cinema as a serious creative medium — and Africa
          is building its own place within that conversation.
        </p>

        {/* Byline */}
        <div className="mt-8 border-y border-white/10 py-5 text-sm text-white/45">
          By{" "}
          <span className="font-medium text-white/75">
            Daniel Ebhowe
          </span>{" "}
          — AI Filmmaker & Creative Director, DFRENZY VISUALS
          <br />
          September 15, 2026
        </div>

        {/* Article Body */}
        <div className="mt-12 space-y-8">
          <P>
            For a while, much of the conversation around generative AI and
            filmmaking revolved around one question:{" "}
            <em>Can AI actually make a film?</em>
          </P>

          <P>
            That question is becoming less interesting.
          </P>

          <P>
            The more important question now is what happens when filmmakers
            begin treating AI not simply as a novelty or production shortcut,
            but as a genuine cinematic medium — with its own visual language,
            workflows, limitations and creative possibilities.
          </P>

          <P>
            One of the clearest signs of that transition is the rise of
            dedicated AI film festivals. And in Nigeria, the Naija AI Film
            Festival is helping create exactly that space.
          </P>

          <H2>Movie of the Day: Godzilla in Lagos</H2>

          <P>
            Today's DFRENZY AI DAILY spotlight goes to{" "}
            <strong className="text-white">Godzilla in Lagos</strong> by{" "}
            <strong className="text-white">Nirvs AI</strong>.
          </P>

          <P>
            At the 2025 Naija AI Film Festival, the film won{" "}
            <strong className="text-white">Best AI Long Form Film</strong>.
            That recognition is significant because the project demonstrates
            something that is becoming increasingly important in AI cinema:
            the ability to take a familiar cinematic idea and place it inside
            a distinctly African visual and cultural context.
          </P>

          <Callout>
            The exciting part isn't simply that AI can generate something as
            visually ambitious as a giant cinematic creature. It's that
            filmmakers can begin asking:{" "}
            <em>what does this story look like when it happens here?</em>
          </Callout>

          <P>
            The official trailer for{" "}
            <strong className="text-white">Godzilla in Lagos</strong> presents
            exactly the kind of collision that makes AI filmmaking interesting:
            globally recognizable cinematic spectacle meeting Lagos.
          </P>

          <a
            href="https://www.instagram.com/reel/DLmVU2cMhpH/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold tracking-[0.15em] text-white transition-colors hover:border-white/50 hover:bg-white/5"
          >
            WATCH THE OFFICIAL TRAILER
            <ExternalLink className="h-4 w-4" />
          </a>

          <H2>Nigeria Is Building Its Own AI Cinema Space</H2>

          <P>
            The significance of{" "}
            <strong className="text-white">Godzilla in Lagos</strong> becomes
            even clearer when viewed alongside the growth of the Naija AI Film
            Festival itself.
          </P>

          <P>
            NAIFF's official festival information describes its mission around
            spotlighting a new generation of filmmakers using artificial
            intelligence to explore storytelling and filmmaking. Its 2026 main
            event is scheduled for{" "}
            <strong className="text-white">
              September 19–20, 2026 in Lagos
            </strong>
            .
          </P>

          <div className="grid gap-4 sm:grid-cols-2">
            <Stat value="350+" label="Films submitted in 2025" />
            <Stat value="14+" label="Countries represented in 2025" />
            <Stat value="250+" label="Attendees in 2025" />
            <Stat value="18" label="Award winners in 2025" />
          </div>

          <P>
            Those numbers matter because they show that the African AI
            filmmaking conversation is not happening in isolation. There is
            already an emerging ecosystem of filmmakers, audiences, creators
            and institutions interested in what this technology can produce.
          </P>

          <H2>AI Cinema Is Becoming an Ecosystem</H2>

          <P>
            The evolution of AI filmmaking is easy to understand if we look at
            what happens with other cinematic technologies.
          </P>

          <P>
            A camera does not make someone a cinematographer. Editing software
            does not automatically make someone an editor. Access to visual
            effects does not automatically make someone a VFX artist.
          </P>

          <P>
            The same principle applies to generative AI.
          </P>

          <P>
            The tools are becoming more capable, but the filmmaker still has
            to make the decisions.
          </P>

          <P>
            Story structure. Character design. Performance direction.
            Composition. Camera movement. Continuity. Editing. Sound.
            Pacing. Emotion.
          </P>

          <P>
            Those decisions are what transform generated material into
            filmmaking.
          </P>

          <H2>Why Festivals Matter</H2>

          <P>
            Film festivals create something the technology itself cannot
            provide: a cultural and professional context in which the work can
            be judged.
          </P>

          <P>
            Once an AI-generated film is placed inside a festival programme,
            the conversation naturally shifts. The audience is no longer
            simply asking which model produced the images.
          </P>

          <P>
            They are asking whether the film works.
          </P>

          <P>
            Does the story connect? Does the direction feel intentional? Do the
            performances communicate emotion? Does the cinematography serve the
            narrative? Does the editing create rhythm? Does the film leave an
            impression?
          </P>

          <P>
            Those are filmmaking questions.
          </P>

          <H2>Why NAIFF Matters for African Filmmakers</H2>

          <P>
            There is another reason the growth of AI cinema in Africa matters.
          </P>

          <P>
            Generative AI dramatically lowers some of the traditional barriers
            to visualising ambitious ideas. A filmmaker does not necessarily
            need a Hollywood-sized production infrastructure to begin exploring
            worlds, characters and concepts that would previously have been
            extremely expensive to visualise.
          </P>

          <P>
            That creates an opportunity for African filmmakers to tell stories
            from perspectives that have historically been underrepresented in
            global visual media.
          </P>

          <P>
            The opportunity is not simply to reproduce Hollywood aesthetics
            more cheaply.
          </P>

          <P>
            It is to create images, worlds and stories that could only come from
            African filmmakers.
          </P>

          <Callout>
            The real opportunity for African AI filmmakers is not to ask how
            closely we can imitate Hollywood. It is to ask what the rest of the
            world has never seen because we have not created it yet.
          </Callout>

          <H2>DFRENZY'S TAKE</H2>

          <P>
            At DFRENZY VISUALS, I see AI as a new filmmaking medium rather than
            a replacement for filmmaking.
          </P>

          <P>
            The technology can generate extraordinary imagery, but cinematic
            quality still comes from direction. The filmmaker has to understand
            what the audience should feel, what the characters should
            communicate, how the camera should behave and how every shot should
            connect to the next.
          </P>

          <P>
            That becomes especially important when creating longer-form AI
            films, where character consistency, visual continuity, dialogue
            pacing, editing and sound can determine whether the final result
            feels like a film or simply a collection of impressive AI clips.
          </P>

          <P>
            The emergence of festivals such as NAIFF suggests that the industry
            is moving toward a point where AI-generated films will increasingly
            be evaluated on cinematic merit.
          </P>

          <P>
            And that is a very different conversation from simply asking which
            AI model is currently the best.
          </P>

          <H2>The Bigger Question</H2>

          <P>
            AI filmmaking is entering an interesting phase.
          </P>

          <P>
            The technology is advancing rapidly. New models are making longer
            sequences possible. Image generation is becoming more consistent.
            Character continuity is improving. Audio and dialogue workflows are
            becoming more sophisticated.
          </P>

          <P>
            But as the technology improves, the importance of the filmmaker may
            actually increase.
          </P>

          <P className="text-2xl font-semibold leading-9 text-white">
            The question is no longer simply, "Can AI make a film?"
          </P>

          <P className="text-2xl font-semibold leading-9 text-white">
            The more interesting question is:
          </P>

          <P className="text-3xl font-bold leading-tight text-white md:text-4xl">
            "What can African filmmakers create with AI that the world has
            never seen before?"
          </P>

          <P>
            The festival era of AI cinema may only be beginning.
          </P>

          <P>
            Africa should be part of defining what comes next.
          </P>

          {/* Sources */}
          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-white/40">
              SOURCES & FURTHER READING
            </div>

            <div className="mt-6 space-y-4">
              <a
                href="https://www.naijaaifilmfest.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <span>
                  Naija AI Film Festival — Official Website
                </span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="https://www.naijaaifilmfest.com/ai_frica"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <span>
                  NAIFF 2026 — AI_FRICA Programme
                </span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="https://www.instagram.com/reel/DLmVU2cMhpH/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                <span>
                  Godzilla in Lagos — Official AI Trailer
                </span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm leading-6 text-white/40">
              DFRENZY AI DAILY — AI • Cinema • Creativity • The Future of
              Filmmaking
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>

            <Link
              to="/ai-filmmaker"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              Explore Daniel Ebhowe
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
