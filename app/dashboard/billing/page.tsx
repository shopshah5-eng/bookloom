"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Zap, CreditCard, Check, ArrowRight, ShieldCheck, Download, Plus } from "lucide-react";

const PACKS = [
  { credits: "1,000 Credits", price: "$9.00", per: "$0.009/credit", popular: false },
  { credits: "5,000 Credits", price: "$39.00", per: "$0.0078/credit", popular: true, save: "Save 15%" },
  { credits: "15,000 Credits", price: "$99.00", per: "$0.0066/credit", popular: false, save: "Save 25%" },
  { credits: "50,000 Credits", price: "$299.00", per: "$0.0059/credit", popular: false, save: "Save 35%" },
];

const INVOICES = [
  { id: "INV-2026-004", date: "Jul 28, 2026", plan: "Pro Plan (Monthly)", amount: "$39.00", status: "Paid" },
  { id: "INV-2026-003", date: "Jun 28, 2026", plan: "Pro Plan (Monthly)", amount: "$39.00", status: "Paid" },
  { id: "INV-2026-002", date: "May 28, 2026", plan: "Pro Plan (Monthly)", amount: "$39.00", status: "Paid" },
  { id: "INV-2026-001", date: "May 10, 2026", plan: "5,000 Credit Pack", amount: "$39.00", status: "Paid" },
];

export default function BillingPage() {
  const [autoRefill, setAutoRefill] = useState(true);

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Credits & Billing</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Manage subscription, credit top-ups, and invoice history</p>
          </div>
          <Link href="/pricing">
            <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
              <Zap size={14} color="#C49A3C" /> Upgrade Plan
            </button>
          </Link>
        </div>

        <div style={{ padding: "32px" }}>
          {/* Current plan card */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28, marginBottom: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "#FBF3E0", border: "1px solid #EFD98A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: "#C49A3C" }}>
                ⭐
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A" }}>Pro Plan</span>
                  <span style={{ fontSize: 11, fontWeight: 700, background: "#C49A3C", color: "#FFFFFF", padding: "2px 8px", borderRadius: 999 }}>Active</span>
                </div>
                <div style={{ fontSize: 13, color: "#6B6B6B" }}>$39/month · Renews on August 28, 2026 · Unlimited AI Writing</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A" }}>12,450</div>
              <div style={{ fontSize: 12, color: "#9A9A9A" }}>Credits Remaining</div>
            </div>
          </div>

          {/* Credit Packs */}
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 16 }}>Top-Up AI Credit Packs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
            {PACKS.map((pack, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 16, border: `2px solid ${pack.popular ? "#C49A3C" : "#E8E4DF"}`, padding: 24, position: "relative" }}>
                {pack.save && (
                  <span style={{ position: "absolute", top: -10, right: 16, background: "#C49A3C", color: "#FFFFFF", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999 }}>
                    {pack.save}
                  </span>
                )}
                <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 4 }}>{pack.credits}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{pack.price}</div>
                <div style={{ fontSize: 11, color: "#9A9A9A", marginBottom: 16 }}>{pack.per}</div>
                <button style={{ width: "100%", background: pack.popular ? "#1A1A1A" : "transparent", color: pack.popular ? "#FFFFFF" : "#1A1A1A", border: `1px solid ${pack.popular ? "#1A1A1A" : "#E8E4DF"}`, borderRadius: 8, padding: "9px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                  Buy Credits
                </button>
              </div>
            ))}
          </div>

          {/* Invoice History */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid #E8E4DF", fontWeight: 700, fontSize: 16, color: "#1A1A1A" }}>Billing & Invoice History</div>
            {INVOICES.map((inv, i) => (
              <div key={i} style={{ padding: "16px 24px", borderBottom: i < INVOICES.length - 1 ? "1px solid #E8E4DF" : "none", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}>
                <div>
                  <div style={{ fontWeight: 600, color: "#1A1A1A" }}>{inv.plan}</div>
                  <div style={{ fontSize: 11, color: "#9A9A9A" }}>{inv.id} · {inv.date}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontWeight: 700, color: "#1A1A1A" }}>{inv.amount}</span>
                  <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 700, background: "#E8F5E9", padding: "2px 8px", borderRadius: 4 }}>{inv.status}</span>
                  <button style={{ background: "transparent", border: "none", cursor: "pointer", color: "#4A4A4A" }}>
                    <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
