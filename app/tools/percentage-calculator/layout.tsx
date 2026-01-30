import type { Metadata } from "next";
import {
  generateSoftwareSchema,
  generateFAQSchema,
  serializeSchema,
} from "@/lib/seo";

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

// FAQ 資料
const faqData = [
  {
    question: "How do I calculate 20% of a number?",
    answer:
      "Multiply the number by 0.20. For example, 20% of 50 = 50 × 0.20 = 10. You can also divide the number by 5 (since 20% = 1/5).",
  },
  {
    question: "Is this calculator free to use?",
    answer:
      "Yes, our percentage calculator is completely free to use. No registration required. We believe everyone should have access to accurate calculation tools.",
  },
  {
    question: "Can I use this for business calculations?",
    answer:
      "Absolutely! This calculator is suitable for personal, educational, and business use. Use it for calculating profit margins, tax amounts, discounts, and more.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "Our calculator provides results accurate to 2 decimal places, which is sufficient for most everyday calculations. For financial or scientific calculations requiring higher precision, consider using specialized software.",
  },
];

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 生成結構化資料
  const softwareSchema = generateSoftwareSchema({
    name: "Percentage Calculator",
    description:
      "Free online percentage calculator for discounts, taxes, grades, and more. Get instant results with step-by-step explanations.",
    url: "https://calculatify.com/tools/percentage-calculator",
    applicationCategory: "CalculatorApplication",
  });

  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* 結構化資料 - SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(softwareSchema),
        }}
      />
      {/* 結構化資料 - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(faqSchema),
        }}
      />
      {children}
    </>
  );
}
