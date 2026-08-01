import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Avatar({ src, name, size = "md", className, ...props }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-16 h-16 text-lg",
  };

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "BL";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#8B5CF6]/30 text-[#FDFBF7] font-medium border border-white/20 overflow-hidden shrink-0",
        sizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={name || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
