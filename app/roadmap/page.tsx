"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Sparkles, Clock, CheckCircle } from "lucide-react";

const ROADMAP = [
  { status: "In Progress", color: "#C49A3C", items: ["Interactive 3D Book Preview", "Audiobook AI Voice Synthesis Engine", "Amazon KDP One-Click Auto Publishing"] },
  { status: "Planned (Q3 2026)", color: "#1A1A1A", items: ["Multi-Author Real-Time Co-Authoring Workflows", "Custom Domain Publishing Hubs for Authors", "Substack & Newsletter Ebook Auto-Exporter"] },
  { status: "Completed", color: "#22C55E", items: ["Warm Cream Luxury Design System Overhaul", "EPUB 3.0 & PDF High-Res Print Exporter", "Multi-AI Provider Integration (GPT-4o, Claude, Gemini)"] },
];

export default function RoadmapPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>FUTURE VISION</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>Product Roadmap</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>See what we are building next to revolutionize AI ebook creation.</p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {ROADMAP.map((col, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: col.color, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: col.color }} />
                {col.status}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.items.map((item, j) => (
                  <div key={j} style={{ padding: "14px 16px", borderRadius: 10, border: "1px solid #E8E4DF", background: "#FAFAFA", fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
