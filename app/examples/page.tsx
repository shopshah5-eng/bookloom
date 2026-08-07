"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Eye, Download, Search, Sparkles } from "lucide-react";

import { BookPreviewModal, PreviewBook } from "@/components/modals/book-preview-modal";

const CATEGORIES = ["All", "Finance", "Business", "Self Help", "Productivity", "Technology", "Health", "Marketing"];

const EBOOKS: PreviewBook[] = [
  { title: "The Wealth Mindset", category: "Finance", img: "/images/book_wealth_mindset.png", views: "24.5K", downloads: "8.2K", pages: 28, theme: "Modern Minimal", author: "Riya Sharma" },
  { title: "Minimalist Living", category: "Self Help", img: "/images/book_minimalist_living.png", views: "18.7K", downloads: "6.3K", pages: 21, theme: "Elegant Literary", author: "Elena Rostova" },
  { title: "Startup Playbook 2026", category: "Business", img: "/images/book_startup_playbook.png", views: "31.2K", downloads: "12.8K", pages: 35, theme: "Bold Corporate", author: "Marcus Vance" },
  { title: "Deep Focus Mastery", category: "Productivity", img: "/images/book_deep_focus_mastery.png", views: "22.1K", downloads: "9.1K", pages: 26, theme: "Modern Minimal", author: "David Chen" },
  { title: "AI Productivity Power", category: "Technology", img: "/images/book_ai_productivity.png", views: "27.6K", downloads: "10.4K", pages: 30, theme: "Futuristic Tech", author: "Sophia Lee" },
  { title: "Financial Freedom", category: "Finance", img: "/images/book_financial_freedom.png", views: "15.3K", downloads: "5.7K", pages: 24, theme: "Dark Premium", author: "Alex Rivera" },
  { title: "The Startup Playbook", category: "Business", img: "/images/book_startup_playbook.png", views: "20.4K", downloads: "7.9K", pages: 18, theme: "Bold Corporate", author: "Sarah Jenkins" },
  { title: "Mental Mastery", category: "Self Help", img: "/images/nonfiction_book.png", views: "11.8K", downloads: "4.6K", pages: 16, theme: "Elegant Literary", author: "Dr. Maya Patel" },
];

export default function ExamplesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<PreviewBook | null>(null);

  const filtered = EBOOKS.filter(b =>
    (activeCategory === "All" || b.category === activeCategory) &&
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <BookPreviewModal book={selectedBook} onClose={() => setSelectedBook(null)} />

      {/* Hero */}
      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>EXAMPLE EBOOKS</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, margin: "0 0 16px" }}>
            See What&apos;s Possible with<br />
            <span style={{ color: "#C49A3C", fontStyle: "italic" }}>BookLoom AI</span>
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 32 }}>
            Browse real ebooks created by our community. Each one was generated with AI in minutes. Get inspired and create your own.
          </p>
          <div style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}>
            <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search examples..."
              style={{ width: "100%", padding: "12px 14px 12px 42px", border: "1px solid #E8E4DF", borderRadius: 10, fontSize: 13, background: "#FFFFFF", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
          </div>
        </div>
      </section>

      {/* Realistic Stats */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Ebooks Created", value: "12.5K+" },
            { label: "Words Generated", value: "45M+" },
            { label: "Creator Rating", value: "4.9/5 ⭐" },
            { label: "Satisfaction Rate", value: "98%" },
          ].map(s => (
            <div key={s.label} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#6B6B6B" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                  background: activeCategory === cat ? "#1A1A1A" : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : "#4A4A4A",
                  border: `1px solid ${activeCategory === cat ? "#1A1A1A" : "#E8E4DF"}`,
                  cursor: "pointer", fontFamily: "Inter, sans-serif"
                }}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((book, i) => (
              <div key={i} className="card-hover img-zoom-container" style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden", position: "relative" }}>
                <img src={book.img} alt={book.title} loading="lazy" style={{ width: "100%", height: 220, objectFit: "cover" }} />
                <div style={{ padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#855B0B", background: "#FBF3E0", padding: "3px 8px", borderRadius: 999 }}>{book.category}</span>
                    <span style={{ fontSize: 11, color: "#9A9A9A" }}>{book.pages} pages</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 4 }}>{book.title}</div>
                  <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 16 }}>Theme: {book.theme}</div>
                  <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#6B6B6B", marginBottom: 16 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Eye size={12} /> {book.views}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Download size={12} /> {book.downloads}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => setSelectedBook(book)} className="btn-primary-glow" style={{ flex: 1, padding: "9px", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                      Preview
                    </button>
                    <Link href={`/dashboard/create?topic=${encodeURIComponent(book.title)}&type=${encodeURIComponent(book.category.toLowerCase())}`} style={{ flex: 1 }}>
                      <button className="chip-hover" style={{ width: "100%", padding: "9px", background: "transparent", color: "#855B0B", border: "1px solid #EFD98A", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                        <Sparkles size={11} color="#C49A3C" /> Use Template
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#F0EDE8", borderRadius: 16, padding: "48px 64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <img src="/images/books_stack_with_plant.png" alt="" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 10 }} />
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
                  Inspired? Create Your Own Ebook Now
                </h3>
                <p style={{ fontSize: 13, color: "#6B6B6B", margin: 0 }}>Start for free. No credit card required.</p>
              </div>
            </div>
            <Link href="/auth/signup">
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                <Sparkles size={14} /> Start Creating for Free
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
