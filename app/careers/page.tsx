"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const POSITIONS = [
  { title: "Senior Full Stack Engineer (Next.js)", dept: "Engineering", location: "Remote / San Francisco", type: "Full-time" },
  { title: "AI Research & NLP Engineer", dept: "AI Science", location: "Remote", type: "Full-time" },
  { title: "Senior Product Designer (UI/UX)", dept: "Design", location: "Remote / London", type: "Full-time" },
  { title: "Content Marketing Manager", dept: "Marketing", location: "Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>JOIN OUR TEAM</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>Careers at BookLoom</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>Help us shape the future of AI publishing and empowering authors worldwide.</p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {POSITIONS.map((p, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: "0 0 6px" }}>{p.title}</h3>
                <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#6B6B6B" }}>
                  <span>💼 {p.dept}</span>
                  <span>📍 {p.location}</span>
                  <span>⏱ {p.type}</span>
                </div>
              </div>
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                Apply Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
