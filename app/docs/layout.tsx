import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation & Publishing Guides",
  description: "Comprehensive guides, API tutorials, formatting specs, and publishing workflows for BookLoom AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
