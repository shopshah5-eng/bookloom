import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BookLoom",
  description: "Learn how BookLoom protects your manuscript data, privacy rights, and AI processing security.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
