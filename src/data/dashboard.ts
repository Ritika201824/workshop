export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  change: number;
}

export interface MembershipPoint {
  month: string;
  members: number;
}

export interface ParticipationSlice {
  name: string;
  value: number;
}

export const stats: StatItem[] = [
  {
    id: "active-societies",
    label: "Active Societies",
    value: 42,
    change: 12
  },
  {
    id: "total-members",
    label: "Total Members",
    value: 1560,
    suffix: "+",
    change: 18
  },
  {
    id: "events-month",
    label: "Events this month",
    value: 27,
    change: 9
  },
  {
    id: "engagement-score",
    label: "Engagement Score",
    value: 92,
    suffix: "/100",
    change: 6
  }
];

export const membershipGrowth: MembershipPoint[] = [
  { month: "Sep", members: 780 },
  { month: "Oct", members: 920 },
  { month: "Nov", members: 1050 },
  { month: "Dec", members: 1180 },
  { month: "Jan", members: 1340 },
  { month: "Feb", members: 1560 }
];

export const participationBreakdown: ParticipationSlice[] = [
  { name: "Technical", value: 38 },
  { name: "Cultural", value: 24 },
  { name: "Sports", value: 18 },
  { name: "Entrepreneurship", value: 12 },
  { name: "Arts", value: 8 }
];

export const recentActivity = [
  {
    id: "ra-1",
    title: "HackWave 2026 registrations opened",
    timestamp: "2h ago",
    type: "Event"
  },
  {
    id: "ra-2",
    title: "ML Guild crossed 100 members",
    timestamp: "6h ago",
    type: "Milestone"
  },
  {
    id: "ra-3",
    title: "New society proposal: Sustainability Circle",
    timestamp: "1d ago",
    type: "Proposal"
  },
  {
    id: "ra-4",
    title: "Battle of Bands shortlisted 8 teams",
    timestamp: "2d ago",
    type: "Update"
  }
];

export const upcomingEventsBrief = [
  {
    id: "ue-1",
    title: "Startup Demo Day",
    date: "15 Mar",
    time: "4:00 PM",
    location: "Auditorium A"
  },
  {
    id: "ue-2",
    title: "Spring Production: 'Parallel Lives'",
    date: "2 Apr",
    time: "7:30 PM",
    location: "Black Box Theatre"
  },
  {
    id: "ue-3",
    title: "Inter-College Sports Meet",
    date: "30 Mar",
    time: "8:00 AM",
    location: "Main Ground"
  }
];
