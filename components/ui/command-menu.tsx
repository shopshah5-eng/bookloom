"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, BookOpen, Download, Wand2, Terminal, Settings, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { title: "Create AI Ebook", href: "/dashboard/generator", category: "Actions", icon: Sparkles },
    { title: "Render 4K Book Cover", href: "/dashboard/covers", category: "Actions", icon: Wand2 },
    { title: "Multi-Format Export", href: "/dashboard/export", category: "Actions", icon: Download },
    { title: "Ebook Library", href: "/dashboard/library", category: "Navigation", icon: BookOpen },
    { title: "Prompt Library", href: "/dashboard/prompts", category: "Navigation", icon: Terminal },
    { title: "Account Settings", href: "/dashboard/settings", category: "Navigation", icon: Settings },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Modal */}
      <div className="relative z-50 w-full max-w-xl rounded-2xl glass-panel-gold p-4 text-[#FDFBF7] shadow-2xl border border-[#D4AF37]/30 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center gap-3 border-b border-white/10 pb-3 px-2">
          <Search className="h-5 w-5 text-[#D4AF37] shrink-0" />
          <input
            autoFocus
            placeholder="Type a command or search studio pages (Cmd + K)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-[#FDFBF7] placeholder-[#71717A] focus:outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-[#71717A] hover:text-[#FDFBF7] rounded"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto pt-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-[#71717A]">No commands found matching &quot;{query}&quot;</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#71717A] group-hover:text-[#D4AF37]" />
                    <span>{item.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#71717A] uppercase">{item.category}</span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
