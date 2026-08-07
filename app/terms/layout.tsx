import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Terms of Service & Author Rights",
  description: "Read BookLoom's terms of service establishing 100% author copyright, IP ownership, and subscription guidelines.",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
