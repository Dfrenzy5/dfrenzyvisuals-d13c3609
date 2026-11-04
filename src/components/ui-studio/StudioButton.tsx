import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import {
  studioButtonBase,
  studioButtonSizes,
  studioButtonVariants,
  type StudioButtonSize,
  type StudioButtonVariant,
} from "@/components/ui-studio/studioButtonStyles";

type Variant = StudioButtonVariant;
type Size = StudioButtonSize;

export interface StudioButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export const StudioButton = forwardRef<HTMLButtonElement, StudioButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => (
    <button
      ref={ref}
      className={cn(studioButtonBase, studioButtonVariants[variant], studioButtonSizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  ),
);
StudioButton.displayName = "StudioButton";
