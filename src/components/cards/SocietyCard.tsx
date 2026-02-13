import { MouseEvent, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Users } from "lucide-react";
import { Society } from "../../data/societies";
import { formatNumber } from "../../utils/formatNumber";

interface SocietyCardProps {
  society: Society;
}

export function SocietyCard({ society }: SocietyCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="perspective-[1200px]"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <GlassCard className="p-4 sm:p-5 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            aria-hidden="true"
          >
            <div
              className="absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl"
              style={{ background: society.logoColor }}
            />
          </div>
          <div className="relative flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className="h-11 w-11 rounded-3xl border border-white/30 flex items-center justify-center text-xs font-semibold text-slate-900"
                style={{ background: society.logoColor }}
              >
                {society.code}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                  {society.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {society.category}
                </p>
              </div>
            </div>
            {society.isFeatured && (
              <Badge variant="success" className="text-[10px]">
                Featured
              </Badge>
            )}
          </div>

          <p className="relative mt-3 text-xs sm:text-sm text-slate-300 line-clamp-3">
            {society.description}
          </p>

          <div className="relative mt-3 flex flex-wrap gap-1.5">
            {society.tags.map(tag => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] px-2 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="relative mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-3xl bg-black/30 border border-white/20">
                <Users className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="font-semibold text-slate-50">
                  {formatNumber(society.members)} members
                </p>
                <p className="text-[11px] text-emerald-300">
                  +{society.growth}% this semester
                </p>
              </div>
            </div>
            <Button variant="outline" className="text-xs px-3 py-1.5">
              Join
            </Button>
          </div>

          <motion.div
            className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-neon-cyan/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
