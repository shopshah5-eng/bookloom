"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Eye, EyeOff, ArrowLeft, Check } from "lucide-react";
import { signInWithGoogle } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/auth-provider";
import { Loader2, AlertCircle } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const { signInDemo } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordChecks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "Includes a number", ok: /\d/.test(password) },
    { label: "Includes an uppercase letter", ok: /[A-Z]/.test(password) },
  ];

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!name || !email || !password) {
      setErrorMessage("Please complete all required fields.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        signInDemo();
        router.push("/dashboard");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error(err);
      signInDemo();
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error("Google signup error:", err);
      signInDemo();
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8F5F0", display: "flex", flexDirection: "column", fontFamily: "Inter, sans-serif" }}>
      {/* Navbar */}
      <header style={{ background: "#FFFFFF", borderBottom: "1px solid #E8E4DF", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={16} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: "#1A1A1A" }}>BookLoom</div>
            <div style={{ fontSize: 8, color: "#9A9A9A", letterSpacing: "0.12em", textTransform: "uppercase" }}>AI EBOOK GENERATOR</div>
          </div>
        </Link>
        <nav style={{ display: "flex", gap: 24, fontSize: 13 }}>
          {["Features", "Examples", "Templates", "Pricing"].map(n => (
            <Link key={n} href={`/${n.toLowerCase()}`} style={{ color: "#4A4A4A", textDecoration: "none" }}>{n}</Link>
          ))}
        </nav>
        <Link href="/" style={{ fontSize: 13, color: "#4A4A4A", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </header>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        {/* Left panel */}
        <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 24, width: "fit-content" }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#9A6F1A" }}>CREATE YOUR ACCOUNT</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 16 }}>
            Start your ebook<br />journey <span style={{ color: "#C49A3C" }}>today</span>
          </h1>
          <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 340, marginBottom: 40 }}>
            Join thousands of creators who trust BookLoom to create and publish best-selling ebooks.
          </p>
          <img src="/images/books_stack_with_plant.png" alt="Books" style={{ width: "100%", maxWidth: 320, borderRadius: 12, objectFit: "cover" }} />
        </div>

        {/* Right panel - Form */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 48px" }}>
          <div style={{ width: "100%", maxWidth: 420 }}>
            <form onSubmit={handleEmailSignup} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 4, textAlign: "center" }}>Create your account</h2>
              <p style={{ fontSize: 12, color: "#9A9A9A", marginBottom: 28, textAlign: "center" }}>It's free and only takes a minute.</p>

              {errorMessage && (
                <div style={{ marginBottom: 16, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, color: "#991B1B", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <AlertCircle size={14} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Full name</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A", fontSize: 14 }}>👤</span>
                  <input value={name} onChange={e => setName(e.target.value)} required placeholder="John Doe"
                    style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Email address</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A", fontSize: 14 }}>✉</span>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@example.com"
                    style={{ width: "100%", padding: "10px 36px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Password</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9A9A9A", fontSize: 14 }}>🔒</span>
                  <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} required placeholder="Create a strong password"
                    style={{ width: "100%", padding: "10px 40px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9A9A9A" }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                  {passwordChecks.map(c => (
                    <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: c.ok ? "#22C55E" : "#9A9A9A" }}>
                      <Check size={12} style={{ opacity: c.ok ? 1 : 0.3 }} />
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={loading} style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "13px", fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
                {loading ? <><Loader2 size={16} className="animate-spin" /> Creating account...</> : "Create Account →"}
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: "#E8E4DF" }} />
                <span style={{ fontSize: 12, color: "#9A9A9A" }}>or sign up with</span>
                <div style={{ flex: 1, height: 1, background: "#E8E4DF" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                <button type="button" onClick={handleGoogleSignup} disabled={loading}
                  style={{ background: "#FFFFFF", color: "#1A1A1A", border: "1px solid #E8E4DF", borderRadius: 10, padding: "11px", fontSize: 13, cursor: loading ? "wait" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Inter, sans-serif" }}>
                  <span style={{ fontSize: 16 }}>G</span> {loading ? "Connecting to Google..." : "Continue with Google"}
                </button>
              </div>

              <p style={{ textAlign: "center", fontSize: 13, color: "#6B6B6B" }}>
                Already have an account?{" "}
                <Link href="/auth/login" style={{ color: "#C49A3C", fontWeight: 600, textDecoration: "none" }}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
