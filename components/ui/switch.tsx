"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked: controlledChecked, onCheckedChange, disabled, className }: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    setInternalChecked(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#D4AF37] disabled:opacity-50",
        isChecked ? "bg-[#D4AF37]" : "bg-white/20",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#0A0A0C] shadow-lg ring-0 transition duration-200 ease-in-out",
          isChecked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
}
