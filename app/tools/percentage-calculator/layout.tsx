import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage Calculator - Free Online Tool | Calculatify",
  description:
    "Calculate percentages instantly for discounts, taxes, grades, and more. Free online percentage calculator with step-by-step explanations.",
  keywords: [
    "percentage calculator",
    "percent calculator",
    "calculate percentage",
    "online calculator",
    "discount calculator",
  ],
};

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
