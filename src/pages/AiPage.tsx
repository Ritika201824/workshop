import { motion } from "framer-motion";
import { GlassCard } from "../components/ui/GlassCard";
import { societies } from "../data/societies";
import { events } from "../data/events";
import { Badge } from "../components/ui/Badge";
import { Sparkles } from "lucide-react";

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function AiPage() {
  const techSocieties = societies.filter(s =>
    ["Technical", "Entrepreneurship"].includes(s.category)
  );
  const highGrowth = techSocieties
    .slice()
    .sort((a, b) => b.growth - a.growth)
    .slice(0, 2);
  const eveningEvents = events.filter(e => e.time >= "17:00");

  return (
    <PageTransition>
      <div className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">
              AI recommendations
            </h1>
            <p className="text-xs text-slate-400">
              Personalised suggestions based on engagement patterns.
            </p>
          </div>
          <Badge variant="outline" className="self-start text-[11px]">
            Experimental · Mock AI
          </Badge>
        </div>

        <GlassCard className="relative overflow-hidden p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -top-16 left-10 h-40 w-40 rounded-full bg-neon-cyan/30 blur-3xl"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-neon-purple/40 blur-3xl"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          <div className="relative flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-3xl bg-black/80 border border-neon-cyan/40">
              <Sparkles className="h-4 w-4 text-neon-cyan" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-50">
                AI-curated plan for this month
              </p>
              <p className="text-xs text-slate-400">
                Based on high-growth technical communities and evening events.
              </p>
            </div>
          </div>

          <div className="relative mt-4 grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Recommended societies
              </p>
              {highGrowth.map(society => (
                <div
                  key={society.id}
                  className="rounded-3xl border border-white/10 bg-black/40 px-3 py-2 text-xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-slate-50">
                      {society.name}
                    </p>
                    <Badge variant="success" className="text-[10px]">
                      +{society.growth}% growth
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-300">
                    {society.description}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {society.tags.slice(0, 3).map(tag => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Evening events to attend
              </p>
              {eveningEvents.slice(0, 3).map(event => (
                <div
                  key={event.id}
                  className="flex items-start justify-between gap-2 rounded-3xl border border-white/10 bg-black/40 px-3 py-2 text-xs"
                >
                  <div>
                    <p className="font-semibold text-slate-50">
                      {event.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-300">
                      {event.date} • {event.time} • {event.venue}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      variant={
                        event.status === "Open"
                          ? "success"
                          : event.status === "Full"
                          ? "warning"
                          : "danger"
                      }
                      className="text-[10px]"
                    >
                      {event.status}
                    </Badge>
                    <span className="text-[10px] text-slate-400">
                      {((event.filled / event.capacity) * 100).toFixed(0)}% filled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-4 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-3xl bg-black/60 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-sparkle" />
              Mock embeddings & behaviour data only.
            </span>
            <span>
              This page is safe to iterate on without touching any back-end.
            </span>
          </div>
        </GlassCard>
      </div>
    </PageTransition>
  );
}

export default AiPage;
