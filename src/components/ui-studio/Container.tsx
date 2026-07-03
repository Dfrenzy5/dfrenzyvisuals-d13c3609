import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "std",
}: {
  children: ReactNode;
  className?: string;
  size?: "std" | "max" | "reading";
}) {
  const cls =
    size === "max" ? "container-max" : size === "reading" ? "container-reading" : "container-std";
  return <div className={cn(cls, className)}>{children}</div>;
}

export function Section({
  id,
  children,
  className,
  ariaLabelledby,
  ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
      className={cn("relative section-pad", className)}
    >
      {children}
    </section>
  );
}