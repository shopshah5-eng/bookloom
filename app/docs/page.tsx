"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Search, BookOpen, FileText, Code2, Rocket, HelpCircle } from "lucide-react";

export default function DocsPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>HELP CENTER & DOCS</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>
            Documentation & Guides
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", marginBottom: 32 }}>Everything you need to learn, build, and publish with BookLoom.</p>
          <div style={{ position: "relative", maxWidth: 420, margin: "0 auto" }}>
            <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A" }} />
            <input placeholder="Search documentation..." style={{ width: "100%", padding: "12px 14px 12px 42px", border: "1px solid #E8E4DF", borderRadius: 10, fontSize: 13, background: "#FFFFFF", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { icon: <Rocket size={24} />, title: "Getting Started", desc: "Learn the basics of creating your first ebook in 5 minutes." },
            { icon: <BookOpen size={24} />, title: "Editor & Formatting", desc: "Master chapter layout, typography styles, and visual blocks." },
            { icon: <Code2 size={24} />, title: "API & Webhooks", desc: "Integrate BookLoom programmatically via REST & GraphQL." },
          ].map((item, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32 }}>
              <div style={{ color: "#C49A3C", marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
