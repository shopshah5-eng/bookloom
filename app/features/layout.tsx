import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Ebook Features & Publishing Capabilities",
  description: "Multi-model AI writing, cover generation, vector illustrations, and print-ready PDF/EPUB exports.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
