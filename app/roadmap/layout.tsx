import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap & Upcoming Features",
  description: "Explore planned features, upcoming releases, and public development goals for BookLoom.",
  alternates: {
    canonical: "https://bookloom-phi.vercel.app/roadmap",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
