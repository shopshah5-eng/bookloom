"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export default function PrivacyPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", marginBottom: 24 }}>Privacy Policy</h1>
        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, lineHeight: 1.8, color: "#4A4A4A", fontSize: 14 }}>
          <p>Your privacy is important to us. BookLoom is committed to protecting your personal information and your right to privacy.</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginTop: 24, marginBottom: 12 }}>Information We Collect</h2>
          <p>We collect personal information that you provide to us such as name, email address, and authentication data via Supabase Google OAuth.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
