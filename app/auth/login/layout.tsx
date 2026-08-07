import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in — BookLoom",
  description: "Sign in to your BookLoom account to access your AI ebook studio and projects.",
  alternates: {
    canonical: "https://bookloom-phi.vercel.app/auth/login",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
