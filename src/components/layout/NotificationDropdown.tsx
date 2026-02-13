import { useState } from "react";
import { Bell } from "lucide-react";
import { notificationsSeed, NotificationItem } from "../../data/notifications";
import { GlassCard } from "../ui/GlassCard";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

export function NotificationDropdown() {
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(notificationsSeed);
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(n =>
        n.id === id
          ? {
              ...n,
              read: true
            }
          : n
      )
    );
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="h-9 w-9 rounded-full px-0"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Open notifications"
      >
        <div className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-neon-cyan animate-pulse-soft" />
          )}
        </div>
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-3 w-80 z-30"
          >
            <GlassCard className="p-3 space-y-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-semibold text-slate-50">
                  Notifications
                </p>
                {unreadCount > 0 && (
                  <Badge variant="success" className="text-[10px] px-2">
                    {unreadCount} new
                  </Badge>
                )}
              </div>
              <div className="max-h-80 space-y-1.5 overflow-y-auto pr-1">
                {notifications.map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => markAsRead(item.id)}
                    className="w-full text-left rounded-3xl px-2 py-2 hover:bg-white/5 flex items-start gap-2"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-medium text-slate-50">
                          {item.title}
                        </p>
                        <span className="text-[10px] text-slate-400">
                          {item.time}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-300">
                        {item.description}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Badge
                          variant="outline"
                          className="text-[10px] px-2 py-0.5"
                        >
                          {item.type}
                        </Badge>
                        {!item.read && (
                          <motion.span
                            className="h-4 w-4 rounded-full border border-neon-cyan/40"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              {notifications.length === 0 && (
                <p className="text-xs text-slate-400 text-center py-4">
                  You are all caught up.
                </p>
              )}
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
