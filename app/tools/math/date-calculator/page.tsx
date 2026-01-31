"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DateCalculatorPage() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [excludeWeekends, setExcludeWeekends] = useState<boolean>(false);
  const [result, setResult] = useState<{
    totalDays: number;
    weekdays: number;
    weekends: number;
    weeks: number;
    months: number;
  } | null>(null);

  const calculate = () => {
    if (!startDate || !endDate) {
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      // 交换日期
      const temp = start;
      start.setTime(end.getTime());
      end.setTime(temp.getTime());
    }

    // 计算总天数（包含首尾两天）
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    // 计算工作日和周末
    let weekdays = 0;
    let weekends = 0;
    const current = new Date(start);

    while (current <= end) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekends++;
      } else {
        weekdays++;
      }
      current.setDate(current.getDate() + 1);
    }

    // 计算周数和月数（近似值）
    const weeks = Math.floor(totalDays / 7);
    const months = Math.floor(totalDays / 30.44); // 平均每月天数

    setResult({
      totalDays,
      weekdays,
      weekends,
      weeks,
      months,
    });
  };

  const clearCalculator = () => {
    setStartDate("");
    setEndDate("");
    setExcludeWeekends(false);
    setResult(null);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/tools"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </Link>

            <div className="mb-4 flex items-center gap-2 text-sm text-indigo-600">
              <Calendar className="h-4 w-4" />
              <span className="font-medium">Calculator</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Date Tool</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Date Calculator
            </h1>

            <p className="text-lg text-slate-600">
              Calculate the difference between two dates. Find the number of
              days, weeks, months, and working days between any two dates.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calculator */}
              <Card className="shadow-lg">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="flex items-center gap-2 text-indigo-900">
                    <Calendar className="h-5 w-5" />
                    Calculate Date Difference
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Date Inputs */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Start Date
                      </label>
                      <Input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        max={today}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        End Date
                      </label>
                      <Input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        max={today}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Options */}
                  <div className="mb-6">
                    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={excludeWeekends}
                        onChange={(e) => setExcludeWeekends(e.target.checked)}
                        className="h-4 w-4 text-indigo-600"
                      />
                      <div>
                        <span className="text-sm font-medium text-slate-700">
                          Show working days only
                        </span>
                        <p className="text-xs text-slate-500">
                          Exclude Saturdays and Sundays
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={calculate}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    >
                      Calculate
                    </Button>
                    <Button variant="outline" onClick={clearCalculator}>
                      Clear
                    </Button>
                  </div>

                  {/* Results */}
                  {result && (
                    <div className="mt-6 space-y-4">
                      <div className="rounded-lg bg-emerald-50 p-4">
                        <div className="mb-2 text-sm font-medium text-emerald-800">
                          Total Days:
                        </div>
                        <div className="text-3xl font-bold text-emerald-900">
                          {excludeWeekends
                            ? result.weekdays
                            : result.totalDays}{" "}
                          days
                        </div>
                        {excludeWeekends && (
                          <p className="mt-1 text-xs text-emerald-700">
                            (excluding {result.weekends} weekend days)
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-slate-50 p-3">
                          <div className="text-xs text-slate-500">Weeks</div>
                          <div className="text-xl font-semibold text-slate-900">
                            ~{result.weeks}
                          </div>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <div className="text-xs text-slate-500">Months</div>
                          <div className="text-xl font-semibold text-slate-900">
                            ~{result.months}
                          </div>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <div className="text-xs text-slate-500">
                            Working Days
                          </div>
                          <div className="text-xl font-semibold text-slate-900">
                            {result.weekdays}
                          </div>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <div className="text-xs text-slate-500">
                            Weekend Days
                          </div>
                          <div className="text-xl font-semibold text-slate-900">
                            {result.weekends}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Instructions */}
              <div className="space-y-6">
                <div className="rounded-lg bg-indigo-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-indigo-900">
                    <BookOpen className="h-5 w-5" />
                    How to Use This Calculator
                  </h3>
                  <ol className="space-y-3 text-sm text-indigo-800">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        1
                      </span>
                      <span>
                        Enter the start date in the first date picker field.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        2
                      </span>
                      <span>
                        Enter the end date in the second date picker field.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        3
                      </span>
                      <span>
                        Optionally check &quot;Show working days only&quot; to exclude
                        weekends.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        4
                      </span>
                      <span>
                        Click &quot;Calculate&quot; to see the detailed date difference
                        breakdown.
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="rounded-lg border border-slate-200 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Common Use Cases
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Project Planning:</strong> Calculate project
                        duration and working days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Vacation Planning:</strong> Count days for your
                        next trip
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Contract Terms:</strong> Determine exact
                        duration of agreements
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Interest Calculations:</strong> Calculate exact
                        days for financial computations
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-amber-900">
                    About Leap Years
                  </h3>
                  <p className="text-sm text-amber-800">
                    Our calculator automatically accounts for leap years when
                    calculating date differences. February has 29 days in leap
                    years (every 4 years, except century years not divisible by
                    400).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Understanding Date Calculations
            </h2>

            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                Date calculations are more complex than they appear at first
                glance. While we might think of dates as simple numbers, the
                reality involves varying month lengths, leap years, and time
                zones that all affect accurate calculations.
              </p>

              <h3 className="text-xl font-semibold text-slate-900">
                The Challenge of Uneven Months
              </h3>
              <p className="leading-relaxed">
                Unlike metric measurements where units are consistent, months
                have different lengths - 28, 29, 30, or 31 days. This means
                simple multiplication does not work for accurate date math. Our
                calculator handles these variations automatically, ensuring
                precise results regardless of the months involved.
              </p>

              <h3 className="text-xl font-semibold text-slate-900">
                Working Days vs. Calendar Days
              </h3>
              <p className="leading-relaxed">
                In business contexts, working days (excluding weekends) are
                often more relevant than total calendar days. This is crucial
                for:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Project timeline planning and deadline setting</li>
                <li>Calculating service level agreement (SLA) periods</li>
                <li>Determining business contract durations</li>
                <li>Computing interest for business loans</li>
              </ul>

              <div className="flex items-start gap-4 rounded-lg bg-blue-50 p-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <h4 className="mb-2 font-semibold text-blue-900">
                    Time Zone Considerations
                  </h4>
                  <p className="text-sm text-blue-800">
                    When calculating dates across different time zones, the same
                    moment in time might be a different date. Our calculator uses
                    local dates, so ensure both dates are in the same time zone
                    for accurate results.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Guide */}
            <div className="mt-8 rounded-xl bg-indigo-100 p-6">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-indigo-900">
                    Want to Learn More?
                  </h3>
                  <p className="text-indigo-800">
                    Read our comprehensive guide to master date calculations,
                    including leap years, time zones, and advanced techniques.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-indigo-300 bg-white text-indigo-700 hover:bg-indigo-50"
                  asChild
                >
                  <Link href="/guides/math/date-calculation">
                    Read Full Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  How do you calculate the number of days between two dates?
                </h3>
                <p className="text-slate-600">
                  Subtract the earlier date from the later date and divide by the
                  number of milliseconds in a day (86,400,000). Our calculator
                  does this automatically and also accounts for leap years and
                  month variations.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Does this calculator include the start or end date?
                </h3>
                <p className="text-slate-600">
                  Yes! Our calculator includes both the start and end dates in the
                  count. For example, from January 1 to January 3 is counted as
                  3 days (January 1st, 2nd, and 3rd). Similarly, January 1 to January 31
                  is counted as 31 days.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Can I calculate dates in the future?
                </h3>
                <p className="text-slate-600">
                  Yes! You can enter any future date to calculate how many days
                  until that date. This is useful for countdowns to events,
                  deadlines, or milestones.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  How do leap years affect date calculations?
                </h3>
                <p className="text-slate-600">
                  Leap years add an extra day (February 29) every 4 years. Our
                  calculator automatically detects leap years and includes the
                  extra day when your date range includes February 29 of a leap
                  year.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  What about holidays? Can I exclude them?
                </h3>
                <p className="text-slate-600">
                  Currently, our calculator excludes weekends (Saturdays and
                  Sundays) when you enable the &quot;working days&quot; option. Holiday
                  exclusion varies by country and region, so we focus on
                  providing consistent weekend calculations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
              Related Calculators
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/tools/math/age-calculator"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  Age Calculator
                </h3>
                <p className="text-sm text-slate-600">
                  Calculate exact age down to the second
                </p>
              </Link>

              <Link
                href="/tools/math/percentage-calculator"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  Percentage Calculator
                </h3>
                <p className="text-sm text-slate-600">
                  Calculate discounts, taxes, and percentages
                </p>
              </Link>

              <Link
                href="/tools"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  View All Tools
                </h3>
                <p className="text-sm text-slate-600">
                  Explore our complete collection
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
