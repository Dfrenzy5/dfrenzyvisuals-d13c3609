import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StudioButton } from "@/components/ui-studio/StudioButton";
import { Container } from "@/components/ui-studio/Container";
import { Reveal } from "@/components/ui-studio/Reveal";

const FAQ_DATA = [
  {
    q: "What does DFrenzy Visuals do?",
    a: "DFrenzy Visuals is an AI cinematic production studio based in Lagos and Uyo, Nigeria. We produce original drama series, short films, music videos, and commercial work for brands and events using an AI-native production pipeline.",
  },
  {
    q: "What AI tools does DFrenzy Visuals use?",
    a: "Our pipeline includes Grok AI, Seedance 2.5, Higgsfield Cinema Studio, Kling, Veo, Suno, and ElevenLabs for generation, combined with DaVinci Resolve and CapCut for post-production and finishing.",
  },
  {
    q: "How much does AI video production cost in Nigeria?",
    a: "Pricing depends on project scope, length, and complexity. Event promos typically range from ₦350,000 to ₦1,400,000, while flagship narrative or commercial projects are quoted individually based on shot count, revisions, and turnaround time. Contact us for a custom quote.",
  },
  {
    q: "Can DFrenzy Visuals produce a full drama series or short film using AI?",
    a: "Yes. We've produced multi-episode drama series and short films entirely through AI pipelines, including full shotlists, character consistency locks, voiceover, and color grading — from script to final cut.",
  },
  {
    q: "Does DFrenzy Visuals work with brands and businesses, not just entertainment projects?",
    a: "Yes. We produce commercials, branded storytelling, product films, and event promos for businesses and conferences, in addition to original entertainment IP.",
  },
  {
    q: "What makes AI video production different from traditional production?",
    a: "AI production dramatically cuts cost and turnaround time — what used to require large crews, expensive equipment, and weeks of editing can now be produced by a smaller, focused team in days, without compromising cinematic quality.",
  },
  {
    q: "Where is DFrenzy Visuals based, and do you work with international clients?",
    a: "We're based in Lagos and Uyo, Nigeria, and work with clients both locally and internationally — our AI-native pipeline means location isn't a limiting factor for most projects.",
  },
  {
    q: "Does DFrenzy Visuals offer training in AI filmmaking?",
    a: "Yes. We run AI filmmaking training and workshops in partnership with Johnab Technologies and Tabb Creative.",
  },
  {
    q: "How can I start a project with DFrenzy Visuals?",
    a: "Reach out via the contact page or WhatsApp with your project details, and we'll follow up with a consultation and quote.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — AI Video Production Nigeria | DFrenzy Visuals" },
      {
        name: "description",
        content:
          "Answers to common questions about AI video production costs, tools, and process at DFrenzy Visuals — Lagos & Uyo's AI cinematic studio.",
      },
      { property: "og:title", content: "FAQ — AI Video Production Nigeria | DFrenzy Visuals" },
      {
        property: "og:description",
        content:
          "Answers to common questions about AI video production costs, tools, and process at DFrenzy Visuals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/faq` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_DATA.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <Container className="py-20 md:py-32">
      <Reveal>
        <div className="text-center">
          <h1 className="font-display text-4xl font-black tracking-[0.2em] text-foreground sm:text-6xl">
            FREQUENTLY ASKED <span className="text-neon-bright">QUESTIONS</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">
            Everything you need to know about working with DFrenzy Visuals.
          </p>
        </div>
      </Reveal>

      <div className="mt-20 mx-auto max-w-3xl">
        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_DATA.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-neon/20 glass-panel px-6 rounded-2xl overflow-hidden hover:border-neon/40 transition-colors"
              >
                <AccordionTrigger className="font-display text-sm font-bold tracking-[0.1em] text-foreground/90 py-6 hover:no-underline hover:text-neon-bright">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-display text-sm leading-relaxed text-muted-foreground pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <div className="mt-32 text-center rounded-3xl border border-neon/20 glass-panel p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-neon/5 to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl font-bold tracking-[0.1em] text-foreground">
            Still have questions?
          </h2>
          <p className="mt-4 text-muted-foreground font-display tracking-[0.1em]">
            Reach out directly.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <StudioButton size="lg">START CONVERSATION</StudioButton>
            </Link>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
