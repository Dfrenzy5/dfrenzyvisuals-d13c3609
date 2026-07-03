import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-[0.3em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "border border-neon bg-neon text-primary-foreground hover:bg-neon-bright hover:shadow-[0_0_28px_oklch(0.78_0.18_230/0.55)]",
  secondary:
    "border border-neon/50 text-foreground hover:border-neon hover:text-neon-bright hover:bg-neon/5",
  ghost:
    "text-foreground/80 hover:text-neon-bright",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-[11px]",
  lg: "px-8 py-4 text-xs",
};

export interface StudioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const StudioButton = forwardRef<HTMLButtonElement, StudioButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  ),
);
StudioButton.displayName = "StudioButton";

export const studioLinkClass = (variant: Variant = "primary", size: Size = "md") =>
  cn(base, variants[variant], sizes[size]);