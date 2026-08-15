"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, FolderOpen, Plus, Grid2x2, Library, Palette, Download,
  BarChart2, CreditCard, Settings, Plug, HelpCircle, Wand2, ChevronRight,
  BookOpen
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Projects", href: "/dashboard/projects", icon: FolderOpen },
  { name: "Create Ebook", href: "/dashboard/create", icon: Plus },
  { name: "Templates", href: "/templates", icon: Grid2x2 },
  { name: "My Library", href: "/dashboard/library", icon: Library },
  { name: "Brand Kit", href: "/dashboard/brand", icon: Palette },
  { name: "Export History", href: "/dashboard/export", icon: Download },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
];

const BOTTOM_ITEMS = [
  { name: "Credits & Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Integrations", href: "/dashboard/integrations", icon: Plug },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname?.startsWith(href);

  return (
    <aside style={{
      width: 220, minHeight: "100vh", background: "#FFFFFF",
      borderRight: "1px solid #E8E4DF", display: "flex", flexDirection: "column",
      position: "sticky", top: 0, height: "100vh", flexShrink: 0
    }}>
      {/* Logo */}
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #E8E4DF" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 16, color: "#1A1A1A", lineHeight: 1.2 }}>BookLoom</div>
            <div style={{ fontSize: 8, color: "#9A9A9A", letterSpacing: "0.12em", textTransform: "uppercase" }}>AI EBOOK GENERATOR</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "12px 12px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.name} href={item.href} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 10px", borderRadius: 8, textDecoration: "none",
                background: active ? "#1A1A1A" : "transparent",
                color: active ? "#FFFFFF" : "#4A4A4A",
                fontSize: 13, fontWeight: active ? 600 : 500,
                transition: "background 0.15s, color 0.15s",
                fontFamily: "Inter, sans-serif"
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.background = "#F8F5F0"; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.background = "transparent"; } }}
              >
                <Icon size={16} />
                {item.name}
                {item.name === "AI Tools" && <ChevronRight size={14} style={{ marginLeft: "auto" }} />}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Upgrade Banner */}
      <div style={{ margin: "8px 12px", padding: "16px", background: "#FBF3E0", borderRadius: 10, border: "1px solid #EFD98A" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
          <span style={{ fontSize: 16 }}>✦</span>
          <span style={{ fontWeight: 700, fontSize: 13, color: "#1A1A1A" }}>Upgrade to Pro</span>
        </div>
        <p style={{ fontSize: 11, color: "#6B6B6B", lineHeight: 1.5, margin: "0 0 10px" }}>
          Unlock unlimited ebooks, premium AI tools and export formats.
        </p>
        <Link href="/pricing">
          <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "8px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
            Upgrade Now →
          </button>
        </Link>
      </div>

      {/* Bottom nav */}
      <div style={{ borderTop: "1px solid #E8E4DF", padding: "12px 12px" }}>
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 10px", borderRadius: 8, textDecoration: "none",
              color: "#4A4A4A", fontSize: 13, fontWeight: 500,
              fontFamily: "Inter, sans-serif"
            }}>
              <Icon size={15} />
              {item.name}
            </Link>
          );
        })}
        <Link href="/docs" style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "8px 10px", borderRadius: 8, textDecoration: "none",
          color: "#4A4A4A", fontSize: 13, fontWeight: 500, fontFamily: "Inter, sans-serif"
        }}>
          <HelpCircle size={15} />
          Help & Support
          <ChevronRight size={14} style={{ marginLeft: "auto" }} />
        </Link>
      </div>
    </aside>
  );
}
