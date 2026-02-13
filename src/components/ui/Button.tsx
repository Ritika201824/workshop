import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", leftIcon, rightIcon, children, ...props },
    ref
  ) => {
    const base =
      variant === "primary"
        ? "btn-primary"
        : variant === "outline"
        ? "btn-outline"
        : "rounded-3xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10 transition";

    return (
      <button
        ref={ref}
        className={cn(base, "btn-ripple group", className)}
        {...props}
      >
        {leftIcon && (
          <span className="flex items-center text-sm">{leftIcon}</span>
        )}
        <span>{children}</span>
        {rightIcon && (
          <span className="flex items-center text-sm">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
