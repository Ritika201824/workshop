import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn("glass-card glass-hover card-hover", className)}>
      {children}
    </div>
  );
}
