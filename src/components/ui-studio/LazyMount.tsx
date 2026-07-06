import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mounts children only when the placeholder scrolls near the viewport.
 * Keeps below-the-fold sections out of the critical path while preserving
 * scroll position via a reserved min-height.
 */
export function LazyMount({
  children,
  rootMargin = "300px 0px",
  minHeight = 400,
  fallback = null,
}: {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number;
  fallback?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : fallback}
    </div>
  );
}