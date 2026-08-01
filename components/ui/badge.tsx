import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "purple" | "outline" | "success";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors";

  const variants = {
    default: "bg-white/10 text-[#FDFBF7]",
    gold: "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30",
    purple: "bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30",
    outline: "border border-white/20 text-[#A1A1AA]",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
