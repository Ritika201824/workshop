### College Society Management Frontend

A premium, production-ready frontend for a College Society Management System built with **React + Vite + TypeScript**, **Tailwind CSS**, **Framer Motion**, **React Router**, **lucide-react**, and **Recharts**.

---

### Install & run

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

---

### Key features

- **Theming**
  - Light & Dark mode using `dark` class on `<html>` with localStorage persistence
  - Smooth gradient background transitions and glassmorphism cards
  - Animated sun/moon `ThemeToggle` using Framer Motion

- **Layout**
  - Collapsible glass sidebar with smooth width animation
  - Mobile bottom navigation bar
  - Navbar with global search, notifications center, profile dropdown, animated theme toggle
  - Floating chatbot button with bounce + pulse animations

- **Routing & pages**
  - React Router v6.4+ with lazy-loaded routes and skeleton loading
  - `/` Dashboard with animated stat cards, Recharts line & pie charts, recent activity and upcoming events
  - `/societies` directory with 3D tilting `SocietyCard`s
  - `/events` listing with animated capacity bars and glowing status badges
  - `/ai` AI recommendation glass card with sparkle animation and mock “intelligent” suggestions

- **System components**
  - Reusable `GlassCard`, `Button` (ripple + glow), `Badge`, `Input`
  - `StatCard`, `SocietyCard`, `EventCard`
  - Global Search using Context API with live filtering, dropdown results and keyboard navigation
  - Notification center with mark-as-read animation
  - Command Palette (`Ctrl+K`) with animated modal and quick navigation

---

### Folder structure

```txt
src/
  components/
    layout/        # Sidebar, Navbar, ThemeToggle, CommandPalette, etc.
    ui/            # Design-system primitives (Button, GlassCard, Badge, Input, Skeleton)
    cards/         # Domain cards (StatCard, SocietyCard, EventCard)
  context/
    ThemeContext   # Light/Dark theme state with persistence
    SearchContext  # Global search query and results
    CommandPaletteContext
  data/
    dashboard.ts   # Stats, chart data and activity feeds
    societies.ts   # Societies directory mock data
    events.ts      # Events with capacities and statuses
    notifications.ts
  hooks/
    useMediaQuery  # Responsive behaviour (desktop vs mobile)
  pages/
    DashboardPage  # /
    SocietiesPage  # /societies
    EventsPage     # /events
    AiPage         # /ai
  routes/
    AppRouter      # React Router config, lazy routes, skeletons
  styles/
    global.css     # Tailwind setup, Inter font, glassmorphism, design tokens
  utils/
    cn.ts          # clsx wrapper
    formatNumber   # Metric formatting helpers
```

---

### Notes

- Styling uses **Tailwind CSS** exclusively (with utility composition via `@apply`).
- State management uses **React Context API** only (no Redux).
- All data is mock but **realistic**, placed under `src/data/*`, making it safe to iterate on without a backend.