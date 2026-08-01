"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Sparkles, CheckCircle2 } from "lucide-react";

const RELEASES = [
  { version: "v2.4.0", date: "August 2026", title: "Luxury Cream Design System & Multi-AI Models", items: ["Complete UI redesign with warm cream aesthetic and Playfair serif typography", "Integrated Anthropic Claude 3.5 & Google Gemini Pro support", "Enhanced EPUB 3.0 export typography engine"] },
  { version: "v2.3.0", date: "July 2026", title: "AI Cover Studio 2.0 & Vector SVG Generator", items: ["New AI Cover Studio with 12 aesthetic styles", "Generative vector SVG illustration engine", "Real-time collaborative editing for teams"] },
];

export default function ChangelogPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>PRODUCT UPDATES</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>Changelog</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>New features, enhancements, and fixes pushed to BookLoom.</p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          {RELEASES.map((rel, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <span style={{ fontWeight: 700, fontSize: 13, background: "#1A1A1A", color: "#FFFFFF", padding: "4px 10px", borderRadius: 6 }}>{rel.version}</span>
                <span style={{ fontSize: 13, color: "#9A9A9A" }}>{rel.date}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>{rel.title}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {rel.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 14, color: "#4A4A4A", display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <CheckCircle2 size={16} color="#C49A3C" style={{ flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
