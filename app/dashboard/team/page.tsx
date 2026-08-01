"use client";

import React from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Users, Plus, Mail, Shield, UserCheck } from "lucide-react";

const MEMBERS = [
  { name: "Riya Sharma", email: "riya@bookloom.app", role: "Owner", status: "Active" },
  { name: "James Carter", email: "james@bookloom.app", role: "Editor", status: "Active" },
  { name: "Sarah Johnson", email: "sarah@bookloom.app", role: "Designer", status: "Active" },
  { name: "Alex Chen", email: "alex@bookloom.app", role: "Viewer", status: "Pending" },
];

export default function TeamPage() {
  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Team Workspace</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Collaborate with co-authors, editors and designers</p>
          </div>
          <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
            <Plus size={14} /> Invite Team Member
          </button>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#1A1A1A", marginBottom: 16 }}>Workspace Members</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {MEMBERS.map((m, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 8, border: "1px solid #E8E4DF", background: "#FAFAFA" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1A1A1A", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{m.name}</div>
                      <div style={{ fontSize: 12, color: "#9A9A9A" }}>{m.email}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#C49A3C", background: "#FBF3E0", padding: "3px 10px", borderRadius: 999 }}>{m.role}</span>
                    <span style={{ fontSize: 12, color: m.status === "Active" ? "#22C55E" : "#F59E0B" }}>● {m.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
