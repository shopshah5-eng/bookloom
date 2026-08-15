"use client";

import React from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { useAuth } from "@/components/providers/auth-provider";
import {
  Plus, Bell, ChevronDown, Edit3, MoreHorizontal, ArrowUpRight, ShieldAlert, LogIn
} from "lucide-react";

const RECENT_EBOOKS = [
  { title: "The Wealth Mindset", format: "PDF", category: "Business", words: "28,450", updated: "2h ago", img: "/images/book_wealth_mindset.png", progress: 65 },
  { title: "Atomic Habits Blueprint", format: "EPUB", category: "Self Help", words: "18,230", updated: "1d ago", img: "/images/book_minimalist_living.png", progress: 80 },
  { title: "AI Productivity Power", format: "PDF", category: "Productivity", words: "22,105", updated: "2d ago", img: "/images/book_ai_productivity.png", progress: 45 },
  { title: "Mindful Living", format: "EPUB", category: "Health", words: "15,670", updated: "3d ago", img: "/images/book_deep_focus_mastery.png", progress: 90 },
  { title: "Startup Playbook 2026", format: "PDF", category: "Business", words: "30,120", updated: "5d ago", img: "/images/book_startup_playbook.png", progress: 100 },
];

// Simple donut chart component
function DonutChart({ value, size = 120, stroke = 12 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const segments = [
    { pct: 0.68, color: "#C49A3C" },
    { pct: 0.22, color: "#A78BFA" },
    { pct: 0.10, color: "#34D399" },
  ];
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F0EDE8" strokeWidth={stroke} />
      {segments.map((s, i) => {
        const dash = s.pct * circ;
        const el = (
          <circle
            key={i}
            cx={size / 2} cy={size / 2} r={r}
            fill="none" stroke={s.color} strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset * circ / 1 + circ / 4}
            transform={`rotate(${-90 + offset * 360} ${size / 2} ${size / 2})`}
            strokeLinecap="round"
          />
        );
        offset += s.pct;
        return el;
      })}
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, fill: "#1A1A1A" }}>
        68%
      </text>
      <text x={size / 2} y={size / 2 + 16} textAnchor="middle" dominantBaseline="central"
        style={{ fontSize: 10, fill: "#9A9A9A" }}>
        Used
      </text>
    </svg>
  );
}

