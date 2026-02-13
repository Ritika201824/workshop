import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  KeyboardEvent
} from "react";
import { societies, Society } from "../data/societies";
import { events, Event } from "../data/events";

interface SearchResult {
  type: "society" | "event";
  id: string;
  label: string;
  meta: string;
}

interface SearchContextValue {
  query: string;
  setQuery: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  results: SearchResult[];
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
  handleKeyDown: (
    e: KeyboardEvent<HTMLInputElement>,
    onSelect: (r: SearchResult) => void
  ) => void;
}

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const societyMatches: SearchResult[] = societies
      .filter(
        s =>
          s.name.toLowerCase().includes(q) ||
          s.tags.some(t => t.toLowerCase().includes(q))
      )
      .slice(0, 5)
      .map(s => ({
        type: "society",
        id: s.id,
        label: s.name,
        meta: `${s.category} • ${s.members} members`
      }));

    const eventMatches: SearchResult[] = events
      .filter(
        e =>
          e.title.toLowerCase().includes(q) ||
          e.tags.some(t => t.toLowerCase().includes(q))
      )
      .slice(0, 5)
      .map(e => ({
        type: "event",
        id: e.id,
        label: e.title,
        meta: e.date
      }));

    return [...societyMatches, ...eventMatches];
  }, [query]);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    onSelect: (result: SearchResult) => void
  ) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % results.length);
      setIsOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(prev =>
        prev - 1 < 0 ? results.length - 1 : prev - 1
      );
      setIsOpen(true);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const result = results[highlightedIndex];
      if (result) {
        onSelect(result);
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        isOpen,
        setIsOpen,
        results,
        highlightedIndex,
        setHighlightedIndex,
        handleKeyDown
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}

export type { SearchResult };
