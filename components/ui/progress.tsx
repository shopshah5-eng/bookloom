import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  variant?: "gold" | "purple" | "default";
}

export function Progress({ value, variant = "gold", className, ...props }: ProgressProps) {
  const variants = {
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#C5A059]",
    purple: "bg-gradient-to-r from-[#8B5CF6] to-[#D4AF37]",
    default: "bg-[#FDFBF7]",
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full bg-white/10 rounded-full h-2 overflow-hidden", className)} {...props}>
      <div
        className={cn("h-full transition-all duration-500 rounded-full", variants[variant])}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}
