import { Link, useRouterState } from "@tanstack/react-router";
import { Film, DollarSign, Send, Youtube, Instagram, Mail } from "lucide-react";
import dfLogoAsset from "@/assets/df-logo.png.asset.json";
const dfLogo = dfLogoAsset.url;

const nav = [
  { to: "/portfolio", label: "PORTFOLIO", Icon: Film },
  { to: "/pricing", label: "PRICING", Icon: DollarSign },
  { to: "/contact", label: "CONTACT", Icon: Send },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg ring-1 ring-neon/40 transition-all group-hover:ring-neon group-hover:neon-glow">
            <img src={dfLogo} alt="DFRENZY VISUALS" className="h-full w-full object-cover" />
          </div>
          <span className="hidden font-display text-sm font-bold tracking-[0.3em] text-foreground sm:inline">
            DFRENZY <span className="text-neon-bright">VISUALS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(({ to, label, Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`group relative flex items-center gap-2 rounded-full px-4 py-2 font-display text-[11px] font-semibold tracking-[0.25em] transition-all ${
                  active
                    ? "text-neon-bright"
                    : "text-muted-foreground hover:text-neon-bright"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-neon/60 bg-neon/5 neon-glow" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {[
            { Icon: Youtube, href: "https://www.youtube.com/@DFRENZYVISUALS", label: "YouTube" },
            { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { Icon: Mail, href: "mailto:dfrenzyvisuals@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neon/30 text-muted-foreground transition-all hover:border-neon hover:text-neon-bright hover:neon-glow"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="mx-auto flex max-w-md items-center justify-center gap-2 px-6 pb-3 md:hidden">
        {nav.map(({ to, label, Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full border px-3 py-2 font-display text-[10px] font-semibold tracking-[0.2em] ${
                active
                  ? "border-neon text-neon-bright neon-glow"
                  : "border-neon/20 text-muted-foreground"
              }`}
            >
              <Icon className="h-3 w-3" /> {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}