import { motion } from "framer-motion";
import { events } from "../data/events";
import { EventCard } from "../components/cards/EventCard";
import { Badge } from "../components/ui/Badge";

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

function EventsPage() {
  const open = events.filter(e => e.status === "Open").length;

  return (
    <PageTransition>
      <div className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">
              Upcoming events
            </h1>
            <p className="text-xs text-slate-400">
              Track registrations, capacity and status in real-time.
            </p>
          </div>
          <Badge variant="outline" className="self-start text-[11px]">
            {open} open · {events.length} total
          </Badge>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default EventsPage;
