import film2 from "@/assets/film-2.jpg";
import film3 from "@/assets/film-3.jpg";
import film5 from "@/assets/film-5.jpg";
import unbliss from "@/assets/unbliss.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client?: string;
  year?: string;
  duration?: string;
  role?: string;
  poster: string;
  youtube?: string;
  problem: string;
  concept: string;
  moodboard: string[];
  production: string;
  aiPipeline: string[];
  editing: string;
  outcome: string;
  impact: string[];
  tools: string[];
  gallery?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "unbliss",
    title: "UNBLISS",
    subtitle: "Some love stories have witnesses",
    category: "Cinematic Trailer",
    client: "Independent",
    year: "2025",
    duration: "3 weeks",
    role: "Direction · AI Pipeline · Edit · Sound",
    poster: unbliss,
    youtube: "aoc6ZZt9DN0",
    problem:
      "Deliver a full-cinema trailer for a poetic love story without a live-action shoot budget — while preserving emotional truth, performance nuance, and editorial craft.",
    concept:
      "A hush-toned, memory-tinted vignette where unseen witnesses observe a fracturing romance. Camera language stays intimate; palette leans warm shadow with cool highlight for longing.",
    moodboard: [
      "Wong Kar-wai chromatic memory",
      "Rain-glass reflections & shallow focus",
      "Analog film grain, 35mm halation",
      "Amber tungsten interiors vs. cyan streetlight",
    ],
    production:
      "Every frame generated and art-directed inside a curated AI pipeline. Character continuity was locked with reference conditioning; motion beats were storyboarded frame-by-frame before generation.",
    aiPipeline: [
      "Reference-conditioned image generation for character look",
      "Frame-to-video motion synthesis with camera pathing",
      "Upscale + film-grain restoration pass",
      "Face restoration and micro-expression refinement",
    ],
    editing:
      "Cut in DaVinci Resolve with cinema-standard color pipeline. Score built in Logic Pro, layered foley and room tone in Pro Tools for theatrical depth.",
    outcome:
      "A trailer that reads as a mid-budget indie feature — screened for private audiences and used as the calling card for the studio's cinematic AI capability.",
    impact: [
      "10k+ organic views in first week",
      "Inbound inquiries from 3 production houses",
      "Used as the studio's flagship reel piece",
    ],
    tools: ["Generative Video Pipeline", "DaVinci Resolve", "Logic Pro", "Pro Tools"],
  },
  {
    slug: "beyond-horizon",
    title: "BEYOND HORIZON",
    subtitle: "AI-generated sci-fi feature trailer",
    category: "AI Trailer",
    client: "Studio Concept",
    year: "2025",
    duration: "4 weeks",
    role: "Direction · World Design · AI Pipeline · Edit",
    poster: "https://img.youtube.com/vi/79u3BUYXS9E/maxresdefault.jpg",
    youtube: "79u3BUYXS9E",
    problem:
      "Prove a sci-fi feature could be pitched with a full 90-second trailer generated end-to-end with AI — without looking synthetic or generic.",
    concept:
      "Humanity on the edge of a new frontier. Architecture is monolithic and sun-bleached; heroes are small against scale. The trailer earns its stakes through composition, not exposition.",
    moodboard: [
      "Denis Villeneuve scale & silence",
      "Deakins-inspired negative space",
      "Warm dust vs. deep-space cyan",
      "Brutalist megastructures",
    ],
    production:
      "Shot-by-shot storyboard first, then targeted AI generation per shot — never batch-generated. Every wide, every push-in, every insert was directed.",
    aiPipeline: [
      "Concept boards to lock composition and lens language",
      "Character-consistent generation with LoRA-style conditioning",
      "Video motion synthesis with directed camera moves",
      "Grain, halation, and lens-flare finishing pass",
    ],
    editing:
      "Trailer structure built on classic three-act tension — tease, escalate, promise. Sound design leans on low-end pressure and negative silence.",
    outcome:
      "Featured on the studio homepage as the flagship AI trailer proving cinematic scale is achievable inside a pure generative pipeline.",
    impact: [
      "Homepage hero reel",
      "Reference piece for enterprise pitches",
      "Repurposed into 3 vertical short-form cuts",
    ],
    tools: ["Generative Video Pipeline", "Cinema 4D", "Premiere Pro", "DaVinci Resolve"],
  },
  {
    slug: "legacy-business-summit-2026",
    title: "LEGACY BUSINESS SUMMIT 2026",
    subtitle: "Premium event coverage & highlight film",
    category: "Event Film",
    client: "Legacy Business Summit",
    year: "2026",
    duration: "2 weeks (post)",
    role: "Direction · Edit · Color · Sound",
    poster: "https://img.youtube.com/vi/pdDdO2WOlR4/maxresdefault.jpg",
    youtube: "pdDdO2WOlR4",
    problem:
      "Capture the energy, prestige, and executive presence of one of Africa's leading business summits — and turn it into a highlight film worthy of the brand.",
    concept:
      "Documentary craft with commercial polish. Room tone, keynote intensity, hallway networking, and the quiet luxury of a well-run stage — cut to feel inevitable.",
    moodboard: [
      "Apple Event stage grammar",
      "TED-style crowd cutaways",
      "Editorial luxury magazine grade",
      "Warm skin, deep blacks, controlled highlight",
    ],
    production:
      "Multi-camera coverage across keynote, panels, networking, and hospitality. On-site direction of B-roll priorities and hero moments.",
    aiPipeline: [
      "AI-assisted rough-cut selects to accelerate turnaround",
      "Auto-transcription for pull-quote sourcing",
      "Upscale of legacy source clips for archival inserts",
    ],
    editing:
      "Highlight film cut in Premiere with a color pipeline in Resolve. Score licensed and re-arranged to hit keynote reveals and audience swell.",
    outcome:
      "Delivered a premium recap that positions the summit as a category-leading business event and drives applications for the next edition.",
    impact: [
      "Featured across summit channels",
      "Used in sponsor decks for 2027 edition",
      "Repurposed into speaker sizzles and vertical cuts",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "Logic Pro"],
  },
  {
    slug: "unbreakable",
    title: "UNBREAKABLE",
    subtitle: "Rhythm-driven music visual",
    category: "Music Visual",
    year: "2025",
    duration: "2 weeks",
    role: "Direction · Edit · Color",
    poster: film2,
    problem:
      "Turn a bold, defiant track into a visual identity that could carry the artist's rollout — without a music-video-scale budget.",
    concept:
      "High-contrast bodies of light — the artist as monument, the frame as stage. Choreography of light replaces choreography of dancers.",
    moodboard: [
      "Hiro Murai kinetic framing",
      "Chiaroscuro portraiture",
      "Punchy grade, deep magenta shadow",
    ],
    production:
      "Look-locked with reference boards, then generated in tight sync with the track's tempo map. Every cut lands on a beat.",
    aiPipeline: [
      "Beat-mapped storyboard before generation",
      "Character consistency across looks",
      "Motion synthesis timed to BPM",
    ],
    editing:
      "Cut to beat grid in Premiere; grade in Resolve with a bold, punchy contract-forward LUT.",
    outcome:
      "A launch visual the artist used across streaming platforms and socials as the anchor of the release week.",
    impact: ["Release-week anchor asset", "Cut into 4 short-form vertical edits"],
    tools: ["Generative Video Pipeline", "Premiere Pro", "DaVinci Resolve"],
  },
  {
    slug: "the-last-signal",
    title: "THE LAST SIGNAL",
    subtitle: "Near-future AI short film",
    category: "AI Film",
    year: "2025",
    duration: "5 weeks",
    role: "Direction · Writing · AI Pipeline · Edit",
    poster: film3,
    problem:
      "Tell a full short-film emotional arc — beginning, middle, end — inside an AI pipeline, without losing performance.",
    concept:
      "The last broadcast leaving Earth, and the people who hear it. Intimate close-ups against a quiet apocalypse.",
    moodboard: [
      "Alfonso Cuarón long-take sensibility",
      "Muted palette, one hero color",
      "Handheld intimacy vs. static wide despair",
    ],
    production:
      "Scene-by-scene generation with a locked continuity bible for character, wardrobe, and location.",
    aiPipeline: [
      "Continuity-locked character generation",
      "Long-take motion synthesis with camera pathing",
      "Restoration + upscale for delivery masters",
    ],
    editing:
      "Edit built around silence. Sound design carries as much narrative weight as picture.",
    outcome:
      "A short film that reads as authored cinema — used as the studio's proof of narrative capability inside AI production.",
    impact: ["Submitted to indie AI film showcases", "Studio narrative proof piece"],
    tools: ["Generative Video Pipeline", "DaVinci Resolve", "Pro Tools"],
  },
  {
    slug: "future-unleashed",
    title: "FUTURE UNLEASHED",
    subtitle: "Kinetic brand launch commercial",
    category: "Commercial",
    year: "2025",
    duration: "3 weeks",
    role: "Creative Direction · Edit · Motion",
    poster: "https://img.youtube.com/vi/woZwTipsk9o/maxresdefault.jpg",
    youtube: "woZwTipsk9o",
    problem:
      "Launch a brand into a crowded category with a promo that reads as confident, future-facing, and category-defining.",
    concept:
      "Motion as message. Every frame moves. The brand isn't described — it's felt through pace, type, and light.",
    moodboard: [
      "Nike / Off-White type kinetic",
      "Chromatic aberration accents",
      "Modernist grid meets liquid motion",
    ],
    production:
      "Design-forward pipeline: motion boards → animation → generative texture inserts → finishing.",
    aiPipeline: [
      "Generative texture and B-roll inserts",
      "Upscale of stock and archival plates",
    ],
    editing:
      "Tight kinetic cut, sub-second holds, type-led rhythm. Sound design synced to type reveals.",
    outcome:
      "A launch promo the brand ran across paid social and homepage hero — leading with confidence.",
    impact: ["Paid social lead asset", "Homepage hero video"],
    tools: ["After Effects", "Premiere Pro", "Generative Pipeline"],
  },
  {
    slug: "echoes-of-tomorrow",
    title: "ECHOES OF TOMORROW",
    subtitle: "Atmospheric AI short film",
    category: "AI Film",
    year: "2025",
    duration: "4 weeks",
    role: "Direction · AI Pipeline · Edit · Sound",
    poster: film5,
    problem:
      "Explore memory and machine consciousness in a contemplative AI film without feeling cold or synthetic.",
    concept:
      "Memory as landscape. Interiors that breathe. A machine remembering being human.",
    moodboard: [
      "Tarkovsky slow observation",
      "Blade Runner 2049 warmth in decay",
      "Soft focus, dust in light",
    ],
    production:
      "Slow-cinema pacing generated deliberately — long holds, patient camera moves, minimal cutting.",
    aiPipeline: [
      "Long-hold shot generation",
      "Environmental consistency across scenes",
      "Grain and halation finishing",
    ],
    editing:
      "Cut to breathe. Score composed to sit under, not over. Foley layered for physical presence.",
    outcome:
      "A meditative short showcasing the studio's atmospheric range beyond kinetic commercial work.",
    impact: ["Studio atmospheric range proof piece", "Portfolio contemplative anchor"],
    tools: ["Generative Video Pipeline", "DaVinci Resolve", "Logic Pro"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}