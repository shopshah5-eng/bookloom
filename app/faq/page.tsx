"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  { q: "How does BookLoom generate ebooks?", a: "BookLoom uses a multi-AI engine (TokenRouter, NVIDIA NIM, and Nano Banana AI) to outline, write, design covers, and export ebooks in minutes." },
  { q: "Can I sell my ebooks on Amazon KDP?", a: "Yes! All ebooks exported from BookLoom are 100% royalty-free and formatted for Amazon KDP, Apple Books, and Google Play." },
  { q: "Are the generated book covers watermark-free?", a: "Yes! All images generated via Nano Banana AI are 100% clean, high-resolution (1024x1024), and watermark-free." },
  { q: "What is the page limit for the Free plan?", a: "The Free plan supports up to 30 pages per book. You can upgrade to Creator or Pro to generate up to 100-300 pages!" },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "72px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#1A1A1A", margin: "0 0 16px" }}>Everything You Need to Know</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>Got questions about BookLoom? We've got answers.</p>
        </div>
      </section>

      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24, cursor: "pointer" }} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>{faq.q}</h3>
                <ChevronDown size={18} color="#C49A3C" style={{ transform: openIdx === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </div>
              {openIdx === i && (
                <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.7, marginTop: 12, borderTop: "1px solid #E8E4DF", paddingTop: 12, margin: "12px 0 0" }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
