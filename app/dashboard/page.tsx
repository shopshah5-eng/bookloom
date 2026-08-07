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
  const displayName = profile?.fullName || user?.email?.split("@")[0] || "Guest Creator";

  const stats = [
    { label: "Credits Balance", value: "12,450", sub: "of 15,000 credits", icon: "🪙", href: "/pricing#credits", linkText: "Buy More Credits", badge: null, progress: 83 },
    { label: "Ebooks Created", value: "24", sub: "Total ebooks", icon: "📚", href: "/dashboard/projects", linkText: "View all projects →", badge: null },
    { label: "Words Generated", value: "1.28M", sub: "Total words", icon: "📄", href: null, linkText: null, badge: "↑ 18.6% this month" },
    { label: "Exported Ebooks", value: "16", sub: "Total exports", icon: "⬆", href: "/dashboard/export", linkText: "View exports →", badge: null },
  ];

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* Demo Mode Notification Banner if Unauthenticated */}
        {isDemoMode && (
          <div style={{ background: "#FEF3C7", borderBottom: "1px solid #F59E0B", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, color: "#92400E" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ShieldAlert size={16} />
              <span><strong>Interactive Demo Mode:</strong> You are exploring BookLoom with sample data. Sign in or create an account to save your ebooks to the cloud.</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/auth/login">
                <button style={{ background: "#92400E", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "5px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                <button style={{ background: "#FFFFFF", color: "#92400E", border: "1px solid #92400E", borderRadius: 6, padding: "5px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Top Header */}
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
              Good evening, {displayName} 👋
            </h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Let&apos;s create something extraordinary today.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/dashboard/create">
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
                <Plus size={14} /> New Project
              </button>
            </Link>
            <div style={{ position: "relative" }}>
              <Bell size={20} color="#4A4A4A" style={{ cursor: "pointer" }} />
              <div style={{ position: "absolute", top: -4, right: -4, width: 14, height: 14, borderRadius: "50%", background: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#FFFFFF", fontWeight: 700 }}>3</div>
            </div>
            <img src={profile?.avatarUrl || "/images/books_stack_with_plant.png"} alt="Avatar" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid #E8E4DF" }} />
            <ChevronDown size={14} color="#4A4A4A" />
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
                {s.progress && (
                  <div style={{ height: 4, background: "#F0EDE8", borderRadius: 999, marginBottom: 12 }}>
                    <div style={{ width: `${s.progress}%`, height: "100%", background: "#C49A3C", borderRadius: 999 }} />
                  </div>
                )}
                {s.href && s.linkText && (
                  <Link href={s.href} style={{ fontSize: 12, color: s.linkText.includes("Buy") ? "#1A1A1A" : "#C49A3C", textDecoration: "none", fontWeight: 500 }}>
                    {s.linkText.includes("Buy") ? (
                      <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                        {s.linkText}
                      </button>
                    ) : s.linkText}
                  </Link>
                )}
                {s.badge && <span style={{ fontSize: 12, color: "#22C55E", fontWeight: 600 }}>{s.badge}</span>}
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
              {RECENT_EBOOKS.map((book, i) => (
                <div key={i} style={{ padding: "16px 24px", borderBottom: i < RECENT_EBOOKS.length - 1 ? "1px solid #E8E4DF" : "none", display: "flex", alignItems: "center", gap: 16 }}>
                  <img src={book.img} alt={book.title} style={{ width: 40, height: 52, borderRadius: 4, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{book.title}</span>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", borderRadius: 4, background: book.format === "PDF" ? "#FEE2E2" : "#D1FAE5", color: book.format === "PDF" ? "#991B1B" : "#065F46" }}>{book.format}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#9A9A9A" }}>{book.category} · {book.words} words · Updated {book.updated}</div>
                  </div>
                  <Link href="/dashboard/editor/1">
                    <button style={{ background: "transparent", border: "1px solid #E8E4DF", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#1A1A1A", fontFamily: "Inter, sans-serif" }}>
                      <Edit3 size={12} /> Continue Editing
                    </button>
                  </Link>
                  <button style={{ background: "transparent", border: "none", cursor: "pointer", color: "#9A9A9A", padding: 4 }}>
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Usage Overview */}
              <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>Usage Overview</span>
                  <button style={{ background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 6, padding: "4px 10px", fontSize: 12, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 4, color: "#4A4A4A" }}>
                    This Month <ChevronDown size={12} />
                  </button>
                </div>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <DonutChart value={68} />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "AI Writing", pct: "68%", count: "8,450", color: "#C49A3C" },
                      { label: "AI Images", pct: "22%", count: "2,730", color: "#A78BFA" },
                      { label: "Exports", pct: "10%", count: "1,270", color: "#34D399" },
                    ].map(l => (
                      <div key={l.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                          <span style={{ color: "#4A4A4A" }}>{l.label}</span>
                        </div>
                        <span style={{ fontWeight: 600, color: "#1A1A1A" }}>{l.pct} ({l.count})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Statistics mini chart */}
              <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <span style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A" }}>Statistics</span>
                  <button style={{ background: "#F8F5F0", border: "1px solid #E8E4DF", borderRadius: 6, padding: "4px 10px", fontSize: 12, cursor: "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 4, color: "#4A4A4A" }}>
                    This Month <ChevronDown size={12} />
                  </button>
                </div>

                {/* Simple sparkline */}
                <div style={{ height: 80, display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 8 }}>
                  {[20, 35, 25, 45, 50, 40, 60, 55, 70, 65, 80, 90].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 11 ? "#C49A3C" : "#F0EDE8", borderRadius: "2px 2px 0 0", position: "relative" }}>
                      {i === 11 && <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#C49A3C" }} />}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9A9A9A" }}>
                  {["May 1", "May 8", "May 15", "May 22", "May 29"].map(d => <span key={d}>{d}</span>)}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 20, paddingTop: 16, borderTop: "1px solid #E8E4DF" }}>
                  {[
                    { v: "9,842", l: "Words Generated", change: "↑ 24.5%" },
                    { v: "148", l: "Pages Generated", change: "↑ 16.3%" },
                    { v: "5", l: "Ebooks Exported", change: "↑ 25.0%" },
                    { v: "12.4K", l: "Credits Used", change: "↑ 18.2%" },
                  ].map(stat => (
                    <div key={stat.l} style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: "#1A1A1A" }}>{stat.v}</div>
                      <div style={{ fontSize: 10, color: "#9A9A9A", lineHeight: 1.4 }}>{stat.l}</div>
                      <div style={{ fontSize: 10, color: "#22C55E", fontWeight: 600, marginTop: 2 }}>{stat.change}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Continue where you left off */}
          <div style={{ marginTop: 24, background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 24, display: "flex", alignItems: "center", gap: 24 }}>
            <img src="/images/laptop_bookloom_mockup.png" alt="Continue" style={{ width: 100, height: 80, objectFit: "cover", borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 4 }}>Pick up where you left off</div>
              <div style={{ fontSize: 13, color: "#6B6B6B" }}>Continue editing your last project and bring your ebook to life</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <img src="/images/book_wealth_mindset.png" alt="Book" style={{ width: 44, height: 56, objectFit: "cover", borderRadius: 4 }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#1A1A1A" }}>The Wealth Mindset</div>
                <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 6 }}>Updated 2 hours ago · 28,450 words · 156 pages</div>
                <div style={{ height: 4, background: "#F0EDE8", borderRadius: 999, width: 160, marginBottom: 4 }}>
                  <div style={{ width: "65%", height: "100%", background: "#C49A3C", borderRadius: 999 }} />
                </div>
                <div style={{ fontSize: 10, color: "#9A9A9A" }}>65% complete</div>
              </div>
            </div>
            <Link href="/dashboard/editor/1">
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                Continue Editing →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
