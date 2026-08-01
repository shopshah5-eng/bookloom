"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", marginBottom: 12 }}>Contact Support</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>We're here to help you build, design, and publish your next best-selling ebook.</p>
        </div>
        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36 }}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Your Email</label>
            <input placeholder="you@example.com" style={{ width: "100%", padding: "12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 14, background: "#FAFAFA", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Message</label>
            <textarea placeholder="How can we help?" style={{ width: "100%", height: 120, padding: "12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 14, background: "#FAFAFA", outline: "none", boxSizing: "border-box" }} />
          </div>
          <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Send Message →
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
