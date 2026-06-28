import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Mail, MapPin, Youtube, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DFRENZY VISUALS" },
      { name: "description", content: "Initiate collaboration with DFRENZY VISUALS. Send a transmission to start your AI film project." },
      { property: "og:title", content: "Contact — DFRENZY VISUALS" },
      { property: "og:description", content: "Initiate collaboration." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10">
      <div className="text-center">
        <h1 className="font-display text-3xl font-black tracking-[0.2em] text-foreground sm:text-5xl">
          INITIATE COLLABORATION
        </h1>
        <p className="mt-3 font-display text-[11px] tracking-[0.5em] text-neon-bright">
          LET'S CREATE SOMETHING EXTRAORDINARY
        </p>
      </div>

      {/* Direct channels */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href="https://wa.me/2347044775158"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-neon/20 glass-panel p-5 transition-all hover:-translate-y-0.5 hover:border-neon hover:neon-glow"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/40 bg-neon/5">
            <MessageCircle className="h-5 w-5 text-neon-bright" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">WHATSAPP</div>
            <div className="truncate text-sm text-foreground">+234 704 477 5158</div>
          </div>
        </a>
        <a
          href="mailto:dfrenzyvisuals@gmail.com"
          className="group flex items-center gap-4 rounded-2xl border border-neon/20 glass-panel p-5 transition-all hover:-translate-y-0.5 hover:border-neon hover:neon-glow"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/40 bg-neon/5">
            <Mail className="h-5 w-5 text-neon-bright" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">EMAIL</div>
            <div className="truncate text-sm text-foreground">dfrenzyvisuals@gmail.com</div>
          </div>
        </a>
        <div className="flex items-center gap-4 rounded-2xl border border-neon/20 glass-panel p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon/40 bg-neon/5">
            <MapPin className="h-5 w-5 text-neon-bright" />
          </div>
          <div className="min-w-0">
            <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">STUDIO</div>
            <div className="text-sm text-foreground">Remote · Worldwide Production</div>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-neon/20 glass-panel p-5">
          <div className="font-display text-[10px] tracking-[0.4em] text-neon-bright">SOCIAL</div>
          <div className="ml-auto flex items-center gap-2">
            <a
              href="https://www.youtube.com/@DFRENZYVISUALS"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neon/30 text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neon/30 text-muted-foreground transition-all hover:border-neon hover:text-neon-bright"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Terminal frame */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-neon/40 glass-panel neon-glow">
        {/* Corner brackets */}
        {[
          "left-3 top-3 border-l-2 border-t-2",
          "right-3 top-3 border-r-2 border-t-2",
          "left-3 bottom-3 border-l-2 border-b-2",
          "right-3 bottom-3 border-r-2 border-b-2",
        ].map((c) => (
          <span key={c} className={`pointer-events-none absolute h-5 w-5 border-neon ${c}`} />
        ))}

        {/* Scanlines overlay */}
        <div className="pointer-events-none absolute inset-0 scanline opacity-40" />

        <div className="relative p-6 sm:p-10">
          {sent ? (
            <div className="flex flex-col items-center py-16 text-center">
              <CheckCircle2 className="h-16 w-16 animate-pulse-glow text-neon-bright" />
              <h2 className="mt-6 font-display text-2xl font-bold tracking-[0.25em] text-foreground">
                TRANSMISSION RECEIVED
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll respond from the studio shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-neon/40 px-6 py-2 font-display text-xs tracking-[0.3em] text-foreground hover:neon-glow"
              >
                NEW TRANSMISSION
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 gap-6"
            >
              <Field label="YOUR NAME" name="name" placeholder="Enter your name" />
              <Field label="EMAIL ADDRESS" name="email" type="email" placeholder="Enter your email" />
              <div>
                <Label>PROJECT TYPE</Label>
                <select
                  required
                  className="mt-2 w-full rounded-md border border-neon/40 bg-deep/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-neon focus:neon-glow"
                  defaultValue=""
                >
                  <option value="" disabled>Select project type</option>
                  <option>AI Trailer</option>
                  <option>Music Visual</option>
                  <option>Brand Promo</option>
                  <option>Short Film</option>
                  <option>Full AI Film Production</option>
                </select>
              </div>
              <div>
                <Label>MESSAGE</Label>
                <div className="relative mt-2">
                  <textarea
                    required
                    rows={5}
                    placeholder="> Tell us about your project..."
                    className="w-full resize-none rounded-md border border-neon/40 bg-deep/50 px-4 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-neon focus:neon-glow"
                  />
                  <span className="pointer-events-none absolute right-3 top-3 inline-block h-4 w-2 animate-blink bg-neon-bright" />
                </div>
              </div>

              <button
                type="submit"
                className="group relative mt-2 flex items-center justify-center gap-3 overflow-hidden rounded-full border-2 border-neon bg-neon/10 px-8 py-4 font-display text-sm font-bold tracking-[0.35em] text-neon-bright transition-all hover:neon-glow"
              >
                <span className="sweep-line relative flex items-center gap-3">
                  <Send className="h-4 w-4" /> SEND TRANSMISSION
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-display text-[10px] font-semibold tracking-[0.3em] text-neon-bright">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-neon/40 bg-deep/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-neon focus:neon-glow"
      />
    </div>
  );
}