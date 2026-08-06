import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Roles",
  description: "Join the team building the future of AI-powered ebook creation and self-publishing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
