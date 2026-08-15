"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Eye, EyeOff, ArrowLeft, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { signInWithGoogle } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { signInDemo } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("bookloom_pending_prompt");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.prompt) setPendingPrompt(parsed.prompt);
      }
    } catch (e) {}
  }, []);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage(error.message || "Invalid email or password.");
      } else {
        const searchParams = new URLSearchParams(window.location.search);
        const redirectUrl = searchParams.get("redirectedFrom") || "/dashboard";
        router.push(redirectUrl);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const targetParam = searchParams.get("redirectedFrom");
      const redirectUrl = targetParam 
        ? `${window.location.origin}/auth/callback?next=${encodeURIComponent(targetParam)}`
        : undefined;
      await signInWithGoogle(redirectUrl);
    } catch (err: any) {
      console.error("Google login error:", err);
      setErrorMessage(err.message || "Google login error. Please try again.");
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
        <nav style={{ display: "flex", gap: 24, fontSize: 13, color: "#4A4A4A" }}>
          {["Features", "Examples", "Templates", "Pricing"].map(n => (
            <Link key={n} href={`/${n.toLowerCase()}`} style={{ color: "#4A4A4A", textDecoration: "none" }}>{n}</Link>
          ))}
        </nav>
        <Link href="/" style={{ fontSize: 13, color: "#4A4A4A", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </header>

      <main id="main-content" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1100, margin: "0 auto", width: "100%", gap: 0 }}>
        {/* Left panel */}
        <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#855B0B" }}>WELCOME BACK</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 16 }}>
              Welcome back<br />to <span style={{ color: "#C49A3C" }}>BookLoom</span>
            </h1>
            <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 40 }}>
              Login to continue creating, designing, and publishing amazing ebooks.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {[
                { icon: "📚", title: "Smart, AI-Powered", desc: "Create ebooks in minutes with the power of AI." },
                { icon: "🎨", title: "Beautiful & Unique", desc: "Stunning designs, covers and illustrations." },
                { icon: "🔒", title: "Secure & Private", desc: "Your data is safe with enterprise-grade security." },
              ].map(f => (
                <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "#F0EDE8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{f.title}</div>
                    <div style={{ fontSize: 12, color: "#6B6B6B" }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src="/images/books_stack_with_plant.png" alt="Books" style={{ width: "100%", maxWidth: 280, borderRadius: 12, objectFit: "cover", marginBottom: 20 }} />
          </div>
        </div>

        {/* Right panel - Form */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 48px" }}>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <form onSubmit={handleEmailLogin} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 36, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 8, textAlign: "center" }}>Login to your account</h2>
              <p style={{ fontSize: 13, color: "#6B6B6B", marginBottom: 28, textAlign: "center" }}>Enter your details below to access your BookLoom dashboard.</p>

              <div aria-live="polite">
                {pendingPrompt && (
                  <div style={{ marginBottom: 16, padding: "10px 14px", background: "#FFFDF9", border: "1px solid #EFD98A", borderRadius: 8, color: "#855B0B", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <Sparkles size={14} color="#C49A3C" style={{ flexShrink: 0 }} />
                    <span>Saved prompt: <strong>&quot;{pendingPrompt.length > 40 ? pendingPrompt.slice(0, 40) + "..." : pendingPrompt}&quot;</strong></span>
                  </div>
                )}
                {errorMessage && (
                  <div style={{ marginBottom: 16, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, color: "#991B1B", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: 16 }}>
                <label htmlFor="login-email" style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Email address</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#6B6B6B" }}>✉</span>
                  <input id="login-email" value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@example.com"
                    style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, color: "#1A1A1A", background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginBottom: 8 }}>
                <label htmlFor="login-password" style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Password</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#6B6B6B" }}>🔒</span>
                  <input id="login-password" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} required placeholder="Enter your password"
                    style={{ width: "100%", padding: "10px 40px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, color: "#1A1A1A", background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6B6B6B" }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div style={{ textAlign: "right", marginBottom: 24 }}>
                <Link href="/auth/forgot-password" style={{ fontSize: 12, color: "#C49A3C", textDecoration: "none" }}>Forgot password?</Link>
              </div>

              <button type="submit" disabled={loading} style={{ width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "13px", fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 20 }}>
                {loading ? <><Loader2 size={16} className="animate-spin" /> Signing in...</> : "Login →"}
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ flex: 1, height: 1, background: "#E8E4DF" }} />
                <span style={{ fontSize: 12, color: "#9A9A9A" }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: "#E8E4DF" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                <button type="button" onClick={handleGoogleLogin} disabled={loading}
                  style={{ width: "100%", background: "#FFFFFF", color: "#1A1A1A", border: "1px solid #E8E4DF", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 500, cursor: loading ? "wait" : "pointer", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>G</span> {loading ? "Connecting to Google..." : "Continue with Google"}
                </button>
              </div>

              <p style={{ textAlign: "center", fontSize: 13, color: "#6B6B6B" }}>
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" style={{ color: "#C49A3C", fontWeight: 600, textDecoration: "none" }}>Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
