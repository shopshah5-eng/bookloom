import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FDFBF7] flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
          <Wrench className="h-8 w-8 animate-spin" />
        </div>
        <Badge variant="gold">System Maintenance</Badge>
        <h1 className="font-serif text-3xl font-bold gradient-text-gold">Upgrading AI Engines</h1>
        <p className="text-xs text-[#A1A1AA]">
          BookLoom is currently undergoing scheduled infrastructure upgrades. We will be back online shortly.
        </p>
        <Link href="/">
          <Button variant="outline" size="sm">Refresh Status</Button>
        </Link>
      </div>
    </div>
  );
}
