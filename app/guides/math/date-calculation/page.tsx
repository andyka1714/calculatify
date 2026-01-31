import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  BookOpen,
  Lightbulb,
  Calendar,
  Clock,
  Globe,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  generateArticleSchema,
  generateFAQSchema,
  serializeSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "How to Calculate Dates and Time Differences Like a Pro | Calculatify",
  description:
    "Master date calculations with our comprehensive guide. Learn how to calculate days between dates, understand leap years, handle time zones, and solve real-world date problems.",
  keywords: [
    "date calculation",
    "days between dates",
    "date math",
    "time difference",
    "calculate dates",
    "leap year",
    "time zones",
  ],
};

// FAQ 資料
const faqData = [
  {
    question: "How do I calculate the number of days between two dates?",
    answer:
      "Subtract the earlier date from the later date. For example, from January 1 to January 10 is 9 days. You can also use our Date Calculator for instant results with precision.",
  },
  {
    question: "What is a leap year and how does it affect date calculations?",
    answer:
      "A leap year has 366 days instead of 365, with February having 29 days. Leap years occur every 4 years (except for years divisible by 100 but not by 400). This adds an extra day every 4 years to keep our calendar aligned with Earth's orbit.",
  },
  {
    question: "How do time zones affect date calculations?",
    answer:
      "Time zones can cause dates to differ by a day when crossing the International Date Line or during daylight saving time changes. Always specify time zones when calculating dates across different regions.",
  },
  {
    question: "What is Unix timestamp and why is it useful?",
    answer:
      "Unix timestamp is the number of seconds since January 1, 1970. It's a universal way to represent time that avoids timezone and formatting issues, making it essential for programming and data exchange.",
  },
  {
    question: "How do I calculate working days excluding weekends?",
    answer:
      "Count the total days between dates, then subtract weekends (Saturdays and Sundays). For example, a 10-day span typically has 4 weekend days, leaving 6 working days.",
  },
];

