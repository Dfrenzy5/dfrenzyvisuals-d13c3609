import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Quote } from "lucide-react";
import { SITE_URL } from "@/lib/site";

const PATH = "/journal/i-need-a-very-good-ai-filmmaker";
const URL = `${SITE_URL}${PATH}`;

const TITLE =
  "I Need a Very Good AI Filmmaker: How to Find the Right One | DFRENZY VISUALS";

const DESCRIPTION =
  "Need a very good AI filmmaker? Learn how to evaluate AI filmmakers for movies, commercials, brand films and cinematic AI video, and what separates prompting from professional filmmaking.";

const PUBLISHED = "2026-09-22";
const UPDATED = "2026-09-22";

export const Route = createFileRoute("/journal/i-need-a-very-good-ai-filmmaker")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AI filmmaker, AI filmmaker for hire, hire an AI filmmaker, good AI filmmaker, AI filmmaking studio, AI filmmaker Nigeria, AI video production, cinematic AI filmmaker, AI film production",
      },
      {
        property: "og:title",
        content: "I Need a Very Good AI Filmmaker — Here's How to Find the Right One",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "I Need a Very Good AI Filmmaker — Here's How to Find the Right One",
      },
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
  return <p className="text-lg leading-8 text-white/75">{children}</p>;
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
      "AI filmmaker, AI filmmaking, AI video production, cinematic AI filmmaker, AI film production",
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
            SEPTEMBER 22, 2026
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          I Need a Very Good AI Filmmaker: How Do I Find the Right One?
        </h1>

        <p className="mt-7 max-w-3xl text-xl leading-8 text-white/55">
          If you need an AI filmmaker, the real question is not which AI tool
          they use. It is whether they can turn an idea into a controlled,
          coherent and emotionally effective film.
        </p>

        <div className="mt-8 border-y border-white/10 py-5 text-sm text-white/45">
          By{" "}
          <span className="font-medium text-white/75">
            Daniel Ebhowe
          </span>{" "}
          — AI Filmmaker & Creative Director, DFRENZY VISUALS
          <br />
          September 22, 2026
        </div>

        <div className="mt-12 space-y-8">
          <P>
            "I need a very good AI filmmaker."
          </P>

          <P>
            It sounds like a simple search. But behind that sentence is a much
            bigger question: who can actually take a story, brief, product,
            campaign or film idea and turn it into something that feels
            intentional rather than randomly generated?
          </P>

          <P>
            AI has made image and video generation dramatically more accessible.
            That does not mean every person who can generate an impressive
            clip is an AI filmmaker.
          </P>

          <Callout>
            A good AI filmmaker is not simply someone who knows how to prompt an
            AI model. They understand filmmaking, visual storytelling,
            continuity, direction, editing and how to control a production from
            idea to final delivery.
          </Callout>

          <H2>What Is an AI Filmmaker?</H2>

          <P>
            An AI filmmaker uses generative AI as part of a filmmaking
            production workflow. Depending on the project, that can include
            story development, visual development, character design,
            storyboarding, image generation, image-to-video, text-to-video,
            voice, music, sound design, editing and finishing.
          </P>

          <P>
            The important distinction is that the filmmaker remains responsible
            for the creative decisions. The AI models are production tools; they
            do not replace the need for direction.
          </P>

          <H2>AI Video Generator vs. AI Filmmaker</H2>

          <P>
            This is one of the first distinctions to make when choosing someone
            for a project.
          </P>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <div className="text-sm font-semibold tracking-[0.15em] text-white/40">
                AI VIDEO GENERATOR
              </div>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Focuses primarily on producing individual images or clips from
                prompts and references.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <div className="text-sm font-semibold tracking-[0.15em] text-white/40">
                AI FILMMAKER
              </div>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Uses AI generation inside a broader filmmaking process built
                around story, direction, continuity, cinematography, editing
                and delivery.
              </p>
            </div>
          </div>

          <P>
            A generator can give you a beautiful shot. A filmmaker has to know
            what that shot is doing in the story.
          </P>

          <H2>What Should a Professional AI Filmmaker Actually Do?</H2>

          <P>
            Before hiring anyone, look beyond the final clips and ask what
            happened between the brief and the finished film.
          </P>

          <ul className="space-y-3 pl-6 text-lg leading-8 text-white/75">
            <li>• Understand the story or business objective.</li>
            <li>• Develop a visual direction appropriate to the project.</li>
            <li>• Design characters and environments consistently.</li>
            <li>• Break the story into deliberate shots and sequences.</li>
            <li>• Control references, wardrobe, lighting and continuity.</li>
            <li>• Generate and review visual assets before animation.</li>
            <li>• Edit the generated material into a coherent sequence.</li>
            <li>• Integrate voice, music and sound design where required.</li>
            <li>• Manage revisions and final delivery.</li>
          </ul>

          <H2>1. Start With Story, Not the AI Tool</H2>

          <P>
            A common mistake is to start by asking, "Which AI tool should we
            use?" before defining what the film needs to accomplish.
          </P>

          <P>
            A professional workflow starts with the story, audience, objective,
            tone, format, runtime and distribution requirements. The tools are
            selected around those requirements.
          </P>

          <Callout>
            The model should serve the creative brief. The creative brief should
            not be rewritten around whichever model happens to be trending.
          </Callout>

          <H2>2. Look for Character and Visual Consistency</H2>

          <P>
            One impressive frame is not enough. If your project contains a
            recurring character, the filmmaker should be able to maintain that
            character across shots, scenes, wardrobe changes and emotional
            moments.
          </P>

          <P>
            Ask to see sequences rather than isolated images. Look for whether
            the same character remains recognisable and whether the visual
            language remains coherent from shot to shot.
          </P>

          <P>
            This is one reason professional AI filmmaking is a production
            discipline rather than a collection of prompts.
          </P>

          <H2>3. Evaluate Cinematography, Not Just Image Quality</H2>

          <P>
            A technically impressive image can still be a weak cinematic shot.
            Look at composition, lens language, camera movement, lighting,
            blocking, depth, screen direction and how each shot relates to the
            next.
          </P>

          <P>
            The question is not simply, "Does this image look expensive?"
            It is, "Does this shot communicate what the scene needs?"
          </P>

          <H2>4. Ask to See a Complete Project</H2>

          <P>
            If you are hiring an AI filmmaker for a commercial, trailer, music
            video or film, ask to see a complete piece whenever possible.
          </P>

          <P>
            A reel can demonstrate visual ability. A complete project reveals
            much more: pacing, storytelling, continuity, sound, transitions,
            restraint and the ability to finish.
          </P>

          <H2>5. Ask How They Handle Revisions</H2>

          <P>
            AI filmmaking involves iteration. A character may drift. A shot may
            not match the previous frame. A performance may feel wrong. A
            client may change a line or request a different visual direction.
          </P>

          <P>
            A professional workflow should therefore have a clear revision
            process instead of relying on endless random generations.
          </P>

          <H2>6. Ask About Deliverables Before Production Starts</H2>

          <P>
            Clarify what you are receiving at the end of the project. Depending
            on the brief, that may include a master film, social cutdowns,
            trailers, subtitles, thumbnails, still images or other campaign
            assets.
          </P>

          <P>
            Also clarify the intended platforms, aspect ratios, resolution,
            delivery format, revision rounds, schedule and any licensing or
            usage requirements that matter to your project.
          </P>

          <H2>7. Ask the Ten Questions That Actually Matter</H2>

          <div className="space-y-4">
            {[
              "Can I see a complete AI film you have produced?",
              "How do you maintain character consistency?",
              "How do you plan shots before generating video?",
              "How do you approach cinematography and visual direction?",
              "Which parts of the production do you handle yourself?",
              "How do you handle revisions and continuity problems?",
              "What are the expected deliverables?",
              "What is the production timeline?",
              "How many revision rounds are included?",
              "What rights, usage terms and project files are included in the agreement?",
            ].map((question, index) => (
              <div
                key={question}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-white/35">
                  QUESTION {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mt-2 text-lg leading-7 text-white/80">
                  {question}
                </div>
              </div>
            ))}
          </div>

          <H2>How Much Does an AI Filmmaker Cost?</H2>

          <P>
            There is no single universal price for AI filmmaking. A short social
            clip, a product commercial, a cinematic trailer and a narrative
            short can require completely different levels of planning,
            generation, iteration, editing and finishing.
          </P>

          <P>
            The useful way to compare proposals is to compare scope rather than
            simply comparing the headline price. Ask what is included, how many
            shots are planned, how much iteration is expected, what post-
            production is included and what you will receive at delivery.
          </P>

          <H2>What About Hiring an AI Filmmaker in Nigeria?</H2>

          <P>
            For Nigerian brands, filmmakers and businesses, AI filmmaking can
            be particularly useful when a concept requires visuals that would be
            expensive, difficult or impractical to produce conventionally.
          </P>

          <P>
            The right filmmaker can combine local cultural context with
            contemporary AI production techniques, whether the brief involves
            an African story, a commercial, a product campaign, a music visual,
            a trailer or an experimental film.
          </P>

          <P>
            Location is only one part of the decision, however. For remote
            projects, what matters is whether the filmmaker can understand the
            brief, communicate clearly, manage production and deliver the
            agreed result.
          </P>

          <H2>Film of the Day: KINDRED</H2>

          <P>
            Today's Film of the Day is <strong>KINDRED</strong> by Auxella
            Films. It is a useful example of why AI filmmaking should be
            evaluated as cinema rather than simply as a collection of generated
            clips.
          </P>

          <P>
            What makes the project interesting is the combination of African
            cultural identity, mythology, visual world-building and the
            possibilities of AI-assisted production. It demonstrates the
            broader direction of the medium: AI can become a vehicle for stories
            that are culturally specific while still being visually ambitious.
          </P>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YV9sFubdx_o"
                title="KINDRED – Auxella Films | Short Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <P>
            Watch the complete film, then ask yourself a useful question: do the
            visuals work together as a film, or are they simply a sequence of
            impressive AI shots? That distinction is at the heart of evaluating
            an AI filmmaker.
          </P>

          <H2>What DFRENZY VISUALS Means by AI Filmmaking</H2>

          <P>
            At DFRENZY VISUALS, the goal is not simply to generate images or
            clips. The goal is to build cinematic work through a controlled
            production pipeline.
          </P>

          <div className="grid gap-4">
            {[
              ["01", "Story", "Define the narrative, audience and emotional objective."],
              ["02", "Visual Development", "Establish characters, environments and visual language."],
              ["03", "Shot Design", "Break the project into deliberate cinematic shots."],
              ["04", "Generation", "Create and refine the visual assets required for the sequence."],
              ["05", "Continuity", "Check character, wardrobe, environment and visual consistency."],
              ["06", "Animation", "Turn approved frames and concepts into controlled moving shots."],
              ["07", "Edit & Sound", "Shape pacing, dialogue, music, effects and final storytelling."],
              ["08", "Delivery", "Prepare the finished work for its intended platform and audience."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 md:flex md:items-start md:gap-5"
              >
                <div className="text-sm font-bold tracking-[0.15em] text-white/30">
                  {number}
                </div>

                <div className="mt-2 md:mt-0">
                  <div className="font-semibold text-white">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-white/50">
                    {description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <H2>The Bigger Lesson</H2>

          <P>
            The phrase "AI filmmaker" is becoming more common because the
            technology is changing what a small creative team can produce. But
            the title should still mean more than familiarity with a generation
            interface.
          </P>

          <P>
            A filmmaker has to make decisions. Which story deserves to be told?
            What should the audience see? What should remain off-screen? How
            should the character move? When should the camera cut? What should
            the sound communicate? What needs to be regenerated, and what can be
            solved in the edit?
          </P>

          <Callout>
            If you need a very good AI filmmaker, look for someone who can make
            AI serve the film — not someone who simply makes AI look impressive.
          </Callout>

          <H2>Need an AI Filmmaker for Your Project?</H2>

          <P>
            If you are developing a film, trailer, commercial, branded story,
            music visual or other cinematic project, the first step is to define
            what you want the audience to experience.
          </P>

          <P>
            DFRENZY VISUALS works at the intersection of AI generation and
            cinematic production, building visual stories from concept through
            final delivery.
          </P>

          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-white/40">
              EXPLORE DFRENZY VISUALS
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                to="/ai-filmmaker"
                className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    Meet the AI Filmmaker
                  </span>

                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                </div>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Explore Daniel Ebhowe's AI filmmaking work and production
                  approach.
                </p>
              </Link>

              <Link
                to="/portfolio"
                className="group rounded-2xl border border-white/10 p-5 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    Explore the Portfolio
                  </span>

                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                </div>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  See cinematic AI films, commercials, trailers and branded
                  visual work.
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-white/40">
              FEATURED FILM
            </div>

            <a
              href="https://youtu.be/YV9sFubdx_o"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              <span>KINDRED – Auxella Films | Short Film</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <p className="text-sm leading-6 text-white/40">
              DFRENZY AI DAILY — AI • Cinema • Creativity • The Future of
              Filmmaking
            </p>
          </div>

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
