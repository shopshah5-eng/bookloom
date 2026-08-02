import { NextResponse, type NextRequest } from "next/server";

/**
 * Minimal pass-through middleware.
 * Auth session refresh is handled server-side in each route/layout
 * using the Supabase server client (lib/supabase/server.ts).
 *
 * The Supabase @supabase/ssr package relies on Node.js globals (__dirname)
 * that are unavailable in Vercel Edge Runtime. Removing createServerClient
 * from middleware eliminates the runtime crash entirely.
 */
export function middleware(request: NextRequest) {
  return NextResponse.next({
    request,
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
