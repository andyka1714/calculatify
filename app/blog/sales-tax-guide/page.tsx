import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Receipt,
  Calculator,
  ArrowRight,
  MapPin,
  AlertCircle,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generateArticleSchema,
  serializeSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Understanding Sales Tax: A Beginner's Guide | Calculatify",
  description:
    "Learn how sales tax works in the United States. Understand tax rates, how to calculate sales tax, and why prices vary by location.",
  keywords: [
    "sales tax guide",
    "how to calculate sales tax",
    "sales tax explained",
    "US sales tax",
    "sales tax rates",
    "beginner sales tax",
  ],
};

export default function SalesTaxGuidePage() {
  // 生成結構化資料
  const articleSchema = generateArticleSchema({
    title: "Understanding Sales Tax: A Beginner's Guide",
    description:
      "Learn how sales tax works in the United States. Understand tax rates, how to calculate sales tax, and why prices vary by location.",
    url: "https://calculatify.com/blog/sales-tax-guide",
    datePublished: "2026-02-04",
    dateModified: "2026-02-04",
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
                <span className="text-slate-500">7 min read</span>
              </div>

              <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
Understanding Sales Tax: A Beginner&apos;s Guide
              </h1>

              <p className="text-lg text-slate-600">
                Learn how sales tax works in the United States. Understand tax
                rates, how to calculate sales tax, and why prices vary by
                location.
              </p>
            </div>
          </section>

          {/* Article Content */}
          <article className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-slate max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  Have you ever noticed that the price on the tag is not what you
                  actually pay at the register? That difference is sales tax—a
                  percentage added to the purchase price of goods and services.
                  Understanding how sales tax works can help you budget better
                  and avoid surprises at checkout.
                </p>

                {/* What is Sales Tax */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                      <Receipt className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      What Is Sales Tax?
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Sales tax is a consumption tax imposed by the government on
                    the sale of goods and services. In the United States, it is
                    typically added at the point of purchase and collected by
                    retailers on behalf of the state and local governments.
                  </p>
                  <div className="rounded-lg bg-indigo-50 p-4">
                    <p className="text-sm text-indigo-800">
                      <strong>Simple Definition:</strong> Sales tax is a small
                      percentage (usually 4-10%) added to the price of most
                      things you buy. The store collects it and sends it to the
                      government.
                    </p>
                  </div>
                </div>

                {/* How It Works */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                      <Calculator className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      How to Calculate Sales Tax
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Calculating sales tax is straightforward once you know your
                    local tax rate. Here is the formula:
                  </p>
                  <div className="mb-4 rounded-lg bg-emerald-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-emerald-800">
                      Sales Tax Formula:
                    </p>
                    <p className="text-lg font-semibold text-emerald-700">
                      Item Price × Tax Rate = Sales Tax Amount
                    </p>
                    <p className="mt-2 text-sm text-emerald-600">
                      Then add the tax to the original price for your total.
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <p className="mb-2 text-sm font-semibold text-slate-700">
                      Example Calculation (8% tax rate):
                    </p>
                    <ol className="space-y-1 text-sm text-slate-600">
                      <li>• Item price: $50</li>
                      <li>• Tax rate: 8% (0.08)</li>
                      <li>• Sales tax: $50 × 0.08 = $4.00</li>
                      <li>• <strong>Total to pay: $54.00</strong></li>
                    </ol>
                  </div>
                </div>

                {/* Tax Rates by State */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Why Sales Tax Varies by Location
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Sales tax rates differ across the United States because they
                    are set by state and local governments. Five states have no
                    state sales tax at all: Alaska, Delaware, Montana, New
                    Hampshire, and Oregon.
                  </p>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            State Type
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            Examples
                          </th>
                          <th className="px-4 py-3 font-semibold text-slate-900">
                            Rate Range
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="px-4 py-3 text-slate-600">
                            No Sales Tax
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            OR, DE, MT, NH, AK
                          </td>
                          <td className="px-4 py-3 text-slate-600">0%</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">
                            Low Rate
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            CO, GA, HI, WY
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            2.9% - 4%
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">
                            Average Rate
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            FL, IL, MA, PA
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            6% - 7%
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-slate-600">
                            High Rate
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            CA, TN, MS, IN
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            7% - 10%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-slate-500">
                    *Note: Local jurisdictions may add additional taxes on top of
                    state rates, which is why you might see variations within the
                    same state.
                  </p>
                </div>

                {/* What Gets Taxed */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-slate-900">
                    What Gets Taxed (and What Does not)
                  </h2>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Not everything you buy has sales tax applied. Here are common
                    examples:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-emerald-50 p-4">
                      <h3 className="mb-3 flex items-center gap-2 font-semibold text-emerald-900">
                        <CheckCircle className="h-4 w-4" />
                        Usually Taxed
                      </h3>
                      <ul className="space-y-1 text-sm text-emerald-800">
                        <li>• Clothing and shoes</li>
                        <li>• Electronics</li>
                        <li>• Furniture</li>
                        <li>• Restaurant meals</li>
                        <li>• Books and magazines</li>
                        <li>• Toys and games</li>
                      </ul>
                    </div>
                    <div className="rounded-lg bg-amber-50 p-4">
                      <h3 className="mb-3 flex items-center gap-2 font-semibold text-amber-900">
                        <AlertCircle className="h-4 w-4" />
                        Often Exempt
                      </h3>
                      <ul className="space-y-1 text-sm text-amber-800">
                        <li>• Groceries (unprepared food)</li>
                        <li>• Prescription medications</li>
                        <li>• Medical devices</li>
                        <li>• Educational materials</li>
                        <li>• Some clothing (under thresholds)</li>
                        <li>• Services (in many states)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Online Shopping */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-slate-900">
                    Sales Tax and Online Shopping
                  </h2>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    The rules for online sales tax changed significantly in 2018.
                    Now, most online retailers charge sales tax based on your
                    delivery address, regardless of where the company is located.
                    This means you will generally pay the same tax shopping
                    online as you would in a local store.
                  </p>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Important:</strong> Always check the final checkout
                      price when shopping online. The tax is calculated based on
                      your shipping address and added before you complete your
                      purchase.
                    </p>
                  </div>
                </div>

                {/* Budgeting Tips */}
                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Budgeting for Sales Tax
                    </h2>
                  </div>
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    Sales tax can significantly impact your budget, especially
                    for large purchases. Here are some tips:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Add 8-10% to prices:</strong> When budgeting,
                        mentally add your local tax rate to item prices to get a
                        realistic total.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Use our calculator:</strong> For big purchases,
                        calculate the exact tax beforehand so there are no
                        surprises.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Consider tax-free days:</strong> Many states have
                        annual sales tax holidays for school supplies, clothing,
                        or emergency supplies.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-slate-600">
                        <strong>Shop in neighboring states:</strong> If you live
                        near a state border with lower or no sales tax, it might
                        be worth the trip for major purchases.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="rounded-xl bg-indigo-600 p-8 text-center text-white">
                  <Calculator className="mx-auto mb-4 h-10 w-10" />
                  <h3 className="mb-3 text-xl font-bold">
                    Calculate Sales Tax Instantly
                  </h3>
                  <p className="mb-6 text-indigo-100">
                    Use our percentage calculator to quickly figure out sales
                    tax for any purchase amount.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-indigo-50"
                    asChild
                  >
                    <Link href="/tools/percentage-calculator">
                      Open Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Conclusion */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    Sales Tax Simplified
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sales tax does not have to be confusing. Remember the basic
                    formula—price times tax rate—and always budget for that
                    extra percentage when shopping. With practice, you will
                    quickly estimate totals in your head and never be surprised
                    at the register again.
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
                  href="/guides/percentage-calculation"
                  className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 font-semibold text-slate-900">
                    The Complete Guide to Percentage Calculations
                  </h3>
                  <p className="text-sm text-slate-600">
                    Master percentage formulas for any calculation
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
                    Learn mental math tricks for tipping
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
