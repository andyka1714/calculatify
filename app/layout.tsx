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
    default: "Calculatify - 免費線上計算器工具",
    template: "%s | Calculatify",
  },
  description:
    "Calculatify 提供各種實用的免費線上計算器，包括數學計算、時間計算、財務計算等。精確、快速、易用，支援手機與桌面裝置。",
  keywords: [
    "計算器",
    "線上計算",
    "免費計算器",
    "數學計算",
    "BMI計算",
    "貸款計算",
    "百分比計算",
    "日期計算",
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
    locale: "zh_TW",
    url: "https://calculatify.com",
    siteName: "Calculatify",
    title: "Calculatify - 免費線上計算器工具",
    description:
      "提供各種實用的免費線上計算器，精確、快速、易用。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calculatify - 免費線上計算器工具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculatify - 免費線上計算器工具",
    description:
      "提供各種實用的免費線上計算器，精確、快速、易用。",
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
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#ECFEFF] font-sans antialiased transition-colors duration-300 dark:bg-[#0C4A6E]`}
      >
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#164E63',
              color: '#ECFEFF',
              border: '1px solid #0891B2',
            },
          }}
        />
      </body>
    </html>
  );
}
