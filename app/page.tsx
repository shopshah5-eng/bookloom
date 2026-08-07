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
  {
    quote: "The vector SVG illustration engine and typography presets turned my raw notes into a bestseller on Amazon KDP within a weekend.",
    name: "David Vance", role: "Non-Fiction Author & Consultant", rating: 5,
  },
  {
    quote: "Creating course workbooks and lead magnet EPUBs used to cost thousands in design fees. BookLoom paid for itself on day one.",
    name: "Elena Rostova", role: "Digital Product Creator", rating: 5,
  },
  {
    quote: "From chapter outlines to cover art generation, BookLoom is the most intuitive publishing platform I've ever tested.",
    name: "Marcus Chen", role: "Growth Lead & Tech Writer", rating: 5,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "BookLoom",
      "applicationCategory": "DesignApplication",
      "operatingSystem": "All",
      "url": "https://bookloom-phi.vercel.app",
      "description": "AI-Powered Ebook Creator & Publishing Studio",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does BookLoom generate ebooks with AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BookLoom uses advanced AI models like GPT-4o, Claude 3.5, and Gemini to generate structured chapter outlines, manuscript content, cover designs, and print-ready PDF and EPUB files from a single topic prompt."
          }
        },
        {
          "@type": "Question",
          "name": "Can I export my ebook to PDF and EPUB formats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BookLoom supports high-resolution PDF exports, reflowable EPUB 3.0 ebooks, and ZIP packages containing all raw Markdown and vector SVG assets."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  const [promptInput, setPromptInput] = useState("");
  const [aiProvider, setAiProvider] = useState("OpenAI (GPT-4o)");
  const [theme, setTheme] = useState("Elegant Literary");
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

      <main id="main-content">
        {/* ===== HERO ===== */}
      <section style={{ background: "#F8F5F0", padding: "48px 16px 0" }} className="md:px-6 md:pt-16">
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 24 }}>
              <Sparkles size={12} color="#C49A3C" />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#855B0B" }}>AI POWERED EBOOK CREATOR</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.1, margin: "0 0 16px" }}>
              Turn Any Idea Into<br />
              a <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Beautiful</span> Ebook
            </h1>

            <p style={{ fontSize: 16, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              From a simple prompt to a professionally written ebook with stunning covers, illustrations, and premium exports in minutes.
            </p>

            <div style={{ maxWidth: 420 }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
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
              loading="eager"
              fetchPriority="high"
              style={{ width: "100%", maxWidth: 500, objectFit: "contain", borderRadius: 12 }}
            />
          </div>
        </div>

        {/* Create Ebook Form Box */}
        <div style={{ maxWidth: 1280, margin: "40px auto 0" }} className="w-full max-w-full overflow-hidden">
          <div style={{
            background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 16,
            padding: 24, boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Sparkles size={16} color="#C49A3C" />
              <span className="heading-hover" style={{ fontWeight: 600, fontSize: 16, color: "#1A1A1A" }}>Start Creating Your Ebook</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <textarea
                  value={promptInput}
                  onChange={e => setPromptInput(e.target.value)}
                  maxLength={4000}
                  placeholder="Describe your ebook idea in detail..."
                  aria-label="Describe your ebook topic prompt"
                  style={{
                    width: "100%", minHeight: 80, resize: "none",
                    background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 8,
                    padding: "10px 14px", fontSize: 13, color: "#1A1A1A",
                    fontFamily: "Inter, sans-serif", outline: "none"
                  }}
                />
                <div aria-live="polite" style={{ fontSize: 11, color: "#6B6B6B", marginTop: 4 }}>{promptInput.length}/4000</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                  {["Wealth Mindset", "Startup Playbook", "Deep Focus", "Minimalist Living"].map(ex => (
                    <button key={ex} onClick={() => setPromptInput(ex)}
                      className="chip-hover"
                      style={{ fontSize: 11, padding: "4px 12px", borderRadius: 999, border: "1px solid #E8E4DF", background: "#F8F5F0", cursor: "pointer", color: "#4A4A4A" }}>
                      ✦ {ex}
                    </button>
                  ))}
                  <Link href="/examples">
                    <button className="chip-hover" style={{ fontSize: 11, padding: "4px 12px", borderRadius: 999, border: "1px solid #E8E4DF", background: "#F8F5F0", cursor: "pointer", color: "#855B0B", fontWeight: 600 }}>More Examples →</button>
                  </Link>
                </div>
              </div>

              <div>
                <label htmlFor="ai-provider-select" style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>AI Provider</label>
                <select id="ai-provider-select" aria-label="Select AI Model Provider" value={aiProvider} onChange={e => setAiProvider(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, background: "#F8F5F0", fontSize: 13, color: "#1A1A1A", fontFamily: "Inter, sans-serif", outline: "none", cursor: "pointer" }}>
                  <option>OpenAI (GPT-4o)</option>
                  <option>Anthropic Claude</option>
                  <option>Google Gemini</option>
                  <option>BookLoom AI</option>
                </select>
              </div>

              <div>
                <label htmlFor="theme-select" style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Visual Theme</label>
                <select id="theme-select" aria-label="Select Visual Theme" value={theme} onChange={e => setTheme(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, background: "#F8F5F0", fontSize: 13, color: "#1A1A1A", fontFamily: "Inter, sans-serif", outline: "none" }}>
                  {THEMES.map(t => <option key={t.name}>{t.name}</option>)}
                </select>
              </div>

              <Link
                href={`/dashboard/create?prompt=${encodeURIComponent(promptInput)}&provider=${encodeURIComponent(aiProvider)}&theme=${encodeURIComponent(theme)}`}
                onClick={(e) => {
                  if (!promptInput.trim()) {
                    e.preventDefault();
                    return;
                  }
                  try {
                    localStorage.setItem("bookloom_pending_prompt", JSON.stringify({ prompt: promptInput, provider: aiProvider, theme }));
                  } catch (err) {}
                }}
              >
                <button
                  disabled={!promptInput.trim()}
                  className="btn-shimmer btn-gold-glow"
                  style={{
                    width: "100%", background: !promptInput.trim() ? "#9A9A9A" : "#1A1A1A",
                    color: "#FFFFFF", border: "none", borderRadius: 10,
                    padding: "14px 24px", fontSize: 14, fontWeight: 600,
                    cursor: !promptInput.trim() ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap",
                    fontFamily: "Inter, sans-serif", opacity: !promptInput.trim() ? 0.7 : 1
                  }}
                >
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
            <h2 className="heading-hover" style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
              Powerful Features for Beautiful Ebooks
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#C49A3C", fontSize: 18, marginBottom: 8 }}>✦</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-hover" style={{
                background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 12,
                padding: 24, textAlign: "center"
              }}>
                <div style={{ color: "#C49A3C", display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF", borderTop: "1px solid #E8E4DF", borderBottom: "1px solid #E8E4DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="heading-hover" style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
              How BookLoom Works
            </h2>
            <p style={{ fontSize: 15, color: "#6B6B6B", margin: 0 }}>From idea to published ebook in four simple steps</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s) => (
              <div key={s.step} className="card-hover" style={{
                background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 16,
                padding: 28, position: "relative"
              }}>
                <div style={{
                  position: "absolute", top: 16, right: 16, width: 32, height: 32,
                  borderRadius: 999, background: "#C49A3C", color: "#FFFFFF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700
                }}>
                  {s.step}
                </div>
                <div style={{ color: "#C49A3C", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BESTSELLING SHOWCASE ===== */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-hover" style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
              Created with BookLoom
            </h2>
            <p style={{ fontSize: 14, color: "#6B6B6B", margin: 0 }}>Real ebooks authored and styled by creators using AI</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BOOKS.map((b) => (
              <Link key={b.title} href="/examples" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card-hover img-zoom-container" style={{
                  background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 12,
                  overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                }}>
                  <img src={b.img} alt={b.title} loading="lazy" style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  <div style={{ padding: 14 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#855B0B", textTransform: "uppercase" }}>{b.category}</span>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", margin: "4px 0 8px" }}>{b.title}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#6B6B6B" }}>
                      <span>👁 {b.views} readers</span>
                      <span>📄 {b.pages} pages</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THEMES SHOWCASE ===== */}
      <section style={{ padding: "80px 24px", background: "#FFFFFF", borderTop: "1px solid #E8E4DF", borderBottom: "1px solid #E8E4DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="heading-hover" style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
              7 Signature Visual Themes
            </h2>
            <p style={{ fontSize: 14, color: "#6B6B6B", margin: 0 }}>Tailored typography, colors, and layout presets for every genre</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {THEMES.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setTheme(t.name)}
                aria-pressed={theme === t.name}
                className="card-hover"
                style={{
                  background: t.bg,
                  border: theme === t.name ? "2px solid #C49A3C" : `1px solid ${t.border}`,
                  borderRadius: 12,
                  padding: 16, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, cursor: "pointer",
                  boxShadow: theme === t.name ? "0 4px 16px rgba(196,154,60,0.25)" : "none",
                  outline: "none"
                }}
              >
                <div style={{ width: "100%", height: 60, borderRadius: 6, background: t.bg, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, color: t.textColor, fontFamily: "'Playfair Display', serif", textAlign: "center", padding: 4, lineHeight: 1.3 }}>Aa</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: theme === t.name ? 700 : 600, color: theme === t.name ? "#855B0B" : "#1A1A1A", textAlign: "center" }}>{t.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: "80px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 className="heading-hover" style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", textAlign: "center", marginBottom: 48 }}>
            Loved by Creators Worldwide
          </h2>

          <div style={{ position: "relative" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                TESTIMONIALS[testimonialIdx % TESTIMONIALS.length],
                TESTIMONIALS[(testimonialIdx + 1) % TESTIMONIALS.length],
                TESTIMONIALS[(testimonialIdx + 2) % TESTIMONIALS.length],
              ].map((t) => (
                <div
                  key={t.name}
                  className="card-hover animate-fade-in-up"
                  style={{
                    background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 32,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)"
                  }}
                >
                  <div style={{ fontSize: 48, color: "#C49A3C", lineHeight: 1, marginBottom: 8, fontFamily: "Georgia" }}>&quot;</div>
                  <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>{t.quote}</p>
                  <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} color="#C49A3C" fill="#C49A3C" />)}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#6B6B6B" }}>{t.role}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24 }}>
              <button
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                aria-label="Previous Testimonials"
                style={{ background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)}
                aria-label="Next Testimonials"
                style={{ background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===== CTA FOOTER BANNER ===== */}
      <section style={{ padding: "64px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 20, border: "1px solid #E8E4DF", padding: "40px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img src="/images/books_stack_with_plant.png" alt="BookLoom" loading="lazy" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 12 }} />
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
                  Ready to Create Something Amazing?
                </h2>
                <p style={{ fontSize: 14, color: "#6B6B6B", margin: 0 }}>
                  Join thousands of creators who trust BookLoom to produce professional ebooks that inspire and sell.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }} className="lg:items-end">
              <Link href="/auth/signup">
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                  Start Creating Free <ArrowRight size={16} />
                </button>
              </Link>
              <div style={{ display: "flex", gap: 16, fontSize: 11, color: "#6B6B6B", flexWrap: "wrap" }}>
                {["No credit card required", "Free forever plan", "Upgrade anytime"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <CheckCircle size={12} color="#C49A3C" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
