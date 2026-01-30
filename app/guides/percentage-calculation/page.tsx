import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generateArticleSchema,
  generateFAQSchema,
  serializeSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "The Complete Guide to Percentage Calculations | Calculatify",
  description:
    "Master percentage calculations with our comprehensive guide. Learn the three essential formulas, real-world applications, and common mistakes to avoid.",
  keywords: [
    "percentage calculation",
    "percentage guide",
    "how to calculate percentage",
    "percentage formulas",
    "percentage tutorial",
  ],
};

// FAQ 資料
const faqData = [
  {
    question: "How do I calculate 20% of a number?",
    answer:
      "Multiply the number by 0.20. For example, 20% of 50 is calculated as: 50 × 0.20 = 10.",
  },
  {
    question: "What is the difference between percentage and percent?",
    answer:
      '&quot;Percent&quot; is the symbol (%) and is used with a number (e.g., 50 percent). "Percentage" refers to the result or concept itself (e.g., a high percentage of students).',
  },
  {
    question: "How do I calculate percentage increase?",
    answer:
      "Subtract the original value from the new value, divide by the original value, and multiply by 100. Formula: ((New - Old) ÷ Old) × 100",
  },
  {
    question: "Can percentages be over 100%?",
    answer:
      "Yes! Percentages over 100% represent values larger than the original. For example, 200% means twice the original amount, and 150% increase means the value has grown by 1.5 times.",
  },
  {
    question: "How do I convert a fraction to a percentage?",
    answer:
      "Divide the numerator by the denominator, then multiply by 100. For example, 3/4 as a percentage is: (3 ÷ 4) × 100 = 75%.",
  },
];

