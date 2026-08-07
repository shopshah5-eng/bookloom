import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog & Product Updates",
  description: "Discover the latest features, releases, and platform enhancements pushed to BookLoom.",
  alternates: {
    canonical: "https://bookloom-phi.vercel.app/changelog",
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
