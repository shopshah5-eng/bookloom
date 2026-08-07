"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Check, Minus, Sparkles, Star } from "lucide-react";
import { CheckoutModal, CheckoutPlan } from "@/components/modals/checkout-modal";

const PLANS = [
  {
    name: "Free",
    icon: "🚀",
    desc: "Perfect for trying out BookLoom",
    monthlyPrice: 0,
    yearlyPrice: 0,
    cta: "Get Started Free",
    ctaStyle: "outline" as const,
    features: [
      "3 ebooks / month",
      "Up to 30 pages / book",
      "500 AI credits / month",
      "Standard AI Writing Models",
      "Standard exports (PDF)",
      "Community support",
    ],
  },
  {
    name: "Creator",
    icon: "✏️",
    desc: "For creators & self-publishers",
    monthlyPrice: 19,
    yearlyPrice: 190,
    yearlyLabel: "$190 / year (Save 20%)",
    cta: "Start Creator Plan",
    ctaStyle: "outline" as const,
    features: [
      "Everything in Free, plus:",
      "15 ebooks / month",
      "Up to 100 pages / book",
      "2,500 AI credits / month",
      "High-Context AI Models",
      "AI book covers & illustrations",
      "PDF & EPUB exports",
      "Priority email support",
    ],
  },
  {
    name: "Pro",
    icon: "⭐",
    desc: "For professional authors & power users",
    monthlyPrice: 39,
    yearlyPrice: 390,
    yearlyLabel: "$390 / year (Save 20%)",
    popular: true,
    cta: "Start Pro Plan",
    ctaStyle: "primary" as const,
    features: [
      "Everything in Creator, plus:",
      "50 ebooks / month",
      "Up to 300 pages / book",
      "10,000 AI credits / month",
      "GPT-4o & Claude 3.5 Sonnet",
      "Unlimited AI book covers",
      "PDF, EPUB & MOBI exports",
      "Custom templates & Brand Kit",
      "Priority support queue",
    ],
  },
  {
    name: "Team",
    icon: "👥",
    desc: "For publishing teams & agencies",
    monthlyPrice: 99,
    yearlyPrice: 990,
    yearlyLabel: "$990 / year (Save 20%)",
    cta: "Start Team Plan",
    ctaStyle: "outline" as const,
    features: [
      "Everything in Pro, plus:",
      "200 ebooks / month",
      "Up to 500 pages / book",
      "30,000 AI credits / month",
      "Team workspace (up to 5 seats)",
      "Shared templates & brand assets",
      "Collaborative editor & comments",
      "Team analytics & version history",
    ],
  },
  {
    name: "Enterprise",
    icon: "🏢",
    desc: "For organizations & high-volume publishers",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Contact Sales",
    ctaStyle: "outline" as const,
    features: [
      "Everything in Team, plus:",
      "Custom ebook & page limits",
      "100,000+ AI credits / month",
      "Dedicated account manager",
      "SSO, SAML & Enterprise security",
      "Custom API integrations",
      "Custom SLA & 24/7 priority support",
    ],
  },
];

