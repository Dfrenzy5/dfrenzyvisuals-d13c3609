import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function FloatingStartProject() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to="/contact"
      aria-label="Start your project"
      className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-neon bg-background/70 px-5 py-3 font-display text-[10px] tracking-[0.3em] text-neon-bright shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:neon-glow sm:inline-flex"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 400ms, transform 400ms",
      }}
    >
      <Sparkles className="h-3.5 w-3.5" />
      START YOUR PROJECT
    </Link>
  );
}
