"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, description, children, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog content */}
      <div
        className={cn(
          "relative z-50 w-full max-w-lg rounded-2xl glass-panel-gold p-6 text-[#FDFBF7] shadow-2xl animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {title && <h2 className="text-xl font-semibold tracking-tight pr-8">{title}</h2>}
        {description && <p className="mt-1 text-sm text-[#A1A1AA] mb-4">{description}</p>}

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
