import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how BookLoom protects your manuscript data, privacy rights, and AI processing security.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
