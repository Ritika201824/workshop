import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Calendar,
  Sparkles
} from "lucide-react";
import { cn } from "../../utils/cn";

const ITEMS = [
  { to: "/", label: "Home", icon: LayoutDashboard },
  { to: "/societies", label: "Societies", icon: Users },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/ai", label: "AI", icon: Sparkles }
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-between rounded-3xl border border-white/15 bg-slate-900/70 px-2 py-1.5 shadow-soft lg:hidden">
      {ITEMS.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex flex-1 flex-col items-center gap-0.5 rounded-3xl px-2 py-1 text-[10px]",
                isActive
                  ? "bg-white/10 text-neon-cyan"
                  : "text-slate-300"
              )
            }
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
