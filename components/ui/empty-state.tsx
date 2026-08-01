import React from "react";
import { cn } from "@/lib/utils";
import { FolderOpen } from "lucide-react";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "p-12 text-center flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 glass-panel space-y-4",
        className
      )}
    >
      <div className="h-16 w-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
        {icon || <FolderOpen className="h-8 w-8" />}
      </div>

      <div className="space-y-1 max-w-sm">
        <h3 className="font-serif font-bold text-xl text-[#FDFBF7]">{title}</h3>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">{description}</p>
      </div>

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}
