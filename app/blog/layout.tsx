import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "AI Publishing & Writing Blog",
  description: "Insights, guides, and tutorials on AI ebook writing, EPUB formatting, and Kindle self-publishing.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
