import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "About BookLoom Studio",
  description: "Empowering authors worldwide to write, format, and self-publish ebooks with artificial intelligence.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
