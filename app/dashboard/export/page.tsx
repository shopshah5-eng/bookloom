"use client";

import React, { useState, useEffect } from "react";
import { DashboardSidebar } from "@/components/layouts/dashboard-sidebar";
import { Download, FileText, CheckCircle, Clock, Loader2 } from "lucide-react";

export default function ExportCentrePage() {
  const [exportsList, setExportsList] = useState<any[]>([]);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bookloom_books");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const list = parsed.map((b: any, idx: number) => ({
            id: `exp_${b.id || idx}`,
            title: b.title || "Ebook Manuscript",
            format: "PDF",
            size: `${((b.totalWords || 10000) * 0.4).toFixed(1)} KB`,
            date: "Just now",
            status: "Ready",
          }));
          setExportsList(list);
          return;
        }
      }
    } catch (e) {}

    setExportsList([
      { id: "exp_1", title: "The Wealth Mindset", format: "PDF", size: "8.4 KB", date: "2 hours ago", status: "Ready" },
      { id: "exp_2", title: "Minimalist Living", format: "EPUB", size: "3.2 KB", date: "1 day ago", status: "Ready" },
      { id: "exp_3", title: "Startup Playbook 2026", format: "PDF", size: "12.1 KB", date: "2 days ago", status: "Ready" },
    ]);
  }, []);

  const handleDownloadExport = async (item: any) => {
    setDownloadingId(item.id);
    try {
      const res = await fetch("/api/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ebookId: item.id,
          title: item.title,
          format: item.format,
        }),
      });
      const json = await res.json();
      if (json.success && json.export?.downloadUrl) {
        const a = document.createElement("a");
        a.href = json.export.downloadUrl;
        a.download = json.export.filename || `${item.title.toLowerCase().replace(/[^a-z0-9]/g, "_")}.${item.format.toLowerCase()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        alert("Download failed");
      }
    } catch (err: any) {
      alert("Export error: " + err.message);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div style={{ display: "flex", background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <DashboardSidebar />

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 20 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: 0 }}>Export Centre</h1>
            <p style={{ fontSize: 13, color: "#9A9A9A", margin: 0 }}>Manage your rendered files and download assets</p>
          </div>
        </div>

        <div style={{ padding: "32px" }}>
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflow: "hidden" }}>
            <div style={{ padding: "16px 24px", background: "#FAFAFA", borderBottom: "1px solid #E8E4DF", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto", fontSize: 11, fontWeight: 600, color: "#9A9A9A", textTransform: "uppercase" }}>
              <span>Ebook Title</span>
              <span>Format</span>
              <span>Size</span>
              <span>Date</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {exportsList.map((item, i) => (
              <div key={item.id || i} style={{ padding: "16px 24px", borderBottom: i < exportsList.length - 1 ? "1px solid #E8E4DF" : "none", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr auto", alignItems: "center", fontSize: 13 }}>
                <div style={{ fontWeight: 600, color: "#1A1A1A" }}>{item.title}</div>
                <span style={{ fontWeight: 600, color: "#C49A3C" }}>{item.format}</span>
                <span style={{ color: "#6B6B6B" }}>{item.size}</span>
                <span style={{ color: "#9A9A9A" }}>{item.date}</span>
                <span style={{ color: "#22C55E", fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  <CheckCircle size={13} /> {item.status}
                </span>
                <button
                  onClick={() => handleDownloadExport(item)}
                  disabled={downloadingId === item.id}
                  style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: downloadingId === item.id ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                  {downloadingId === item.id ? <Loader2 size={13} className="animate-spin" /> : <Download size={13} />}
                  {downloadingId === item.id ? "Exporting..." : "Download"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