const COMPARE_ROWS = [
  { feature: "Ebooks / Month", values: ["3", "15", "50", "200", "Custom"] },
  { feature: "Max Pages / Book", values: ["30 Pages", "100 Pages", "300 Pages", "500 Pages", "Custom"] },
  { feature: "AI Credits / Month", values: ["500", "2,500", "10,000", "30,000", "100,000+"] },
  { feature: "AI Model Tier", values: ["Standard", "High-Context", "GPT-4o & Claude", "Full Suite", "Custom / Dedicated"] },
  { feature: "AI Book Covers", values: ["Standard", "Included", "Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Illustrations & SVGs", values: ["10 / month", "50 / month", "Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Export Formats", values: ["PDF", "PDF, EPUB", "PDF, EPUB, MOBI", "PDF, EPUB, MOBI", "All + Custom"] },
  { feature: "Custom Templates", values: [null, null, "✓", "✓", "✓"] },
  { feature: "Team Members", values: ["1", "1", "1", "Up to 5", "Unlimited"] },
  { feature: "Collaboration", values: [null, null, null, "✓", "Advanced"] },
  { feature: "Priority Support", values: [null, "✓", "✓", "✓", "24/7 Premium SLA"] },
  { feature: "SSO & Security", values: [null, null, null, null, "✓"] },
  { feature: "API Access", values: [null, null, null, null, "✓"] },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [selectedCheckoutPlan, setSelectedCheckoutPlan] = useState<CheckoutPlan | null>(null);

  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Navbar />

      <CheckoutModal plan={selectedCheckoutPlan} onClose={() => setSelectedCheckoutPlan(null)} />

      {/* Hero */}
      <section style={{ padding: "72px 24px 48px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FBF3E0", border: "1px solid #EFD98A", borderRadius: 999, padding: "4px 12px", marginBottom: 20 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#855B0B" }}>SIMPLE, TRANSPARENT PRICING</span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.15, margin: "0 0 16px" }}>
            Choose the Perfect Plan<br />
            for Your <span style={{ color: "#C49A3C", fontStyle: "italic" }}>Creative Journey</span>
          </h1>
          <p style={{ fontSize: 15, color: "#6B6B6B", margin: "0 0 32px" }}>
            Start for free and upgrade anytime. All plans include powerful AI tools to create beautiful, professional ebooks.
          </p>

          {/* Billing Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 0, background: "#F0EDE8", borderRadius: 999, padding: 4, border: "1px solid #E8E4DF" }}>
            <button
              onClick={() => setBilling("monthly")}
              aria-label="Switch to Monthly Billing"
              style={{
                padding: "8px 24px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none",
                background: billing === "monthly" ? "#FFFFFF" : "transparent",
                color: "#1A1A1A",
                boxShadow: billing === "monthly" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                fontFamily: "Inter, sans-serif"
              }}>
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              aria-label="Switch to Yearly Billing with 20% Discount"
              style={{
                padding: "8px 24px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "none",
                background: billing === "yearly" ? "#FFFFFF" : "transparent",
                color: "#1A1A1A",
                boxShadow: billing === "yearly" ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 6
              }}>
              Yearly <span style={{ background: "#C49A3C", color: "#FFFFFF", borderRadius: 999, padding: "1px 8px", fontSize: 10 }}>Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name} style={{
              background: "#FFFFFF", borderRadius: 16,
              border: `2px solid ${plan.popular ? "#C49A3C" : "#E8E4DF"}`,
              padding: 24, position: "relative",
              boxShadow: plan.popular ? "0 8px 32px rgba(196,154,60,0.15)" : "none"
            }}>
              {plan.popular && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#C49A3C", color: "#FFFFFF", fontSize: 11, fontWeight: 700,
                  padding: "4px 16px", borderRadius: 999, letterSpacing: "0.05em"
                }}>
                  MOST POPULAR
                </div>
              )}

              <div style={{ fontSize: 28, marginBottom: 8 }}>{plan.icon}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>{plan.name}</div>
              <div style={{ fontSize: 12, color: "#6B6B6B", marginBottom: 20 }}>{plan.desc}</div>

              <div style={{ marginBottom: 20 }}>
                {plan.monthlyPrice === null ? (
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 800, color: "#1A1A1A" }}>Custom</div>
                ) : (
                  <div>
                    <div>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 800, color: "#1A1A1A" }}>
                        ${billing === "yearly" ? Math.round((plan.yearlyPrice ?? 0) / 12) : plan.monthlyPrice}
                      </span>
                      <span style={{ fontSize: 13, color: "#6B6B6B" }}> /month</span>
                    </div>
                    {billing === "yearly" && plan.yearlyLabel && (
                      <div style={{ fontSize: 11, color: "#9A9A9A" }}>{plan.yearlyLabel}</div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedCheckoutPlan(plan)}
                aria-label={`Select ${plan.name} plan`}
                style={{
                  width: "100%", padding: "10px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                  cursor: "pointer", fontFamily: "Inter, sans-serif", marginBottom: 20,
                  background: plan.ctaStyle === "primary" ? "#1A1A1A" : "transparent",
                  color: plan.ctaStyle === "primary" ? "#FFFFFF" : "#1A1A1A",
                  border: `1.5px solid ${plan.ctaStyle === "primary" ? "#1A1A1A" : "#E8E4DF"}`,
                }}>
                {plan.cta}
              </button>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ fontSize: 12, color: i === 0 && f.includes("plus") ? "#9A9A9A" : "#4A4A4A", display: "flex", alignItems: "flex-start", gap: 6 }}>
                    {i === 0 && f.includes("plus") ? null : <Check size={13} color="#C49A3C" style={{ flexShrink: 0, marginTop: 1 }} />}
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", marginBottom: 32 }}>Compare Plans</h2>

          <div style={{ background: "#FFFFFF", borderRadius: 16, border: "1px solid #E8E4DF", overflowX: "auto" }}>
            <div style={{ minWidth: 800 }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)", borderBottom: "1px solid #E8E4DF" }}>
                <div style={{ padding: "16px 24px", fontWeight: 600, color: "#1A1A1A", fontSize: 15 }}>Compare Features</div>
                {PLANS.map((plan) => (
                  <div key={plan.name} style={{ padding: "16px", textAlign: "center", borderLeft: "1px solid #E8E4DF", background: plan.popular ? "#FFFBF0" : "transparent" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A" }}>{plan.name}</div>
                    <div style={{ fontSize: 11, color: "#9A9A9A" }}>
                      {plan.monthlyPrice === null ? "Custom" : plan.monthlyPrice === 0 ? "$0 / forever" : `$${plan.monthlyPrice} / month`}
                    </div>
                    {plan.popular && <div style={{ marginTop: 4, background: "#FBF3E0", color: "#855B0B", fontSize: 10, borderRadius: 999, padding: "2px 8px", display: "inline-block" }}>Most Popular</div>}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {COMPARE_ROWS.map((row, i) => (
                <div key={row.feature} style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)", borderBottom: i < COMPARE_ROWS.length - 1 ? "1px solid #E8E4DF" : "none" }}>
                  <div style={{ padding: "14px 24px", fontSize: 13, color: "#4A4A4A", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14 }}>📋</span>
                    {row.feature}
                  </div>
                  {row.values.map((v, vi) => (
                    <div key={vi} style={{ padding: "14px", textAlign: "center", borderLeft: "1px solid #E8E4DF", fontSize: 12, color: "#4A4A4A", display: "flex", alignItems: "center", justifyContent: "center", background: PLANS[vi].popular ? "#FFFBF0" : "transparent" }}>
                      {v === null ? <Minus size={14} color="#D0D0D0" /> : v === "✓" ? <Check size={14} color="#22C55E" /> : v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ background: "#F0EDE8", borderRadius: 16, border: "1px solid #E8E4DF", padding: "40px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <img src="/images/books_stack_with_plant.png" alt="BookLoom" loading="lazy" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 12 }} />
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>
                  Ready to Create Something Amazing?
                </h3>
                <p style={{ fontSize: 13, color: "#6B6B6B", margin: 0 }}>
                  Join thousands of creators who trust BookLoom to bring their ideas to life.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }} className="lg:items-end">
              <Link href="/auth/signup">
                <button style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "16px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
                  <Sparkles size={15} /> Get Started for Free
                </button>
              </Link>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: "#6B6B6B", flexWrap: "wrap" }}>
                {["No credit card required", "Cancel anytime", "Free plan available"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Check size={12} color="#C49A3C" /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
