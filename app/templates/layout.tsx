import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography & Layout Templates",
  description: "Curated typography themes, layout templates, and cover designs for every ebook genre.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
