"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Wand2, Sparkles, Image as ImageIcon, Download, Layers } from "lucide-react";

export default function StudioPage() {
  const [prompt, setPrompt] = useState("A serene minimalist Japanese tea room with warm sunlight streaming through paper sliding doors");

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Visual Studio</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Generate chapter illustrations and graphic assets with AI</p>
          </div>
        </div>

        <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "380px 1fr", gap: 32 }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>
              <Wand2 size={16} color="#C49A3C" /> Asset Generator
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Asset Type</label>
              <select style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif" }}>
                <option>Chapter Illustration</option>
                <option>Vector SVG Graphic</option>
                <option>Diagram & Chart</option>
                <option>Author Portrait</option>
              </select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Prompt</label>
              <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={4}
                style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif", resize: "none" }} />
            </div>

            <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
              <Sparkles size={14} /> Generate Asset (25 Credits)
            </button>
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
            <img src="/images/hero_books_display.png" alt="Generated Asset" style={{ maxWidth: "100%", maxHeight: 360, borderRadius: 12, objectFit: "contain", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }} />
            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                <Download size={14} /> Download Asset
              </button>
              <button style={{ background: "transparent", color: "#1A1A1A", border: "1px solid #E8E4DF", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                Add to Ebook Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
