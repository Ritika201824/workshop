import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "danger" | "warning" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className
}: BadgeProps) {
  const styles: Record<typeof variant, string> = {
    default: "bg-white/10 text-slate-100 border-white/20",
    success: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
    danger: "bg-rose-500/15 text-rose-300 border-rose-400/40",
    warning: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    outline: "bg-transparent text-slate-200 border-white/20"
  } as const;

  return (
    <span className={cn("badge-base", styles[variant], className)}>
      {children}
    </span>
  );
}
