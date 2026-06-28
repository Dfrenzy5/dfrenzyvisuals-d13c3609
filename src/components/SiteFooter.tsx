import { Link } from "@tanstack/react-router";
import { Youtube, Mail, Instagram, ArrowUp } from "lucide-react";

const QUICK_LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/portfolio" as const, label: "Portfolio" },
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/contact" as const, label: "Contact" },
];

const SERVICE_LINKS = [
  "AI Film Production",
  "Commercial Advertising",
  "Corporate Storytelling",
  "Event Coverage",
  "Music Visuals",
  "Brand Promos",
];

export function SiteFooter() {
  const scrollTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative mt-24 border-t border-neon/15 px-6 pt-16 pb-10 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold tracking-[0.25em] text-foreground">
            DFRENZY <span className="text-neon-bright">VISUALS</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A cinematic AI film studio crafting trailers, commercials, music visuals,
            and brand films.
          </p>
        </div>

        <div>
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
            QUICK LINKS
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-neon-bright"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
            SERVICES
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s} className="text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">
            CONNECT
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="mailto:dfrenzyvisuals@gmail.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-neon-bright"
              >
                <Mail className="h-4 w-4" /> dfrenzyvisuals@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@DFRENZYVISUALS"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-neon-bright"
              >
                <Youtube className="h-4 w-4" /> @DFRENZYVISUALS
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-neon-bright"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-neon/10 pt-6 sm:flex-row">
        <div className="text-[10px] tracking-[0.2em] text-muted-foreground/70">
          © {new Date().getFullYear()} DFRENZY VISUALS · ALL RIGHTS RESERVED
        </div>
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 rounded-full border border-neon/30 px-4 py-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
        >
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          BACK TO TOP
        </button>
      </div>
    </footer>
  );
}