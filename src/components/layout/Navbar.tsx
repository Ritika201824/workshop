import { useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "../ui/Input";
import { ThemeToggle } from "./ThemeToggle";
import { NotificationDropdown } from "./NotificationDropdown";
import { GlobalSearchResults } from "./GlobalSearchResults";
import { useSearch } from "../../context/SearchContext";
import { useCommandPalette } from "../../context/CommandPaletteContext";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { query, setQuery, setIsOpen, handleKeyDown } = useSearch();
  const { open: openCommand } = useCommandPalette();

  const handleSelectResult = () => {
    // destination is already encoded in GlobalSearchResults navigation
    // this keeps keyboard Enter handling consistent
    if (location.pathname.startsWith("/events")) {
      navigate("/events");
    } else {
      navigate("/societies");
    }
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ui bg-surface px-4 py-3 shadow-card backdrop-blur-xl transition-colors duration-500">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-3xl bg-gradient-to-tr from-neon-cyan to-neon-purple shadow-glow lg:hidden">
          <span className="text-[11px] font-semibold text-slate-900">
            CS
          </span>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">
            Society Console
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {location.pathname === "/"
              ? "Overview"
              : location.pathname.replace("/", "")}
          </p>
        </div>
      </div>

      <div className="relative max-w-md flex-1 hidden sm:block">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            <Search className="h-3.5 w-3.5" />
          </span>
          <Input
            placeholder="Search societies, events..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setIsOpen(!!e.target.value);
            }}
            onFocus={() => setIsOpen(!!query)}
            onKeyDown={e => handleKeyDown(e, () => handleSelectResult())}
            className="pl-8 pr-20 text-xs"
          />
          <button
            type="button"
            onClick={openCommand}
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-2xl border border-slate-200 bg-white/80 px-2 py-0.5 text-[10px] text-slate-500 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10 transition-colors duration-300"
          >
            <kbd className="font-mono text-[10px]">Ctrl</kbd>
            <span>+</span>
            <kbd className="font-mono text-[10px]">K</kbd>
          </button>
        </div>
        <GlobalSearchResults />
      </div>

      <div className="flex items-center gap-2">
        <NotificationDropdown />
        <ThemeToggle />
        <button className="hidden sm:flex items-center gap-1 rounded-3xl border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-800 shadow-soft dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:shadow-softDark transition-colors duration-300">
          <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple shadow-glowCyan" />
          <span>Riya</span>
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}
