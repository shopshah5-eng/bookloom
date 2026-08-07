"use client";

import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export default function TermsPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>LEGAL & AGREEMENTS</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 800, color: "#1A1A1A", marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ fontSize: 14, color: "#6B6B6B" }}>Last Updated: July 2026 · Effective Date: July 1, 2026</p>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: "40px 48px", lineHeight: 1.8, color: "#4A4A4A", fontSize: 14 }}>
          <p style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A" }}>
            Welcome to BookLoom. By accessing or using our software, platform, web applications, or API services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>1. 100% Intellectual Property & Royalty Rights</h2>
          <p>
            You retain 100% full, unencumbered ownership, copyright, and publishing royalty rights for all ebooks, text content, cover graphics, illustrations, and SVG assets generated using BookLoom. BookLoom claims zero ownership or royalties over your finished publications.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>2. Account Registration & Security</h2>
          <p>
            You must provide accurate information when registering an account via Supabase Email or Google OAuth. You are responsible for safeguarding your authentication credentials and for all activities that occur under your account.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>3. Plan Tiers & Usage Limits</h2>
          <p>
            Service access and quotas are strictly governed by your selected plan tier:
          </p>
          <ul style={{ paddingLeft: 24, margin: "12px 0" }}>
            <li><strong>Free Tier:</strong> Max 3 ebooks/month, up to 30 pages/book, 500 AI credits/month.</li>
            <li><strong>Creator Tier ($19/mo):</strong> Max 15 ebooks/month, up to 100 pages/book, 2,500 AI credits/month.</li>
            <li><strong>Pro Tier ($39/mo):</strong> Max 50 ebooks/month, up to 300 pages/book, 10,000 AI credits/month.</li>
            <li><strong>Team Tier ($99/mo):</strong> Max 200 ebooks/month, up to 500 pages/book, 30,000 AI credits/month.</li>
            <li><strong>Enterprise Tier:</strong> Custom page limits, volume credits, and dedicated API infrastructure.</li>
          </ul>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>4. Fair Use & Prohibited Conduct</h2>
          <p>
            You agree not to use BookLoom to generate content that promotes hate speech, illegal activities, malware, copyright infringement, or deceptive scams. We reserve the right to suspend accounts violating these standards.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>5. Subscriptions, Payments & Refunds</h2>
          <p>
            Paid subscriptions recur on a monthly or annual basis. You may cancel at any time via your dashboard settings. We offer a hassle-free 14-day money-back guarantee for first-time paid plan subscribers.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>6. Limitation of Liability</h2>
          <p>
            BookLoom provides services &quot;as is&quot; without warranty of any kind. In no event shall BookLoom or its operators be liable for indirect, consequential, or special damages arising from service usage or platform downtime.
          </p>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginTop: 32, marginBottom: 12 }}>7. Contact & Support</h2>
          <p>
            If you have questions regarding these Terms, please reach out through our <a href="/contact" style={{ color: "#C49A3C", fontWeight: 600 }}>Contact Page</a> or email support@bookloom.ai.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
