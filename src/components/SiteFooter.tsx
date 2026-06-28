import { Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-neon/15 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
          OTHER WAYS TO CONNECT
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@DFRENZYVISUALS"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-neon/30 px-4 py-2 text-sm text-foreground transition-all hover:border-neon hover:neon-glow"
          >
            <Youtube className="h-4 w-4 text-neon-bright" />
            <span className="font-display text-xs tracking-[0.2em]">YOUTUBE</span>
            <span className="text-muted-foreground">DFRENZYVISUALS</span>
          </a>
          <a
            href="mailto:dfrenzyvisuals@gmail.com"
            className="flex items-center gap-2 rounded-full border border-neon/30 px-4 py-2 text-sm text-foreground transition-all hover:border-neon hover:neon-glow"
          >
            <Mail className="h-4 w-4 text-neon-bright" />
            <span className="text-muted-foreground">dfrenzyvisuals@gmail.com</span>
          </a>
        </div>
        <div className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">
          LET'S TURN YOUR VISION INTO CINEMATIC REALITY
        </div>
        <div className="text-[10px] tracking-[0.2em] text-muted-foreground/60">
          © {new Date().getFullYear()} DFRENZY VISUALS · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}