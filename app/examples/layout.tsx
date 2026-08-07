import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Example Ebooks & Showcases",
  description: "Explore professionally styled ebooks, chapter outlines, and cover artwork generated with BookLoom AI.",
  alternates: {
    canonical: `${siteUrl}/examples`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
