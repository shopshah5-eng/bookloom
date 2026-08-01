"use client";

import React from "react";
import { Bold, Italic, Underline, Strikethrough, Code, Link, Wand2, Sparkles } from "lucide-react";

export interface SelectionToolbarProps {
  onFormat: (command: string) => void;
  onAIRewrite: () => void;
}

export function SelectionToolbar({ onFormat, onAIRewrite }: SelectionToolbarProps) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl glass-panel-gold border border-[#D4AF37]/40 shadow-2xl text-[#FDFBF7] animate-in fade-in duration-150">
      <button
        onClick={() => onFormat("bold")}
        className="p-1.5 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors"
        title="Bold"
      >
        <Bold className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => onFormat("italic")}
        className="p-1.5 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors"
        title="Italic"
      >
        <Italic className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => onFormat("underline")}
        className="p-1.5 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors"
        title="Underline"
      >
        <Underline className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => onFormat("strikethrough")}
        className="p-1.5 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors"
        title="Strikethrough"
      >
        <Strikethrough className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => onFormat("code")}
        className="p-1.5 rounded-lg hover:bg-white/10 text-[#A1A1AA] hover:text-[#FDFBF7] transition-colors"
        title="Inline Code"
      >
        <Code className="h-3.5 w-3.5" />
      </button>

      <div className="h-4 w-px bg-white/20 mx-1" />

      <button
        onClick={onAIRewrite}
        className="px-2 py-1 rounded-lg bg-[#D4AF37] text-[#0A0A0C] font-semibold text-xs flex items-center gap-1 hover:bg-[#D4AF37]/90 transition-colors shadow-md"
      >
        <Sparkles className="h-3 w-3" /> AI Rewrite
      </button>
    </div>
  );
}
