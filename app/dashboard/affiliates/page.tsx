"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Award, DollarSign, Users, ArrowUpRight, Copy } from "lucide-react";

export default function AffiliatesPage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Affiliate Rewards Overview</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Earn 30% recurring commission on every author you refer</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { label: "Total Earnings", value: "$3,480.00", icon: "💰" },
              { label: "Pending Payout", value: "$420.00", icon: "⏳" },
              { label: "Total Referrals", value: "48 Authors", icon: "👥" },
              { label: "Conversion Rate", value: "14.2%", icon: "📈" },
            ].map(s => (
              <div key={s.label} style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: "20px 24px" }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: "#1A1A1A" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#9A9A9A" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 8 }}>Your Affiliate Link</div>
            <div style={{ display: "flex", gap: 8, maxWidth: 500 }}>
              <input readOnly value="https://bookloom.app/?ref=riya_sharma" style={{ flex: 1, padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "monospace", background: "#FAFAFA" }} />
              <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Copy Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
