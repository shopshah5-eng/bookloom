"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import {
  Sparkles, Wand2, CheckCircle, Download, Edit3, BookOpen,
  Image as ImageIcon, FileText, ChevronLeft, ChevronRight,
  Star, ArrowRight, Zap, Layers, Globe, Shield
} from "lucide-react";

const THEMES = [
  { name: "Modern Minimal", bg: "#F5F5F0", textColor: "#1A1A1A", border: "#E0DDD8" },
  { name: "Elegant Literary", bg: "#F5F0E8", textColor: "#3D2B1A", border: "#D4C4A8" },
  { name: "Bold Corporate", bg: "#1A2540", textColor: "#FFFFFF", border: "#2D3E60" },
  { name: "Dark Premium", bg: "#0D0D0D", textColor: "#F0E8D0", border: "#2A2A2A" },
  { name: "Vibrant Creative", bg: "#7C3AED", textColor: "#FFFFFF", border: "#6D28D9" },
  { name: "Vintage Classic", bg: "#3D2B1A", textColor: "#F0E0C0", border: "#5A3D22" },
  { name: "Futuristic Tech", bg: "#070B1A", textColor: "#00E5FF", border: "#0D1A3A" },
];

const BOOKS = [
  { title: "The Wealth Mindset", category: "Finance", img: "/images/book_wealth_mindset.png", views: "24.5K", pages: "28" },
  { title: "Minimalist Living", category: "Self Help", img: "/images/book_minimalist_living.png", views: "18.7K", pages: "21" },
  { title: "Startup Playbook 2026", category: "Business", img: "/images/book_startup_playbook.png", views: "31.2K", pages: "35" },
  { title: "Deep Focus Mastery", category: "Self Help", img: "/images/book_deep_focus_mastery.png", views: "22.1K", pages: "26" },
  { title: "AI Productivity Power", category: "Business", img: "/images/book_ai_productivity.png", views: "27.6K", pages: "30" },
];

const TESTIMONIALS = [
  {
    quote: "BookLoom helped me outline, write, and format my 120-page business guide in under 4 hours. The layout quality is publication-ready.",
    name: "Sarah Johnson", role: "SaaS Founder & Bestselling Author", rating: 5,
  },
  {
    quote: "The multi-provider AI options (GPT-4o + Claude 3.5) produce coherent chapter structures with zero fluff. Best ebook workflow on the web.",
    name: "James Carter", role: "Senior Tech Columnist @ DevPublish", rating: 5,
  },
  {
    quote: "As a self-publisher, design and export formatting used to take weeks. BookLoom handles covers, TOC, and PDF styling seamlessly.",
    name: "Priya Sharma", role: "Independent Publisher & Educator", rating: 5,
  },
];

