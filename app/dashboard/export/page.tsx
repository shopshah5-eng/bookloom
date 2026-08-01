"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Download, FileText, CheckCircle, Clock } from "lucide-react";

const EXPORTS = [
  { title: "The Wealth Mindset", format: "PDF (Print Ready)", pages: "196", size: "8.4 MB", date: "2 hours ago", status: "Ready" },
  { title: "The Wealth Mindset", format: "EPUB 3.0", pages: "196", size: "3.2 MB", date: "2 hours ago", status: "Ready" },
  { title: "Minimalist Living", format: "PDF (Digital)", pages: "98", size: "4.1 MB", date: "1 day ago", status: "Ready" },
  { title: "Startup Playbook 2026", format: "ZIP (Full Assets)", pages: "215", size: "245 MB", date: "2 days ago", status: "Ready" },
  { title: "Deep Focus Mastery", format: "EPUB 3.0", pages: "145", size: "2.8 MB", date: "3 days ago", status: "Ready" },
];

export default function ExportCentrePage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Export Centre</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Manage your rendered files and download assets</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", background: "#FAFAFA", borderBottom: "1px solid #E8E4DF", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto", fontSize: 11, fontWeight: 600, color: "#9A9A9A", textTransform: "uppercase" }}>
              <span>Ebook Title</span>
              <span>Format</span>
              <span>Size</span>
              <span>Date</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {EXPORTS.map((item, i) => (
              <div key={i} style={{ padding: "16px 24px", borderBottom: i < EXPORTS.length - 1 ? "1px solid #E8E4DF" : "none", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto", alignItems: "center", fontSize: 13 }}>
                <div style={{ fontWeight: 600, color: "#1A1A1A" }}>{item.title}</div>
                <span style={{ fontWeight: 600, color: "#C49A3C" }}>{item.format}</span>
                <span style={{ color: "#6B6B6B" }}>{item.size}</span>
                <span style={{ color: "#9A9A9A" }}>{item.date}</span>
                <span style={{ color: "#22C55E", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <CheckCircle size={13} /> {item.status}
                </span>
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                  <Download size={13} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
