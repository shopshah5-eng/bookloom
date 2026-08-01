import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gold" | "bento";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
  const baseStyles = "rounded-xl border transition-all duration-300 overflow-hidden";

  const variants = {
    default: "bg-[#121215] border-white/10 text-[#FDFBF7]",
    glass: "glass-panel text-[#FDFBF7]",
    gold: "glass-panel-gold text-[#FDFBF7]",
    bento: "bg-[#121215]/80 border-white/10 hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all text-[#FDFBF7]",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pb-3 space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xl font-semibold tracking-tight text-[#FDFBF7]", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-[#A1A1AA]", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4 pt-4", className)} {...props}>
      {children}
    </div>
  );
}
