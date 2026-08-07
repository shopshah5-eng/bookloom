import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up — BookLoom",
  description: "Create a free BookLoom account and start generating beautiful AI ebooks in minutes.",
  alternates: {
    canonical: "https://bookloom-phi.vercel.app/auth/signup",
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
