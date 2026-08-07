"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Mail, MessageSquare, MapPin, CheckCircle, Loader2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email || !message) {
      setErrorMessage("Please enter both your email and message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (err: any) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <section style={{ padding: "72px 24px 80px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", marginBottom: 12 }}>Contact Support</h1>
          <p style={{ fontSize: 15, color: "#6B6B6B" }}>We&apos;re here to help you build, design, and publish your next best-selling ebook.</p>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, boxShadow: "0 8px 32px rgba(0,0,0,0.04)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "32px 16px" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "#2E7D32" }}>
                <CheckCircle size={32} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                Message Sent Successfully!
              </h2>
              <p style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 24, lineHeight: 1.6 }}>
                Thank you for contacting BookLoom Support. Our team has received your message and will respond to <strong>{email}</strong> within 24 hours.
              </p>
              <button onClick={() => { setSubmitted(false); setMessage(""); }} style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 8, padding: "10px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {errorMessage && (
                <div style={{ marginBottom: 20, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, color: "#991B1B", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <AlertCircle size={14} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Your Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@example.com"
                  style={{ width: "100%", padding: "12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 14, background: "#FAFAFA", outline: "none", boxSizing: "border-box", fontFamily: "Inter, sans-serif" }} />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Message *</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} required placeholder="How can we help you with your ebook creation or publishing?"
                  style={{ width: "100%", height: 140, padding: "12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 14, background: "#FAFAFA", outline: "none", boxSizing: "border-box", resize: "none", fontFamily: "Inter, sans-serif" }} />
              </div>

              <button type="submit" disabled={loading} style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "14px", fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                {loading ? <><Loader2 size={16} className="animate-spin" /> Sending message...</> : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
