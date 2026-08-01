"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DataPoint {
  label: string;
  value: number;
}

export interface ChartProps {
  data: DataPoint[];
  type?: "bar" | "line";
  height?: number;
  className?: string;
}

export function Chart({ data, type = "bar", height = 200, className }: ChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={cn("w-full flex flex-col gap-3", className)}>
      <div className="flex items-end gap-2 w-full pt-4 px-2" style={{ height: `${height}px` }}>
        {data.map((item, idx) => {
          const heightPercent = (item.value / maxValue) * 100;
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative">
              {/* Tooltip on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#18181B] text-[#D4AF37] text-xs px-2 py-0.5 rounded border border-white/10 whitespace-nowrap z-10 pointer-events-none">
                {item.value.toLocaleString()}
              </div>

              {type === "bar" && (
                <div
                  className="w-full bg-gradient-to-t from-[#D4AF37]/30 to-[#D4AF37] rounded-t-md transition-all duration-500 group-hover:brightness-125"
                  style={{ height: `${Math.max(heightPercent, 4)}%` }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between border-t border-white/10 pt-2 px-2 text-xs text-[#A1A1AA]">
        {data.map((item, idx) => (
          <span key={idx} className="truncate max-w-[50px] text-center">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
