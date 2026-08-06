import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example Ebooks & Showcases | BookLoom",
  description: "Explore professionally styled ebooks, chapter outlines, and cover artwork generated with BookLoom AI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
