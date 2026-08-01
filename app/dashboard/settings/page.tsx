"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { User, Lock, CreditCard, Bell, Shield } from "lucide-react";

export default function SettingsPage() {
  const [tab, setTab] = useState("profile");

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Account Settings</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Manage your profile, preferences, and billing</p>
          </div>
        </div>

        <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "220px 1fr", gap: 32 }}>
          {/* Tabs */}
          <div style={{ background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8E4DF", padding: 8 }}>
            {[
              { id: "profile", name: "Profile", icon: <User size={15} /> },
              { id: "billing", name: "Billing & Plan", icon: <CreditCard size={15} /> },
              { id: "notifications", name: "Notifications", icon: <Bell size={15} /> },
              { id: "security", name: "Security & Keys", icon: <Shield size={15} /> },
            ].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
                  borderRadius: 8, border: "none", background: tab === t.id ? "#1A1A1A" : "transparent",
                  color: tab === t.id ? "#FFFFFF" : "#4A4A4A", fontSize: 13, fontWeight: tab === t.id ? 600 : 500,
                  cursor: "pointer", textAlign: "left", marginBottom: 2, fontFamily: "Inter, sans-serif"
                }}>
                {t.icon} {t.name}
              </button>
            ))}
          </div>

          {/* Form panel */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 20 }}>Personal Information</h3>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Full Name</label>
                <input defaultValue="Riya Sharma" style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 6 }}>Email Address</label>
                <input defaultValue="riya@bookloom.app" style={{ width: "100%", padding: "10px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, fontFamily: "Inter, sans-serif" }} />
              </div>
            </div>

            <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
