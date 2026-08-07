"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("bookloom_cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (type: "all" | "essential") => {
    localStorage.setItem("bookloom_cookie_consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Consent Notice"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        left: 24,
        maxWidth: 460,
        zIndex: 999,
        background: "#FFFFFF",
        border: "1px solid #E8E4DF",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 12px 36px rgba(0, 0, 0, 0.12)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ShieldCheck size={18} color="#C49A3C" />
          <span style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A" }}>Cookie & Privacy Settings</span>
        </div>
        <button
          onClick={() => handleAccept("essential")}
          aria-label="Close Cookie Banner"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#9A9A9A", padding: 4 }}
        >
          <X size={16} />
        </button>
      </div>

      <p style={{ fontSize: 12, color: "#6B6B6B", lineHeight: 1.6, marginBottom: 16 }}>
        We use essential cookies to keep BookLoom secure and function properly. We also use analytical cookies to improve your authoring experience.
      </p>

      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={() => handleAccept("all")}
          style={{
            flex: 1,
            background: "#1A1A1A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 8,
            padding: "9px 14px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Accept All
        </button>
        <button
          onClick={() => handleAccept("essential")}
          style={{
            flex: 1,
            background: "#F8F5F0",
            color: "#1A1A1A",
            border: "1px solid #E8E4DF",
            borderRadius: 8,
            padding: "9px 14px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
