export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "event" | "society" | "system";
}

export const notificationsSeed: NotificationItem[] = [
  {
    id: "n-1",
    title: "New event: HackWave 2026",
    description: "Registrations now open from Computer Science Society.",
    time: "5 min ago",
    read: false,
    type: "event"
  },
  {
    id: "n-2",
    title: "ML Guild waitlist cleared",
    description: "You have been moved from waitlist to confirmed.",
    time: "45 min ago",
    read: false,
    type: "society"
  },
  {
    id: "n-3",
    title: "Command palette shortcut",
    description: "Press Ctrl+K to quickly jump between pages.",
    time: "Today",
    read: true,
    type: "system"
  },
  {
    id: "n-4",
    title: "Battle of Bands closed",
    description: "Registrations are now closed as capacity is reached.",
    time: "Yesterday",
    read: true,
    type: "event"
  }
];
