"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Palette, Upload, Plus, Check } from "lucide-react";

export default function BrandKitPage() {
  const [brandColor, setBrandColor] = useState("#C49A3C");
  const [font, setFont] = useState("Playfair Display");

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Brand Kit</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Save your logos, custom fonts, and color palettes</p>
          </div>
          <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
            Save Brand Kit
          </button>
        </div>

        <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Colors */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>Brand Colors</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              {["#C49A3C", "#1A1A1A", "#F8F5F0", "#8B5CF6", "#2563EB"].map((c, i) => (
                <div key={i} style={{ width: 48, height: 48, borderRadius: 10, background: c, border: "1px solid #E8E4DF", cursor: "pointer" }} />
              ))}
            </div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Primary Brand Color</label>
            <input type="color" value={brandColor} onChange={e => setBrandColor(e.target.value)} style={{ width: 60, height: 36, border: "none", cursor: "pointer" }} />
          </div>

          {/* Typography */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>Brand Typography</h3>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Heading Font</label>
            <select value={font} onChange={e => setFont(e.target.value)} style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
              <option>Playfair Display</option>
              <option>Georgia</option>
              <option>Cinzel</option>
              <option>Merriweather</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
