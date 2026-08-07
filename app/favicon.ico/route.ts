import { NextResponse } from "next/server";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";
  return NextResponse.redirect(`${siteUrl}/icon.svg`, 308);
}
