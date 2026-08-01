import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FDFBF7] flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/15 to-[#8B5CF6]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-md space-y-6 relative z-10">
        <Badge variant="gold">404 Error</Badge>
        <h1 className="font-serif text-7xl font-bold gradient-text-gold">404</h1>
        <h2 className="font-serif text-2xl font-bold">Chapter Not Found</h2>
        <p className="text-xs text-[#A1A1AA]">
          The page or publication you are looking for has been moved, renamed, or does not exist.
        </p>

        <div className="pt-4 flex justify-center gap-3">
          <Link href="/">
            <Button variant="gold" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Return to Home
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline">Open Studio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
