import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col justify-center items-center px-4 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 to-[#8B5CF6]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        <Card variant="gold" className="p-8 space-y-6">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <Mail className="h-8 w-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-bold gradient-text-gold">Check Your Inbox</h1>
            <p className="text-sm text-[#A1A1AA]">
              We sent a verification link to your email. Click the link to complete sign up and activate your workspace.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link href="/dashboard">
              <Button variant="gold" className="w-full gap-2">
                Continue to Studio Workspace <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/login" className="block text-xs text-[#A1A1AA] hover:text-[#FDFBF7]">
              Return to Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
