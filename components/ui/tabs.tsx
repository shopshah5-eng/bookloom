"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab: controlledActiveTab, onChange, className }: TabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id);
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

  const handleSelect = (tabId: string) => {
    setInternalActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className={cn("flex items-center gap-1 border-b border-white/10 pb-px overflow-x-auto", className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all relative border-b-2 whitespace-nowrap",
              isActive
                ? "border-[#D4AF37] text-[#D4AF37]"
                : "border-transparent text-[#A1A1AA] hover:text-[#FDFBF7] hover:border-white/20"
            )}
          >
            {tab.label}
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-semibold",
                  isActive
                    ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                    : "bg-white/10 text-[#A1A1AA]"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
