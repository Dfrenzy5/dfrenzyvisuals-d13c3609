export type JournalCategory = "Portfolio" | "Event" | "Article";

export type JournalStatus =
  | "In Production"
  | "Submitted"
  | "Live"
  | "Archived"
  | "Completed";

export interface JournalEntry {
  id: string;
  date: string;
  category: JournalCategory;
  title: string;
  description: string;
  status?: JournalStatus;
  url?: { label: string; href: string };
  to?: {
    label: string;
    route: string;
    params?: Record<string, string>;
  };
}

export const JOURNAL_ENTRIES: JournalEntry[] = [
    {
    id: "how-to-create-consistent-characters-ai-filmmaking",
    date: "2026-09-20",
    category: "Article",
    title: "How to Create Consistent Characters in AI Filmmaking",
    description:
      "A practical guide to maintaining character identity, wardrobe, continuity, and cinematic consistency across AI-generated shots and scenes.",
    status: "Live",
    to: {
      label: "Read Article",
      route: "/journal/how-to-create-consistent-characters-ai-filmmaking",
    },
  },
  {
    id: "how-much-ai-filmmakers-earn-2026",
    date: "2026-09-01",
    category: "Article",
    title: "How Much Do AI Filmmakers Earn? The 2026 Global & Nigerian Salary Guide",
    description:
      "A practical look at AI filmmaking income across global and Nigerian markets, from salaried AI-video roles to freelance production and remote international work.",
    status: "Live",
    to: {
      label: "Read Article",
      route: "/journal/how-much-do-ai-filmmakers-earn-2026",
    },
  },
  {
    id: "ai-cinema-festival-era-africa",
    date: "2026-09-01",
    category: "Article",
    title:
      "AI Cinema Has Entered Its Festival Era — And Africa Is Part of the Story",
    description:
      "NAIFF 2026, Godzilla in Lagos, and the growing festival ecosystem showing how African filmmakers are beginning to shape the future of AI cinema.",
    status: "Live",
    to: {
      label: "Read Article",
      route: "/journal/ai-cinema-festival-era-africa",
    },
  },
  {
    id: "ai-films-are-entering-real-cinema",
    date: "2026-09-01",
    category: "Article",
    title:
      "AI Films Aren't Just Experiments Anymore — They're Starting to Enter Real Cinema",
    description:
      "Robert Gaudette's award-winning AI short shows how generative filmmaking is moving beyond experiments and into serious cinematic storytelling.",
    status: "Live",
    to: {
      label: "Read Article",
      route: "/journal/ai-films-are-entering-real-cinema",
    },
  },
  {
    id: "grok-imagine-video-1-5-ai-video",
    date: "2026-09-01",
    category: "Article",
    title: "Grok Imagine Video 1.5: Is AI Video Finally Getting Easier?",
    description:
      "Text-to-video, image-to-video, references, editing and audio — what Grok Imagine Video 1.5 actually means for AI filmmakers.",
    status: "Live",
    to: {
      label: "Read Article",
      route: "/journal/grok-imagine-video-1-5-ai-video",
    },
  },
  {
    id: "3am-the-hotel-dreams-submitted",
    date: "2026-08-28",
    category: "Event",
    title: "Submitted — 3AM (The Hotel Dreams) for Suite Dreams GenJam",
    description:
      "Entered the Suite Dreams GenJam challenge for Machine Cinema's Warsaw Glitch festival with an original AI short film.",
    status: "Submitted",
    to: {
      label: "Watch Film",
      route: "/portfolio/$slug",
      params: { slug: "3am-the-hotel-dreams" },
    },
  },
  {
    id: "certified-higgsfield-academy",
    date: "2026-07-01",
    category: "Event",
    title: "Certified — The AI Filmmaking Pipeline (Higgsfield Academy)",
    description:
      "Completed the Cinema Studio Pro Guide certification through Higgsfield Academy, reinforcing DFrenzy Visuals' AI filmmaking pipeline expertise.",
    status: "Completed",
  },
  {
    id: "the-leopard-king-live",
    date: "2026-08-01",
    category: "Portfolio",
    title: "The Leopard King — Now Live",
    description:
      "A three-act cinematic trailer built entirely with AI — Seedance 2.0 animation, Grok storyboarding, and an original Suno score. Watch the full piece in our portfolio.",
    status: "Live",
    to: {
      label: "Watch Film",
      route: "/portfolio/$slug",
      params: { slug: "the-leopard-king" },
    },
  },
  {
    id: "warsaw-glitch-suite-dreams",
    date: "2026-08-01",
    category: "Event",
    title: 'Competing in Warsaw Glitch — "Suite Dreams" AI Filmmaking Challenge',
    description:
      "A Seedance 2.5 cyberpunk fantasy concept built around the Warsaw Presidential Hotel as lead character. Entry deadline August 28.",
    status: "In Production",
  },
  {
    id: "the-inheritance-the-reading",
    date: "2026-08-01",
    category: "Portfolio",
    title: "THE INHERITANCE: The Reading",
    description:
      "A 29-shot AI-generated festival short film, targeting the Astana AI Film Festival and Token AI Film Festival.",
    status: "In Production",
  },
  {
    id: "diamond-project-business-conference-promo",
    date: "2026-08-01",
    category: "Portfolio",
    title: "Diamond Project Business Conference Promo",
    description:
      "A 10-clip cinematic event promo produced for a Lagos business conference.",
    status: "In Production",
  },
];
