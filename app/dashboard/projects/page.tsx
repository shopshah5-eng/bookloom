"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Plus, Search, Folder, Edit3, MoreHorizontal, Download } from "lucide-react";

const PROJECTS = [
  { name: "Finance Masterclass Series", ebooks: 4, updated: "2 hours ago", status: "Active", img: "/images/book_wealth_mindset.png" },
  { name: "Mindfulness & Self-Growth", ebooks: 3, updated: "1 day ago", status: "Active", img: "/images/book_minimalist_living.png" },
  { name: "Tech & AI Handbooks 2026", ebooks: 5, updated: "3 days ago", status: "Active", img: "/images/book_startup_playbook.png" },
  { name: "Productivity System Blueprint", ebooks: 2, updated: "5 days ago", status: "Archived", img: "/images/book_deep_focus_mastery.png" },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filtered = PROJECTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Ebook Projects</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Organize your ebooks into collection folders and series</p>
          </div>
          <Link href="/dashboard/create">
            <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
              <Plus size={14} /> New Folder Project
            </button>
          </Link>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ marginBottom: 24, maxWidth: 320 }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..."
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none", background: "#FFFFFF" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {filtered.map((proj, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24, display: "flex", gap: 20, alignItems: "center" }}>
                <img src={proj.img} alt="" style={{ width: 64, height: 80, objectFit: "cover", borderRadius: 6 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 4 }}>{proj.name}</div>
                  <div style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 8 }}>{proj.ebooks} Ebooks · Updated {proj.updated}</div>
                  <span style={{ fontSize: 11, background: "#FBF3E0", color: "#9A6F1A", padding: "2px 8px", borderRadius: 999, fontWeight: 600 }}>{proj.status}</span>
                </div>
                <Link href="/dashboard/library">
                  <button style={{ background: "transparent", border: "1px solid #E8E4DF", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#1A1A1A" }}>View Project</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
