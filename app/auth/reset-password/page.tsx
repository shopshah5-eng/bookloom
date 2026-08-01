"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Lock, Sparkles } from "lucide-react";
import { resetPasswordAction } from "../actions";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await resetPasswordAction(formData);

    setIsLoading(false);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 to-[#8B5CF6]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#D4AF37] to-[#8B5CF6] flex items-center justify-center shadow-xl shadow-[#D4AF37]/20">
            <BookOpen className="h-6 w-6 text-[#0A0A0C]" />
          </div>
          <h1 className="font-serif text-3xl font-bold gradient-text-gold">Reset Password</h1>
          <p className="text-xs text-[#A1A1AA]">Choose a new secure password for your BookLoom account.</p>
        </div>

        <Card variant="gold" className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-xs text-red-400 bg-red-500/10 p-2.5 rounded-lg border border-red-500/20">{error}</p>}

            <div>
              <label className="text-xs font-medium text-[#A1A1AA] mb-1.5 block">New Password</label>
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#A1A1AA] mb-1.5 block">Confirm New Password</label>
              <Input
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
                required
              />
            </div>

            <Button variant="gold" type="submit" isLoading={isLoading} className="w-full gap-2 mt-2">
              <Sparkles className="h-4 w-4" /> Save New Password
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
