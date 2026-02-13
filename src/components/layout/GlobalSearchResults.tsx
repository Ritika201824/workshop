import { useSearch } from "../../context/SearchContext";
import { GlassCard } from "../ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GlobalSearchResults() {
  const {
    results,
    isOpen,
    highlightedIndex,
    setIsOpen,
    setHighlightedIndex
  } = useSearch();
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    const result = results[index];
    if (!result) return;
    setHighlightedIndex(index);
    if (result.type === "society") {
      navigate("/societies");
    } else {
      navigate("/events");
    }
    setIsOpen(false);
  };

  if (!results.length || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 top-11 z-30"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 3 }}
          transition={{ duration: 0.15 }}
        >
          <GlassCard className="p-2 space-y-1">
            {results.map((r, index) => (
              <button
                key={`${r.type}-${r.id}`}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => handleClick(index)}
                className={`flex w-full items-center gap-2 rounded-3xl px-2 py-1.5 text-left text-xs ${
                  index === highlightedIndex
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-3xl bg-black/40">
                  {r.type === "society" ? (
                    <Users className="h-3.5 w-3.5" />
                  ) : (
                    <Calendar className="h-3.5 w-3.5" />
                  )}
                </span>
                <div className="flex-1">
                  <p className="text-[11px] font-medium text-slate-50">
                    {r.label}
                  </p>
                  <p className="text-[10px] text-slate-400">{r.meta}</p>
                </div>
                <Search className="h-3.5 w-3.5 text-slate-500" />
              </button>
            ))}
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
