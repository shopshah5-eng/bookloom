import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";
import { AuthProvider } from "@/components/providers/auth-provider";
import { CookieBanner } from "@/components/ui/cookie-banner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bookloom-phi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BookLoom — AI-Powered Ebook Creator & Publishing Studio",
    template: "%s | BookLoom",
  },
  description:
    "Turn any prompt into a complete, beautifully designed ebook with AI writing, covers, illustrations, and print-ready PDF/EPUB exports.",
  keywords: [
    "AI Ebook Generator",
    "Ebook Publishing Studio",
    "AI Book Creator",
    "EPUB Creator",
    "PDF Book Generator",
    "Book Design AI",
  ],
  authors: [{ name: "BookLoom Team" }],
  creator: "BookLoom",
  publisher: "BookLoom Studio",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "BookLoom — AI-Powered Ebook Creator & Publishing Studio",
    description:
      "Turn any idea into a stunning, professional ebook with AI writing, covers, and multi-format exports.",
    siteName: "BookLoom",
    images: [
      {
        url: `${siteUrl}/images/laptop_bookloom_mockup.png`,
        width: 1200,
        height: 630,
        alt: "BookLoom AI Ebook Studio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BookLoom — AI-Powered Ebook Creator & Publishing Studio",
    description:
      "Turn any prompt into a complete, beautifully formatted ebook in minutes.",
    images: [`${siteUrl}/images/laptop_bookloom_mockup.png`],
    creator: "@bookloom_ai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/hero_books_display.png" as="image" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{ background: "#F8F5F0", color: "#1A1A1A" }} className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <AuthProvider>
          <ToastProvider>
            {children}
            <CookieBanner />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
