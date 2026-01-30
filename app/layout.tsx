import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calculatify - Free Online Calculators & Math Guides",
    template: "%s | Calculatify",
  },
  description:
    "Calculatify provides free online calculators and educational guides for everyday math. Learn percentage calculations, date math, age calculation and more. Accurate, fast, and easy to use.",
  keywords: [
    "calculator",
    "online calculator",
    "free calculator",
    "percentage calculator",
    "date calculator",
    "age calculator",
    "math guide",
    "calculation tutorial",
    "BMI calculator",
    "tip calculator",
  ],
  authors: [{ name: "Calculatify" }],
  creator: "Calculatify",
  publisher: "Calculatify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calculatify.com",
    siteName: "Calculatify",
    title: "Calculatify - Free Online Calculators & Math Guides",
    description:
      "Free online calculators and educational guides for everyday math. Learn the math behind the numbers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calculatify - Free Online Calculators & Math Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculatify - Free Online Calculators & Math Guides",
    description:
      "Free online calculators and educational guides for everyday math.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://calculatify.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans antialiased transition-colors duration-300 dark:bg-slate-900`}
      >
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#4F46E5',
              color: '#FFFFFF',
              border: '1px solid #4338CA',
            },
          }}
        />
      </body>
    </html>
  );
}
