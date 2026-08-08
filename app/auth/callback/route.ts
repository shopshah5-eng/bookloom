import { createClient } from "@/lib/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") || "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && data?.user) {
      // Ensure profile row exists in public.profiles
      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", data.user.id)
        .maybeSingle();

      if (!existingProfile) {
        const meta = data.user.user_metadata || {};
        await supabase.from("profiles").upsert({
          id: data.user.id,
          email: data.user.email || "",
          full_name: meta.full_name || meta.name || data.user.email?.split("@")[0] || "Author",
          avatar_url: meta.avatar_url || meta.picture || null,
          role: "author",
          plan: "free",
        });
      }
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  // Return the user to login with error redirect if exchange failed
  return NextResponse.redirect(new URL("/auth/login?error=auth-callback-failed", request.url));
}
