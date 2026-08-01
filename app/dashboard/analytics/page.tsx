"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { BarChart2, TrendingUp, Users, Eye, Download, BookOpen } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Publishing Analytics</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Track readership, downloads, and performance metrics</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { label: "Total Ebook Views", value: "84.2K", change: "↑ 22.4%", icon: "👁" },
              { label: "Total Downloads", value: "31.8K", change: "↑ 18.1%", icon: "⬇" },
              { label: "Avg. Reading Time", value: "14.2 min", change: "↑ 5.3%", icon: "⏱" },
              { label: "Reader Retention", value: "78.4%", change: "↑ 9.2%", icon: "🎯" },
            ].map(s => (
              <div key={s.label} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "20px 24px" }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A", marginBottom: 2 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#9A9A9A" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#22C55E", fontWeight: 700, marginTop: 4 }}>{s.change} this month</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>Top Performing Ebooks</h3>
            {[
              { title: "The Wealth Mindset", views: "24.5K", downloads: "8.2K", rating: "4.9 ★" },
              { title: "Minimalist Living", views: "18.7K", downloads: "6.3K", rating: "4.8 ★" },
              { title: "Startup Playbook 2026", views: "31.2K", downloads: "12.8K", rating: "5.0 ★" },
            ].map((book, i) => (
              <div key={i} style={{ padding: "14px 0", borderBottom: i < 2 ? "1px solid #E8E4DF" : "none", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
                <span style={{ fontWeight: 600, color: "#1A1A1A" }}>{book.title}</span>
                <div style={{ display: "flex", gap: 24, color: "#6B6B6B" }}>
                  <span>👁 {book.views} views</span>
                  <span>⬇ {book.downloads} downloads</span>
                  <span style={{ color: "#C49A3C", fontWeight: 700 }}>{book.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
