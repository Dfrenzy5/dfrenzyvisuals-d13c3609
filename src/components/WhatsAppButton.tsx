import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/2347044775158?text=Hello%20DFrenzy%20Visuals!%20I'm%20interested%20in%20your%20AI%20video%20production%20and%20creative%20services.%20I'd%20like%20to%20discuss%20my%20project.";

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 400);
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1600);
    }, 12000);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="group fixed bottom-6 right-6 z-[100]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute right-[72px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[oklch(0.78_0.15_85/0.4)] bg-deep/80 px-4 py-2 font-display text-[10px] tracking-[0.25em] text-[oklch(0.88_0.15_85)] opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 sm:inline-block"
        style={{ boxShadow: "0 0 20px oklch(0.78 0.15 85 / 0.25)" }}
      >
        CHAT WITH DFRENZY VISUALS
      </span>

      {/* Pulse ring */}
      {pulse && (
        <span
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            animation: "wa-pulse 1.6s ease-out",
            boxShadow: "0 0 0 0 oklch(0.78 0.18 150 / 0.7)",
          }}
        />
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DFrenzy Visuals on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.78_0.15_85)] sm:h-16 sm:w-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.04 150 / 0.7), oklch(0.08 0.02 150 / 0.85))",
          backdropFilter: "blur(14px) saturate(140%)",
          borderColor: "oklch(0.78 0.15 85 / 0.55)",
          boxShadow:
            "0 8px 32px oklch(0 0 0 / 0.45), 0 0 0 1px oklch(0.78 0.15 85 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.08)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 8px 40px oklch(0.65 0.2 150 / 0.55), 0 0 0 1px oklch(0.78 0.15 85 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 8px 32px oklch(0 0 0 / 0.45), 0 0 0 1px oklch(0.78 0.15 85 / 0.15), inset 0 1px 0 oklch(1 0 0 / 0.08)";
        }}
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="#25D366"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.27 1.964.788 2.792.04.062.114.171.214.328.93 1.476 3.07 4.116 4.547 4.745.616.272 1.39.62 2.078.62.918 0 2.395-.93 2.78-1.79.143-.315.114-.59.143-.93 0-.143-.029-.158-.158-.244-.143-.085-2.49-1.232-2.752-1.232z" />
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.755.7 5.346 1.93 7.605L0 32l8.6-2.26A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.418a13.4 13.4 0 0 1-6.83-1.876l-.49-.29-5.103 1.34 1.36-4.97-.32-.51A13.39 13.39 0 0 1 2.6 16C2.6 8.604 8.604 2.6 16 2.6S29.4 8.604 29.4 16 23.396 29.418 16 29.418z" />
        </svg>
      </a>
    </div>
  );
}
