import { useAuth } from "@/components/providers/auth-provider";

export function useUser() {
  const { user, profile, role, isLoading, signOut } = useAuth();
  return {
    user,
    profile,
    role,
    isAdmin: role === "admin",
    isAuthor: role === "author" || role === "admin",
    isLoading,
    signOut,
  };
}
