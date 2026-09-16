import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

const VIDEO_ID = "pcGK_lApTTs";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const Route = createFileRoute("/films/edo-state-at-35")({
  head: () => ({
    meta: [
      {
        title:
          "Edo State at 35: The Journey, The Legacy & The Future | Daniel Ebhowe",
      },
      {
        name: "description",
        content:
          "Edo State at 35: The Journey, The Legacy & The Future is a cinematic AI film by Daniel Ebhowe and DFRENZY VISUALS exploring Edo State's history, heritage, development and future from 1991 to 2026.",
      },
      {
        name: "keywords",
        content:
          "Edo State at 35, Edo State 35th anniversary, Daniel Ebhowe, Nigerian AI filmmaker, AI filmmaker Nigeria, AI filmmaking Nigeria, DFRENZY VISUALS, Edo State film, cinematic AI film, Nigerian filmmaker",
      },
      {
        property: "og:title",
        content:
          "Edo State at 35: The Journey, The Legacy & The Future | Daniel Ebhowe",
      },
      {
        property: "og:description",
        content:
          "A cinematic AI film by Daniel Ebhowe and DFRENZY VISUALS celebrating Edo State's journey, heritage and future from 1991 to 2026.",
      },
      {
        property: "og:type",
        content: "video.other",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/films/edo-state-at-35`,
      },
      {
        property: "og:image",
        content: THUMBNAIL_URL,
      },
      {
        property: "og:image:alt",
        content:
          "Edo State at 35 cinematic AI film by Daniel Ebhowe and DFRENZY VISUALS",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Edo State at 35: The Journey, The Legacy & The Future | Daniel Ebhowe",
      },
      {
        name: "twitter:description",
        content:
          "A cinematic AI film by Daniel Ebhowe and DFRENZY VISUALS.",
      },
      {
        name: "twitter:image",
        content: THUMBNAIL_URL,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `${SITE_URL}/films/edo-state-at-35`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "@id": `${SITE_URL}/films/edo-state-at-35#video`,
          name: "Edo State at 35: The Journey, The Legacy & The Future",
          description:
            "Edo State at 35: The Journey, The Legacy & The Future is a cinematic AI film by Daniel Ebhowe and DFRENZY VISUALS exploring Edo State's history, heritage, development and future from 1991 to 2026.",
          thumbnailUrl: [THUMBNAIL_URL],
          uploadDate: "2026-09-15T00:00:00+01:00",
          duration: "PT1M55S",
          embedUrl: EMBED_URL,
          publisher: {
            "@type": "Organization",
            name: "DFRENZY VISUALS",
            url: `${SITE_URL}/`,
          },
          creator: {
            "@type": "Person",
            name: "Daniel Ebhowe",
            jobTitle: "AI Filmmaker and Creative Director",
            url: `${SITE_URL}/ai-filmmaker`,
          },
          director: {
            "@type": "Person",
            name: "Daniel Ebhowe",
            jobTitle: "AI Filmmaker and Creative Director",
            url: `${SITE_URL}/ai-filmmaker`,
          },
          inLanguage: "en",
          isFamilyFriendly: true,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${SITE_URL}/films/edo-state-at-35#article`,
          headline:
            "Edo State at 35: The Journey, The Legacy & The Future",
          description:
            "A cinematic AI film exploring Edo State's journey, heritage, development and future from 1991 to 2026.",
          image: [THUMBNAIL_URL],
          datePublished: "2026-09-15",
          author: {
            "@type": "Person",
            name: "Daniel Ebhowe",
            url: `${SITE_URL}/ai-filmmaker`,
          },
          publisher: {
            "@type": "Organization",
            name: "DFRENZY VISUALS",
            url: `${SITE_URL}/`,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/films/edo-state-at-35`,
          },
        }),
      },
    ],
  }),

  component: EdoStateAt35,
});

function EdoStateAt35() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(5,7,13,0.98)), url('${THUMBNAIL_URL}')`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_55%)]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
          <p className="mb-5 font-display text-xs font-semibold tracking-[0.4em] text-[#00E5FF]">
            DFRENZY VISUALS PRESENTS
          </p>

          <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Edo State at 35:
            <span className="block text-[#00E5FF]">
              The Journey, The Legacy & The Future
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            A cinematic AI film exploring Edo State's journey, heritage,
            development and future from 1991 to 2026.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold tracking-[0.2em]">
            <span className="border border-[#00E5FF]/40 bg-black/40 px-4 py-2 text-[#00E5FF]">
              1991–2026
            </span>
            <span className="border border-white/15 bg-black/40 px-4 py-2 text-white/75">
              CINEMATIC AI FILM
            </span>
            <span className="border border-white/15 bg-black/40 px-4 py-2 text-white/75">
              NIGERIA
            </span>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <div className="mb-8">
          <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
            WATCH THE FILM
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Edo State at 35
          </h2>
        </div>

        <div className="relative aspect-video overflow-hidden border border-[#00E5FF]/20 bg-black shadow-[0_0_60px_rgba(0,229,255,0.08)]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={EMBED_URL}
            title="Edo State at 35: The Journey, The Legacy & The Future"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="mt-5">
          <a
            href={VIDEO_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-[0.15em] text-[#00E5FF] transition hover:text-white"
          >
            WATCH ON YOUTUBE →
          </a>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="border-y border-white/10 bg-[#080c15]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <Detail label="PROJECT" value="Edo State at 35" />
          <Detail label="DIRECTOR" value="Daniel Ebhowe" />
          <Detail label="STUDIO" value="DFRENZY VISUALS" />
          <Detail label="FORMAT" value="Cinematic AI Film" />
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
          THE PROJECT
        </p>

        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Reimagining Edo State's History Through Generative AI Filmmaking
        </h2>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70 sm:text-lg">
          <p>
            <strong className="text-white">
              Edo State at 35: The Journey, The Legacy & The Future
            </strong>{" "}
            is a cinematic AI film created by{" "}
            <strong className="text-white">Daniel Ebhowe</strong>, Nigerian AI
            filmmaker and Creative Director of{" "}
            <strong className="text-white">DFRENZY VISUALS</strong>.
          </p>

          <p>
            Created to commemorate 35 years of Edo State, the film takes
            audiences on a visual journey through the state's history, cultural
            heritage, development and aspirations for the future, spanning
            1991 to 2026.
          </p>

          <p>
            The project explores how artificial intelligence can be integrated
            into cinematic storytelling to create ambitious historical and
            cultural narratives from Nigeria.
          </p>
        </div>
      </section>

      {/* CREATIVE CHALLENGE */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <SectionNumber number="01" title="The Creative Challenge">
          <p>
            Telling a 35-year story requires more than presenting dates and
            historical facts. The challenge was to create a visual experience
            capable of connecting Edo State's past, present and future within a
            concise cinematic narrative.
          </p>

          <p>
            DFRENZY VISUALS approached the project as a visual storytelling
            exercise: transforming historical themes, cultural identity,
            landscapes, development and future aspirations into a cohesive
            cinematic world.
          </p>
        </SectionNumber>
      </section>

      {/* AI PIPELINE */}
      <section className="border-y border-white/10 bg-[#080c15]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
            PRODUCTION TECHNOLOGY
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
            The Generative AI Production Pipeline
          </h2>

          <p className="mt-7 max-w-4xl text-base leading-8 text-white/70 sm:text-lg">
            The production combined creative direction, image generation,
            generative video, enhancement and professional post-production.
            Multiple AI tools were used as part of a controlled filmmaking
            workflow rather than treating generative AI as a single-button
            solution.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Pipeline
              number="01"
              title="Concept & World-Building"
              tools="Midjourney"
              text="Development of cinematic visual concepts, environments, characters and historical-inspired imagery."
            />

            <Pipeline
              number="02"
              title="AI Video Generation"
              tools="Seedance 2.5 · Kling AI · Runway"
              text="Transforming selected visual concepts into moving cinematic sequences with controlled motion and camera language."
            />

            <Pipeline
              number="03"
              title="Enhancement & Upscaling"
              tools="Topaz Video AI"
              text="Enhancement and refinement of generated video assets for a cleaner final presentation."
            />

            <Pipeline
              number="04"
              title="Editing & Assembly"
              tools="DaVinci Resolve Studio"
              text="Editorial assembly, pacing, transitions and visual continuity across the final film."
            />

            <Pipeline
              number="05"
              title="Colour & Finishing"
              tools="DaVinci Resolve Studio"
              text="Colour treatment and finishing designed to bring diverse generated assets into a coherent cinematic presentation."
            />

            <Pipeline
              number="06"
              title="Creative Direction"
              tools="Daniel Ebhowe · DFRENZY VISUALS"
              text="Human-led direction, storytelling decisions, visual selection and overall creative supervision."
            />
          </div>
        </div>
      </section>

      {/* CULTURAL AUTHENTICITY */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <SectionNumber number="03" title="Preserving Cultural Authenticity">
          <p>
            AI-generated imagery can easily produce generic interpretations of
            African environments and culture. This project therefore placed
            emphasis on Nigerian visual identity and the specific cultural
            character associated with Edo State.
          </p>

          <p>
            The visual language draws from Edo's historical heritage, the
            legacy of the Benin Kingdom, contemporary urban development,
            infrastructure, agriculture, community life and the state's
            aspirations for the future.
          </p>

          <p>
            The goal was not simply to generate attractive images, but to use
            AI as a cinematic tool for telling a distinctly Nigerian story.
          </p>
        </SectionNumber>
      </section>

      {/* POST PRODUCTION */}
      <section className="border-y border-white/10 bg-[#080c15]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
          <SectionNumber number="04" title="Post-Production & Final Impact">
            <p>
              The final assembly brought together the generated sequences,
              editorial pacing, visual transitions, colour treatment, sound
              and cinematic finishing into one cohesive film.
            </p>

            <p>
              The result demonstrates how an AI-native production pipeline can
              expand the visual possibilities available to filmmakers working
              with historical, cultural and branded narratives.
            </p>
          </SectionNumber>
        </div>
      </section>

      {/* FILMMAKER */}
      <section className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
          THE FILMMAKER
        </p>

        <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
          Daniel Ebhowe
        </h2>

        <p className="mt-2 text-lg text-[#00E5FF]">
          Nigerian AI Filmmaker & Creative Director
        </p>

        <div className="mt-8 space-y-6 text-base leading-8 text-white/70 sm:text-lg">
          <p>
            <strong className="text-white">Daniel Ebhowe</strong> is a Nigerian
            AI filmmaker, director and Creative Director of{" "}
            <strong className="text-white">DFRENZY VISUALS</strong>.
          </p>

          <p>
            His work explores the intersection of artificial intelligence,
            cinematic storytelling and visual production, combining emerging
            generative technologies with human-led creative direction.
          </p>

          <p>
            Through DFRENZY VISUALS, Daniel develops cinematic films, branded
            visual content, commercials, trailers, cultural stories and
            AI-powered visual experiences.
          </p>
        </div>

        <Link
          to="/portfolio"
          className="mt-10 inline-flex border border-[#00E5FF]/50 px-7 py-4 font-display text-xs font-semibold tracking-[0.25em] text-[#00E5FF] transition hover:bg-[#00E5FF] hover:text-black"
        >
          EXPLORE MORE WORK
        </Link>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_60%)]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p className="font-display text-xs tracking-[0.35em] text-[#00E5FF]">
            WORK WITH DFRENZY VISUALS
          </p>

          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            Have a story worth seeing?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Explore cinematic AI filmmaking, branded storytelling and
            next-generation visual production with DFRENZY VISUALS.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex bg-[#00E5FF] px-8 py-4 font-display text-xs font-bold tracking-[0.25em] text-[#02121a] transition hover:shadow-[0_0_35px_rgba(0,229,255,0.45)]"
          >
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-[10px] tracking-[0.3em] text-[#00E5FF]">
        {label}
      </p>
      <p className="mt-3 text-lg font-semibold text-white/90">{value}</p>
    </div>
  );
}

function SectionNumber({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-display text-sm tracking-[0.25em] text-[#00E5FF]">
          {number}
        </span>
        <div className="h-px flex-1 bg-[#00E5FF]/20" />
      </div>

      <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">
        {title}
      </h2>

      <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-white/70 sm:text-lg">
        {children}
      </div>
    </div>
  );
}

function Pipeline({
  number,
  title,
  tools,
  text,
}: {
  number: string;
  title: string;
  tools: string;
  text: string;
}) {
  return (
    <article className="border border-white/10 bg-black/20 p-6 transition hover:border-[#00E5FF]/40">
      <p className="font-display text-xs tracking-[0.25em] text-[#00E5FF]">
        {number}
      </p>

      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm font-semibold text-white/90">{tools}</p>

      <p className="mt-4 text-sm leading-7 text-white/60">{text}</p>
    </article>
  );
}
