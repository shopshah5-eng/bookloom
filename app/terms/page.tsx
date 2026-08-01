"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export default function TermsPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", marginBottom: 24 }}>Terms of Service</h1>
        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, lineHeight: 1.8, color: "#4A4A4A", fontSize: 14 }}>
          <p>Welcome to BookLoom. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginTop: 24, marginBottom: 12 }}>1. Ownership & Royalty Rights</h2>
          <p>You retain 100% full ownership, copyright, and royalties for all ebooks, covers, and content generated using BookLoom.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginTop: 24, marginBottom: 12 }}>2. Usage Limits</h2>
          <p>Usage is governed by your plan tier (Free: 30 pages max; Creator: 100 pages max; Pro: 300 pages max).</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
