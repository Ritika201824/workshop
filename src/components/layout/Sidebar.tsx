import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/cn";

const NAV_ITEMS = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/societies", label: "Societies", icon: Users },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/ai", label: "AI Studio", icon: Sparkles }
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!isDesktop) {
    return (
      <div className="lg:hidden">
        <button
          className="fixed left-4 top-4 z-30 rounded-full border border-slate-200 bg-white/90 p-2 shadow-soft dark:border-white/20 dark:bg-black/60 dark:shadow-softDark transition-colors duration-500"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <X className="h-4 w-4 text-slate-100" />
          ) : (
            <Menu className="h-4 w-4 text-slate-100" />
          )}
        </button>
        {mobileOpen && (
          <div className="fixed inset-0 z-20 bg-slate-900/20 backdrop-blur-md dark:bg-slate-950/80 transition-colors duration-500">
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="h-full w-64 glass-card p-4 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Campus Societies
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-slate-200 bg-white p-1 shadow-soft dark:border-white/20 dark:bg-white/5 dark:shadow-softDark transition-colors duration-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <nav className="space-y-1">
                {NAV_ITEMS.map(item => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-2 rounded-3xl px-3 py-2 text-xs font-medium",
                          isActive
                            ? "bg-slate-100 text-neon-cyan dark:bg-white/10"
                            : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                        )
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-100 dark:bg-black/40">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.label}</span>
                    </NavLink>
                  );
                })}
              </nav>
            </motion.aside>
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.aside
      className="hidden lg:flex h-screen flex-col glass-card p-3 transition-all duration-500"
      animate={{ width: collapsed ? 84 : 260 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
    >
      <div className="flex items-center justify-between gap-2 px-1 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-3xl bg-gradient-to-tr from-neon-cyan to-neon-purple shadow-glowCyan">
            <span className="text-[11px] font-semibold text-slate-900">
              CS
            </span>
          </div>
          {!collapsed && (
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-50">
                Campus Societies
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Management Console
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-full border border-slate-200 bg-white p-1 text-slate-700 hover:bg-slate-50 shadow-soft dark:border-white/20 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:shadow-softDark transition-colors duration-300"
          aria-label="Collapse sidebar"
        >
          <Menu className="h-3 w-3" />
        </button>
      </div>
      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 rounded-3xl px-2 py-2 text-xs font-medium",
                  isActive
                    ? "bg-slate-100 text-neon-cyan dark:bg-white/10"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                )
              }
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-100 dark:bg-black/40">
                <Icon className="h-4 w-4" />
              </span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
      {!collapsed && (
        <div className="mt-2 rounded-3xl border border-slate-200 bg-white px-3 py-2 shadow-soft dark:border-white/10 dark:bg-black/40 dark:shadow-softDark transition-colors duration-300">
          <p className="text-[11px] font-medium text-slate-800 dark:text-slate-200">
            Tip
          </p>
          <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
            Press <kbd className="rounded border border-slate-300 px-1 dark:border-white/20">Ctrl</kbd>+
            <kbd className="rounded border border-slate-300 px-1 dark:border-white/20">K</kbd> for
            command palette.
          </p>
        </div>
      )}
    </motion.aside>
  );
}
