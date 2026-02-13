import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../ui/Button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative flex h-9 w-16 items-center justify-between px-1.5 py-1.5"
    >
      <div className="relative flex-1 flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ y: 8, opacity: 0, rotate: -20 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -10, opacity: 0, rotate: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-neon-cyan"
            >
              <Moon className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ y: -8, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 10, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-amber-300"
            >
              <Sun className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        layout
        className="absolute inset-0"
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <motion.div
          className="absolute h-7 w-7 rounded-3xl bg-slate-950/70 border border-white/20 shadow-soft"
          initial={false}
          animate={{
            x: isDark ? "1.25rem" : "0rem",
            rotate: isDark ? 2 : 0
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
      </motion.div>
    </Button>
  );
}
