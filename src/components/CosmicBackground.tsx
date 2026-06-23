import cosmicBg from "@/assets/cosmic-bg.jpg";

export function CosmicBackground() {
  // Pre-computed star positions (avoid SSR mismatch)
  const stars = Array.from({ length: 80 }, (_, i) => {
    const seed = i * 2654435761;
    const x = ((seed % 1000) / 1000) * 100;
    const y = (((seed >> 8) % 1000) / 1000) * 100;
    const d = (((seed >> 16) % 50) / 10) + 2;
    const delay = ((seed >> 4) % 30) / 10;
    const size = ((seed >> 12) % 3) + 1;
    return { x, y, d, delay, size };
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${cosmicBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-neon-bright animate-twinkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.d}s`,
              animationDelay: `${s.delay}s`,
              boxShadow: `0 0 ${s.size * 2}px currentColor`,
            }}
          />
        ))}
      </div>
      {/* Subtle nebula glow */}
      <div className="absolute -left-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full bg-neon/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[50vh] w-[50vh] rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}