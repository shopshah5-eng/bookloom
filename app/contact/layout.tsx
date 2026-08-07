import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  title: "Contact Support & Author Assistance",
  description: "Get in touch with BookLoom support for questions about AI ebook creation, billing, or enterprise options.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
