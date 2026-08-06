"use client";

import React, { useState } from "react";
import { X, Check, ShieldCheck, CreditCard, Sparkles, Lock, ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import { useToast } from "@/components/ui/toast";

export interface CheckoutPlan {
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  credits?: string;
  pages?: string;
}

interface CheckoutModalProps {
  plan: CheckoutPlan | null;
  onClose: () => void;
}

export function CheckoutModal({ plan, onClose }: CheckoutModalProps) {
  const { profile, signInDemo } = useAuth();
  const { addToast } = useToast();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "gpay" | "apple">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState(profile?.fullName || "Riya Sharma");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!plan) return null;

  const isFree = plan.monthlyPrice === 0 || plan.monthlyPrice === null;
  const unitPrice = billingCycle === "yearly" ? (plan.yearlyPrice ? Math.round(plan.yearlyPrice / 12) : 0) : (plan.monthlyPrice || 0);
  const totalPrice = billingCycle === "yearly" ? (plan.yearlyPrice || 0) : (plan.monthlyPrice || 0);

  const handleCompleteCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      signInDemo(); // Activate demo profile with pro plan and credits
      addToast({
        title: "🎉 Plan Activated!",
        description: `Successfully subscribed to the ${plan.name} Plan (${billingCycle}). Your account has been upgraded.`,
        type: "success",
      });
    }, 1200);
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(10, 10, 12, 0.8)", backdropFilter: "blur(6px)",
      zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24
    }}>
      <div style={{
        background: "#FFFFFF", borderRadius: 20, maxWidth: 640, width: "100%",
        maxHeight: "92vh", overflowY: "auto", border: "1px solid #E8E4DF",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)", position: "relative"
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16, width: 34, height: 34,
          borderRadius: "50%", background: "#F0EDE8", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#1A1A1A", zIndex: 10
        }}>
          <X size={16} />
        </button>

        {isSuccess ? (
          <div style={{ padding: 48, textAlign: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "#2E7D32" }}>
              <Check size={36} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
              Upgrade Successful!
            </h2>
            <p style={{ fontSize: 14, color: "#6B6B6B", marginBottom: 28, lineHeight: 1.6 }}>
              Welcome to the <strong>BookLoom {plan.name} Plan</strong>. Your credits and enhanced limits are ready in your dashboard.
            </p>
            <button onClick={onClose} style={{ background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Go to Dashboard →
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div style={{ background: "#1A1A1A", color: "#FFFFFF", padding: "28px 36px", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#C49A3C", color: "#FFFFFF", borderRadius: 999, padding: "3px 10px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>
                <ShieldCheck size={12} /> SECURE STRIPE CHECKOUT
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, margin: "0 0 4px" }}>
                Upgrade to BookLoom {plan.name}
              </h2>
              <p style={{ fontSize: 13, color: "#A1A1AA", margin: 0 }}>
                Unlock high-capacity AI models, expanded page limits, and print-ready exports.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCompleteCheckout} style={{ padding: 36 }}>
              {/* Billing Cycle Toggle */}
              {!isFree && (
                <div style={{ marginBottom: 24, background: "#F8F5F0", padding: 6, borderRadius: 10, display: "flex", border: "1px solid #E8E4DF" }}>
                  <button type="button" onClick={() => setBillingCycle("monthly")}
                    style={{
                      flex: 1, padding: "8px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none",
                      background: billingCycle === "monthly" ? "#FFFFFF" : "transparent",
                      color: billingCycle === "monthly" ? "#1A1A1A" : "#6B6B6B",
                      boxShadow: billingCycle === "monthly" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                      cursor: "pointer"
                    }}>
                    Monthly Billing (${plan.monthlyPrice}/mo)
                  </button>
                  <button type="button" onClick={() => setBillingCycle("yearly")}
                    style={{
                      flex: 1, padding: "8px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "none",
                      background: billingCycle === "yearly" ? "#FFFFFF" : "transparent",
                      color: billingCycle === "yearly" ? "#1A1A1A" : "#6B6B6B",
                      boxShadow: billingCycle === "yearly" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                    }}>
                    Annual Billing (${plan.yearlyPrice}/yr) <span style={{ background: "#DCFCE7", color: "#166534", fontSize: 10, padding: "2px 6px", borderRadius: 4 }}>Save 20%</span>
                  </button>
                </div>
              )}

              {/* Order Summary Box */}
              <div style={{ background: "#FAF8F5", border: "1px solid #E8E4DF", borderRadius: 12, padding: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#1A1A1A" }}>{plan.name} Tier Subscription</span>
                  <span style={{ fontWeight: 800, fontSize: 16, color: "#C49A3C" }}>
                    ${totalPrice} <span style={{ fontSize: 11, fontWeight: 500, color: "#6B6B6B" }}>/{billingCycle === "yearly" ? "year" : "month"}</span>
                  </span>
                </div>
                <div style={{ fontSize: 12, color: "#6B6B6B", display: "flex", gap: 16 }}>
                  <span>✓ 100% Ownership & Copyright</span>
                  <span>✓ Instant Activation</span>
                  <span>✓ Cancel Anytime</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A", display: "block", marginBottom: 8 }}>Payment Method</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {[
                    { id: "card", label: "Credit Card", icon: "💳" },
                    { id: "gpay", label: "Google Pay", icon: "G Pay" },
                    { id: "apple", label: "Apple Pay", icon: " Pay" },
                  ].map(m => (
                    <button key={m.id} type="button" onClick={() => setPaymentMethod(m.id as any)}
                      style={{
                        padding: "10px", borderRadius: 8, border: `1.5px solid ${paymentMethod === m.id ? "#C49A3C" : "#E8E4DF"}`,
                        background: paymentMethod === m.id ? "#FBF3E0" : "#FFFFFF",
                        fontSize: 12, fontWeight: 600, cursor: "pointer", color: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                      }}>
                      <span>{m.icon}</span> {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Inputs */}
              {paymentMethod === "card" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 4 }}>Name on Card</label>
                    <input value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} required placeholder="John Doe"
                      style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 4 }}>Card Number</label>
                    <input value={cardNumber} onChange={e => setCardNumber(e.target.value)} required placeholder="4242 •••• •••• 4242" maxLength={19}
                      style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 4 }}>Expiration</label>
                      <input value={expiry} onChange={e => setExpiry(e.target.value)} required placeholder="MM / YY" maxLength={5}
                        style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: "#4A4A4A", display: "block", marginBottom: 4 }}>CVC</label>
                      <input value={cvc} onChange={e => setCvc(e.target.value)} required placeholder="123" maxLength={4}
                        style={{ width: "100%", padding: "10px 12px", border: "1px solid #E8E4DF", borderRadius: 8, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button type="submit" disabled={isProcessing}
                style={{
                  width: "100%", background: "#1A1A1A", color: "#FFFFFF", border: "none", borderRadius: 10,
                  padding: "14px", fontSize: 14, fontWeight: 600, cursor: isProcessing ? "wait" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "Inter, sans-serif"
                }}>
                {isProcessing ? (
                  <><Loader2 size={16} className="animate-spin" /> Processing Payment...</>
                ) : (
                  <><Lock size={14} /> Complete Upgrade (${totalPrice})</>
                )}
              </button>
              <div style={{ textAlign: "center", fontSize: 11, color: "#9A9A9A", marginTop: 12 }}>
                🔒 256-Bit SSL Encrypted Payment · 14-Day Money-Back Guarantee
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
