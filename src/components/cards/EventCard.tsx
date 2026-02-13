import { GlassCard } from "../ui/GlassCard";
import { Badge } from "../ui/Badge";
import { Event } from "../../data/events";
import { motion } from "framer-motion";
import { MapPin, Clock3, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const capacityPercent = Math.round((event.filled / event.capacity) * 100);

  const statusVariant =
    event.status === "Open"
      ? "success"
      : event.status === "Full"
      ? "warning"
      : "danger";

  const statusLabel =
    event.status === "Open"
      ? "Open for registrations"
      : event.status === "Full"
      ? "Waitlist only"
      : "Closed";

  const statusGlowColor =
    event.status === "Open"
      ? "bg-emerald-400/40"
      : event.status === "Full"
      ? "bg-amber-400/40"
      : "bg-rose-400/40";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <GlassCard className="p-4 sm:p-5 relative overflow-hidden group">
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-transparent via-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition"
          aria-hidden="true"
        />
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-slate-50">
              {event.title}
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Capacity {event.filled}/{event.capacity}
            </p>
          </div>
          <div className="relative">
            <Badge variant={statusVariant} className="text-[10px]">
              {event.status}
            </Badge>
            <span
              className={`absolute inset-0 rounded-3xl ${statusGlowColor} blur-md opacity-70 animate-pulse-soft -z-10`}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-300">
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3 w-3" />
            {event.date} • {event.time}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {event.venue}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users className="h-3 w-3" />
            {capacityPercent}% filled
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {event.tags.map(tag => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10px] px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Status: {statusLabel}</span>
            <span>{capacityPercent}%</span>
          </div>
          <div className="h-2 rounded-3xl bg-slate-900/60 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${capacityPercent}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
