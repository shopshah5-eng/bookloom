"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Sparkles, BookOpen, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>OUR MISSION</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, margin: "0 0 16px" }}>
            Empowering Every Author to<br />
            <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Publish Best-Selling Ebooks</span>
          </h1>
          <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.7 }}>
            BookLoom was built with a simple conviction: technology should unlock human creativity, not replace it. We combine generative AI with world-class typography and design so anyone can publish professional ebooks in minutes.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            { value: "4,900+", label: "Active Authors" },
            { value: "12,500+", label: "Ebooks Created" },
            { value: "85+", label: "Countries Reached" },
            { value: "4.9 / 5", label: "User Rating" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32, textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: "#6B6B6B" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
