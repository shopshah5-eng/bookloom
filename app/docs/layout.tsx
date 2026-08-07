import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Documentation & Publishing Guides",
  description: "Comprehensive guides, API tutorials, formatting specs, and publishing workflows for BookLoom AI.",
  alternates: {
    canonical: `${siteUrl}/docs`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
