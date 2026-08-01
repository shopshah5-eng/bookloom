"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Share2, Gift, Copy } from "lucide-react";

export default function ReferralsPage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Referral Dashboard</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Give 500 AI credits, get 500 AI credits for every friend</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎁</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>Invite Friends to BookLoom</h2>
            <p style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 24 }}>Share your unique referral link. When your friends sign up, you both get 500 bonus AI credits!</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              <input readOnly value="https://bookloom.app/signup?invite=riya500" style={{ padding: "10px 14px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, width: 320, fontFamily: "monospace" }} />
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
