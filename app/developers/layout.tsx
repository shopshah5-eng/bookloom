import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation & Developer Portal",
  description: "Integrate BookLoom's AI ebook creation engine into your applications with REST APIs, interactive playground, and webhooks.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
