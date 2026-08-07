"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Search, Sparkles, Filter, Download, Eye, Layout } from "lucide-react";

const CATEGORIES = ["All Templates", "Business & Finance", "Self Help & Mindset", "Technology & AI", "Fiction & Novel", "Academic & Guide", "Minimalist"];

const TEMPLATES = [
  { id: 1, title: "Executive Business Report", category: "Business & Finance", theme: "Modern Minimal", pages: "20-40", format: "PDF & EPUB", downloads: "14.2K", img: "/images/book_wealth_mindset.png", popular: true },
  { id: 2, title: "Minimalist Wellness Guide", category: "Self Help & Mindset", theme: "Elegant Literary", pages: "15-30", format: "PDF & EPUB", downloads: "9.8K", img: "/images/book_minimalist_living.png", popular: false },
  { id: 3, title: "SaaS & Tech Playbook", category: "Technology & AI", theme: "Bold Corporate", pages: "25-50", format: "PDF & EPUB", downloads: "18.5K", img: "/images/book_startup_playbook.png", popular: true },
  { id: 4, title: "Deep Focus Workbook", category: "Self Help & Mindset", theme: "Modern Minimal", pages: "18-35", format: "PDF & EPUB", downloads: "11.3K", img: "/images/book_deep_focus_mastery.png", popular: false },
  { id: 5, title: "AI Engineering Handbook", category: "Technology & AI", theme: "Futuristic Tech", pages: "30-60", format: "PDF & EPUB", downloads: "15.9K", img: "/images/book_ai_productivity.png", popular: true },
  { id: 6, title: "Wealth Acceleration System", category: "Business & Finance", theme: "Dark Premium", pages: "22-45", format: "PDF & EPUB", downloads: "8.7K", img: "/images/book_financial_freedom.png", popular: false },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All Templates");
  const [search, setSearch] = useState("");

  const filtered = TEMPLATES.filter(t =>
    (activeCategory === "All Templates" || t.category === activeCategory) &&
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>PRE-BUILT EBOOK LAYOUTS</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, margin: "0 0 16px" }}>
            Professional Ebook Templates<br />
            <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Ready in Seconds</span>
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 32 }}>
            Jumpstart your publishing with expertly designed layouts, typography sets, and cover pairings.
          </p>
          <div style={{ position: "relative", maxWidth: 420, margin: "0 auto" }}>
            <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search templates..."
              style={{ width: "100%", padding: "12px 14px 12px 42px", border: "1px solid #E8E4DF", borderRadius: 10, fontSize: 13, background: "#FFFFFF", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32, justifyContent: "center" }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                  background: activeCategory === cat ? "#1A1A1A" : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : "#4A4A4A",
                  border: `1px solid ${activeCategory === cat ? "#1A1A1A" : "#E8E4DF"}`,
                  cursor: "pointer", fontFamily: "Inter, sans-serif"
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {filtered.map(t => (
              <div key={t.id} className="card-hover" style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
                <div style={{ height: 240, background: "#F0EDE8", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                  {t.popular && (
                    <span style={{ position: "absolute", top: 12, left: 12, background: "#C49A3C", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>
                      Featured
                    </span>
                  )}
                  <img src={t.img} alt={t.title} style={{ height: 200, width: 140, objectFit: "cover", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#855B0B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>{t.category}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{t.title}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6B6B6B", marginBottom: 20 }}>
                    <span>Theme: {t.theme}</span>
                    <span>{t.pages} Pages</span>
                  </div>
                  <Link href={`/dashboard/create?template=${encodeURIComponent(t.title)}&theme=${encodeURIComponent(t.theme)}`}>
                    <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      <Sparkles size={14} /> Use This Template
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
