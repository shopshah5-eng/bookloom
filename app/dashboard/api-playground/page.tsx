"use client";

import React, { useState } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Code2, Play, Copy, Check } from "lucide-react";

export default function ApiPlaygroundPage() {
  const [method, setMethod] = useState("POST");
  const [endpoint, setEndpoint] = useState("/v1/ebooks/generate");
  const [response, setResponse] = useState(`{
  "status": "success",
  "ebook_id": "eb_94820148",
  "title": "The Wealth Mindset",
  "chapters_count": 7,
  "download_url": "https://api.bookloom.app/v1/exports/eb_94820148.pdf"
}`);

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>API Playground</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Test and integrate BookLoom REST & GraphQL APIs</p>
          </div>
        </div>

        <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Request */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", marginBottom: 16 }}>Request Configuration</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <select value={method} onChange={e => setMethod(e.target.value)} style={{ padding: "8px 12px", border: "1px solid #E8E4DF", borderRadius: 6, fontSize: 13, fontWeight: 700, color: "#C49A3C" }}>
                <option>POST</option>
                <option>GET</option>
                <option>DELETE</option>
              </select>
              <input value={endpoint} onChange={e => setEndpoint(e.target.value)} style={{ flex: 1, padding: "8px 12px", border: "1px solid #E8E4DF", borderRadius: 6, fontSize: 13, fontFamily: "monospace" }} />
            </div>
            <button style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
              <Play size={14} /> Send Request
            </button>
          </div>

          {/* Response */}
          <div style={{ background: "#1A1A1A", borderRadius: 16, border: "1px solid #2D2D2D", padding: 24, color: "#FFFFFF" }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
              <span>Response (200 OK)</span>
              <span style={{ fontSize: 11, color: "#22C55E" }}>● 180ms</span>
            </div>
            <pre style={{ margin: 0, fontFamily: "monospace", fontSize: 12, color: "#34D399", lineHeight: 1.6, overflowX: "auto" }}>
              {response}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
