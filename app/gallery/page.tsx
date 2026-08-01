"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Sparkles, Eye } from "lucide-react";

const GALLERY = [
  { title: "The Wealth Mindset", author: "James Carter", category: "Finance", img: "/images/book_wealth_mindset.png" },
  { title: "Minimalist Living", author: "Jonah Larkin", category: "Self Help", img: "/images/book_minimalist_living.png" },
  { title: "Startup Playbook 2026", author: "Elena Vance", category: "Business", img: "/images/book_startup_playbook.png" },
  { title: "Deep Focus Mastery", author: "Eliza Reed", category: "Productivity", img: "/images/book_deep_focus_mastery.png" },
  { title: "AI Productivity Power", author: "Marcus Vance", category: "Technology", img: "/images/book_ai_productivity.png" },
  { title: "Financial Freedom", author: "Sophia Lee", category: "Finance", img: "/images/book_financial_freedom.png" },
];

export default function GalleryPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>PUBLIC EBOOK SHOWCASE</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>
            Public Showcase
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", marginBottom: 32 }}>Explore featured ebooks published by the global BookLoom author community.</p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {GALLERY.map((g, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden" }}>
              <img src={g.img} alt={g.title} style={{ width: "100%", height: 260, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#C49A3C", background: "#FBF3E0", padding: "3px 8px", borderRadius: 999 }}>{g.category}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: "8px 0 4px" }}>{g.title}</h3>
                <div style={{ fontSize: 12, color: "#9A9A9A" }}>By {g.author}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
