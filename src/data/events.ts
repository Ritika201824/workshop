export type EventStatus = "Open" | "Full" | "Closed";

export interface Event {
  id: string;
  title: string;
  societyId: string;
  date: string;
  time: string;
  venue: string;
  capacity: number;
  filled: number;
  status: EventStatus;
  tags: string[];
  highlight?: boolean;
}

export const events: Event[] = [
  {
    id: "hackwave-2026",
    title: "HackWave 2026 - 24h Campus Hackathon",
    societyId: "cs-club",
    date: "2026-03-08",
    time: "09:00",
    venue: "Innovation Hub",
    capacity: 200,
    filled: 165,
    status: "Open",
    tags: ["Hackathon", "Product", "AI"],
    highlight: true
  },
  {
    id: "ml-reading",
    title: "ML Paper Reading: Diffusion Models",
    societyId: "ml-guild",
    date: "2026-02-20",
    time: "18:00",
    venue: "Lab 3B",
    capacity: 60,
    filled: 60,
    status: "Full",
    tags: ["Research", "Discussion"]
  },
  {
    id: "ecell-demo-day",
    title: "Startup Demo Day",
    societyId: "entre-club",
    date: "2026-03-15",
    time: "16:00",
    venue: "Auditorium A",
    capacity: 150,
    filled: 112,
    status: "Open",
    tags: ["Pitch", "Investors"]
  },
  {
    id: "spring-play",
    title: "Spring Production: 'Parallel Lives'",
    societyId: "drama-soc",
    date: "2026-04-02",
    time: "19:30",
    venue: "Black Box Theatre",
    capacity: 120,
    filled: 80,
    status: "Open",
    tags: ["Drama", "Performance"],
    highlight: true
  },
  {
    id: "battle-of-bands",
    title: "Battle of Bands",
    societyId: "music-soc",
    date: "2026-03-25",
    time: "19:00",
    venue: "Open Air Stage",
    capacity: 300,
    filled: 300,
    status: "Closed",
    tags: ["Music", "Competition"]
  },
  {
    id: "sports-meet",
    title: "Inter-College Sports Meet",
    societyId: "sports-council",
    date: "2026-03-30",
    time: "08:00",
    venue: "Main Ground",
    capacity: 400,
    filled: 274,
    status: "Open",
    tags: ["Tournament", "Multi-sport"]
  }
];
