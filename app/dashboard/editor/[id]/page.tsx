"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import {
  ArrowLeft, Settings, Download, Share2, Sparkles, ChevronDown, ChevronRight,
  Plus, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List,
  Image as ImageIcon, Link2, Wand2, Undo, Redo, Check, MoreHorizontal, BookOpen
} from "lucide-react";

const CHAPTERS = [
  { id: 1, title: "Cover Page", status: "complete", active: false },
  { id: 2, title: "Table of Contents", status: "complete", active: false },
  { id: 3, title: "Introduction", status: "complete", active: false },
  { id: 4, title: "Chapter 1: The Mindset Shift", status: "complete", active: true },
  { id: 5, title: "Chapter 2: Money Blueprints", status: "complete", active: false },
  { id: 6, title: "Chapter 3: Abundance Thinking", status: "in-progress", active: false },
  { id: 7, title: "Chapter 4: Financial Habits", status: "empty", active: false },
  { id: 8, title: "Chapter 5: Investment Basics", status: "empty", active: false },
  { id: 9, title: "Conclusion", status: "empty", active: false },
  { id: 10, title: "About the Author", status: "empty", active: false },
];

const SAMPLE_CONTENT = `The Mindset Shift

Success in wealth-building begins not with a paycheck, but with a perspective. The difference between those who consistently build wealth and those who struggle is rarely a matter of intelligence, education, or even opportunity—it's almost always about mindset.

What Is a Wealth Mindset?

A wealth mindset is a collection of beliefs, attitudes, and thought patterns that enable a person to attract, create, and retain financial abundance. It's the mental framework through which financially successful people see the world—one where opportunities are everywhere, setbacks are temporary, and money is a tool for creating value and freedom.

At its core, a wealth mindset includes:

• A belief in your own ability to create wealth
• A long-term perspective on financial decisions
• A commitment to continuous learning and growth
• An understanding that wealth is a by-product of value creation`;

export default function EditorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [activeChapter, setActiveChapter] = useState(4);
  const [content, setContent] = useState(SAMPLE_CONTENT);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  return (
    <div style={{ display: "flex", height: "100vh", background: "#F8F5F0", fontFamily: "Inter, sans-serif", overflow: "hidden" }}>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Left panel - Chapter list */}
      <div style={{ width: 220, background: "#FFFFFF", borderRight: "1px solid #E8E4DF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "16px", borderBottom: "1px solid #E8E4DF" }}>
          <Link href="/dashboard/library" style={{ display: "flex", alignItems: "center", gap: 8, color: "#4A4A4A", textDecoration: "none", fontSize: 13, marginBottom: 12 }}>
            <ArrowLeft size={14} /> Back to Library
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/images/book_wealth_mindset.png" alt="Book" style={{ width: 32, height: 40, borderRadius: 4, objectFit: "cover" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#1A1A1A" }}>The Wealth Mindset</div>
              <div style={{ fontSize: 11, color: "#9A9A9A" }}>Finance · ID: {resolvedParams.id}</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "12px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 8px", marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.05em" }}>Chapters</span>
            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#C49A3C", display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
              <Plus size={12} /> Add
            </button>
          </div>
          {CHAPTERS.map((ch) => (
            <button key={ch.id} onClick={() => setActiveChapter(ch.id)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
                borderRadius: 8, border: "none", background: activeChapter === ch.id ? "#1A1A1A" : "transparent",
                cursor: "pointer", textAlign: "left", marginBottom: 2, fontFamily: "Inter, sans-serif"
              }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${activeChapter === ch.id ? "#FFFFFF" : ch.status === "complete" ? "#22C55E" : ch.status === "in-progress" ? "#F59E0B" : "#E8E4DF"}`, background: ch.status === "complete" ? "#22C55E" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {ch.status === "complete" && <Check size={10} color="#FFFFFF" />}
              </div>
              <span style={{ fontSize: 12, fontWeight: activeChapter === ch.id ? 600 : 400, color: activeChapter === ch.id ? "#FFFFFF" : "#4A4A4A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {ch.title}
              </span>
            </button>
          ))}
        </div>

        {/* Progress */}
        <div style={{ padding: 16, borderTop: "1px solid #E8E4DF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#4A4A4A", marginBottom: 6 }}>
            <span>Progress</span>
            <span style={{ fontWeight: 600 }}>65%</span>
          </div>
          <div style={{ height: 6, background: "#F0EDE8", borderRadius: 999 }}>
            <div style={{ width: "65%", height: "100%", background: "#C49A3C", borderRadius: 999 }} />
          </div>
          <div style={{ fontSize: 11, color: "#9A9A9A", marginTop: 4 }}>28,450 words · 156 pages</div>
        </div>
      </div>

      {/* Main Editor */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 20px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {[
              { icon: <Bold size={14} />, label: "Bold" },
              { icon: <Italic size={14} />, label: "Italic" },
              { icon: <Underline size={14} />, label: "Underline" },
            ].map((b) => (
              <button key={b.label} title={b.label} style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}>
                {b.icon}
              </button>
            ))}
            <div style={{ width: 1, height: 24, background: "#E8E4DF" }} />
            {[
              { icon: <AlignLeft size={14} /> },
              { icon: <AlignCenter size={14} /> },
              { icon: <AlignRight size={14} /> },
            ].map((b, i) => (
              <button key={i} style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: i === 0 ? "#F0EDE8" : "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}>
                {b.icon}
              </button>
            ))}
            <div style={{ width: 1, height: 24, background: "#E8E4DF" }} />
            <button style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}><ImageIcon size={14} /></button>
            <button style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}><Link2 size={14} /></button>
            <div style={{ width: 1, height: 24, background: "#E8E4DF" }} />
            <button style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}><Undo size={14} /></button>
            <button style={{ padding: "6px", border: "1px solid #E8E4DF", borderRadius: 6, background: "transparent", cursor: "pointer", color: "#4A4A4A", display: "flex", alignItems: "center" }}><Redo size={14} /></button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setShowAIPanel(!showAIPanel)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#9A6F1A", fontFamily: "Inter, sans-serif" }}>
              <Sparkles size={14} /> AI Write
            </button>
            <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#FFFFFF", border: "1px solid #E8E4DF", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500, color: "#4A4A4A", fontFamily: "Inter, sans-serif" }}>
              <Download size={14} /> Export
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Writing area */}
          <div style={{ flex: 1, padding: "32px 48px", overflowY: "auto", background: "#F8F5F0" }}>
            <div style={{ maxWidth: 720, margin: "0 auto", background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "48px 56px", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", minHeight: 600 }}>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                style={{
                  width: "100%", minHeight: 500, border: "none", outline: "none", resize: "none",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 16, lineHeight: 1.8, color: "#1A1A1A", background: "transparent"
                }}
              />
            </div>
          </div>

          {/* Right AI panel */}
          {showAIPanel && (
            <div style={{ width: 280, background: "#FFFFFF", borderLeft: "1px solid #E8E4DF", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: 16, borderBottom: "1px solid #E8E4DF" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <Sparkles size={14} color="#C49A3C" />
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A" }}>AI Writing Assistant</span>
                </div>
                <textarea value={aiPrompt} onChange={e => setAiPrompt(e.target.value)} placeholder="Describe what you want to write or improve..."
                  style={{ width: "100%", height: 80, border: "1px solid #E8E4DF", borderRadius: 8, padding: 10, fontSize: 12, resize: "none", fontFamily: "Inter, sans-serif", outline: "none", boxSizing: "border-box" }} />
                <button style={{ width: "100%", marginTop: 8, background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <Wand2 size={12} /> Generate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
