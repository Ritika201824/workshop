import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { formatNumber } from "../../utils/formatNumber";
import { cn } from "../../utils/cn";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  change: number;
}

export function StatCard({
  label,
  value,
  suffix,
  change
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { stiffness: 90, damping: 20 });

  useEffect(() => {
    spring.set(value);
    const unsubscribe = spring.on("change", v =>
      setDisplayValue(Math.round(v))
    );
    return () => unsubscribe();
  }, [spring, value]);

  const changePositive = change >= 0;

  return (
    <GlassCard className="p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </span>
        <span
          className={cn(
            "text-xs font-semibold px-2 py-1 rounded-3xl",
            changePositive
              ? "bg-emerald-500/15 text-emerald-300"
              : "bg-rose-500/15 text-rose-300"
          )}
        >
          {changePositive ? "+" : "-"}
          {Math.abs(change)}%
        </span>
      </div>
      <div className="flex items-end justify-between gap-4">
        <motion.div
          className="text-2xl sm:text-3xl font-semibold text-slate-50"
          aria-label={`${label} value`}
        >
          {formatNumber(displayValue)}
          {suffix && (
            <span className="text-sm text-slate-400 ml-1">{suffix}</span>
          )}
        </motion.div>
        <div className="h-8 w-12 rounded-3xl bg-gradient-to-tr from-neon-cyan/40 to-neon-purple/40 blur-sm" />
      </div>
    </GlassCard>
  );
}
