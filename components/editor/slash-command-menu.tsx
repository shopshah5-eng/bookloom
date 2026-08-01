"use client";

import React from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Quote,
  AlertCircle,
  Code,
  List,
  CheckSquare,
  Minus,
  Image as ImageIcon,
  Type,
} from "lucide-react";

export interface SlashMenuItem {
  type: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

export interface SlashCommandMenuProps {
  onSelect: (type: string) => void;
  onClose: () => void;
}

export function SlashCommandMenu({ onSelect, onClose }: SlashCommandMenuProps) {
  const items: SlashMenuItem[] = [
    { type: "paragraph", label: "Text", desc: "Just start writing with plain text.", icon: <Type className="h-4 w-4" /> },
    { type: "h1", label: "Heading 1", desc: "Big section heading.", icon: <Heading1 className="h-4 w-4" /> },
    { type: "h2", label: "Heading 2", desc: "Medium section heading.", icon: <Heading2 className="h-4 w-4" /> },
    { type: "h3", label: "Heading 3", desc: "Small section heading.", icon: <Heading3 className="h-4 w-4" /> },
    { type: "callout", label: "Callout", desc: "Highlighted luxury tip box.", icon: <AlertCircle className="h-4 w-4" /> },
    { type: "quote", label: "Quote", desc: "Capture an editorial quotation.", icon: <Quote className="h-4 w-4" /> },
    { type: "code", label: "Code Block", desc: "Display formatted code snippet.", icon: <Code className="h-4 w-4" /> },
    { type: "checklist", label: "Checklist", desc: "Track tasks with a todo list.", icon: <CheckSquare className="h-4 w-4" /> },
    { type: "divider", label: "Divider", desc: "Visually divide section content.", icon: <Minus className="h-4 w-4" /> },
    { type: "image", label: "Image / Illustration", desc: "Embed an AI-generated image or upload.", icon: <ImageIcon className="h-4 w-4" /> },
  ];

  return (
    <div className="absolute z-50 w-72 rounded-xl glass-panel-gold p-2 shadow-2xl border border-[#D4AF37]/30 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
      <div className="px-2 py-1.5 text-[10px] font-mono text-[#71717A] uppercase border-b border-white/10 mb-1">
        BASIC BLOCKS
      </div>
      <div className="space-y-0.5">
        {items.map((item) => (
          <button
            key={item.type}
            onClick={() => onSelect(item.type)}
            className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left text-xs text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors group"
          >
            <div className="h-7 w-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="font-semibold text-[#FDFBF7]">{item.label}</div>
              <div className="text-[10px] text-[#71717A] truncate max-w-[170px]">{item.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