export default function DashboardPage() {
  const { profile, user, isDemoMode } = useAuth();
  const displayName = profile?.fullName || user?.email?.split("@")[0] || "Creator";
  const [recentBooks, setRecentBooks] = React.useState<any[]>([]);
  const [latestBook, setLatestBook] = React.useState<any>(null);

  React.useEffect(() => {
    try {
      const storedStr = localStorage.getItem("bookloom_books");
      let booksList: any[] = [];
      if (storedStr) {
        booksList = JSON.parse(storedStr);
      }
      if (!Array.isArray(booksList) || booksList.length === 0) {
        const currentStr = localStorage.getItem("bookloom_current_book");
        if (currentStr) booksList = [JSON.parse(currentStr)];
      }

      if (booksList.length > 0) {
        setRecentBooks(booksList);
        setLatestBook(booksList[0]);
        return;
      }
    } catch (e) {}

    // Sample fallback
    const fallbackList = [
      { id: "eb_1", title: "The Wealth Mindset", format: "PDF", category: "Finance", words: "28,450", updated: "2h ago", totalWords: 28450, targetPages: 156 },
      { id: "eb_2", title: "Atomic Habits Blueprint", format: "EPUB", category: "Self Help", words: "18,230", updated: "1d ago", totalWords: 18230, targetPages: 98 },
    ];
    setRecentBooks(fallbackList);
    setLatestBook(fallbackList[0]);
  }, []);

  const totalEbooksCount = recentBooks.length;
  const totalWordsSum = recentBooks.reduce((acc, curr) => acc + (curr.totalWords || 12000), 0);

  const stats = [
    { label: "Credits Balance", value: "14,250", sub: "of 15,000 credits", icon: "🪙", href: "/pricing", linkText: "Buy More Credits", badge: null, progress: 95 },
    { label: "Ebooks Created", value: String(totalEbooksCount), sub: "Total created ebooks", icon: "📚", href: "/dashboard/projects", linkText: "View all projects →", badge: null },
    { label: "Words Generated", value: `${(totalWordsSum / 1000).toFixed(1)}k`, sub: "Total words compiled", icon: "📄", href: null, linkText: null, badge: "↑ Active" },
    { label: "Exported Ebooks", value: String(totalEbooksCount), sub: "Ready for download", icon: "⬆", href: "/dashboard/export", linkText: "View exports →", badge: null },
  ];

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Top Header */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
              Welcome back, {displayName} 👋
            </h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>AI Publishing Dashboard</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/dashboard/create">
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
                <Plus size={14} /> New Ebook Project
              </button>
            </Link>
          </div>
        </div>

        <div style={{ padding: "28px 32px" }}>
          {/* Stats Row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: "#6B6B6B", fontWeight: 500 }}>{s.label}</span>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "#F8F5F0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{s.icon}</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#9A9A9A", marginBottom: s.progress ? 12 : 0 }}>{s.sub}</div>
                {s.href && s.linkText && (
                  <Link href={s.href} style={{ fontSize: 12, color: "#C49A3C", textDecoration: "none", fontWeight: 600 }}>
                    {s.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24 }}>
            {/* Recent Ebooks */}
            <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", overflow: "hidden" }}>
              <div style={{ padding: "20px 24px", borderBottom: "1px solid #E8E4DF", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>Recent Ebooks</span>
                <Link href="/dashboard/library" style={{ fontSize: 13, color: "#C49A3C", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                  View All <ArrowUpRight size={13} />
                </Link>
              </div>
              {recentBooks.map((book, i) => (
                <div key={book.id || i} style={{ padding: "16px 24px", borderBottom: i < recentBooks.length - 1 ? "1px solid #E8E4DF" : "none", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 40, height: 52, borderRadius: 4, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", color: "#C49A3C", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                    📖
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{book.title}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: "#FEE2E2", color: "#991B1B" }}>PDF</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#9A9A9A" }}>{book.ebookType || "Non-Fiction"} · {book.totalWords ? book.totalWords.toLocaleString() : "8,500"} words</div>
                  </div>
                  <Link href={`/dashboard/editor/${book.id || "1"}`}>
                    <button style={{ background: "transparent", border: "1px solid #E8E4DF", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#1A1A1A", fontFamily: "Inter, sans-serif" }}>
                      <Edit3 size={12} /> Continue Editing
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Usage Overview */}
              <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>Usage Overview</span>
                </div>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <DonutChart value={85} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "AI Pipeline Writing", pct: "75%", count: "12,450", color: "#C49A3C" },
                      { label: "Export Stream", pct: "25%", count: "2,550", color: "#34D399" },
                    ].map(l => (
                      <div key={l.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                          <span style={{ color: "#4A4A4A" }}>{l.label}</span>
                        </div>
                        <span style={{ fontWeight: 600, color: "#1A1A1A" }}>{l.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue where you left off */}
          {latestBook && (
            <div style={{ marginTop: 24, background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24, display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 4 }}>Pick up where you left off</div>
                <div style={{ fontSize: 13, color: "#6B6B6B" }}>Continue editing your last generated ebook manuscript</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 56, borderRadius: 4, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", color: "#C49A3C", fontSize: 20, fontWeight: 700 }}>
                  📖
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: "#1A1A1A" }}>{latestBook.title}</div>
                  <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 6 }}>{latestBook.totalWords ? latestBook.totalWords.toLocaleString() : "12,400"} words · Ready in Editor</div>
                </div>
              </div>
              <Link href={`/dashboard/editor/${latestBook.id || "1"}`}>
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                  Continue Editing →
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

