"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Search, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

const FEATURED_ARTICLES = [
  {
    slug: "kindle-publishing-2026",
    tag: "KDP PUBLISHING",
    title: "How to Publish a Kindle Book on Amazon KDP in 2026 (Step-by-Step)",
    desc: "A complete, beginner-friendly guide to publishing your ebook on Amazon KDP, setting pricing strategies, and reaching global readers.",
    author: "Dr. Evelyn Vance", date: "August 1, 2026", readTime: "10 min read",
    img: "/images/laptop_bookloom_mockup.png", dark: true,
  },
  {
    slug: "ai-writing-prompts",
    tag: "AI WRITING",
    title: "Best AI Writing Prompts for Non-Fiction Ebook Authors",
    desc: "Supercharge your manuscript drafting with prompts designed for chapter expansion and research synthesis.",
    author: "James Carter", date: "July 28, 2026", readTime: "7 min read",
    img: "/images/book_ai_productivity.png", dark: true,
  },
  {
    slug: "epub-formatting-guide",
    tag: "DESIGN & FORMATS",
    title: "EPUB 3.0 Guide: Everything Ebook Authors Need to Know",
    desc: "Learn how EPUB formatting works, why reflowable typography matters, and how to export perfect files.",
    author: "BookLoom Team", date: "July 20, 2026", readTime: "6 min read",
    img: "/images/book_wealth_mindset.png", dark: false,
  },
];

const SECONDARY_ARTICLES = [
  { slug: "kindle-publishing-2026", tag: "KDP", title: "Amazon KDP Royalty Rates & Pricing Strategy", desc: "Step-by-step breakdown of KDP's 70% royalty tier, international currency conversion, and launch pricing.", author: "BookLoom Team", date: "July 15, 2026", readTime: "9 min read", img: "/images/book_startup_playbook.png" },
  { slug: "ai-writing-prompts", tag: "DESIGN", title: "Ebook Cover Design: Principles That Sell 3x More Books", desc: "Design high-converting covers with minimalist cream layouts, bold serif fonts, and high-contrast visuals.", author: "BookLoom Team", date: "July 10, 2026", readTime: "6 min read", img: "/images/book_deep_focus_mastery.png" },
  { slug: "epub-formatting-guide", tag: "MARKETING", title: "How to Market Your Ebook and Build an Email Author List", desc: "Proven strategies to build a reader audience, collect reviews, and run pre-launch campaigns.", author: "BookLoom Team", date: "July 02, 2026", readTime: "7 min read", img: "/images/book_financial_freedom.png" },
];

const LATEST_ARTICLES = [
  { slug: "kindle-publishing-2026", title: "How to Outline Your Ebook with AI (Complete 2026 Guide)", desc: "Learn how to create a structured 10-chapter ebook outline in minutes using AI models.", tag: "AI Tools", date: "July 29, 2026", readTime: "5 min read" },
  { slug: "epub-formatting-guide", title: "PDF vs EPUB: Which Format Should You Export?", desc: "Compare fixed layout PDFs and reflowable EPUBs to choose the best format for your readers.", tag: "Formats", date: "July 24, 2026", readTime: "6 min read" },
  { slug: "ai-writing-prompts", title: "10 AI Prompts Every Author Should Try in 2026", desc: "Discover essential AI prompts to help you outline, edit, design, and market your ebook.", tag: "AI Tools", date: "July 18, 2026", readTime: "8 min read" },
];

