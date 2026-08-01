"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Terminal, Copy, Sparkles, Plus, Search, Bookmark } from "lucide-react";

const PROMPTS = [
  { title: "Non-Fiction Chapter Writer", category: "Writing", provider: "GPT-4o", text: "Write an engaging, research-backed chapter about [TOPIC]. Structure with an opening hook, 3 key principles, case studies, and practical exercises." },
  { title: "Minimalist Book Cover Art", category: "Image", provider: "DALL·E 3", text: "A stunning minimalist hardcover book cover, flat lay vector style, warm beige aesthetic, central botanical line art illustration." },
  { title: "Executive Summary Generator", category: "Outline", provider: "Claude 3.5", text: "Summarize the key takeaways, actionable strategies, and main thesis of the following chapter into a 1-page executive summary." },
  { title: "Character Arc Developer", category: "Fiction", provider: "GPT-4o", text: "Create a detailed multi-chapter character arc for a protagonist confronting [CONFLICT]. Include internal motivation and turning points." },
];

export default function PromptsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyPrompt = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>AI Prompt Library</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Curated prompts for high-converting ebooks</p>
          </div>
          <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
            <Plus size={14} /> Add Custom Prompt
          </button>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {PROMPTS.map((p, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>{p.title}</h3>
                    <span style={{ fontSize: 11, background: "#FBF3E0", color: "#9A6F1A", padding: "2px 8px", borderRadius: 999, fontWeight: 600 }}>{p.category}</span>
                  </div>
                  <span style={{ fontSize: 11, color: "#9A9A9A", border: "1px solid #E8E4DF", padding: "2px 8px", borderRadius: 6 }}>{p.provider}</span>
                </div>
                <div style={{ background: "#FAFAFA", border: "1px solid #E8E4DF", borderRadius: 8, padding: 14, fontSize: 12, color: "#4A4A4A", fontFamily: "monospace", lineHeight: 1.6, marginBottom: 16 }}>
                  {p.text}
                </div>
                <button onClick={() => copyPrompt(p.text, i)}
                  style={{ background: "transparent", border: "1px solid #E8E4DF", borderRadius: 6, padding: "8px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#1A1A1A", fontFamily: "Inter, sans-serif" }}>
                  <Copy size={13} /> {copiedIndex === i ? "Copied!" : "Copy Prompt"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
