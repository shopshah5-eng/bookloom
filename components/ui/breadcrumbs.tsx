"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-xs text-[#A1A1AA]", className)}>
      <Link href="/dashboard" className="hover:text-[#FDFBF7] flex items-center gap-1 transition-colors">
        <Home className="h-3.5 w-3.5" />
      </Link>

      {segments.map((segment, idx) => {
        const path = "/" + segments.slice(0, idx + 1).join("/");
        const isLast = idx === segments.length - 1;
        const formatted = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <React.Fragment key={path}>
            <ChevronRight className="h-3.5 w-3.5 text-[#71717A] shrink-0" />
            {isLast ? (
              <span className="font-semibold text-[#D4AF37] capitalize truncate max-w-[150px]">{formatted}</span>
            ) : (
              <Link href={path} className="hover:text-[#FDFBF7] transition-colors capitalize">
                {formatted}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
