import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BookLoom Studio",
  description: "Empowering authors worldwide to write, format, and self-publish ebooks with artificial intelligence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
