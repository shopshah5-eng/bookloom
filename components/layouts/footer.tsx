import React from "react";
import Link from "next/link";
import { BookOpen, Twitter, Linkedin, Youtube, Github } from "lucide-react";

export function Footer() {
  const cols = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Examples", href: "/examples" },
        { name: "Templates", href: "/templates" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/contact" },
        { name: "API Reference", href: "/developers" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Connect with us",
      social: true,
    },
  ];

  return (
    <footer style={{ background: "#1A1A1A", color: "#9A9A9A" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={18} color="#1A1A1A" />
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 18, color: "#FFFFFF" }}>BookLoom</div>
                <div style={{ fontSize: 9, color: "#6B6B6B", letterSpacing: "0.12em", textTransform: "uppercase" }}>AI EBOOK GENERATOR</div>
              </div>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#6B6B6B", maxWidth: 260 }}>
              Create stunning ebooks with AI. Write better, publish faster, and inspire the world.
            </p>
            <div style={{ fontSize: 12, color: "#9A9A9A", display: "flex", flexDirection: "column", gap: 4 }}>
              <span>✉️ Support: <a href="mailto:support@bookloom.ai" style={{ color: "#C49A3C", textDecoration: "none" }}>support@bookloom.ai</a></span>
              <span>🏢 BookLoom Studio Inc.</span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: "#FFFFFF", letterSpacing: "0.03em", margin: 0 }}>{col.title}</h4>
              {col.social ? (
                <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                  {[
                    { icon: <Twitter size={16} />, href: "#" },
                    { icon: <Linkedin size={16} />, href: "#" },
                    { icon: <Youtube size={16} />, href: "#" },
                    { icon: <Github size={16} />, href: "#" },
                  ].map((s, i) => (
                    <a key={i} href={s.href} style={{
                      width: 32, height: 32, borderRadius: 6, background: "#2D2D2D",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#9A9A9A", transition: "background 0.15s", textDecoration: "none"
                    }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#3D3D3D")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#2D2D2D")}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              ) : (
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {col.links?.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} style={{ fontSize: 13, color: "#6B6B6B", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#6B6B6B")}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #2D2D2D", paddingTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 12, color: "#4A4A4A" }}>© {new Date().getFullYear()} BookLoom. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 12, color: "#4A4A4A", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 12, color: "#4A4A4A", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