export default function PercentageGuidePage() {
  // 生成結構化資料
  const articleSchema = generateArticleSchema({
    title: "The Complete Guide to Percentage Calculations",
    description:
      "Master percentage calculations with our comprehensive guide. Learn the three essential formulas, real-world applications, and common mistakes to avoid.",
    url: "https://calculatify.com/guides/percentage-calculation",
    datePublished: "2026-01-30",
    dateModified: "2026-01-30",
  });

  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* 結構化資料 - Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(articleSchema),
        }}
      />
      {/* 結構化資料 - FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(faqSchema),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 bg-white">
          {/* Hero Section */}
          <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/guides"
                className="mb-6 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Guides
              </Link>

              <div className="mb-4 flex items-center gap-2 text-sm text-indigo-600">
                <BookOpen className="h-4 w-4" />
                <span className="font-medium">Math Guide</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">10 min read</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                The Complete Guide to Percentage Calculations
              </h1>

              <p className="text-xl text-slate-600">
                Master percentage calculations with our comprehensive guide.
                Learn the three essential formulas, real-world applications, and
                common mistakes to avoid.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <article className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  Introduction
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  Percentages are everywhere in our daily lives. From
                  calculating discounts while shopping to understanding interest
                  rates on loans, percentages play a crucial role in making
                  informed decisions. Whether you are a student trying to
                  calculate your grades, a shopper looking for the best deals,
                  or a professional working with financial data, understanding
                  how to calculate percentages accurately is an essential skill.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  In this comprehensive guide, we will walk you through
                  everything you need to know about percentage calculations. By
                  the end, you will be able to solve any percentage problem with
                  confidence and understand the underlying principles that make
                  these calculations work.
                </p>
              </section>

              {/* What is Percentage */}
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  What is a Percentage?
                </h2>
                <p className="mb-4 text-slate-600 leading-relaxed">
                  A percentage is a way of expressing a number as a fraction of
                  100. The word &quot;percent&quot; comes from the Latin
                  &quot;per centum,&quot; which means &quot;by the
                  hundred.&quot; When we say 50&percnt;, we mean 50 out of 100,
                  or 50/100, which equals 0.5 in decimal form.
                </p>
                <div className="my-6 rounded-lg bg-indigo-50 p-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                    <div>
                      <h3 className="mb-2 font-semibold text-indigo-900">
                        Key Concept
                      </h3>
                      <p className="text-indigo-800">
                        Percentages provide a standardized way to compare
                        quantities, making it easier to understand proportions
                        and ratios in real-world contexts. They allow us to
                        express parts of a whole in a format that is universally
                        understood.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Three Essential Formulas */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  The Three Essential Percentage Formulas
                </h2>

                <div className="mb-8 space-y-6">
                  {/* Formula 1 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      Type 1: Finding the Percentage (What is X% of Y?)
                    </h3>
                    <div className="mb-4 rounded-lg bg-slate-100 p-4">
                      <code className="text-lg font-semibold text-indigo-600">
                        Result = (Percentage ÷ 100) × Base Value
                      </code>
                    </div>
                    <p className="mb-3 text-slate-600">
                      <strong>Example:</strong> What is 20% of 50?
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-slate-600">
                      <li>Convert 20% to decimal: 20 ÷ 100 = 0.20</li>
                      <li>Multiply by the base value: 0.20 × 50 = 10</li>
                      <li>Answer: 20% of 50 is 10</li>
                    </ul>
                  </div>

                  {/* Formula 2 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      Type 2: Finding the Base (X is Y% of what number?)
                    </h3>
                    <div className="mb-4 rounded-lg bg-slate-100 p-4">
                      <code className="text-lg font-semibold text-indigo-600">
                        Base Value = Part ÷ (Percentage ÷ 100)
                      </code>
                    </div>
                    <p className="mb-3 text-slate-600">
                      <strong>Example:</strong> 10 is 20% of what number?
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-slate-600">
                      <li>Convert 20% to decimal: 20 ÷ 100 = 0.20</li>
                      <li>Divide the part by the decimal: 10 ÷ 0.20 = 50</li>
                      <li>Answer: 10 is 20% of 50</li>
                    </ul>
                  </div>

                  {/* Formula 3 */}
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      Type 3: Finding the Rate (What percentage is X of Y?)
                    </h3>
                    <div className="mb-4 rounded-lg bg-slate-100 p-4">
                      <code className="text-lg font-semibold text-indigo-600">
                        Percentage = (Part ÷ Base Value) × 100
                      </code>
                    </div>
                    <p className="mb-3 text-slate-600">
                      <strong>Example:</strong> What percentage is 10 of 50?
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-slate-600">
                      <li>Divide the part by the base: 10 ÷ 50 = 0.20</li>
                      <li>Multiply by 100: 0.20 × 100 = 20%</li>
                      <li>Answer: 10 is 20% of 50</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Real-World Applications */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Real-World Applications
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Shopping Discounts
                    </h3>
                    <p className="text-sm text-slate-600">
                      When you see a &quot;30% off&quot; sale, you can calculate
                      exactly how much you will save. A $80 item with 30% off
                      saves you $24, making the final price $56.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Restaurant Tips
                    </h3>
                    <p className="text-sm text-slate-600">
                      Calculate tips easily. For a 15% tip on a $60 bill: 0.15 ×
                      60 = $9 tip. For 20%: 0.20 × 60 = $12 tip.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Sales Tax
                    </h3>
                    <p className="text-sm text-slate-600">
                      If your local sales tax is 8%, a $100 purchase will have
                      $8 in tax, making the total $108. This helps you budget
                      accurately.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Academic Grades
                    </h3>
                    <p className="text-sm text-slate-600">
                      If you score 45 out of 50 on a test, your percentage is
                      (45 ÷ 50) × 100 = 90%. This clearly shows your performance
                      level.
                    </p>
                  </div>
                </div>
              </section>

              {/* Common Formulas Table */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Quick Reference: Common Percentage Formulas
                </h2>

                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Calculation Type
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Formula
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          Find X% of Y
                        </td>
                        <td className="px-4 py-3 font-mono text-indigo-600">
                          (X ÷ 100) × Y
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          20% of 50 = 10
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          X is what % of Y
                        </td>
                        <td className="px-4 py-3 font-mono text-indigo-600">
                          (X ÷ Y) × 100
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          10 is 20% of 50
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          X is Y% of what
                        </td>
                        <td className="px-4 py-3 font-mono text-indigo-600">
                          X ÷ (Y ÷ 100)
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          10 is 20% of 50
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          Percentage increase
                        </td>
                        <td className="px-4 py-3 font-mono text-indigo-600">
                          ((New - Old) ÷ Old) × 100
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          50 to 60 = 20% increase
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          Percentage decrease
                        </td>
                        <td className="px-4 py-3 font-mono text-indigo-600">
                          ((Old - New) ÷ Old) × 100
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          60 to 50 = 16.67% decrease
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Common Mistakes to Avoid
                </h2>

                <div className="space-y-4">
                  <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-amber-900">
                        Forgetting to convert percentages to decimals
                      </h3>
                      <p className="text-sm text-amber-800">
                        Always divide by 100 first. 20% is 0.20, not 20. Using
                        20 instead of 0.20 will give you results that are 100
                        times too large.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-amber-900">
                        Mixing up the part and the whole
                      </h3>
                      <p className="text-sm text-amber-800">
                        When finding what percentage X is of Y, make sure X is
                        the part and Y is the whole. Reversing them gives
                        incorrect results.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-amber-900">
                        Adding percentages incorrectly
                      </h3>
                      <p className="text-sm text-amber-900">
                        A 20% increase followed by a 20% decrease does not
                        return you to the original value. Start with 100: +20% =
                        120, then -20% = 96, not 100.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Advanced Tips */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Advanced Tips
                </h2>

                <div className="rounded-lg bg-emerald-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-emerald-600" />
                    <div>
                      <h3 className="mb-3 font-semibold text-emerald-900">
                        Mental Math Shortcuts
                      </h3>
                      <ul className="space-y-2 text-emerald-800">
                        <li>
                          <strong>10%:</strong> Move the decimal point one place
                          left (10% of 50 = 5)
                        </li>
                        <li>
                          <strong>25%:</strong> Divide by 4 (25% of 80 = 20)
                        </li>
                        <li>
                          <strong>50%:</strong> Divide by 2 (50% of 60 = 30)
                        </li>
                        <li>
                          <strong>75%:</strong> Divide by 4 and multiply by 3
                          (75% of 40 = 30)
                        </li>
                        <li>
                          <strong>5%:</strong> Find 10% and divide by 2 (5% of
                          100 = 5)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA to Calculator */}
              <section className="rounded-xl bg-indigo-600 p-8 text-center text-white">
                <h2 className="mb-4 text-2xl font-bold">
                  Try Our Percentage Calculator
                </h2>
                <p className="mb-6 text-indigo-100">
                  Verify your calculations instantly with our free online
                  percentage calculator.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                  asChild
                >
                  <Link href="/tools/percentage-calculator">
                    <Calculator className="mr-2 h-5 w-5" />
                    Try Percentage Calculator
                  </Link>
                </Button>
              </section>

              {/* FAQ Section */}
              <section className="mt-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-slate-200 p-5"
                    >
                      <h3 className="mb-2 font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
