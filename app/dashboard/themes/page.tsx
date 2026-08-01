"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { BookOpen, Check } from "lucide-react";

const THEMES = [
  { name: "Modern Minimal", bg: "#F5F5F0", textColor: "#1A1A1A", border: "#E0DDD8" },
  { name: "Elegant Literary", bg: "#F5F0E8", textColor: "#3D2B1A", border: "#D4C4A8" },
  { name: "Bold Corporate", bg: "#1A2540", textColor: "#FFFFFF", border: "#2D3E60" },
  { name: "Dark Premium", bg: "#0D0D0D", textColor: "#F0E8D0", border: "#2A2A2A" },
  { name: "Vibrant Creative", bg: "#7C3AED", textColor: "#FFFFFF", border: "#6D28D9" },
  { name: "Vintage Classic", bg: "#3D2B1A", textColor: "#F0E0C0", border: "#5A3D22" },
];

export default function ThemesPage() {
  const [activeTheme, setActiveTheme] = useState(0);

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Theme Library</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Preset ebook themes and color styling sets</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {THEMES.map((t, i) => (
              <div key={i} onClick={() => setActiveTheme(i)} style={{ background: "#FFFFFF", borderRadius: 16, border: `2px solid ${activeTheme === i ? "#C49A3C" : "#E8E4DF"}`, padding: 24, cursor: "pointer", position: "relative" }}>
                {activeTheme === i && (
                  <div style={{ position: "absolute", top: 16, right: 16, width: 24, height: 24, borderRadius: "50%", background: "#C49A3C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Check size={14} color="#FFFFFF" />
                  </div>
                )}
                <div style={{ height: 120, borderRadius: 10, background: t.bg, border: `1px solid ${t.border}`, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: t.textColor }}>Aa</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
