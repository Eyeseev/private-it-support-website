import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[var(--radius-md)] px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-6 sm:py-3";

const variantStyles = {
  primary:
    "bg-[linear-gradient(135deg,_#2ed3b7,_#1e9e8a)] text-[#041014] shadow-[0_12px_30px_rgba(46,211,183,0.35)] focus-visible:ring-[rgba(46,211,183,0.6)] hover:shadow-[0_16px_50px_rgba(46,211,183,0.45)] hover:translate-y-[-1px]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:border-white/20 hover:bg-white/8 focus-visible:ring-white/20",
  ghost:
    "text-[var(--text-muted)] hover:text-white hover:bg-white/5 border border-transparent focus-visible:ring-white/10",
};

type Variant = keyof typeof variantStyles;

export function buttonVariants(variant: Variant = "primary", className?: string) {
  return cn(baseStyles, variantStyles[variant], className);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants(variant, className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