export default function DateCalculationGuidePage() {
  // 生成結構化資料
  const articleSchema = generateArticleSchema({
    title: "How to Calculate Dates and Time Differences Like a Pro",
    description:
      "Master date calculations with our comprehensive guide. Learn how to calculate days between dates, understand leap years, handle time zones, and solve real-world date problems.",
    url: "https://calculatify.com/guides/date-calculation",
    datePublished: "2026-02-01",
    dateModified: "2026-02-01",
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
                <span className="text-slate-500">12 min read</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                How to Calculate Dates and Time Differences Like a Pro
              </h1>

              <p className="text-xl text-slate-600">
                Master date calculations with our comprehensive guide. Learn how
                to calculate days between dates, understand leap years, handle
                time zones, and solve real-world date problems.
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
                  Date calculations are essential in our daily lives, from
                  planning vacations and tracking project deadlines to
                  calculating ages and understanding historical events.
                  However, calculating dates accurately can be surprisingly
                  complex due to factors like leap years, varying month lengths,
                  and time zone differences.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  In this comprehensive guide, we will explore the fundamental
                  concepts behind date calculations, learn practical methods for
                  computing time differences, and understand advanced topics
                  like Unix timestamps and timezone handling. By the end, you
                  will be able to tackle any date calculation challenge with
                  confidence.
                </p>
              </section>

              {/* Basic Concepts */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Understanding the Basics
                </h2>

                <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    The Gregorian Calendar Structure
                  </h3>
                  <p className="mb-4 text-slate-600">
                    Our modern calendar, the Gregorian calendar, has been in use
                    since 1582 and follows these rules:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-slate-600">
                    <li>
                      <strong>Months vary in length:</strong> 31 days (Jan, Mar,
                      May, Jul, Aug, Oct, Dec), 30 days (Apr, Jun, Sep, Nov), and
                      28 or 29 days for February
                    </li>
                    <li>
                      <strong>Weeks are consistent:</strong> Exactly 7 days per
                      week, which does not align evenly with months or years
                    </li>
                    <li>
                      <strong>Years have 365 days:</strong> Except leap years
                      which have 366 days
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-indigo-50 p-6">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-6 w-6 flex-shrink-0 text-indigo-600" />
                    <div>
                      <h3 className="mb-2 font-semibold text-indigo-900">
                        Key Concept
                      </h3>
                      <p className="text-indigo-800">
                        Calculating dates requires understanding that months are
                        not uniform. A month can have 28, 29, 30, or 31 days,
                        making simple multiplication (30 days × months)
                        inaccurate for precise calculations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Calculating Days Between Dates */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Calculating Days Between Two Dates
                </h2>

                <div className="mb-8 space-y-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      Method 1: Manual Calculation
                    </h3>
                    <p className="mb-4 text-slate-600">
                      To calculate days between dates manually:
                    </p>
                    <ol className="ml-6 list-decimal space-y-2 text-slate-600">
                      <li>
                        Calculate remaining days in the starting month
                      </li>
                      <li>
                        Add full months in between (using their actual day
                        counts)
                      </li>
                      <li>
                        Add days in the ending month up to the target date
                      </li>
                      <li>Account for any leap years if February is involved</li>
                    </ol>
                    <div className="mt-4 rounded-lg bg-slate-100 p-4">
                      <p className="text-sm text-slate-600">
                        <strong>Example:</strong> Days from January 15 to March
                        10
                        <br />• January: 31 - 15 = 16 days remaining
                        <br />• February: 28 days (29 in leap years)
                        <br />• March: 10 days
                        <br />• Total: 16 + 28 + 10 = 54 days
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">
                      Method 2: Using Julian Day Numbers
                    </h3>
                    <p className="mb-4 text-slate-600">
                      Julian Day Numbers assign a unique number to each date,
                      making calculations simple:
                    </p>
                    <div className="rounded-lg bg-slate-100 p-4">
                      <code className="text-lg font-semibold text-indigo-600">
                        Days Between = Julian Day (Date 2) - Julian Day (Date 1)
                      </code>
                    </div>
                    <p className="mt-4 text-slate-600">
                      This method is commonly used in astronomy and programming
                      because it eliminates month and year complexity.
                    </p>
                  </div>
                </div>
              </section>

              {/* Leap Years */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Understanding Leap Years
                </h2>

                <p className="mb-6 text-slate-600 leading-relaxed">
                  Leap years are essential for keeping our calendar synchronized
                  with Earth&apos;s orbit around the sun. A solar year is
                  approximately 365.2422 days, not exactly 365. Without leap
                  years, our calendar would drift by about 24 days every 100
                  years.
                </p>

                <div className="mb-6 overflow-hidden rounded-lg border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Rule
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Condition
                        </th>
                        <th className="px-4 py-3 font-semibold text-slate-900">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          Standard Rule
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Divisible by 4
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          2020, 2024, 2028
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          Century Exception
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Divisible by 100
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          1900 (NOT a leap year)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-slate-600">
                          400-Year Rule
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Divisible by 400
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          2000 (IS a leap year)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-600" />
                    <div>
                      <h3 className="mb-1 font-semibold text-amber-900">
                        Important Note
                      </h3>
                      <p className="text-sm text-amber-800">
                        When calculating dates that span February, always check
                        if a leap year is involved. This adds one extra day to
                        your calculation, which can be critical for contract
                        deadlines, interest calculations, or age computations.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Unix Timestamp */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Unix Timestamps: The Programmer&apos;s Standard
                </h2>

                <p className="mb-6 text-slate-600 leading-relaxed">
                  Unix timestamps represent time as the number of seconds since
                  January 1, 1970, 00:00:00 UTC (the &quot;Unix epoch&quot;). This system
                  simplifies date calculations by converting dates into simple
                  integers.
                </p>

                <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">
                    Why Use Unix Timestamps?
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-slate-50 p-4">
                      <Clock className="mb-2 h-6 w-6 text-indigo-600" />
                      <h4 className="mb-2 font-semibold text-slate-900">
                        Timezone Independent
                      </h4>
                      <p className="text-sm text-slate-600">
                        Timestamps are always in UTC, eliminating confusion
                        across time zones.
                      </p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-4">
                      <Calculator className="mb-2 h-6 w-6 text-indigo-600" />
                      <h4 className="mb-2 font-semibold text-slate-900">
                        Easy Math
                      </h4>
                      <p className="text-sm text-slate-600">
                        Simple subtraction and addition work perfectly with
                        integer timestamps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-100 p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Example Calculation:</strong>
                    <br />
                    Current timestamp: 1,700,000,000 seconds since epoch
                    <br />
                    One week = 7 × 24 × 60 × 60 = 604,800 seconds
                    <br />
                    Timestamp one week ago: 1,700,000,000 - 604,800 =
                    1,699,395,200
                  </p>
                </div>
              </section>

              {/* Time Zones */}
              <section className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Handling Time Zones
                </h2>

                <p className="mb-6 text-slate-600 leading-relaxed">
                  Time zones add complexity to date calculations, especially
                  when dealing with international communications, travel
                  planning, or global business operations.
                </p>

                <div className="mb-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-slate-200 p-5">
                    <Globe className="mb-3 h-6 w-6 text-indigo-600" />
                    <h3 className="mb-2 font-semibold text-slate-900">
                      International Date Line
                    </h3>
                    <p className="text-sm text-slate-600">
                      Crossing this line can add or subtract a full day from
                      your calculation. Traveling west across it adds a day;
                      traveling east subtracts one.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <Calendar className="mb-3 h-6 w-6 text-indigo-600" />
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Daylight Saving Time
                    </h3>
                    <p className="text-sm text-slate-600">
                      Many regions adjust clocks twice yearly, creating 23-hour
                      and 25-hour days that affect precise time calculations.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-indigo-50 p-6">
                  <h3 className="mb-3 font-semibold text-indigo-900">
                    Best Practice
                  </h3>
                  <p className="text-indigo-800">
                    Always store and calculate dates in UTC internally, then
                    convert to local time zones for display. This ensures
                    consistency and prevents daylight saving time errors.
                  </p>
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
                      Project Management
                    </h3>
                    <p className="text-sm text-slate-600">
                      Calculate exact working days for project timelines,
                      accounting for weekends and holidays to set realistic
                      deadlines.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Financial Planning
                    </h3>
                    <p className="text-sm text-slate-600">
                      Determine interest accrual periods, loan durations, and
                      investment timeframes with precision for accurate
                      financial calculations.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Age Calculations
                    </h3>
                    <p className="text-sm text-slate-600">
                      Calculate exact ages in years, months, and days for legal
                      documents, medical records, or milestone celebrations.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-5">
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Travel Planning
                    </h3>
                    <p className="text-sm text-slate-600">
                      Plan trips across time zones, calculate jet lag recovery
                      time, and determine visa validity periods accurately.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA to Calculator */}
              <section className="rounded-xl bg-indigo-600 p-8 text-center text-white">
                <h2 className="mb-4 text-2xl font-bold">
                  Try Our Date Calculator
                </h2>
                <p className="mb-6 text-indigo-100">
                  Calculate days between dates instantly with our free online
                  date calculator. Support for working days, time zones, and
                  more.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-indigo-50"
                  asChild
                >
                  <Link href="/tools/math/date-calculator">
                    <Calendar className="mr-2 h-5 w-5" />
                    Try Date Calculator
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
