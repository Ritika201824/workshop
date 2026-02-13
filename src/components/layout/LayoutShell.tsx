import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { BottomNav } from "./BottomNav";
import { ChatbotButton } from "./ChatbotButton";
import { CommandPalette } from "./CommandPalette";

export function LayoutShell() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-app text-primary transition-colors duration-500">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex min-h-screen flex-1 flex-col lg:pl-3">
        <Navbar />
        <main className="relative flex-1 px-3 pb-24 pt-4 sm:px-5 lg:pb-6">
          <Outlet />
        </main>
      </div>
      <BottomNav />
      <ChatbotButton />
      <CommandPalette />
    </div>
  );
}
