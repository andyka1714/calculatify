import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  Heart,
  DollarSign,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generateArticleSchema,
  serializeSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "5 Everyday Uses for Percentage Calculators | Calculatify",
  description:
    "Discover 5 practical ways to use percentage calculators in your daily life. From shopping discounts to health tracking, learn how this simple tool can save you time and money.",
  keywords: [
    "percentage calculator uses",
    "everyday percentage calculations",
    "how to use percentage calculator",
    "percentage in daily life",
    "practical percentage applications",
  ],
};

export default function EverydayUsesPercentagePage() {
  // 生成結構化資料
  const articleSchema = generateArticleSchema({
    title: "5 Everyday Uses for Percentage Calculators",
    description:
      "Discover 5 practical ways to use percentage calculators in your daily life. From shopping discounts to health tracking, learn how this simple tool can save you time and money.",
    url: "https://calculatify.com/blog/everyday-uses-percentage",
    datePublished: "2026-02-02",
    dateModified: "2026-02-02",
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
                <span className="text-slate-500">5 min read</span>
              </div>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                5 Everyday Uses for Percentage Calculators
              </h1>

              <p className="text-lg text-slate-600">
                Discover practical ways to use percentage calculators in your
                daily life. From shopping discounts to health tracking, learn
                how this simple tool can save you time and money.
              </p>
            </div>
          </section>

          {/* Article Content */}
          <article className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-slate max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  Percentage calculators are not just for math class. They are
                  powerful tools that can help you make better decisions in
                  everyday situations. Here are five practical ways you can use
                  a percentage calculator to improve your daily life.
                </p>

                {/* Use Case 1 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                      <ShoppingCart className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      1. Shopping Discounts and Sales
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    How many times have you stared at a &quot;30% off&quot; sign trying to
                    figure out the final price? A percentage calculator makes
                    this instant. Simply enter the original price and the
                    discount percentage to see exactly how much you will save
                    and what you will pay.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      <strong>Example:</strong> A $120 jacket with 25% off saves
                      you $30, making the final price $90. Quick math helps you
                      decide if the deal is worth it!
                    </p>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      2. Investment Returns
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Whether you are tracking stocks, savings accounts, or
                    cryptocurrency, understanding percentage gains and losses is
                    crucial. A percentage calculator helps you see exactly how
                    much your investments have grown or declined.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      <strong>Example:</strong> If you bought a stock at $50 and
                      it is now worth $65, you have gained 30%. This clarity
                      helps with investment decisions.
                    </p>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                      <GraduationCap className="h-5 w-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      3. Grade Calculations
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Students and teachers use percentage calculators constantly.
                    Converting raw scores to percentages helps track academic
                    progress. If you scored 34 out of 40 on a test, what is your
                    percentage? A calculator gives you the answer instantly:
                    85%.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      <strong>Tip:</strong> Many schools use weighted grades. If
                      homework is 30% of your grade and exams are 70%, a
                      percentage calculator helps compute your final score.
                    </p>
                  </div>
                </div>

                {/* Use Case 4 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      4. Health and Fitness Tracking
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Tracking weight loss, body fat percentage, or workout
                    progress often involves percentages. If your goal is to lose
                    20 pounds and you have lost 8, what percentage of your goal
                    have you achieved? A percentage calculator shows you are 40%
                    there!
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      <strong>Example:</strong> Reducing body fat from 25% to
                      20% is a 20% reduction in body fat percentage—motivating
                      data for your fitness journey.
                    </p>
                  </div>
                </div>

                {/* Use Case 5 */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <DollarSign className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      5. Budgeting and Expense Analysis
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Understanding where your money goes is easier with
                    percentages. If you earn $3,000 monthly and spend $900 on
                    rent, what percentage of your income goes to housing? A
                    calculator reveals it is 30%—helping you stick to the
                    recommended budget guidelines.
                  </p>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="text-sm text-slate-600">
                      <strong>Rule of thumb:</strong> Financial experts suggest
                      spending no more than 30% on housing, 15% on
                      transportation, and 10-15% on food. Percentage calculators
                      help you stay on track!
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl bg-indigo-600 p-8 text-center text-white">
                  <Calculator className="mx-auto mb-4 h-10 w-10" />
                  <h3 className="mb-3 text-xl font-bold">
                    Try Our Percentage Calculator
                  </h3>
                  <p className="mb-6 text-indigo-100">
                    Start using these practical applications today with our free
                    online percentage calculator.
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
                    Start Calculating Smarter
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Percentage calculators are versatile tools that go far
                    beyond basic math problems. Whether you are shopping,
                    investing, studying, working out, or budgeting,
                    understanding percentages helps you make informed decisions.
                    Keep our calculator bookmarked and use it whenever you need
                    quick, accurate percentage calculations.
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
                  href="/guides/math/percentage-calculation"
                  className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    The Complete Guide to Percentage Calculations
                  </h3>
                  <p className="text-sm text-slate-600">
                    Master percentage formulas with our comprehensive guide
                  </p>
                </Link>
                <Link
                  href="/blog/calculate-tips-mentally"
                  className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    How to Calculate Tips Without a Calculator
                  </h3>
                  <p className="text-sm text-slate-600">
                    Learn mental math tricks for quick tip calculations
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
