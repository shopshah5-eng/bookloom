import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description: "Choose the perfect plan for your ebook creation journey with Free, Creator, Pro, and Team tiers.",
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