export default function HomePage() {
  const [promptInput, setPromptInput] = useState("");
  const [aiProvider, setAiProvider] = useState("OpenAI (GPT-4o)");
  const [theme, setTheme] = useState("Elegant Literary");
  const [activeTheme, setActiveTheme] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const features = [
    { icon: <Wand2 size={28} strokeWidth={1.5} />, title: "AI-Powered Writing", desc: "Create engaging, well-structured content with advanced AI models." },
    { icon: <ImageIcon size={28} strokeWidth={1.5} />, title: "Stunning Visuals", desc: "Generate covers, illustrations and custom SVGs that elevate your ebook." },
    { icon: <Download size={28} strokeWidth={1.5} />, title: "Multiple Exports", desc: "Export to PDF, EPUB, and download all assets in high quality." },
    { icon: <Edit3 size={28} strokeWidth={1.5} />, title: "Live Editing", desc: "Edit any chapter, regenerate content, and perfect your ebook effortlessly." },
    { icon: <Layers size={28} strokeWidth={1.5} />, title: "Beautiful Layouts", desc: "Professional typography, TOC, cover pages and elegant formatting." },
    { icon: <FileText size={28} strokeWidth={1.5} />, title: "Complete Package", desc: "Get all images, SVGs, markdown files and more in one ZIP folder." },
  ];

  const howItWorks = [
    { step: 1, icon: <Edit3 size={22} />, title: "Describe Your Idea", desc: "Write a prompt or choose an example. Select your AI provider and theme." },
    { step: 2, icon: <Zap size={22} />, title: "Generate Content", desc: "AI creates outline, chapters and content tailored to your topic and style." },
    { step: 3, icon: <ImageIcon size={22} />, title: "Add Beautiful Visuals", desc: "Generate covers, images and custom SVGs to bring your ebook to life." },
    { step: 4, icon: <Download size={22} />, title: "Export & Download", desc: "Export as PDF, EPUB or download all assets in a complete package." },
  ];

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section style={{ background: "#F8F5F0", padding: "72px 24px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 24 }}>
              <Sparkles size={12} color="#C49A3C" />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#9A6F1A" }}>AI POWERED EBOOK CREATOR</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 52, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, margin: "0 0 16px" }}>
              Turn Any Idea Into<br />
              a <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Beautiful</span> Ebook
            </h1>

            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              From a simple prompt to a professionally written ebook with stunning covers, illustrations, and premium exports in minutes.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16, maxWidth: 420 }}>
              {[
                { icon: <Globe size={14} />, title: "Multi-AI Support", sub: "GPT-4o, Claude 3.5, Gemini & DeepSeek" },
                { icon: <ImageIcon size={14} />, title: "Stunning Visuals", sub: "Covers, Images & SVGs" },
                { icon: <Download size={14} />, title: "Premium Exports", sub: "PDF, EPUB & More" },
                { icon: <Layers size={14} />, title: "All-in-One Package", sub: "Everything you need in one place" },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ color: "#C49A3C", marginTop: 2 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{f.title}</div>
                    <div style={{ fontSize: 11, color: "#9A9A9A" }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Book Display */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative" }}>
            <img
              src="/images/hero_books_display.png"
              alt="BookLoom example ebooks"
              style={{ width: "100%", maxWidth: 500, objectFit: "contain", borderRadius: 12 }}
            />
          </div>
        </div>

        {/* Create Ebook Form Box */}
        <div style={{ maxWidth: 1280, margin: "40px auto 0" }}>
          <div style={{
            background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 16,
            padding: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Sparkles size={16} color="#C49A3C" />
              <span style={{ fontWeight: 600, fontSize: 16, color: "#1A1A1A" }}>Start Creating Your Ebook</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 220px 220px auto", gap: 12, alignItems: "flex-end" }}>
              <div>
                <textarea
                  value={promptInput}
                  onChange={e => setPromptInput(e.target.value)}
                  placeholder="Describe your ebook idea in detail..."
                  style={{
                    width: "100%", minHeight: 80, resize: "none",
                    background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 8,
                    padding: "10px 14px", fontSize: 13, color: "#1A1A1A",
                    fontFamily: "Inter, sans-serif", outline: "none"
                  }}
                />
                <div style={{ fontSize: 11, color: "#9A9A9A", marginTop: 4 }}>0/4000</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                  {["Wealth Mindset", "Startup Playbook", "Deep Focus", "Minimalist Living"].map(ex => (
                    <button key={ex} onClick={() => setPromptInput(ex)}
                      style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, border: "1px solid #E8E4DF", background: "#F8F5F0", cursor: "pointer", color: "#4A4A4A" }}>
                      ✦ {ex}
                    </button>
                  ))}
                  <button style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, border: "1px solid #E8E4DF", background: "#F8F5F0", cursor: "pointer", color: "#C49A3C" }}>More Examples →</button>
                </div>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>AI Provider</label>
                <select value={aiProvider} onChange={e => setAiProvider(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, background: "#F8F5F0", fontSize: 13, color: "#1A1A1A", fontFamily: "Inter, sans-serif", outline: "none" }}>
                  <option>OpenAI (GPT-4o)</option>
                  <option>Anthropic Claude</option>
                  <option>Google Gemini</option>
                  <option>BookLoom AI</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Visual Theme</label>
                <select value={theme} onChange={e => setTheme(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, background: "#F8F5F0", fontSize: 13, color: "#1A1A1A", fontFamily: "Inter, sans-serif", outline: "none" }}>
                  {THEMES.map(t => <option key={t.name}>{t.name}</option>)}
                </select>
              </div>

              <Link href="/dashboard/create">
                <button style={{
                  background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10,
                  padding: "14px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap",
                  fontFamily: "Inter, sans-serif"
                }}>
                  Generate Outline <Sparkles size={14} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
              Powerful Features for Beautiful Ebooks
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#C49A3C", fontSize: 18, marginBottom: 8 }}>✦</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 24 }}>
            {features.map((f) => (
              <div key={f.title} style={{ textAlign: "center", padding: "32px 16px", background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF" }}>
                <div style={{ color: "#1A1A1A", marginBottom: 16, display: "flex", justifyContent: "center" }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A", marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: "48px 24px 80px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#1A1A1A", textAlign: "center", marginBottom: 48 }}>
            How It Works
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, alignItems: "flex-start", position: "relative" }}>
            {howItWorks.map((step, i) => (
              <div key={step.step} style={{ textAlign: "center", padding: "0 24px", position: "relative" }}>
                {i < howItWorks.length - 1 && (
                  <div style={{
                    position: "absolute", top: 28, left: "50%", right: "-50%",
                    height: 1, background: "repeating-linear-gradient(90deg, #E8E4DF 0, #E8E4DF 4px, transparent 4px, transparent 8px)"
                  }} />
                )}
                <div style={{
                  width: 56, height: 56, borderRadius: 999, border: "2px solid #E8E4DF",
                  background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px", fontFamily: "'Playfair Display', serif",
                  fontSize: 20, fontWeight: 700, color: "#1A1A1A", position: "relative", zIndex: 1
                }}>
                  {step.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 8 }}>{step.title}</div>
                <div style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXAMPLE EBOOKS ===== */}
      <section style={{ padding: "80px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
              Example Ebooks Created with BookLoom
            </h2>
            <Link href="/examples" style={{ fontSize: 14, color: "#C49A3C", textDecoration: "none", fontWeight: 500 }}>
              View All Examples →
            </Link>
          </div>

          <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
            {BOOKS.map((book) => (
              <div key={book.title} style={{
                minWidth: 160, background: "#FFFFFF", borderRadius: 12, overflow: "hidden",
                border: "1px solid #E8E4DF", flexShrink: 0
              }}>
                <img src={book.img} alt={book.title} loading="lazy" decoding="async" style={{ width: "100%", height: 200, objectFit: "cover" }} />
                <div style={{ padding: "12px" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>{book.title}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9A9A9A" }}>
                    <span>👁 {book.views}</span>
                    <span>📄 {book.pages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THEMES ===== */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", textAlign: "center", marginBottom: 40 }}>
            Choose a Theme That Matches Your Vision
          </h2>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {THEMES.map((t, i) => (
              <div key={t.name} onClick={() => setActiveTheme(i)}
                style={{
                  padding: "16px", borderRadius: 12, border: `2px solid ${activeTheme === i ? "#C49A3C" : "#E8E4DF"}`,
                  cursor: "pointer", minWidth: 100, transition: "border-color 0.15s", background: "#FAFAFA",
                  position: "relative"
                }}>
                {activeTheme === i && (
                  <div style={{
                    position: "absolute", top: -8, right: -8, width: 20, height: 20,
                    borderRadius: "50%", background: "#C49A3C", display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <CheckCircle size={12} color="#FFFFFF" />
                  </div>
                )}
                <div style={{ width: 64, height: 80, borderRadius: 6, background: t.bg, border: `1px solid ${t.border}`, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 8, color: t.textColor, fontFamily: "'Playfair Display', serif", textAlign: "center", padding: 4, lineHeight: 1.3 }}>Aa</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#1A1A1A", textAlign: "center" }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: "80px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", textAlign: "center", marginBottom: 48 }}>
            Loved by Creators Worldwide
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative" }}>
            <button onClick={() => setTestimonialIdx(Math.max(0, testimonialIdx - 1))}
              style={{ position: "absolute", left: -40, top: "50%", transform: "translateY(-50%)", background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronLeft size={16} />
            </button>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 32 }}>
                <div style={{ fontSize: 48, color: "#C49A3C", lineHeight: 1, marginBottom: 8, fontFamily: "Georgia" }}>"</div>
                <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} color="#C49A3C" fill="#C49A3C" />)}
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{t.name}</div>
                <div style={{ fontSize: 12, color: "#9A9A9A" }}>{t.role}</div>
              </div>
            ))}
            <button onClick={() => setTestimonialIdx(Math.min(TESTIMONIALS.length - 1, testimonialIdx + 1))}
              style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== CTA FOOTER BANNER ===== */}
      <section style={{ padding: "64px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 20, border: "1px solid #E8E4DF", padding: "48px 64px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
              <img src="/images/books_stack_with_plant.png" alt="BookLoom" style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 12 }} />
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
                  Ready to Create Something Amazing?
                </h2>
                <p style={{ fontSize: 14, color: "#6B6B6B", margin: 0 }}>
                  Join thousands of creators who trust BookLoom to produce professional ebooks that inspire and sell.
                </p>
                <div style={{ display: "flex", gap: 24, marginTop: 16, fontSize: 12, color: "#6B6B6B" }}>
                  {["No credit card required", "Free forever plan available", "Upgrade anytime"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={13} color="#C49A3C" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ marginBottom: 8 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A" }}>Start for Free</span>
              </div>
              <div style={{ fontSize: 13, color: "#9A9A9A", marginBottom: 16 }}>
                $<span style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A" }}>0</span>
                <span>/forever</span>
              </div>
              <Link href="/auth/signup">
                <button style={{
                  background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10,
                  padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif"
                }}>
                  <Sparkles size={15} /> Get Started Free
                </button>
              </Link>
              <div style={{ fontSize: 11, color: "#9A9A9A", marginTop: 8 }}>No credit card required</div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "BookLoom",
            "operatingSystem": "Web",
            "applicationCategory": "DesignApplication",
            "description": "AI-Powered Ebook Creator & Publishing Studio for writing, illustrating, and exporting print-ready PDFs and EPUBs.",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1200",
            },
          }),
        }}
      />
      <Footer />
    </div>
  );
}
