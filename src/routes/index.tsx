import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import dfLogoAsset from "@/assets/df-logo.png.asset.json";
const dfLogo = dfLogoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DFRENZY VISUALS — AI Cinematic Film Studio" },
      { name: "description", content: "Enter a futuristic AI film studio where movies, trailers, and music visuals are created inside a digital dimension." },
      { property: "og:title", content: "DFRENZY VISUALS — AI Cinematic Film Studio" },
      { property: "og:description", content: "AI Cinematic Film Studio. Trailers, music visuals, brand promos." },
    ],
  }),
  component: Index,
});

function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
    }));

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.a})`;
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const icons = [
    { to: "/portfolio" as const, emoji: "🎬", tip: "CINEMATIC WORKS" },
    { to: "/pricing" as const, emoji: "💰", tip: "PACKAGES" },
    { to: "/contact" as const, emoji: "📡", tip: "COLLABORATE" },
  ];

  return (
    <div
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #05070D 0%, #000000 100%)",
        color: "#00E5FF",
      }}
    >
      <canvas
        ref={canvasRef}
        id="particle-bg"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div
        id="logo"
        className="animate-warp-in relative h-[200px] w-[200px] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${dfLogo}')`,
          backgroundSize: "contain",
          filter: "drop-shadow(0 0 20px #00E5FF)",
        }}
      />

      <h1
        id="tagline"
        className="animate-fade-in mt-5 text-center font-display text-2xl tracking-[0.3em] sm:text-3xl"
        style={{ animationDelay: "0.4s", animationFillMode: "both" }}
      >
        AI CINEMATIC FILM STUDIO
      </h1>

      <Link
        to="/portfolio"
        id="cta"
        className="animate-fade-in mt-10 cursor-pointer border-2 px-10 py-4 font-display text-sm tracking-[0.4em] transition-all hover:bg-[#00E5FF]/10 hover:shadow-[0_0_30px_#00E5FF]"
        style={{
          borderColor: "#00E5FF",
          color: "#00E5FF",
          background: "transparent",
          animationDelay: "0.8s",
          animationFillMode: "both",
        }}
      >
        ENTER EXPERIENCE
      </Link>

      <div className="icon-nav absolute bottom-12 flex gap-12 sm:gap-[60px]">
        {icons.map((it, i) => (
          <Link
            key={it.to}
            to={it.to}
            className="icon group animate-fade-in flex cursor-pointer flex-col items-center text-center text-3xl transition-transform hover:scale-110"
            style={{
              animationDelay: `${1 + i * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            <span className="drop-shadow-[0_0_10px_#00E5FF]">{it.emoji}</span>
            <span
              className="tooltip mt-1 block text-[0.7rem] tracking-[0.25em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: "#00E5FF" }}
            >
              {it.tip}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
