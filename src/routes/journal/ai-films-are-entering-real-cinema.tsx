import { createFileRoute } from "@tanstack/react-router";

const PATH = "/journal/ai-films-are-entering-real-cinema";
const SITE_URL = "https://dfrenzyvisuals.com";
const URL = `${SITE_URL}${PATH}`;

const TITLE =
  "DFRENZY AI DAILY — AI Films Aren't Just Experiments Anymore";

const DESCRIPTION =
  "AI filmmaking is moving beyond experiments. Daniel Ebhowe of DFRENZY VISUALS looks at Robert Gaudette's award-winning AI short A Face Only A Mother Could Love and what it means for the future of cinematic AI filmmaking.";

export const Route = createFileRoute(
  "/journal/ai-films-are-entering-real-cinema",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
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

  component: Article,
});

function Article() {
  const publishedDate = "2026-09-14";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    datePublished: publishedDate,
    dateModified: publishedDate,
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
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-8 text-sm tracking-[0.2em] text-white/50">
          DFRENZY AI DAILY
        </div>

        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          AI Films Aren't Just Experiments Anymore — They're Starting to Enter
          Real Cinema
        </h1>

        <p className="mt-6 text-lg text-white/60">
          AI • Cinema • Creativity • The Future of Filmmaking
        </p>

        <div className="mt-8 border-y border-white/10 py-4 text-sm text-white/50">
          By Daniel Ebhowe — AI Filmmaker & Creative Director, DFRENZY VISUALS
          <br />
          September 14, 2026
        </div>

        <div className="mt-12 space-y-8 text-lg leading-8 text-white/80">
          <p>
            AI filmmaking is changing quickly. What once looked like a
            technological experiment is increasingly being treated as a
            legitimate form of cinematic storytelling.
          </p>

          <p>
            A good example is Robert Gaudette's short film{" "}
            <strong>A Face Only A Mother Could Love</strong>, which won first
            place at the 2026 Reply AI Film Festival.
          </p>

          <p>
            The result is significant because it points to a bigger shift:
            audiences and creative industries are beginning to judge
            AI-generated films not simply by the technology used to create
            them, but by the quality of the storytelling, direction, visual
            language and emotional impact.
          </p>

          <h2 className="pt-8 text-3xl font-bold">Movie of the Day</h2>

          <p>
            <strong>A Face Only A Mother Could Love</strong> — Robert Gaudette.
          </p>

          <p>
            The film is a useful reminder that AI filmmaking is not about
            pressing a button and accepting whatever the model produces. The
            strongest work still requires filmmaking decisions: composition,
            performance, pacing, cinematography, editing, sound and
            storytelling.
          </p>

          <h2 className="pt-8 text-3xl font-bold">DFRENZY'S TAKE</h2>

          <p>
            At DFRENZY VISUALS, I see AI as a new filmmaking medium rather than
            a replacement for filmmaking itself.
          </p>

          <p>
            The technology can generate extraordinary images and moving
            sequences, but cinematic quality comes from knowing what to create,
            why to create it and how every shot contributes to the story.
          </p>

          <p>
            That is where the role of the AI filmmaker becomes increasingly
            important: combining traditional cinematic thinking with emerging
            generative tools to create films, commercials and visual stories
            that feel intentional and emotionally engaging.
          </p>

          <p>
            The future of AI filmmaking will not belong simply to the person
            who knows the newest model. It will belong to the filmmaker who
            knows how to use these tools to tell better stories.
          </p>

          <h2 className="pt-8 text-3xl font-bold">The Bigger Picture</h2>

          <p>
            As AI-generated films continue appearing in festivals, advertising,
            music videos and online cinema, the conversation is gradually
            moving from "Can AI make a film?" to a much more interesting
            question:
          </p>

          <p className="text-2xl font-semibold text-white">
            "What can a great filmmaker do with AI?"
          </p>

          <p>
            That is the question I believe the next generation of AI
            filmmaking will answer.
          </p>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-base text-white/50">
              DFRENZY AI DAILY — AI • Cinema • Creativity • The Future of
              Filmmaking
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
