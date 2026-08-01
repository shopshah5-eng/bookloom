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
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  role: "user",
  isLoading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>({
    id: "user-demo",
    email: "author@bookloom.ai",
    fullName: "Evelyn Vance",
    role: "author",
    plan: "pro",
  });
  const [role, setRole] = useState<UserRole>("author");
  const [isLoading, setIsLoading] = useState(false);

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

          if (data) {
            setProfile({
              id: data.id,
              email: data.email,
              fullName: data.full_name,
              avatarUrl: data.avatar_url,
              role: data.role as UserRole,
              plan: data.plan,
            });
            setRole(data.role as UserRole);
          }
        }
      } catch (err) {
        console.error("Auth session fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }

    getUserSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, role, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
