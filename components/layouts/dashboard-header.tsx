"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CommandMenu } from "@/components/ui/command-menu";
import { NotificationsDropdown } from "@/components/ui/notifications-dropdown";
import { UserMenu } from "@/components/ui/user-menu";
import { useTheme } from "@/components/providers/theme-provider";
import { Search, Plus, Sparkles, Sun, Moon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-20 border-b border-white/10 glass-panel px-6 flex items-center justify-between sticky top-0 z-20">
      <CommandMenu />

      {/* Breadcrumbs Trail */}
      <div className="flex items-center gap-4">
        <Breadcrumbs />
      </div>

      {/* Global Quick Actions & Controls */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            const event = new KeyboardEvent("keydown", { key: "k", metaKey: true });
            window.dispatchEvent(event);
          }}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors"
        >
          <Search className="h-3.5 w-3.5" />
          <span>Quick Search...</span>
          <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] border border-white/10 font-mono text-[#D4AF37]">
            ⌘K
          </kbd>
        </button>

        {/* Create Action */}
        <Link href="/dashboard/generator">
          <Button variant="gold" size="sm" className="gap-2 shadow-md shadow-[#D4AF37]/10">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Create Ebook</span>
          </Button>
        </Link>

        {/* Credits Indicator */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs text-[#D4AF37] font-semibold">
          <Zap className="h-3.5 w-3.5 fill-[#D4AF37]" />
          <span>500 Credits</span>
        </div>

        {/* Theme Switcher */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors"
          title="Toggle Light/Dark Theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4 text-[#D4AF37]" /> : <Moon className="h-4 w-4 text-[#8B5CF6]" />}
        </button>

        {/* Notifications Dropdown */}
        <NotificationsDropdown />

        {/* User Profile Menu */}
        <UserMenu />
      </div>
    </header>
  );
}