const TOPICS = [
  { icon: "✏️", name: "Writing" }, { icon: "📚", name: "Publishing" }, { icon: "📦", name: "Amazon KDP" },
  { icon: "✦", name: "AI Tools" }, { icon: "🎨", name: "Design" }, { icon: "📣", name: "Marketing" },
  { icon: "📄", name: "Formats" }, { icon: "💼", name: "Business" },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "72px 24px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>OUR BLOG</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, margin: "0 0 16px" }}>
              Insights to Help You<br />Create, Publish & Grow<br />
              <span style={{ color: "#C49A3C", fontStyle: "italic" }}>with Ebooks</span>
            </h1>
            <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28, maxWidth: 440 }}>
              Actionable guides, expert tips, and AI-powered strategies to help you write better, design smarter, and publish faster.
            </p>
            <div style={{ position: "relative", maxWidth: 360 }}>
              <Search size={16} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
              <input placeholder="Search articles..." style={{ width: "100%", padding: "11px 12px 11px 40px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FFFFFF", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
            </div>
          </div>
          <div>
            <img src="/images/laptop_bookloom_mockup.png" alt="Blog" style={{ width: "100%", borderRadius: 16, objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 20 }}>Popular Topics</h2>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {TOPICS.map(t => (
              <div key={t.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: "#FFFFFF", border: "1px solid #E8E4DF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{t.icon}</div>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#4A4A4A" }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Featured Articles</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {FEATURED_ARTICLES.map((a, i) => (
              <Link key={i} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  borderRadius: 12, overflow: "hidden", border: "1px solid #E8E4DF",
                  background: a.dark ? "#1A1A1A" : "#FFFFFF",
                  display: "flex", flexDirection: "column", height: "100%", cursor: "pointer"
                }}>
                  {a.img && <img src={a.img} alt={a.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />}
                  <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "inline-flex", padding: "3px 8px", borderRadius: 4, background: "#FBF3E0", color: "#9A6F1A", fontSize: 10, fontWeight: 700, marginBottom: 10, width: "fit-content" }}>{a.tag}</div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: a.dark ? "#FFFFFF" : "#1A1A1A", lineHeight: 1.4, marginBottom: 8 }}>{a.title}</h3>
                    <p style={{ fontSize: 12, color: a.dark ? "#9A9A9A" : "#6B6B6B", lineHeight: 1.6, flex: 1 }}>{a.desc}</p>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 11, color: "#9A9A9A" }}>
                      <span>{a.author} · {a.readTime}</span>
                      <span style={{ color: "#C49A3C", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>Read Article →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary articles */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {SECONDARY_ARTICLES.map((a, i) => (
            <Link key={i} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden", height: "100%", cursor: "pointer" }}>
                {a.img && <img src={a.img} alt={a.title} style={{ width: "100%", height: 140, objectFit: "cover" }} />}
                <div style={{ padding: 20 }}>
                  <div style={{ display: "inline-flex", padding: "3px 8px", borderRadius: 4, background: "#F0EDE8", color: "#9A6F1A", fontSize: 10, fontWeight: 700, marginBottom: 10 }}>{a.tag}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 8 }}>{a.title}</h3>
                  <p style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6, marginBottom: 16 }}>{a.desc}</p>
                  <div style={{ fontSize: 11, color: "#9A9A9A" }}>{a.author} · {a.date} · {a.readTime}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles + Newsletter */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 40 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 20 }}>Latest Articles</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {LATEST_ARTICLES.map((a, i) => (
                <Link key={i} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ padding: "20px 0", borderBottom: "1px solid #E8E4DF", display: "flex", alignItems: "center", gap: 16, cursor: "pointer" }}>
                    <div style={{ width: 56, height: 56, background: "#F0EDE8", borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>📖</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A", marginBottom: 4 }}>{a.title}</h3>
                      <p style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 8 }}>{a.desc}</p>
                      <span style={{ fontSize: 11, color: "#9A9A9A" }}>{a.date} · {a.readTime}</span>
                    </div>
                    <div style={{ fontSize: 11, padding: "4px 10px", borderRadius: 999, background: "#FBF3E0", color: "#9A6F1A", fontWeight: 600 }}>{a.tag}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter sidebar */}
          <div>
            <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 28, textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>✉️</div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#1A1A1A", marginBottom: 8 }}>Stay Inspired</h3>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6, marginBottom: 20 }}>
                Get the best tips, guides, and updates delivered to your inbox.
              </p>
              {!subscribed ? (
                <>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email"
                    style={{ width: "100%", padding: "11px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", marginBottom: 10, boxSizing: "border-box" }} />
                  <button onClick={() => setSubscribed(true)} style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "11px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                    Subscribe Free
                  </button>
                </>
              ) : (
                <div style={{ background: "#E8F5E9", color: "#2E7D32", padding: 12, borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
                  ✓ You're subscribed! Check your inbox soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
