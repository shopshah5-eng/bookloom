import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "AI Ebook Features & Publishing Capabilities",
  description: "Multi-model AI writing, cover generation, vector illustrations, and print-ready PDF/EPUB exports.",
  alternates: {
    canonical: `${siteUrl}/features`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
