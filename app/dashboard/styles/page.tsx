"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Palette, Check, Sparkles, Plus } from "lucide-react";

const STYLES = [
  { id: 1, name: "Editorial Cream", bg: "#F8F5F0", font: "Playfair Display", accent: "#C49A3C", author: "BookLoom Official" },
  { id: 2, name: "Minimal Dark", bg: "#0D0D0D", font: "Inter", accent: "#F0E8D0", author: "BookLoom Official" },
  { id: 3, name: "Nordic Soft", bg: "#F0EDE8", font: "Georgia", accent: "#3D2B1A", author: "Community" },
  { id: 4, name: "Cyber Neon", bg: "#070B1A", font: "Space Grotesk", accent: "#00E5FF", author: "Community" },
  { id: 5, name: "Vintage Parchment", bg: "#F5F0E8", font: "Cinzel", accent: "#8B4513", author: "Community" },
  { id: 6, name: "Modern Corporate", bg: "#FFFFFF", font: "Helvetica", accent: "#1A2540", author: "BookLoom Official" },
];

export default function StyleMarketplacePage() {
  const [selectedStyle, setSelectedStyle] = useState(1);

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Style Marketplace</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Explore and apply publishing typography & color themes</p>
          </div>
          <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
            <Plus size={14} /> Create Style Kit
          </button>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {STYLES.map((s) => (
              <div key={s.id} onClick={() => setSelectedStyle(s.id)}
                style={{
                  background: "#FFFFFF", borderRadius: 16, border: `2px solid ${selectedStyle === s.id ? "#C49A3C" : "#E8E4DF"}`,
                  padding: 24, cursor: "pointer", position: "relative"
                }}>
                {selectedStyle === s.id && (
                  <div style={{ position: "absolute", top: 16, right: 16, width: 24, height: 24, borderRadius: "50%", background: "#C49A3C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Check size={14} color="#FFFFFF" />
                  </div>
                )}
                <div style={{ height: 140, borderRadius: 10, background: s.bg, border: "1px solid #E8E4DF", padding: 20, marginBottom: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: s.font, fontSize: 22, fontWeight: 700, color: s.accent, marginBottom: 4 }}>Abc Title</div>
                  <div style={{ fontSize: 12, color: s.accent, opacity: 0.8 }}>Sample paragraph text rendering in this typography style kit.</div>
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 2 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 16 }}>Font: {s.font} · By {s.author}</div>
                <button style={{
                  width: "100%", padding: "9px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  background: selectedStyle === s.id ? "#1A1A1A" : "transparent",
                  color: selectedStyle === s.id ? "#FFFFFF" : "#1A1A1A",
                  border: `1px solid ${selectedStyle === s.id ? "#1A1A1A" : "#E8E4DF"}`,
                  fontFamily: "Inter, sans-serif"
                }}>
                  {selectedStyle === s.id ? "Applied" : "Apply Style"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
