import { motion } from "framer-motion";
import { societies } from "../data/societies";
import { SocietyCard } from "../components/cards/SocietyCard";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";

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

function SocietiesPage() {
  return (
    <PageTransition>
      <div className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">
              Societies directory
            </h1>
            <p className="text-xs text-slate-400">
              Explore and join active student-run societies.
            </p>
          </div>
          <Badge variant="outline" className="self-start text-[11px]">
            {societies.length} active societies
          </Badge>
        </div>

        <GlassCard className="p-3 sm:p-4">
          <p className="text-[11px] text-slate-300">
            Use the global search in the navbar to instantly filter societies
            by tags, names or categories.
          </p>
        </GlassCard>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {societies.map(society => (
            <SocietyCard key={society.id} society={society} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default SocietiesPage;
