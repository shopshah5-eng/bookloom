"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Code, Terminal, Key, Webhook, Play, Copy, Check, Plus, Trash2, Shield, FileText } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface ApiKeyItem {
  id: string;
  name: string;
  key: string;
  created: string;
}

export default function DeveloperPortalPage() {
  const { addToast } = useToast();
  const [apiKeys, setApiKeys] = useState<ApiKeyItem[]>([
    { id: "key_1", name: "Sandbox Demo Key", key: "bk_sandbox_9f82a17b83c401e9a", created: "2026-08-01" },
    { id: "key_2", name: "Development Pipeline", key: "bk_sandbox_3d1902b44ef891a20", created: "2026-08-04" },
  ]);
  const [newKeyName, setNewKeyName] = useState("");
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  // Playground State
  const [selectedEndpoint, setSelectedEndpoint] = useState<"/api/generate" | "/api/export">("/api/generate");
  const [topicInput, setTopicInput] = useState("AI Startup Playbook");
  const [formatInput, setFormatInput] = useState("PDF");
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Webhooks
  const [webhooks, setWebhooks] = useState([
    { id: "wh_1", event: "ebook.completed", url: "https://bookloom-phi.vercel.app/api/webhooks/ebooks", active: true },
    { id: "wh_2", event: "export.ready", url: "https://bookloom-phi.vercel.app/api/webhooks/exports", active: true },
  ]);

  const handleGenerateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName) return;
    const newKey: ApiKeyItem = {
      id: `key_${Date.now()}`,
      name: newKeyName,
      key: `bk_live_${Math.random().toString(36).substring(2, 12)}${Math.random().toString(36).substring(2, 10)}`,
      created: new Date().toISOString().split("T")[0],
    };
    setApiKeys([newKey, ...apiKeys]);
    setNewKeyName("");
    addToast({ title: "API Key Created", description: `Created new API key "${newKey.name}".`, type: "success" });
  };

  const handleCopyKey = (key: string, id: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyId(id);
    addToast({ title: "Copied to Clipboard", description: "API key copied safely.", type: "success" });
    setTimeout(() => setCopiedKeyId(null), 2000);
  };

  const handleRevokeKey = (id: string) => {
    setApiKeys(apiKeys.filter(k => k.id !== id));
    addToast({ title: "API Key Revoked", description: "The API key has been invalidated.", type: "info" });
  };

  const handleRunPlayground = async () => {
    setIsLoading(true);
    setApiResponse(null);

    try {
      if (selectedEndpoint === "/api/generate") {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: topicInput, genre: "Business", pages: 30 }),
        });
        const data = await res.json();
        setApiResponse(data);
      } else {
        const res = await fetch("/api/export", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: topicInput, format: formatInput }),
        });
        const data = await res.json();
        setApiResponse(data);
      }
    } catch (err: any) {
      setApiResponse({ error: err.message || "Failed to make request" });
    } finally {
      setIsLoading(false);
    }
  };

  const curlCommand = selectedEndpoint === "/api/generate"
    ? `curl -X POST https://bookloom-phi.vercel.app/api/generate \\\n  -H "Authorization: Bearer ${apiKeys[0]?.key || "bk_live_key"}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"prompt": "${topicInput}", "genre": "Business", "pages": 30}'`
    : `curl -X POST https://bookloom-phi.vercel.app/api/export \\\n  -H "Authorization: Bearer ${apiKeys[0]?.key || "bk_live_key"}" \\\n  -H "Content-Type: application/json" \\\n  -d '{"title": "${topicInput}", "format": "${formatInput}"}'`;

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 80px" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 12 }}>
            <Code size={13} color="#9A6F1A" />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#9A6F1A", textTransform: "uppercase" }}>DEVELOPER PORTAL & REST API</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>
            Build & Integrate with BookLoom API
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", maxWidth: 720, margin: 0 }}>
            Programmatically generate ebooks, trigger multi-model AI outlines, fetch print-ready EPUB/PDF exports, and configure real-time webhook events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Section 1: API Keys */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28, boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Key size={18} color="#C49A3C" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, margin: 0, color: "#1A1A1A" }}>API Keys</h3>
              </div>
              <span style={{ fontSize: 11, color: "#6B6B6B", background: "#F0EDE8", padding: "2px 8px", borderRadius: 6 }}>{apiKeys.length} Active Keys</span>
            </div>

            <form onSubmit={handleGenerateKey} style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <input value={newKeyName} onChange={e => setNewKeyName(e.target.value)} placeholder="Key identifier (e.g. Mobile App)" required
                style={{ flex: 1, padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none" }} />
              <button type="submit" style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "0 16px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                <Plus size={14} /> Create Key
              </button>
            </form>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {apiKeys.map((k) => (
                <div key={k.id} style={{ background: "#FAFAFA", border: "1px solid #E8E4DF", borderRadius: 8, padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{k.name}</div>
                    <code style={{ fontSize: 11, color: "#6B6B6B", fontFamily: "monospace" }}>{k.key}</code>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => handleCopyKey(k.key, k.id)} title="Copy Key" style={{ background: "#E8E4DF", border: "none", borderRadius: 6, width: 30, height: 30, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {copiedKeyId === k.id ? <Check size={14} color="#2E7D32" /> : <Copy size={14} color="#1A1A1A" />}
                    </button>
                    <button onClick={() => handleRevokeKey(k.id)} title="Revoke Key" style={{ background: "#FEE2E2", border: "none", borderRadius: 6, width: 30, height: 30, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#991B1B" }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Webhooks */}
          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 28, boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Webhook size={18} color="#C49A3C" />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, margin: 0, color: "#1A1A1A" }}>Event Webhooks</h3>
              </div>
              <span style={{ fontSize: 11, color: "#2E7D32", background: "#DCFCE7", padding: "2px 8px", borderRadius: 6 }}>100% Delivery SLA</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {webhooks.map((wh) => (
                <div key={wh.id} style={{ background: "#FAFAFA", border: "1px solid #E8E4DF", borderRadius: 8, padding: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#C49A3C", fontFamily: "monospace" }}>{wh.event}</span>
                    <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, cursor: "pointer" }}>
                      <input type="checkbox" checked={wh.active} onChange={() => {
                        setWebhooks(webhooks.map(w => w.id === wh.id ? { ...w, active: !w.active } : w));
                      }} />
                      {wh.active ? "Active" : "Disabled"}
                    </label>
                  </div>
                  <div style={{ fontSize: 11, color: "#6B6B6B", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis" }}>{wh.url}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Interactive API Playground */}
        <div style={{ background: "#1A1A1A", borderRadius: 16, border: "1px solid #2D2D2D", padding: 32, color: "#FFFFFF" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Terminal size={20} color="#C49A3C" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, margin: 0 }}>
                Interactive API Playground
              </h3>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setSelectedEndpoint("/api/generate")}
                style={{
                  padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
                  background: selectedEndpoint === "/api/generate" ? "#C49A3C" : "#2D2D2D", color: "#FFFFFF"
                }}>
                POST /api/generate
              </button>
              <button onClick={() => setSelectedEndpoint("/api/export")}
                style={{
                  padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
                  background: selectedEndpoint === "/api/export" ? "#C49A3C" : "#2D2D2D", color: "#FFFFFF"
                }}>
                POST /api/export
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Input Controls */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, color: "#A1A1AA", display: "block", marginBottom: 6 }}>
                  {selectedEndpoint === "/api/generate" ? "Topic Prompt" : "Manuscript Title"}
                </label>
                <input value={topicInput} onChange={e => setTopicInput(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", background: "#2B2B2B", border: "1px solid #3D3D3D", borderRadius: 8, color: "#FFFFFF", fontSize: 13, outline: "none", boxSizing: "border-box" }} />
              </div>

              {selectedEndpoint === "/api/export" && (
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, color: "#A1A1AA", display: "block", marginBottom: 6 }}>Export Format</label>
                  <select value={formatInput} onChange={e => setFormatInput(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", background: "#2B2B2B", border: "1px solid #3D3D3D", borderRadius: 8, color: "#FFFFFF", fontSize: 13, outline: "none", boxSizing: "border-box" }}>
                    <option value="PDF">PDF Document</option>
                    <option value="EPUB">EPUB Ebook</option>
                    <option value="HTML">HTML Web Publication</option>
                    <option value="TXT">Plain Text (.txt)</option>
                  </select>
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, color: "#A1A1AA", display: "block", marginBottom: 6 }}>Generated cURL Command</label>
                <pre style={{ background: "#0A0A0C", padding: 12, borderRadius: 8, fontSize: 11, color: "#A1A1AA", overflowX: "auto", margin: 0, fontFamily: "monospace" }}>
                  {curlCommand}
                </pre>
              </div>

              <button onClick={handleRunPlayground} disabled={isLoading}
                style={{
                  width: "100%", background: "#C49A3C", color: "#FFFFFF", border: "none", borderRadius: 8,
                  padding: "12px", fontSize: 13, fontWeight: 700, cursor: isLoading ? "wait" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                }}>
                <Play size={14} /> {isLoading ? "Executing Request..." : "Run Test Request →"}
              </button>
            </div>

            {/* Response Output */}
            <div>
              <label style={{ fontSize: 12, color: "#A1A1AA", display: "block", marginBottom: 6 }}>Live Server Response</label>
              <div style={{ background: "#0A0A0C", border: "1px solid #2D2D2D", borderRadius: 8, padding: 16, height: 260, overflowY: "auto" }}>
                {apiResponse ? (
                  <pre style={{ margin: 0, fontSize: 11, color: "#4ADE80", fontFamily: "monospace", whitespace: "pre-wrap" }}>
                    {JSON.stringify(apiResponse, null, 2)}
                  </pre>
                ) : (
                  <div style={{ color: "#6B6B6B", fontSize: 12, textAlign: "center", marginTop: 100 }}>
                    Click &quot;Run Test Request&quot; to execute API call
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
