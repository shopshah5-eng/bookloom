"use client";

import React from "react";
import Link from "next/link";
import { X, BookOpen, Sparkles, Download, Check, Star, Layers, ArrowRight } from "lucide-react";

export interface PreviewBook {
  title: string;
  category: string;
  img: string;
  views?: string;
  downloads?: string;
  pages: number;
  theme: string;
  author?: string;
  description?: string;
  chapters?: string[];
  sampleExcerpt?: string;
}

interface BookPreviewModalProps {
  book: PreviewBook | null;
  onClose: () => void;
}

export function BookPreviewModal({ book, onClose }: BookPreviewModalProps) {
  if (!book) return null;

  const defaultAuthor = book.author || "BookLoom Creator Studio";
  const defaultDesc = book.description || `A professionally structured ${book.category} ebook designed with the ${book.theme} typography preset and AI-assisted narrative framework.`;
  const defaultChapters = book.chapters || [
    "Chapter 1: The Core Foundation & Principles",
    "Chapter 2: Tactical Frameworks & Execution",
    "Chapter 3: Mastering Advanced Strategies",
    "Chapter 4: Real-World Case Studies & Analysis",
    "Chapter 5: Key Takeaways & Actionable Playbook",
  ];
  const defaultExcerpt = book.sampleExcerpt || `In today's fast-paced digital ecosystem, strategic clarity is the single highest leverage skill you can cultivate. Every chapter in this guide is engineered to provide actionable, high-impact insights without filler. As you progress through these pages, apply each exercise directly to your ongoing projects...`;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(10, 10, 12, 0.75)", backdropFilter: "blur(6px)",
      zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 20, maxWidth: 840, width: "100%",
        maxHeight: "90vh", overflowY: "auto", border: "1px solid #E8E4DF",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)", position: "relative",
        display: "flex", flexDirection: "column"
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16, width: 36, height: 36,
          borderRadius: "50%", background: "#F0EDE8", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#1A1A1A",
          zIndex: 10
        }}>
          <X size={18} />
        </button>

        {/* Modal Header / Banner */}
        <div style={{ background: "#1A1A1A", color: "#FFFFFF", padding: "28px 36px", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#C49A3C", color: "#FFFFFF", borderRadius: 999, padding: "3px 10px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>
            <Sparkles size={12} /> Interactive Ebook Preview
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, fontWeight: 700, margin: "0 0 6px", color: "#FFFFFF" }}>
            {book.title}
          </h2>
          <p style={{ fontSize: 13, color: "#D4AF37", margin: 0 }}>
            Category: {book.category} · Theme: {book.theme} · {book.pages} Pages
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: 36, display: "grid", gridTemplateColumns: "240px 1fr", gap: 32 }}>
          {/* Left Column: Book Cover & Stats */}
          <div>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E8E4DF", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", marginBottom: 20 }}>
              <img src={book.img} alt={book.title} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            </div>

            <div style={{ background: "#F8F5F0", borderRadius: 12, padding: 16, border: "1px solid #E8E4DF", fontSize: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6B6B6B" }}>Estimated Words:</span>
                <span style={{ fontWeight: 700, color: "#1A1A1A" }}>~{book.pages * 350}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#6B6B6B" }}>Export Formats:</span>
                <span style={{ fontWeight: 700, color: "#22C55E" }}>PDF, EPUB</span>
              </div>
              {book.downloads && (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#6B6B6B" }}>Downloads:</span>
                  <span style={{ fontWeight: 700, color: "#C49A3C" }}>{book.downloads}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Outline & Excerpt */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                About This Ebook
              </h3>
              <p style={{ fontSize: 13, color: "#4A4A4A", lineHeight: 1.6, margin: 0 }}>
                {defaultDesc}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1A1A1A", marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <Layers size={16} color="#C49A3C" /> Chapter Structure & Table of Contents
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {defaultChapters.map((ch, idx) => (
                  <div key={idx} style={{ padding: "10px 14px", background: "#FAFAFA", borderRadius: 8, border: "1px solid #E8E4DF", fontSize: 13, color: "#1A1A1A", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span>{ch}</span>
                    <span style={{ fontSize: 11, color: "#9A9A9A" }}>p. {idx * 6 + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                Sample Chapter Excerpt
              </h3>
              <div style={{ padding: 16, background: "#FFFDF9", borderLeft: "3px solid #C49A3C", border: "1px solid #E8E4DF", borderRadius: "0 8px 8px 0", fontSize: 13, color: "#4A4A4A", fontStyle: "italic", lineHeight: 1.7 }}>
                "{defaultExcerpt}"
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ marginTop: 12, paddingTop: 16, borderTop: "1px solid #E8E4DF", display: "flex", gap: 12 }}>
              <Link href={`/dashboard/create?topic=${encodeURIComponent(book.title)}&type=${encodeURIComponent(book.category.toLowerCase())}`} style={{ flex: 1, textDecoration: "none" }}>
                <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "12px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
                  Create Ebook Like This <ArrowRight size={15} />
                </button>
              </Link>
              <button onClick={onClose} style={{ background: "#F0EDE8", color: "#1A1A1A", border: "none", borderRadius: 10, padding: "12px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
