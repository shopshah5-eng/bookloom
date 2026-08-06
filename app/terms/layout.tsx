import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Author Rights | BookLoom",
  description: "Read BookLoom's terms of service establishing 100% author copyright, IP ownership, and subscription guidelines.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
