import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support & Author Assistance | BookLoom",
  description: "Get in touch with BookLoom support for questions about AI ebook creation, billing, or enterprise options.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
