"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Wand2, Image as ImageIcon, FileText, Edit3, Download, Sparkles, Play, CheckCircle } from "lucide-react";

const FEATURES = [
  {
    icon: <Wand2 size={32} strokeWidth={1.5} />,
    title: "AI Writing",
    desc: "Generate high-quality content instantly with advanced AI models. From outlines to full chapters.",
    preview: (
      <div style={{ background: "#F8F5F0", borderRadius: 8, padding: 16, border: "1px solid #E8E4DF" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#4A4A4A", marginBottom: 10 }}>Generate Chapter</div>
        <textarea readOnly value="Write a chapter about mindset and wealth building." style={{ width: "100%", fontSize: 11, border: "1px solid #E8E4DF", borderRadius: 6, padding: "8px 10px", background: "#FFFFFF", color: "#1A1A1A", resize: "none", height: 48, fontFamily: "Inter, sans-serif", outline: "none" }} />
        <button style={{ marginTop: 8, width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "8px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Generate</button>
      </div>
    ),
  },
  {
    icon: <ImageIcon size={32} strokeWidth={1.5} />,
    title: "AI Covers",
    desc: "Create stunning, professional book covers with AI. Beautiful. Unique. On-brand.",
    preview: (
      <div style={{ display: "flex", gap: 8 }}>
        <img src="/images/book_minimalist_living.png" alt="Cover 1" style={{ width: "48%", borderRadius: 6, objectFit: "cover", aspectRatio: "2/3" }} />
        <img src="/images/book_wealth_mindset.png" alt="Cover 2" style={{ width: "48%", borderRadius: 6, objectFit: "cover", aspectRatio: "2/3" }} />
      </div>
    ),
  },
  {
    icon: <Sparkles size={32} strokeWidth={1.5} />,
    title: "Illustrations",
    desc: "Generate beautiful illustrations for your chapters with AI. Make every page visually rich.",
    preview: (
      <img src="/images/hero_books_display.png" alt="Illustration" style={{ width: "100%", borderRadius: 8, objectFit: "cover", height: 140 }} />
    ),
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "SVG Graphics",
    desc: "Create custom SVG graphics and icons that scale perfectly. Fully editable and versatile.",
    preview: (
      <div style={{ background: "#F8F5F0", borderRadius: 8, padding: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {["📊", "🎯", "💡", "📚", "👥", "🏆"].map((icon, i) => (
          <div key={i} style={{ background: "#FFFFFF", borderRadius: 6, padding: "12px", textAlign: "center", fontSize: 20, border: "1px solid #E8E4DF" }}>{icon}</div>
        ))}
      </div>
    ),
  },
  {
    icon: <Download size={32} strokeWidth={1.5} />,
    title: "PDF Export",
    desc: "Export beautiful, print-ready PDFs with professional typography and layouts.",
    preview: (
      <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
        <img src="/images/book_wealth_mindset.png" alt="PDF" style={{ width: "45%", borderRadius: 6, objectFit: "cover" }} />
        <div style={{ flex: 1 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 6, padding: 10, fontSize: 11 }}>
            <div style={{ color: "#1A1A1A", fontWeight: 600, marginBottom: 4 }}>The Wealth Mindset</div>
            <div style={{ color: "#9A9A9A", fontSize: 10 }}>196 pages · 8.4 MB</div>
          </div>
          <div style={{ marginTop: 6, background: "#EF4444", borderRadius: 4, padding: "4px 8px", fontSize: 10, fontWeight: 700, color: "#FFFFFF", display: "inline-block" }}>PDF</div>
        </div>
      </div>
    ),
  },
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: "EPUB Export",
    desc: "Export clean, formatted EPUB files. Perfect for Kindle, Apple Books, Kobo and more.",
    preview: (
      <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
        <img src="/images/book_deep_focus_mastery.png" alt="EPUB" style={{ width: "45%", borderRadius: 6, objectFit: "cover" }} />
        <div style={{ flex: 1 }}>
          <div style={{ background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 6, padding: 10, fontSize: 11 }}>
            <div style={{ color: "#1A1A1A", fontWeight: 600, marginBottom: 4 }}>Deep Focus Mastery</div>
            <div style={{ color: "#9A9A9A", fontSize: 10 }}>196 pages · 5.2 MB</div>
          </div>
          <div style={{ marginTop: 6, background: "#22C55E", borderRadius: 4, padding: "4px 8px", fontSize: 10, fontWeight: 700, color: "#FFFFFF", display: "inline-block" }}>EPUB</div>
        </div>
      </div>
    ),
  },
  {
    icon: <Download size={32} strokeWidth={1.5} />,
    title: "ZIP Download",
    desc: "Download all your assets in one ZIP file. Covers, images, SVGs, and all chapter content.",
    preview: (
      <div style={{ background: "#F8F5F0", borderRadius: 8, padding: 20, textAlign: "center", border: "1px solid #E8E4DF" }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>📁</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>ebook_assets.zip</div>
        <div style={{ fontSize: 11, color: "#9A9A9A" }}>245 MB</div>
        <button style={{ marginTop: 12, fontSize: 11, color: "#C49A3C", background: "none", border: "none", cursor: "pointer" }}>↓ Download</button>
      </div>
    ),
  },
  {
    icon: <Edit3 size={32} strokeWidth={1.5} />,
    title: "Live Editor",
    desc: "Edit, refine and perfect your content in our powerful live editor.",
    preview: (
      <div style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid #E8E4DF", padding: 12 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8, fontSize: 11, color: "#4A4A4A" }}>
          {["H1", "H2", "B", "I", "U", "↩", "—"].map(t => (
            <span key={t} style={{ padding: "2px 6px", border: "1px solid #E8E4DF", borderRadius: 4, cursor: "pointer", fontWeight: 600 }}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#1A1A1A", lineHeight: 1.6 }}>
          Your journey to financial freedom begins with the right <span style={{ background: "#DBEAFE", padding: "0 2px", borderRadius: 2 }}>mindset.</span>
        </p>
      </div>
    ),
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "72px 24px 64px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#855B0B" }}>EVERYTHING YOU NEED TO PUBLISH</span>
            </div>

            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, margin: "0 0 16px" }}>
              Powerful Features for<br />
              <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Modern Authors</span>
            </h1>

            <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}>
              BookLoom combines multi-model AI writing, automatic book cover generation, vector illustrations, and print-ready exports into one seamless workflow.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/auth/signup">
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
                  <Sparkles size={14} /> Get Started for Free
                </button>
              </Link>
              <Link href="/examples">
                <button style={{ background: "transparent", color: "#1A1A1A", border: "1px solid #E8E4DF", borderRadius: 10, padding: "14px 20px", fontSize: 14, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
                  <Play size={14} fill="#1A1A1A" /> See Examples
                </button>
              </Link>
            </div>
          </div>

          {/* Right - App screenshot */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}>
            <div style={{ background: "#F0EDE8", padding: "10px 16px", display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FBBF24" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: "#9A9A9A" }}>BookLoom › My Ebook › Chapter 1</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 50px", height: 280 }}>
              <div style={{ borderRight: "1px solid #E8E4DF", padding: 12 }}>
                {["Create", "Content", "Visuals", "Editor", "Export", "Settings"].map(item => (
                  <div key={item} style={{ padding: "6px 8px", fontSize: 11, color: "#4A4A4A", borderRadius: 6, marginBottom: 2 }}>{item}</div>
                ))}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 8 }}>Chapter 1</div>
                <div style={{ display: "flex", gap: 4, marginBottom: 12, fontSize: 11 }}>
                  {["B", "I", "U", "🔗"].map(t => <span key={t} style={{ padding: "2px 6px", border: "1px solid #E8E4DF", borderRadius: 4 }}>{t}</span>)}
                </div>
                <div style={{ height: 2, background: "#E8E4DF", borderRadius: 2, marginBottom: 8 }} />
                <div style={{ height: 2, background: "#E8E4DF", borderRadius: 2, marginBottom: 8, width: "80%" }} />
                <div style={{ height: 2, background: "#E8E4DF", borderRadius: 2, marginBottom: 8, width: "90%" }} />
                <img src="/images/book_wealth_mindset.png" alt="Book Preview" loading="lazy" style={{ width: 80, height: 100, borderRadius: 6, objectFit: "cover", marginTop: 8 }} />
              </div>
              <div style={{ borderLeft: "1px solid #E8E4DF", padding: 8, display: "flex", flexDirection: "column", gap: 8, alignItems: "center", paddingTop: 16 }}>
                {["⊞", "🖼", "T", "↓"].map((icon, i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid #E8E4DF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, cursor: "pointer" }}>{icon}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Title */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
              Powerful Features Built for Creators
            </h2>
            <div style={{ color: "#C49A3C", fontSize: 18, marginBottom: 8 }}>✦</div>
            <p style={{ fontSize: 14, color: "#6B6B6B" }}>
              From writing to exporting, every tool you need is here to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden" }}>
                <div style={{ padding: "24px 24px 16px" }}>
                  <div style={{ color: "#1A1A1A", marginBottom: 12 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6, marginBottom: 16 }}>{f.desc}</div>
                </div>
                <div style={{ padding: "0 16px 20px" }}>{f.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#F0EDE8", borderRadius: 16, border: "1px solid #E8E4DF", padding: "40px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img src="/images/books_stack_with_plant.png" alt="BookLoom Stack" loading="lazy" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 12 }} />
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
                  All the Tools. One Beautiful Platform.
                </h3>
                <div style={{ color: "#C49A3C", marginBottom: 8 }}>✦</div>
                <p style={{ fontSize: 13, color: "#6B6B6B", margin: "0 0 12px" }}>
                  Create, design, and export professional ebooks faster than ever before.
                </p>
                <div style={{ display: "flex", gap: 20, fontSize: 12, color: "#6B6B6B", flexWrap: "wrap" }}>
                  {["No credit card required", "Free forever plan available"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <CheckCircle size={12} color="#C49A3C" /> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }} className="lg:justify-end">
              <Link href="/auth/signup">
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "16px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
                  <Sparkles size={15} /> Get Started for Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
