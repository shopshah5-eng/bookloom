"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar } from "./avatar";
import { DropdownMenu, DropdownMenuItem } from "./dropdown-menu";
import { useUser } from "@/lib/hooks/use-user";
import { User, Settings, LogOut, Shield, CreditCard } from "lucide-react";

export function UserMenu() {
  const { profile, role, signOut } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth/login");
  };

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:ring-2 hover:ring-[#D4AF37]/50 transition-all">
          <Avatar name={profile?.fullName || "Evelyn Vance"} src={profile?.avatarUrl} size="sm" />
        </div>
      }
    >
      <div className="p-3 border-b border-white/10 space-y-1">
        <p className="text-sm font-bold text-[#FDFBF7]">{profile?.fullName || "Evelyn Vance"}</p>
        <p className="text-xs text-[#A1A1AA] truncate">{profile?.email || "author@bookloom.ai"}</p>
        <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 uppercase">
          {role} • {profile?.plan || "Pro"} Plan
        </span>
      </div>

      <div className="py-1">
        <Link href="/dashboard/settings">
          <DropdownMenuItem>
            <Settings className="h-4 w-4" /> Account & API Keys
          </DropdownMenuItem>
        </Link>
        <Link href="/dashboard/billing">
          <DropdownMenuItem>
            <CreditCard className="h-4 w-4" /> Billing & Plan
          </DropdownMenuItem>
        </Link>
      </div>

      <div className="pt-1 border-t border-white/10">
        <DropdownMenuItem onClick={handleSignOut} danger>
          <LogOut className="h-4 w-4" /> Sign Out
        </DropdownMenuItem>
      </div>
    </DropdownMenu>
  );
}
