import { motion } from "framer-motion";
import { StatCard } from "../components/cards/StatCard";
import {
  stats,
  membershipGrowth,
  participationBreakdown,
  recentActivity,
  upcomingEventsBrief
} from "../data/dashboard";
import { GlassCard } from "../components/ui/GlassCard";
import { Badge } from "../components/ui/Badge";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Calendar, Clock3 } from "lucide-react";

const PIE_COLORS = [
  "#00f5ff",
  "#a855f7",
  "#f97316",
  "#22c55e",
  "#0ea5e9"
];

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

function DashboardPage() {
  return (
    <PageTransition>
      <div className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">
              Campus health overview
            </h1>
            <p className="text-xs text-slate-400">
              Engagement, membership and events across all societies.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {stats.map(item => (
            <StatCard
              key={item.id}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              change={item.change}
            />
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <GlassCard className="p-4 sm:p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  Membership growth
                </p>
                <p className="text-xs text-slate-400">
                  Total active members over the last 6 months.
                </p>
              </div>
              <Badge variant="outline" className="text-[10px]">
                Members · Monthly
              </Badge>
            </div>
            <div className="h-56 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={membershipGrowth}>
                  <defs>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="#00f5ff"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#00f5ff"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1f2937"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    tickLine={false}
                    fontSize={11}
                  />
                  <YAxis
                    stroke="#6b7280"
                    tickLine={false}
                    fontSize={11}
                    tickFormatter={v => `${v / 1000}k`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 16,
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.4)",
                      padding: "8px 10px"
                    }}
                    labelStyle={{ fontSize: 11, color: "#e5e7eb" }}
                    itemStyle={{ fontSize: 11 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="members"
                    stroke="#00f5ff"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorMembers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-50">
                Participation by category
              </p>
              <Badge variant="outline" className="text-[10px]">
                Events · Share
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-40 w-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={participationBreakdown}
                      innerRadius={35}
                      outerRadius={60}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {participationBreakdown.map((entry, index) => (
                        <Cell
                          key={entry.name}
                          fill={PIE_COLORS[index % PIE_COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-1.5">
                {participationBreakdown.map((slice, index) => (
                  <div
                    key={slice.name}
                    className="flex items-center justify-between text-[11px] text-slate-300"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor:
                            PIE_COLORS[index % PIE_COLORS.length]
                        }}
                      />
                      <span>{slice.name}</span>
                    </div>
                    <span className="text-slate-400">
                      {slice.value}% share
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <GlassCard className="p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-50">
                Recent activity
              </p>
              <Badge variant="outline" className="text-[10px]">
                Stream
              </Badge>
            </div>
            <div className="space-y-2">
              {recentActivity.map(item => (
                <div
                  key={item.id}
                  className="flex items-start gap-2 rounded-3xl px-2 py-2 hover:bg-white/5"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-neon-cyan" />
                  <div className="flex-1">
                    <p className="text-xs text-slate-50">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {item.type} • {item.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-50">
                Upcoming events
              </p>
              <Badge variant="outline" className="text-[10px]">
                Next 30 days
              </Badge>
            </div>
            <div className="space-y-2">
              {upcomingEventsBrief.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-3xl px-2 py-2 hover:bg-white/5 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-3xl bg-black/50">
                      <Calendar className="h-3.5 w-3.5 text-neon-cyan" />
                    </span>
                    <div>
                      <p className="text-slate-50">{item.title}</p>
                      <p className="text-[11px] text-slate-400">
                        {item.date} • {item.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock3 className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
}

export default DashboardPage;
