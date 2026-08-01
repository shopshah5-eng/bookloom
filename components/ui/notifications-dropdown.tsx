"use client";

import React, { useState } from "react";
import { Bell, Sparkles, CheckCircle2, Download, X } from "lucide-react";
import { DropdownMenu } from "./dropdown-menu";
import { Badge } from "./badge";

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([
    { id: "1", title: "PDF Export Complete", desc: "The Sovereign Executive is ready for download.", time: "10m ago", icon: Download, read: false },
    { id: "2", title: "AI Cover Generation", desc: "4K Render finished with Gold Editorial style.", time: "1h ago", icon: Sparkles, read: false },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <DropdownMenu
      trigger={
        <button className="relative p-2.5 rounded-lg border border-white/10 bg-white/5 text-[#A1A1AA] hover:text-[#FDFBF7] hover:bg-white/10 transition-colors">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
          )}
        </button>
      }
    >
      <div className="w-80 p-2 space-y-2">
        <div className="flex items-center justify-between px-2 py-1 border-b border-white/10">
          <span className="text-xs font-semibold text-[#FDFBF7]">Notifications</span>
          {unreadCount > 0 && (
            <button onClick={markAllRead} className="text-[10px] text-[#D4AF37] hover:underline">
              Mark all read
            </button>
          )}
        </div>

        <div className="space-y-1 max-h-64 overflow-y-auto">
          {notifications.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`p-2.5 rounded-lg border text-xs flex items-start gap-2.5 transition-colors ${
                  n.read ? "bg-transparent border-transparent text-[#71717A]" : "bg-white/5 border-white/10 text-[#FDFBF7]"
                }`}
              >
                <Icon className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold">{n.title}</h5>
                  <p className="text-[11px] text-[#A1A1AA] truncate">{n.desc}</p>
                  <span className="text-[9px] text-[#71717A] mt-1 block">{n.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DropdownMenu>
  );
}
