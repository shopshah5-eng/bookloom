"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Eye, EyeOff, ArrowLeft, Check, CheckCircle2 as CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { signInWithGoogle } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/auth-provider";

export default function SignupPage() {
  const router = useRouter();
  const { signInDemo } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const passwordChecks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "Includes a number", ok: /\d/.test(password) },
    { label: "Includes an uppercase letter", ok: /[A-Z]/.test(password) },
  ];

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

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
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
          data: {
            full_name: name,
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (data?.user) {
        // Create profile record in Supabase database
        await supabase.from("profiles").upsert({
          id: data.user.id,
          email: data.user.email || email,
          full_name: name,
          role: "author",
          plan: "free",
        });
        if (data.session) {
          router.push("/dashboard");
        } else {
          setSuccessMessage(`Account created for ${email}! Check your inbox for confirmation link or log in now.`);
          setTimeout(() => router.push("/auth/login"), 2000);
        }
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Signup failed");
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
      setErrorMessage(err.message || "Google signup error. Please try again.");
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
        <nav style={{ display: "flex", gap: 24, fontSize: 13 }} className="hidden-mobile">
          {["Features", "Examples", "Templates", "Pricing"].map(n => (
            <Link key={n} href={`/${n.toLowerCase()}`} style={{ color: "#4A4A4A", textDecoration: "none" }}>{n}</Link>
          ))}
        </nav>
        <Link href="/" style={{ fontSize: 13, color: "#4A4A4A", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </header>

      <main id="main-content" style={{ flex: 1, maxWidth: 1100, margin: "0 auto", width: "100%" }} className="grid grid-cols-1 md:grid-cols-2">
        {/* Left panel */}
        <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20, width: "fit-content" }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#855B0B" }}>CREATE YOUR ACCOUNT</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, marginBottom: 16 }}>
            Start your ebook<br />journey <span style={{ color: "#C49A3C" }}>today</span>
          </h1>
          <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 340, marginBottom: 32 }}>
            Join thousands of creators who trust BookLoom to create and publish best-selling ebooks.
          </p>
          <img src="/images/books_stack_with_plant.png" alt="Books" loading="lazy" style={{ width: "100%", maxWidth: 320, borderRadius: 12, objectFit: "cover" }} />
        </div>

        {/* Right panel - Form */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 24px" }}>
          <div style={{ width: "100%", maxWidth: 420 }}>
            <form onSubmit={handleEmailSignup} style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", padding: 32, boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", marginBottom: 4, textAlign: "center" }}>Create your account</h2>
              <p style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 24, textAlign: "center" }}>It&apos;s free and only takes a minute.</p>

              <div aria-live="polite">
                {successMessage && (
                  <div style={{ marginBottom: 16, padding: "14px", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: 10, color: "#065F46", fontSize: 13, lineHeight: 1.5, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{successMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        signInDemo();
                        router.push("/dashboard");
                      }}
                      style={{ background: "#059669", color: "#FFFFFF", border: "none", borderRadius: 6, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
                    >
                      Enter Studio Workspace →
                    </button>
                  </div>
                )}

                {errorMessage && (
                  <div style={{ marginBottom: 16, padding: "10px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 8, color: "#991B1B", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }}>
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: 14 }}>
                <label htmlFor="signup-full-name" style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Full name</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#6B6B6B", fontSize: 14 }}>👤</span>
                  <input id="signup-full-name" name="full_name" autoComplete="name" value={name} onChange={e => setName(e.target.value)} required placeholder="John Doe"
                    style={{ width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginBottom: 14 }}>
                <label htmlFor="signup-email" style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Email address</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#6B6B6B", fontSize: 14 }}>✉</span>
                  <input id="signup-email" name="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="you@example.com"
                    style={{ width: "100%", padding: "10px 36px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label htmlFor="signup-password" style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 6 }}>Password</label>
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#6B6B6B", fontSize: 14 }}>🔒</span>
                  <input id="signup-password" name="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} required placeholder="Create a strong password"
                    style={{ width: "100%", padding: "10px 40px 10px 36px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, background: "#FAFAFA", outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6B6B6B" }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                  {passwordChecks.map(c => (
                    <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: c.ok ? "#22C55E" : "#6B6B6B" }}>
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
                <span style={{ fontSize: 12, color: "#6B6B6B" }}>or sign up with</span>
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
                <Link href="/auth/login" style={{ color: "#855B0B", fontWeight: 600, textDecoration: "none" }}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
