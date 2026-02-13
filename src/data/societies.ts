export type SocietyCategory =
  | "Technical"
  | "Cultural"
  | "Sports"
  | "Entrepreneurship"
  | "Arts";

export interface Society {
  id: string;
  name: string;
  code: string;
  category: SocietyCategory;
  description: string;
  logoColor: string;
  tags: string[];
  members: number;
  growth: number;
  isFeatured: boolean;
}

export const societies: Society[] = [
  {
    id: "cs-club",
    name: "Computer Science Society",
    code: "CSS",
    category: "Technical",
    description:
      "Hands-on projects, hackathons, and weekly talks on emerging technologies.",
    logoColor: "#00f5ff",
    tags: ["Hackathons", "Open Source", "AI"],
    members: 180,
    growth: 24,
    isFeatured: true
  },
  {
    id: "ml-guild",
    name: "Machine Learning Guild",
    code: "MLG",
    category: "Technical",
    description:
      "Research-focused community exploring ML, deep learning, and data science.",
    logoColor: "#a855f7",
    tags: ["Research", "Competitions", "Paper Reading"],
    members: 120,
    growth: 32,
    isFeatured: true
  },
  {
    id: "drama-soc",
    name: "Dramatics & Theatre Society",
    code: "DRAMS",
    category: "Arts",
    description:
      "Stage productions, improv nights, and theatre appreciation sessions.",
    logoColor: "#f97316",
    tags: ["Stage", "Production", "Improv"],
    members: 95,
    growth: 14,
    isFeatured: false
  },
  {
    id: "entre-club",
    name: "Entrepreneurship Cell",
    code: "E-Cell",
    category: "Entrepreneurship",
    description:
      "Startup incubations, pitch decks, and mentorship from industry founders.",
    logoColor: "#22c55e",
    tags: ["Startups", "Mentorship", "Funding"],
    members: 210,
    growth: 41,
    isFeatured: true
  },
  {
    id: "music-soc",
    name: "Music & Acoustics Society",
    code: "MAS",
    category: "Cultural",
    description:
      "Bands, acoustic evenings, and music production workshops for all levels.",
    logoColor: "#0ea5e9",
    tags: ["Bands", "Production", "Vocals"],
    members: 130,
    growth: 18,
    isFeatured: false
  },
  {
    id: "sports-council",
    name: "Sports Council",
    code: "SPORTS",
    category: "Sports",
    description:
      "University-wide sports events across football, basketball, athletics and more.",
    logoColor: "#facc15",
    tags: ["Tournaments", "Fitness", "Training"],
    members: 260,
    growth: 28,
    isFeatured: false
  }
];
