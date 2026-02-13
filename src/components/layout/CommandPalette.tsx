import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCommandPalette } from "../../context/CommandPaletteContext";
import { Input } from "../ui/Input";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Command,
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles
} from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  path: string;
  icon: JSX.Element;
}

const COMMANDS: CommandItem[] = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    path: "/",
    shortcut: "D",
    icon: <LayoutDashboard className="h-3.5 w-3.5" />
  },
  {
    id: "societies",
    label: "Open Societies",
    path: "/societies",
    shortcut: "S",
    icon: <Users className="h-3.5 w-3.5" />
  },
  {
    id: "events",
    label: "View Events",
    path: "/events",
    shortcut: "E",
    icon: <Calendar className="h-3.5 w-3.5" />
  },
  {
    id: "ai",
    label: "AI Recommendations",
    path: "/ai",
    shortcut: "A",
    icon: <Sparkles className="h-3.5 w-3.5" />
  }
];

export function CommandPalette() {
  const { isOpen, close, query, setQuery } = useCommandPalette();
  const navigate = useNavigate();
  const location = useLocation();

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return COMMANDS;
    return COMMANDS.filter(c => c.label.toLowerCase().includes(q));
  }, [query]);

  const handleSelect = (item: CommandItem) => {
    if (location.pathname !== item.path) {
      navigate(item.path);
    }
    close();
    setQuery("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-start justify-center bg-slate-950/70 px-3 pt-20 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-lg animate-command-fade"
            role="dialog"
            aria-modal="true"
          >
            <GlassCard className="p-3 space-y-3">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-black/60">
                  <Command className="h-3.5 w-3.5 text-neon-cyan" />
                </span>
                <Input
                  autoFocus
                  placeholder="Jump to page or search..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="border-none bg-transparent px-0 focus:ring-0"
                />
                <span className="hidden text-[10px] text-slate-500 sm:inline-flex items-center gap-1 rounded-3xl border border-white/10 px-2 py-0.5">
                  <kbd className="font-mono text-[10px]">Esc</kbd>
                  <span>close</span>
                </span>
              </div>
              <div className="max-h-72 space-y-1 overflow-y-auto pr-1">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="flex w-full items-center gap-2 rounded-3xl px-2 py-1.5 text-left text-xs hover:bg-white/5"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-3xl bg-black/50">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-[11px] text-slate-50">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {item.path}
                      </p>
                    </div>
                    {item.shortcut && (
                      <span className="inline-flex items-center rounded-2xl border border-white/15 px-1.5 py-0.5 text-[10px] text-slate-400">
                        {item.shortcut}
                      </span>
                    )}
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-2 py-4 text-center text-[11px] text-slate-500">
                    No matches. Try another keyword.
                  </p>
                )}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
