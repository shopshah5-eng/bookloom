"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { UserRole } from "@/lib/auth";

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string;
  avatarUrl?: string;
  role: UserRole;
  plan: string;
}

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  role: UserRole;
  isLoading: boolean;
  isDemoMode: boolean;
  signOut: () => Promise<void>;
  signInDemo: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  role: "user",
  isLoading: true,
  isDemoMode: true,
  signOut: async () => {},
  signInDemo: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [role, setRole] = useState<UserRole>("author");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function getUserSession() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser(user);
          const { data } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          setProfile({
            id: user.id,
            email: user.email || "",
            fullName: data?.full_name || user.user_metadata?.full_name || user.email?.split("@")[0] || "Author",
            avatarUrl: data?.avatar_url || user.user_metadata?.avatar_url,
            role: (data?.role || "author") as UserRole,
            plan: data?.plan || "free",
          });
          setRole((data?.role || "author") as UserRole);
        } else {
          setUser(null);
          setProfile(null);
        }
      } catch (err) {
        console.error("Auth session fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }

    getUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(session.user);
        try {
          const { data } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

          const userRole = (data?.role || "author") as UserRole;
          const userPlan = data?.plan || "free";
          setProfile({
            id: session.user.id,
            email: session.user.email || "",
            fullName: data?.full_name || session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email?.split("@")[0] || "Author",
            avatarUrl: data?.avatar_url || session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
            role: userRole,
            plan: userPlan,
          });
          setRole(userRole);
        } catch {
          setProfile({
            id: session.user.id,
            email: session.user.email || "",
            fullName: session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email?.split("@")[0] || "Author",
            avatarUrl: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
            role: "author",
            plan: "free",
          });
        }
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    if (typeof window !== "undefined") {
      localStorage.removeItem("bookloom_demo_user");
      document.cookie = "bookloom_demo_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    setUser(null);
    setProfile(null);
  };

  const signInDemo = () => {
    const demoProfile: UserProfile = {
      id: "demo-user-123",
      email: "riya@example.com",
      fullName: "Riya Sharma",
      role: "author",
      plan: "pro",
    };
    if (typeof window !== "undefined") {
      localStorage.setItem("bookloom_demo_user", JSON.stringify(demoProfile));
      document.cookie = "bookloom_demo_user=true; path=/; max-age=86400";
    }
    setProfile(demoProfile);
  };

  const isDemoMode = !user;

  return (
    <AuthContext.Provider value={{ user, profile, role, isLoading, isDemoMode, signOut, signInDemo }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
