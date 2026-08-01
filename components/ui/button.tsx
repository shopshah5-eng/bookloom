import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "glass" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A0A0C] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
      primary: "bg-[#FDFBF7] text-[#0A0A0C] hover:bg-[#EFECE6] shadow-sm",
      secondary: "bg-[#18181B] text-[#FDFBF7] hover:bg-[#27272A] border border-white/10",
      gold: "bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#0A0A0C] hover:opacity-95 shadow-md shadow-[#D4AF37]/20 font-semibold",
      outline: "border border-white/20 text-[#FDFBF7] hover:bg-white/5 hover:border-white/40",
      ghost: "text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/5",
      glass: "bg-white/5 backdrop-blur-md border border-white/10 text-[#FDFBF7] hover:bg-white/10 hover:border-white/20",
      danger: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
      md: "px-4 py-2 text-sm rounded-lg gap-2",
      lg: "px-6 py-3 text-base rounded-xl gap-2.5",
      icon: "p-2.5 rounded-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
