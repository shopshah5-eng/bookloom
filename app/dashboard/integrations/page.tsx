"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Plug, CheckCircle2, Plus } from "lucide-react";

const INTEGRATIONS = [
  { name: "Amazon KDP Direct", cat: "Publishing", connected: true, desc: "Publish ebooks directly to Kindle store" },
  { name: "Shopify Store", cat: "E-commerce", connected: true, desc: "Sell digital PDF & EPUB downloads" },
  { name: "Google Drive Sync", cat: "Storage", connected: false, desc: "Auto-backup chapters & assets" },
  { name: "Stripe Billing", cat: "Payments", connected: true, desc: "Collect payments for private book sales" },
  { name: "Zapier Workflows", cat: "Automation", connected: false, desc: "Connect BookLoom to 5,000+ apps" },
  { name: "Notion Sync", cat: "Notes", connected: false, desc: "Import manuscript notes directly" },
];

export default function IntegrationsPage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Integrations</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Connect BookLoom to your publishing workflow</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {INTEGRATIONS.map((item, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A" }}>{item.name}</div>
                  <span style={{ fontSize: 11, background: item.connected ? "#E8F5E9" : "#F0EDE8", color: item.connected ? "#2E7D32" : "#9A9A9A", padding: "3px 8px", borderRadius: 999, fontWeight: 600 }}>
                    {item.connected ? "Connected" : "Available"}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 20 }}>{item.desc}</p>
                <button style={{ width: "100%", padding: "9px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif", background: item.connected ? "transparent" : "#1A1A1A", color: item.connected ? "#1A1A1A" : "#FFFFFF", border: `1px solid ${item.connected ? "#E8E4DF" : "#1A1A1A"}` }}>
                  {item.connected ? "Manage Connection" : "Connect Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
