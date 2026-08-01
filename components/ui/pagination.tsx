"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={cn("flex items-center justify-between border-t border-white/10 pt-4 px-2", className)}>
      <span className="text-xs text-[#A1A1AA]">
        Page <span className="font-bold text-[#FDFBF7]">{currentPage}</span> of <span className="font-bold text-[#FDFBF7]">{totalPages}</span>
      </span>

      <div className="flex items-center gap-1.5">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="gap-1 px-2.5"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "h-8 w-8 rounded-lg text-xs font-semibold transition-colors",
                isActive
                  ? "bg-[#D4AF37] text-[#0A0A0C]"
                  : "bg-white/5 text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10"
              )}
            >
              {page}
            </button>
          );
        })}

        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="gap-1 px-2.5"
        >
          Next <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
