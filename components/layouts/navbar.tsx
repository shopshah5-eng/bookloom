"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Sparkles, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Examples", href: "/examples" },
  { name: "Templates", href: "/templates" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/docs" },
      { name: "Changelog", href: "/changelog" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "API Docs", href: "/developers" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  return (
    <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" className="header-logo-link" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div className="header-logo-icon" style={{
            width: 36, height: 36, borderRadius: 8,
            background: "#1A1A1A",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0
          }}>
            <BookOpen size={18} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 18, color: "#1A1A1A", lineHeight: 1.2 }}>
              BookLoom
            </div>
            <div style={{ fontSize: 9, color: "#9A9A9A", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>
              AI EBOOK GENERATOR
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                style={{ position: "relative", paddingBottom: 12, marginBottom: -12 }}
                onMouseEnter={() => {
                  if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  setResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimeoutRef.current = setTimeout(() => setResourcesOpen(false), 200);
                }}
              >
                <button
                  aria-label="Toggle Resources Menu"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setResourcesOpen(!resourcesOpen);
                    } else if (e.key === "Escape") {
                      setResourcesOpen(false);
                    }
                  }}
                  style={{
                    display: "flex", alignItems: "center", gap: 4,
                    background: "none", border: "none", cursor: "pointer",
                    fontSize: 14, fontWeight: 600,
                    color: resourcesOpen || pathname?.startsWith("/blog") || pathname?.startsWith("/docs") ? "#1A1A1A" : "#4A4A4A",
                    fontFamily: "Inter, sans-serif",
                    padding: 0,
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#1A1A1A")}
                  onMouseLeave={e => {
                    if (!resourcesOpen) e.currentTarget.style.color = pathname?.startsWith("/blog") || pathname?.startsWith("/docs") ? "#1A1A1A" : "#4A4A4A";
                  }}
                >
                  {link.name} <ChevronDown size={14} style={{ transform: resourcesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }} />
                </button>
                {resourcesOpen && (
                  <div
                    className="animate-dropdown-slide"
                    style={{
                      position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                      background: "#FFFFFF", border: "1px solid #E8E4DF",
                      borderRadius: 12, padding: "8px 0", minWidth: 180,
                      boxShadow: "0 12px 32px rgba(0,0,0,0.1)", marginTop: 4, zIndex: 100
                    }}
                    onMouseEnter={() => {
                      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                      setResourcesOpen(true);
                    }}
                    onMouseLeave={() => {
                      dropdownTimeoutRef.current = setTimeout(() => setResourcesOpen(false), 200);
                    }}
                  >
                    {link.children.map((child) => (
                      <Link key={child.name} href={child.href} style={{
                        display: "block", padding: "10px 18px",
                        fontSize: 13, fontWeight: 500, color: "#4A4A4A", textDecoration: "none",
                        fontFamily: "Inter, sans-serif",
                        transition: "all 0.15s ease",
                      }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "#F8F5F0";
                          e.currentTarget.style.color = "#C49A3C";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#4A4A4A";
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.name} href={link.href} style={{
                fontSize: 14, fontWeight: pathname === link.href ? 600 : 500,
                color: pathname === link.href ? "#1A1A1A" : "#4A4A4A",
                textDecoration: "none",
                position: "relative",
                fontFamily: "Inter, sans-serif",
                padding: "4px 0",
                transition: "color 0.15s ease",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C49A3C")}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? "#1A1A1A" : "#4A4A4A")}
              >
                {link.name}
                {pathname === link.href && (
                  <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "#C49A3C", borderRadius: 2 }} />
                )}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden-mobile">
          <Link href="/auth/login" style={{
            fontSize: 14, fontWeight: 500, color: "#4A4A4A",
            textDecoration: "none", fontFamily: "Inter, sans-serif",
            padding: "8px 16px", borderRadius: 8,
            border: "1px solid #E8E4DF", background: "transparent",
            transition: "all 0.15s ease",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#1A1A1A";
              e.currentTarget.style.color = "#1A1A1A";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "#E8E4DF";
              e.currentTarget.style.color = "#4A4A4A";
            }}
          >
            Log in
          </Link>
          <Link href="/auth/signup" className="btn-shimmer btn-primary-glow" style={{
            fontSize: 14, fontWeight: 600, color: "#FFFFFF",
            textDecoration: "none", fontFamily: "Inter, sans-serif",
            padding: "8px 16px", borderRadius: 8,
            background: "#1A1A1A",
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <Sparkles size={14} color="#C49A3C" />
            Get Started Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, color: "#1A1A1A" }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid #E8E4DF", background: "#FFFFFF", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.children ? (
                  <div style={{ padding: "8px 12px", fontSize: 13, fontWeight: 700, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 4 }}>
                    {link.name}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ padding: "10px 12px", fontSize: 15, fontWeight: 500, color: "#1A1A1A", textDecoration: "none", borderRadius: 8, fontFamily: "Inter, sans-serif" }}
                  >
                    {link.name}
                  </Link>
                )}
                {link.children && link.children.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ padding: "8px 12px 8px 24px", fontSize: 14, color: "#4A4A4A", textDecoration: "none", borderRadius: 8, fontFamily: "Inter, sans-serif" }}
                  >
                    • {child.name}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            <div style={{ borderTop: "1px solid #E8E4DF", paddingTop: 12, marginTop: 4, display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/auth/login" onClick={() => setMobileOpen(false)} style={{
                padding: "10px 16px", textAlign: "center", borderRadius: 8, border: "1px solid #E8E4DF",
                fontSize: 14, fontWeight: 500, color: "#1A1A1A", textDecoration: "none"
              }}>Log in</Link>
              <Link href="/auth/signup" onClick={() => setMobileOpen(false)} style={{
                padding: "10px 16px", textAlign: "center", borderRadius: 8, background: "#1A1A1A",
                fontSize: 14, fontWeight: 600, color: "#FFFFFF", textDecoration: "none"
              }}>Get Started Free</Link>
            </div>
          </div>
        )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
