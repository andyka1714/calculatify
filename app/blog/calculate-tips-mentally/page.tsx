import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Calculator,
  ArrowRight,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generateArticleSchema,
  serializeSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "How to Calculate Tips Without a Calculator | Calculatify",
  description:
    "Learn simple mental math tricks to calculate restaurant tips quickly without a calculator. Master 15%, 18%, and 20% tip calculations in seconds.",
  keywords: [
    "calculate tips mentally",
    "mental math for tips",
    "how to calculate tip",
    "tip calculation tricks",
    "restaurant tipping guide",
    "quick tip calculation",
  ],
};

export default function CalculateTipsMentallyPage() {
  // 生成結構化資料
  const articleSchema = generateArticleSchema({
    title: "How to Calculate Tips Without a Calculator",
    description:
      "Learn simple mental math tricks to calculate restaurant tips quickly without a calculator. Master 15%, 18%, and 20% tip calculations in seconds.",
    url: "https://calculatify.com/blog/calculate-tips-mentally",
    datePublished: "2026-02-03",
    dateModified: "2026-02-03",
  });

  return (
    <>
      {/* 結構化資料 - Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeSchema(articleSchema),
        }}
      />

      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 bg-white">
          {/* Hero Section */}
          <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              <div className="mb-4 flex items-center gap-2 text-sm text-indigo-600">
                <span className="font-medium">Blog</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">4 min read</span>
              </div>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How to Calculate Tips Without a Calculator
              </h1>

              <p className="text-lg text-slate-600">
                Learn simple mental math tricks to calculate restaurant tips
                quickly without a calculator. Master 15%, 18%, and 20% tip
                calculations in seconds.
              </p>
            </div>
          </section>

          {/* Article Content */}
          <article className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-slate max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  We have all been there: the check arrives at the restaurant
                  table, and you need to calculate a tip quickly. Your phone is
                  in your pocket, but you want to look smooth and confident. The
                  good news? With a few simple mental math tricks, you can
                  calculate any tip percentage in seconds—no calculator needed.
                </p>

                {/* The Foundation */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                      <Lightbulb className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      The Foundation: 10% is Your Best Friend
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Everything starts with finding 10% of the bill. Here is the
                    secret: 10% of any number is just that number with the
                    decimal point moved one place to the left.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-slate-700">
                      Examples:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• 10% of $45.00 = $4.50</li>
                      <li>• 10% of $82.50 = $8.25</li>
                      <li>• 10% of $127.00 = $12.70</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    Once you know 10%, you can calculate any other percentage
                    through simple addition or multiplication.
                  </p>
                </div>

                {/* Method 1 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">
                        15%
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Calculating 15% Tips
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    15% is the standard tip for good service. Here is the trick:
                    15% = 10% + 5%. And 5% is just half of 10%.
                  </p>
                  <div className="rounded-lg bg-emerald-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-emerald-800">
                      Step-by-Step for a $60 bill:
                    </p>
                    <ol className="space-y-1 text-sm text-emerald-700">
                      <li>1. Find 10%: $6.00</li>
                      <li>2. Find 5% (half of 10%): $3.00</li>
                      <li>3. Add them: $6.00 + $3.00 = $9.00</li>
                      <li>4. <strong>15% tip = $9.00</strong></li>
                    </ol>
                  </div>
                </div>

                {/* Method 2 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <span className="text-lg font-bold text-amber-600">
                        20%
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Calculating 20% Tips (The Easy One)
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    20% is becoming the new standard for excellent service, and
                    it is the easiest to calculate: just double the 10% amount.
                  </p>
                  <div className="rounded-lg bg-amber-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-amber-800">
                      Examples:
                    </p>
                    <ul className="space-y-1 text-sm text-amber-700">
                      <li>• $40 bill: 10% = $4, so 20% = $8</li>
                      <li>• $75 bill: 10% = $7.50, so 20% = $15</li>
                      <li>• $120 bill: 10% = $12, so 20% = $24</li>
                    </ul>
                  </div>
                </div>

                {/* Method 3 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-lg font-bold text-blue-600">
                        18%
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Calculating 18% Tips
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    18% is a happy medium between 15% and 20%. The trick: 18% =
                    20% - 2%. Find 20% first, then subtract 10% of the 20%
                    amount (which is 2% of the original).
                  </p>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-blue-800">
                      For a $50 bill:
                    </p>
                    <ol className="space-y-1 text-sm text-blue-700">
                      <li>1. Find 20%: $10</li>
                      <li>2. Find 10% of $10 (which is 2% of $50): $1</li>
                      <li>3. Subtract: $10 - $1 = $9</li>
                      <li>4. <strong>18% tip = $9.00</strong></li>
                    </ol>
                  </div>
                </div>

                {/* Quick Reference */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <Brain className="h-5 w-5 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Quick Reference Chart
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Memorize these common bill amounts for instant tip
                    calculations:
                  </p>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            Bill Amount
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            15% Tip
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            20% Tip
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$20</td>
                          <td className="px-4 py-3 text-slate-600">$3.00</td>
                          <td className="px-4 py-3 text-slate-600">$4.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$30</td>
                          <td className="px-4 py-3 text-slate-600">$4.50</td>
                          <td className="px-4 py-3 text-slate-600">$6.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$40</td>
                          <td className="px-4 py-3 text-slate-600">$6.00</td>
                          <td className="px-4 py-3 text-slate-600">$8.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$50</td>
                          <td className="px-4 py-3 text-slate-600">$7.50</td>
                          <td className="px-4 py-3 text-slate-600">$10.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$60</td>
                          <td className="px-4 py-3 text-slate-600">$9.00</td>
                          <td className="px-4 py-3 text-slate-600">$12.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$80</td>
                          <td className="px-4 py-3 text-slate-600">$12.00</td>
                          <td className="px-4 py-3 text-slate-600">$16.00</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">$100</td>
                          <td className="px-4 py-3 text-slate-600">$15.00</td>
                          <td className="px-4 py-3 text-slate-600">$20.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-slate-900">
                    Pro Tips for Tipping
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Round up for easier math:</strong> If the bill is
                        $47, round to $50 in your head. 20% of $50 is $10, which
                        is close enough and much easier to calculate.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Tax is not included:</strong> Calculate tip on
                        the pre-tax amount unless you want to be extra generous.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Splitting the bill?</strong> Calculate the total
                        tip first, then divide by the number of people.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>When in doubt, be generous:</strong> Good
                        service deserves recognition. If the math is close,
                        round up.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="rounded-xl bg-indigo-600 p-8 text-center text-white">
                  <Calculator className="mx-auto mb-4 h-10 w-10" />
                  <h3 className="mb-3 text-xl font-bold">
                    Want to Double-Check?
                  </h3>
                  <p className="mb-6 text-indigo-100">
                    Use our free percentage calculator to verify your mental
                    math calculations.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-50"
                    asChild
                  >
                    <Link href="/tools/math/percentage-calculator">
                      Open Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Conclusion */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    Practice Makes Perfect
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Like any skill, mental math gets easier with practice. Try
                    calculating tips in your head next time you are at a
                    restaurant, then verify with your phone. With these tricks,
                    you will be calculating tips like a pro in no time—and
                    impressing your dining companions while you are at it!
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-xl font-bold text-slate-900">
                Related Articles
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/blog/everyday-uses-percentage"
                  className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    5 Everyday Uses for Percentage Calculators
                  </h3>
                  <p className="text-sm text-slate-600">
                    Discover practical ways to use percentages daily
                  </p>
                </Link>
                <Link
                  href="/tools/tip-calculator"
                  className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    Tip Calculator
                  </h3>
                  <p className="text-sm text-slate-600">
                    Split bills and calculate tips with ease
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
