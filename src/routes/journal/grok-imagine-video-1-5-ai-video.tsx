import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Quote } from "lucide-react";
import { SITE_URL } from "@/lib/site";
import featuredImage from "@/assets/journal-grok-imagine-video-1-5.jpg";

const PATH = "/journal/grok-imagine-video-1-5-ai-video";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "Grok Imagine Video 1.5: Is AI Video Finally Getting Easier?";
const DESCRIPTION =
  "Grok Imagine Video 1.5 brings text-to-video, image-to-video, references, editing and audio to AI filmmaking. Here's what creators should know.";
const PUBLISHED = "2026-09-08";
const UPDATED = "2026-09-08";

export const Route = createFileRoute("/journal/grok-imagine-video-1-5-ai-video")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:modified_time", content: UPDATED },
      { name: "author", content: "DFRENZY VISUALS" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ArticlePage,
});

function H2({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2
      id={id}
      className="mt-14 font-display text-2xl font-bold tracking-[0.06em] text-foreground md:text-3xl"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 text-[15px] leading-[1.85] text-muted-foreground md:text-base">{children}</p>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 flex gap-4 rounded-xl border border-neon/25 glass-panel p-6 md:p-7">
      <Quote className="mt-1 h-5 w-5 shrink-0 text-neon-bright" />
      <p className="font-display text-base leading-relaxed tracking-[0.02em] text-foreground md:text-lg">
        {children}
      </p>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-bright" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    author: { "@type": "Organization", name: "DFRENZY VISUALS", url: SITE_URL },
    publisher: { "@type": "Organization", name: "DFRENZY VISUALS", url: SITE_URL },
    keywords: "Grok Imagine Video 1.5, AI video, AI filmmaking",
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link
        to="/journal"
        className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground transition-colors hover:text-neon-bright"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> BACK TO THE JOURNAL
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-[10px] tracking-[0.3em] text-muted-foreground">
        <span className="rounded-full border border-neon/40 bg-background/60 px-3 py-1 text-neon-bright">
          AI TOOLS
        </span>
        <span className="inline-flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-neon-bright" />
          <time dateTime={PUBLISHED}>SEPTEMBER 8, 2026</time>
        </span>
        <span>BY DFRENZY VISUALS</span>
      </div>

      <h1 className="mt-5 font-display text-3xl font-black leading-tight tracking-[0.04em] text-foreground sm:text-5xl">
        Grok Imagine Video 1.5: Is AI Video Finally Getting Easier?
      </h1>

      <figure className="mt-8 overflow-hidden rounded-2xl border border-neon/20">
        <img
          src={featuredImage}
          alt="Grok Imagine Video 1.5 — Is AI filmmaking getting easier? Cinematic DFRENZY VISUALS editorial artwork."
          width={1600}
          height={912}
          decoding="async"
          className="w-full"
        />
      </figure>

      <P>AI video is moving very fast. And Grok Imagine Video 1.5 is one of the tools making things interesting.</P>
      <P>If you've ever tried creating an AI video, you probably know the experience.</P>
      <P>
        You generate one beautiful shot. Then you generate the next one. And suddenly your character looks different.
        The movement feels strange. The physics are questionable. And sometimes the character appears to be having a
        completely different conversation from the one you wrote.
      </P>
      <P>
        So, when a new AI video model promises better motion, better sound and a smoother creative workflow, the obvious
        question is: is it actually useful for filmmakers — or is it just another impressive AI demo?
      </P>
      <P>Let's break it down.</P>

      <H2 id="what-is-it">What is Grok Imagine Video 1.5?</H2>
      <P>Grok Imagine Video 1.5 is xAI's video-generation model.</P>
      <P>
        It can create videos from text prompts and images, and xAI says the model was designed to improve areas that
        matter when you're trying to create believable video — not just pretty pictures.
      </P>
      <P>
        According to xAI, the model improves motion, physics, audio and speech, while the faster version can generate
        6-second 720p videos in around 25 seconds.
      </P>
      <P>
        That last part matters more than it might sound. When you're making a film, you don't generate one clip. You
        generate many. So speed can make a real difference to the creative process.
      </P>

      <H2 id="for-filmmakers">The part filmmakers should pay attention to</H2>
      <P>Here's where things get interesting.</P>
      <P>AI video has traditionally been very good at creating a moment.</P>
      <Callout>
        But filmmaking isn't about one moment. It's about what happens before and after that moment.
      </Callout>
      <P>
        A character walks into a room. They sit down. Someone enters. They turn around. The camera moves. The story
        continues.
      </P>
      <P>That means filmmakers need more than visual quality. They need control.</P>
      <P>
        Grok's current video capabilities include text-to-video, image-to-video, reference-to-video, video editing and
        video extension. That gives creators several different ways to build a shot instead of starting from scratch
        every time.
      </P>

      <H2 id="image-to-video">You can start with an image</H2>
      <P>Imagine you've already created the perfect character image.</P>
      <P>You don't necessarily want the AI to redesign that character. You want the character to move.</P>
      <P>That's where image-to-video becomes useful. You provide the image and describe what should happen.</P>
      <P>For example:</P>
      <Callout>
        "A young Nigerian woman standing beside a rain-covered window at night, slowly turning toward the camera as city
        lights reflect across the glass, subtle breathing, realistic movement, cinematic camera push-in."
      </Callout>
      <P>
        Instead of asking the AI to invent everything from nothing, you're giving it a visual starting point. That can
        make the workflow much more controllable.
      </P>

      <H2 id="references">And then there are references</H2>
      <P>
        xAI's documentation also supports reference-to-video, where reference images can guide the generated video.
      </P>
      <P>For filmmakers, this is a big idea. Think about a character in a movie. You might have:</P>
      <Bullets items={["Character reference", "Costume reference", "Location reference", "Objects", "Voice"]} />
      <P>Then you describe the scene you want. The goal is not simply: "Make me a cool video." It's closer to:</P>
      <Callout>"Use these visual ingredients and turn them into this scene."</Callout>
      <P>That is much closer to an actual filmmaking workflow.</P>

      <H2 id="sound">What about sound?</H2>
      <P>
        This is another area where Grok Imagine Video 1.5 is trying to move beyond silent visual clips. xAI says the
        model can generate sound effects, ambience and dialogue in the same generation, with clearer speech and improved
        synchronization with the action.
      </P>
      <P>That means you can think about the scene as more than just IMAGE → MOTION. It becomes IMAGE → MOTION + SOUND.</P>
      <P>For example: a woman walks through a quiet compound at night. You don't just want her walking. You want:</P>
      <Bullets
        items={[
          "footsteps",
          "night ambience",
          "leaves moving",
          "distant sounds",
          "dialogue",
          "movement that matches the scene",
        ]}
      />
      <P>Those small details are what can make an AI clip feel more like a scene from a film.</P>

      <H2 id="reality-check">But here's the reality check</H2>
      <P>Let's not get carried away. Grok Imagine Video 1.5 doesn't magically solve AI filmmaking. You can still get:</P>
      <Bullets
        items={[
          "strange hands",
          "inconsistent objects",
          "unwanted movements",
          "awkward facial expressions",
          "physics mistakes",
          "continuity problems",
          "scenes that don't follow your prompt exactly",
        ]}
      />
      <P>And a powerful video model doesn't replace filmmaking judgment. You still need:</P>
      <Bullets
        items={[
          "Story",
          "Character design",
          "Shot planning",
          "Composition",
          "Lighting",
          "Camera direction",
          "Editing",
          "Sound design",
          "Continuity",
        ]}
      />
      <P>
        That's why the person behind the AI still matters — something we write about on our{" "}
        <Link to="/ai-filmmaker" className="text-neon-bright underline underline-offset-4 hover:text-foreground">
          AI filmmaker page
        </Link>
        .
      </P>

      <H2 id="worth-trying">So, is Grok Imagine Video 1.5 worth trying?</H2>
      <P>Yes — especially if you're already experimenting with AI filmmaking.</P>
      <P>
        The most interesting thing isn't simply that it can generate attractive clips. It's the direction of the
        workflow: text-to-video, image-to-video, reference-to-video, video extension, video editing, audio and
        higher-resolution output.
      </P>
      <P>These capabilities are gradually pushing AI video away from "Generate me something cool" and toward:</P>
      <Callout>"Help me produce this specific scene."</Callout>
      <P>That's a much more important shift.</P>

      <H2 id="verdict">The DFRENZY verdict</H2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          {
            k: "For casual creators",
            v: "Worth experimenting with. It's a fun way to turn ideas and images into moving scenes.",
          },
          {
            k: "For content creators",
            v: "Very interesting. The combination of image references, video generation and audio can fit nicely into a repeatable content workflow.",
          },
          {
            k: "For AI filmmakers",
            v: "Pay attention. The reference and editing capabilities are particularly interesting because filmmaking requires control and continuity — not just individual impressive shots.",
          },
          {
            k: "For professional production",
            v: "Don't throw away your entire workflow yet. Test it. Compare it. Build small scenes. See where it performs well. Then decide where it belongs in your production pipeline.",
          },
        ].map((c) => (
          <div key={c.k} className="rounded-xl border border-neon/20 glass-panel p-6">
            <div className="font-display text-[10px] tracking-[0.3em] text-neon-bright">{c.k.toUpperCase()}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
          </div>
        ))}
      </div>

      <H2 id="in-practice">See AI filmmaking in practice</H2>
      <P>
        AI filmmaking isn't only about generating a few seconds of video. With the right workflow, AI can be used to
        build characters, scenes, atmosphere and complete stories.
      </P>
      <P>Watch one of our cinematic AI short films: "The Man They Should Have Feared".</P>
      <div className="mt-6 overflow-hidden rounded-2xl border border-neon/20">
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src="https://www.youtube.com/embed/brzlfy2HSIc"
            title="The Man They Should Have Feared — DFRENZY VISUALS AI short film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Note: this film was not created with Grok Imagine Video 1.5. It is included as an example of DFRENZY VISUALS'
        broader AI filmmaking work. See more in our{" "}
        <Link to="/portfolio" className="text-neon-bright underline underline-offset-4 hover:text-foreground">
          portfolio
        </Link>
        .
      </p>

      <H2 id="bigger-story">The bigger story</H2>
      <P>
        The most exciting thing about AI video isn't that computers can now make beautiful clips. We've already seen
        that. The bigger question is: how much of an entire filmmaking workflow can AI eventually help us control?
      </P>
      <P>
        We're moving from generating individual clips toward building scenes, characters, sound and longer creative
        sequences. And that is where things get really interesting.
      </P>
      <P>
        Because once AI stops being just a clip generator and starts becoming part of the production process, the
        possibilities become much bigger.
      </P>

      <H2 id="cta">Want to experiment with AI filmmaking?</H2>
      <P>
        At DFRENZY VISUALS, we're exploring exactly that — using AI to create cinematic stories, visual campaigns and
        new forms of digital filmmaking.
      </P>
      <P>If you're learning AI video creation, you can also start with our free AI Content Creator Blueprint.</P>
      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-neon/20 glass-panel p-8">
        <Link
          to="/blueprint"
          className="inline-flex items-center gap-2 rounded-full border border-neon bg-neon/10 px-6 py-3 font-display text-xs font-semibold tracking-[0.3em] text-neon-bright transition-all hover:neon-glow"
        >
          GET THE FREE AI CONTENT CREATOR BLUEPRINT <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <H2 id="sources">Sources</H2>
      <ul className="mt-5 space-y-3">
        {[
          { label: "xAI — Grok Imagine Video 1.5", href: "https://x.ai/news/grok-imagine-video-1-5" },
          {
            label: "xAI Documentation — Video Generation",
            href: "https://docs.x.ai/developers/model-capabilities/video/generation",
          },
          {
            label: "xAI Documentation — Grok Imagine Video 1.5",
            href: "https://docs.x.ai/developers/models/grok-imagine-video-1.5",
          },
        ].map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neon-bright underline underline-offset-4 hover:text-foreground"
            >
              {s.label} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-neon/15 pt-8">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground transition-colors hover:text-neon-bright"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> MORE FROM THE JOURNAL
        </Link>
      </div>
    </article>
  );
}
