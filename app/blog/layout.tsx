import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Publishing & Writing Blog",
  description: "Insights, guides, and tutorials on AI ebook writing, EPUB formatting, and Kindle self-publishing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
