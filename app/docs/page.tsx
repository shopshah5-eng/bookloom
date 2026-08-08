"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Search, BookOpen, FileText, Code2, Rocket, HelpCircle, Terminal, CheckCircle2, ArrowRight } from "lucide-react";

export default function DocsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"quickstart" | "api" | "export">("quickstart");

  const categories = [
    { icon: <Rocket size={22} />, title: "Quickstart Guide", desc: "Learn how to prompt, outline, and generate your first ebook in under 5 minutes." },
    { icon: <BookOpen size={22} />, title: "Editor & Typography", desc: "Master custom drop caps, chapter presets, theme overrides, and TOC hierarchy." },
    { icon: <Code2 size={22} />, title: "REST API Reference", desc: "Programmatically call /api/generate and /api/export to automate book builds." },
  ];

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#855B0B", textTransform: "uppercase" }}>DOCUMENTATION & KNOWLEDGE BASE</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>
            BookLoom Developer & Author Docs
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", marginBottom: 32 }}>Everything you need to learn, build, format, and publish print-ready ebooks.</p>
          <div style={{ position: "relative", maxWidth: 460, margin: "0 auto" }}>
            <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search documentation (e.g., EPUB export, REST API, themes)..."
              aria-label="Search Documentation"
              style={{ width: "100%", padding: "12px 14px 12px 42px", border: "1px solid #E8E4DF", borderRadius: 10, fontSize: 13, background: "#FFFFFF", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28, boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
              <div style={{ color: "#C49A3C", marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code & Guides Workspace */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: "36px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", gap: 12, borderBottom: "1px solid #E8E4DF", paddingBottom: 16, marginBottom: 24 }}>
            {[
              { id: "quickstart", label: "🚀 Quickstart" },
              { id: "api", label: "💻 API Reference" },
              { id: "export", label: "📄 PDF & EPUB Formatting" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  border: "none", background: activeTab === tab.id ? "#1A1A1A" : "#F8F5F0",
                  color: activeTab === tab.id ? "#FFFFFF" : "#4A4A4A"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "quickstart" && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>Creating Your First Ebook</h3>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 20 }}>
                BookLoom simplifies book creation into 4 distinct phases: Prompt Input, Outline Manifesting, Chapter Editing, and Multi-Format Binary Export.
              </p>
              <div style={{ background: "#0F172A", color: "#F8FAFC", borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: 12, lineHeight: 1.7 }}>
                <div># 1. Install BookLoom CLI or trigger API endpoint</div>
                <div style={{ color: "#38BDF8" }}>curl -X POST https://bookloom-phi.vercel.app/api/generate \</div>
                <div style={{ color: "#38BDF8" }}>  -H &quot;Content-Type: application/json&quot; \</div>
                <div style={{ color: "#38BDF8" }}>  -d &apos;&#123;&quot;prompt&quot;: &quot;Deep Focus Mastery&quot;, &quot;chaptersCount&quot;: 7&#125;&apos;</div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>REST API Endpoints</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 8, padding: 16 }}>
                  <span style={{ background: "#22C55E", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, marginRight: 8 }}>POST</span>
                  <code style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>/api/generate</code>
                  <div style={{ fontSize: 12, color: "#6B6B6B", marginTop: 4 }}>Triggers multi-model AI outline generation and chapter creation payload.</div>
                </div>
                <div style={{ background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 8, padding: 16 }}>
                  <span style={{ background: "#3B82F6", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, marginRight: 8 }}>POST</span>
                  <code style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>/api/export</code>
                  <div style={{ fontSize: 12, color: "#6B6B6B", marginTop: 4 }}>Compiles manuscript text into binary PDF stream or uncompressed EPUB ZIP package.</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "export" && (
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 12 }}>Print-Ready Export Specifications</h3>
              <ul style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.8, paddingLeft: 20 }}>
                <li><strong>PDF Output:</strong> Embedded Type1 Helvetica, 6x9 trim size, 50pt margins, automatic page numbering.</li>
                <li><strong>EPUB 3.0:</strong> Specification-compliant XML container structure compatible with Apple Books, Kindle Direct Publishing (KDP), and Kobo.</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
