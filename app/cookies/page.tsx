"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export default function CookiesPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", marginBottom: 24 }}>Cookie Policy</h1>
        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, lineHeight: 1.8, color: "#4A4A4A", fontSize: 14 }}>
          <p>This Cookie Policy explains how BookLoom uses cookies and similar technologies to recognize you when you visit our web application.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginTop: 24, marginBottom: 12 }}>What Are Cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginTop: 24, marginBottom: 12 }}>How We Use Cookies</h2>
          <p>We use essential cookies to keep you signed in, remember your preferences, and maintain session security across BookLoom.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
