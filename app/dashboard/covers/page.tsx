"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Sparkles, Wand2, Download, RefreshCw, Image as ImageIcon, Plus } from "lucide-react";

const COVERS = [
  { id: 1, title: "The Wealth Mindset", genre: "Finance", style: "Cinematic Dark", img: "/images/book_wealth_mindset.png" },
  { id: 2, title: "Minimalist Living", genre: "Self Help", style: "Beige Minimal", img: "/images/book_minimalist_living.png" },
  { id: 3, title: "Startup Playbook 2026", genre: "Business", style: "Sci-Fi Fire", img: "/images/book_startup_playbook.png" },
  { id: 4, title: "Deep Focus Mastery", genre: "Productivity", style: "Zen Ocean", img: "/images/book_deep_focus_mastery.png" },
  { id: 5, title: "AI Productivity Power", genre: "Technology", style: "Neon Cyber", img: "/images/book_ai_productivity.png" },
  { id: 6, title: "Financial Freedom", genre: "Finance", style: "Gold Emerald", img: "/images/book_financial_freedom.png" },
];

export default function CoversPage() {
  const [selectedStyle, setSelectedStyle] = useState("Cinematic Dark");
  const [titleInput, setTitleInput] = useState("The Wealth Mindset");
  const [subtitleInput, setSubtitleInput] = useState("Transform Your Relationship with Money");
  const [authorInput, setAuthorInput] = useState("James Carter");

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Header */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>AI Cover Studio</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Design high-converting book covers in seconds</p>
          </div>
          <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
            <Plus size={14} /> New Cover Project
          </button>
        </div>

        <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "360px 1fr", gap: 32 }}>
          {/* Controls */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24, height: "fit-content" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
              <Sparkles size={16} color="#C49A3C" /> Cover Customizer
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Book Title</label>
              <input value={titleInput} onChange={e => setTitleInput(e.target.value)}
                style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif", outline: "none" }} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Subtitle</label>
              <input value={subtitleInput} onChange={e => setSubtitleInput(e.target.value)}
                style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif", outline: "none" }} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Author Name</label>
              <input value={authorInput} onChange={e => setAuthorInput(e.target.value)}
                style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif", outline: "none" }} />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Visual Aesthetic Style</label>
              <select value={selectedStyle} onChange={e => setSelectedStyle(e.target.value)}
                style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif", outline: "none" }}>
                <option>Cinematic Dark</option>
                <option>Beige Minimalist</option>
                <option>Sci-Fi Fire</option>
                <option>Zen Ocean</option>
                <option>Neon Cyber</option>
                <option>Gold Emerald</option>
              </select>
            </div>

            <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "12px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
              <Wand2 size={14} /> Generate Cover Variations
            </button>
          </div>

          {/* Grid */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 16 }}>Generated Covers Gallery</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {COVERS.map(c => (
                <div key={c.id} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden", padding: 16 }}>
                  <img src={c.img} alt={c.title} style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 8, marginBottom: 12 }} />
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A", marginBottom: 2 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 12 }}>Style: {c.style}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ flex: 1, padding: "8px", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                      Select
                    </button>
                    <button style={{ padding: "8px", background: "transparent", border: "1px solid #E8E4DF", borderRadius: 6, cursor: "pointer", color: "#4A4A4A" }}>
                      <Download size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
