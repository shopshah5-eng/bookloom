"use client";

import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
}

export function Drawer({ isOpen, onClose, title, children, side = "right", className }: DrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className={cn("fixed inset-y-0 flex max-w-full", side === "right" ? "right-0" : "left-0")}>
        <div
          className={cn(
            "w-screen max-w-md glass-panel-gold p-6 text-[#FDFBF7] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200 border-l border-[#D4AF37]/30",
            className
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            {title && <h2 className="font-serif font-bold text-xl text-[#FDFBF7]">{title}</h2>}
            <button
              onClick={onClose}
              className="p-1.5 text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 rounded-lg"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
