import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className,
  variant = "fade-up",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  variant?: "fade-up" | "fade" | "blur";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = "will-change-transform transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
  const hidden =
    variant === "fade"
      ? "opacity-0"
      : variant === "blur"
        ? "opacity-0 blur-md"
        : "opacity-0 translate-y-4";
  const visible = "opacity-100 translate-y-0 blur-0";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(base, shown ? visible : hidden, className)}
    >
      {children}
    </Tag>
  );
}