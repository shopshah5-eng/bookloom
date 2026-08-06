"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export default function PrivacyPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>PRIVACY & DATA PROTECTION</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 800, color: "#1A1A1A", marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: "#6B6B6B" }}>Last Updated: July 2026 · Effective Date: July 1, 2026</p>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: "40px 48px", lineHeight: 1.8, color: "#4A4A4A", fontSize: 14 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A" }}>
            At BookLoom, we take your privacy and data security seriously. This Privacy Policy explains how we collect, use, process, and protect your personal information and content when using our platform.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>1. Information We Collect</h2>
          <p>
            We collect personal information necessary to deliver our ebook creation platform:
          </p>
          <ul style={{ paddingLeft: 24, margin: "12px 0" }}>
            <li><strong>Account Data:</strong> Name, email address, and authentication credentials via Supabase Auth or Google OAuth.</li>
            <li><strong>User Content:</strong> Ebook prompts, chapter outlines, generated manuscripts, custom uploaded images, and export configurations.</li>
            <li><strong>Usage & Analytics:</strong> Credit consumption metrics, page generation logs, device type, and session telemetry.</li>
          </ul>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>2. How We Use Your Data & AI Processing</h2>
          <p>
            Your prompt data and chapter text are processed strictly to generate and format your ebooks. We utilize enterprise API integrations with OpenAI, Anthropic, Google Gemini, DeepSeek, and NVIDIA NIM under strict data protection agreements:
          </p>
          <ul style={{ paddingLeft: 24, margin: "12px 0" }}>
            <li>Your private manuscripts are <strong>NEVER used to train public foundation models</strong>.</li>
            <li>API data sent to LLM providers is processed transiently for generation only.</li>
            <li>Generated PDFs, EPUBs, and cover artwork remain strictly private to your account.</li>
          </ul>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>3. Authentication & Third-Party Security</h2>
          <p>
            BookLoom relies on Supabase Auth and Google OAuth for enterprise-grade authentication. Password hashes are encrypted at rest using industry-standard bcrypt hashing. Sessions are secured via encrypted HTTPS transport.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>4. Data Retention & Deletion</h2>
          <p>
            We retain your projects and generated exports as long as your account remains active. You can delete individual ebooks or request full account deletion at any time by contacting support@bookloom.ai. Upon deletion, all associated files and database records are permanently purged.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>5. Cookies & Local Storage</h2>
          <p>
            We use essential session cookies and local storage to maintain your authentication state and workspace preferences. We do not sell user data to third-party ad networks.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>6. Contact Privacy Team</h2>
          <p>
            For privacy inquiries or data access requests under GDPR/CCPA, please contact our Data Protection Officer at privacy@bookloom.ai or via our <a href="/contact" style={{ color: "#C49A3C", fontWeight: 600 }}>Contact Form</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
