"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BookOpen, BarChart2, Settings, User } from "lucide-react";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Dashboard" },
  { id: "courses", icon: BookOpen, label: "My Courses" },
  { id: "activity", icon: BarChart2, label: "Activity" },
  { id: "profile", icon: User, label: "Profile" },
  { id: "settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <nav className="hidden md:flex flex-col w-20 lg:w-64 h-screen border-r border-border bg-background/50 backdrop-blur-md transition-all duration-300 p-4 fixed left-0 top-0 z-50">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="hidden lg:block font-bold text-xl tracking-tight">LearnSpace</span>
        </div>

        <ul className="flex flex-col gap-2 relative">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <button
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-colors relative z-10",
                    isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                  )}
                >
                  <item.icon className="w-6 h-6 shrink-0" />
                  <span className="hidden lg:block font-medium">{item.label}</span>
                </button>

                {/* Animated Background Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 bg-card border border-border rounded-xl shadow-lg shadow-black/20"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 border-t border-border bg-background/80 backdrop-blur-lg z-50 px-4">
        <ul className="flex items-center justify-around h-full relative">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative h-full flex items-center">
                <button
                  onClick={() => setActive(item.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 w-16 h-16 rounded-xl relative z-10 transition-colors",
                    isActive ? "text-white" : "text-gray-400"
                  )}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-indicator"
                    className="absolute inset-2 bg-card border border-border rounded-xl shadow-lg -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
