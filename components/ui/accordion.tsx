"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="rounded-xl border border-white/10 glass-panel overflow-hidden transition-all">
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-serif font-bold text-base text-[#FDFBF7] hover:bg-white/5 transition-colors"
            >
              <span>{item.title}</span>
              <ChevronDown className={cn("h-4 w-4 text-[#D4AF37] transition-transform duration-200", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <div className="p-4 pt-0 border-t border-white/5 text-sm text-[#A1A1AA] leading-relaxed animate-in fade-in duration-150">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
