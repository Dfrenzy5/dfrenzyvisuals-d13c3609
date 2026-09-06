import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Download, ShieldCheck, Loader2, AlertTriangle } from "lucide-react";
import { registerBlueprintLead } from "@/lib/blueprint.functions";
import { studioLinkClass } from "@/components/ui-studio/StudioButton";
import { track } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^@\s]+@[^@\s.]+\.[^@\s]+$/;

export function BlueprintForm() {
  const register = useServerFn(registerBlueprintLead);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(true);
  const started = useRef(false);
  const inFlight = useRef(false);

  const onFocus = () => {
    if (!started.current) {
      started.current = true;
      track("blueprint_form_started");
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    const firstName = String(fd.get("firstName") ?? "").trim();
    const marketingConsent = fd.get("marketingConsent") === "on";
    const company = String(fd.get("company") ?? "");

    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      track("blueprint_registration_failed", { reason: "client_validation" });
      return;
    }

    inFlight.current = true;
    setStatus("loading");
    setError(null);
    track("blueprint_email_submitted");

    try {
      const result = await register({
        data: { email, firstName, marketingConsent, company },
      });
      if (!result.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong. Please try again.");
        track("blueprint_registration_failed", { reason: "server" });
        return;
      }
      setDownloadLink(result.downloadUrl ?? result.downloadLink ?? null);
      setEmailSent(result.emailSent !== false);
      setStatus("success");
      track("blueprint_registration_success", {
        returning: result.alreadyRegistered === true,
      });
      track(
        result.emailSent !== false
          ? "blueprint_email_delivery_success"
          : "blueprint_email_delivery_failed",
      );
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("We couldn't reach the studio server. Please try again.");
      track("blueprint_registration_failed", { reason: "network" });
    } finally {
      inFlight.current = false;
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 w-full max-w-md animate-warp-in text-center">
        <div className="flex items-center justify-center gap-2 text-neon-bright">
          <ShieldCheck className="h-5 w-5" />
          <span className="font-display text-[11px] tracking-[0.3em]">
            YOUR BLUEPRINT IS READY
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {emailSent
            ? "Your free AI Content Creator Blueprint is ready to download. We've also sent a copy to your email."
            : "Your free AI Content Creator Blueprint is ready to download. Email delivery is temporarily unavailable — please download it here now."}
        </p>
        {downloadLink && (
          <a
            href={downloadLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("blueprint_download_clicked")}
            className={studioLinkClass("primary", "lg") + " mt-6 w-full"}
          >
            <Download className="h-4 w-4" />
            DOWNLOAD THE BLUEPRINT
          </a>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch gap-4 text-left"
    >
      {/* Honeypot — hidden from humans and assistive tech */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="bp-company">Company</label>
        <input id="bp-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="bp-first-name"
          className="font-display text-[10px] tracking-[0.3em] text-muted-foreground"
        >
          FIRST NAME <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <input
          id="bp-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          maxLength={80}
          onFocus={onFocus}
          placeholder="Daniel"
          className="mt-2 w-full rounded-full hairline surface-2 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-neon/60"
        />
      </div>

      <div>
        <label
          htmlFor="bp-email"
          className="font-display text-[10px] tracking-[0.3em] text-muted-foreground"
        >
          EMAIL ADDRESS
        </label>
        <input
          id="bp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          onFocus={onFocus}
          aria-describedby="bp-privacy"
          placeholder="you@example.com"
          className="mt-2 w-full rounded-full hairline surface-2 bg-transparent px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-neon/60"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          name="marketingConsent"
          className="mt-1 h-4 w-4 shrink-0 accent-[hsl(var(--neon,190_100%_50%))]"
        />
        <span className="text-[12px] leading-relaxed text-muted-foreground">
          Yes, I'd like to receive occasional AI filmmaking, content creation and
          DFrenzy Visuals updates by email.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className={studioLinkClass("primary", "lg") + " w-full disabled:opacity-60"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            SENDING…
          </>
        ) : (
          "GET THE FREE BLUEPRINT"
        )}
      </button>

      {status === "error" && error && (
        <p
          role="alert"
          className="flex items-center gap-2 text-[12px] text-red-400"
        >
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <p id="bp-privacy" className="text-[11px] leading-relaxed text-muted-foreground/70">
        Your email is used to deliver the Blueprint and, if you opt in, occasional
        DFrenzy Visuals updates. You can unsubscribe at any time.
      </p>
    </form>
  );
}
