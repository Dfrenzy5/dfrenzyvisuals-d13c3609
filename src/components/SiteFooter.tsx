import { Link } from "@tanstack/react-router";
import { Youtube, Mail, Instagram, ArrowUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Container } from "./ui-studio/Container";

const WORK_LINKS = [
  { to: "/portfolio" as const, label: "All Work" },
  { to: "/portfolio/unbliss" as const, label: "UNBLISS" },
  { to: "/portfolio/beyond-horizon" as const, label: "Beyond Horizon" },
  { to: "/portfolio/legacy-business-summit-2026" as const, label: "Legacy Summit 2026" },
];

const STUDIO_LINKS = [
  { to: "/" as const, label: "Home" },
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/contact" as const, label: "Contact" },
];

const SERVICE_LINKS = [
  "Commercials",
  "Branded Storytelling",
  "Product Films",
  "Architectural Visualization",
  "Virtual Production",
  "Music & Culture",
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const scrollTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative mt-32 border-t border-neon/15 pt-20 pb-10">
      <Container>
        {/* Newsletter band */}
        <div className="grid gap-10 rounded-2xl hairline surface-1 p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <p className="text-eyebrow">The Signal</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-[0.1em] text-foreground sm:text-3xl">
              Cinematic dispatches from the studio.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              New work, behind the scenes, and notes on where AI production is heading.
              No noise.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setStatus("ok");
            }}
            className="flex flex-col items-stretch gap-3 self-center"
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <div className="flex overflow-hidden rounded-full hairline surface-2">
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
              />
              <button
                type="submit"
                className="border-l border-neon/20 bg-neon/10 px-5 font-display text-[10px] tracking-[0.3em] text-neon-bright transition-colors hover:bg-neon/20"
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground/70">
              {status === "ok"
                ? "Thanks — you're on the list."
                : "Placeholder — connect to a provider to activate."}
            </p>
          </form>
        </div>

        {/* Main columns */}
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-display text-lg font-bold tracking-[0.25em] text-foreground">
              DFRENZY <span className="text-neon-bright">VISUALS</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A cinematic creative studio. We craft commercials, branded storytelling,
              product films, and virtual production — powered by an AI-native pipeline.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Youtube, href: "https://www.youtube.com/@DFRENZYVISUALS", label: "YouTube" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Mail, href: "mailto:dfrenzyvisuals@gmail.com", label: "Email" },
                { Icon: MessageCircle, href: "https://wa.me/2347044775158", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full hairline text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-eyebrow">Studio</div>
            <ul className="mt-5 space-y-3 text-sm">
              {STUDIO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-neon-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-eyebrow">Work</div>
            <ul className="mt-5 space-y-3 text-sm">
              {WORK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-neon-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-eyebrow">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_LINKS.map((s) => (
                <li key={s} className="text-muted-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-eyebrow">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="mailto:dfrenzyvisuals@gmail.com" className="text-muted-foreground transition-colors hover:text-neon-bright">
                  dfrenzyvisuals<br />@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347044775158" className="text-muted-foreground transition-colors hover:text-neon-bright">
                  +234 704 477 5158
                </a>
              </li>
            </ul>
          </div>
        </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neon/10 pt-6 sm:flex-row">
        <div className="text-[10px] tracking-[0.2em] text-muted-foreground/70">
          © {new Date().getFullYear()} DFRENZY VISUALS · ALL RIGHTS RESERVED
        </div>
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="group flex items-center gap-2 rounded-full border border-neon/30 px-4 py-2 font-display text-[10px] tracking-[0.3em] text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
        >
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          BACK TO TOP
        </button>
      </div>
      </Container>
    </footer>
  );
}