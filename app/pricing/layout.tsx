import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description: "Choose the perfect plan for your ebook creation journey with Free, Creator, Pro, and Team tiers.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
