import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  Calendar,
  CheckCircle,
  Sparkles,
  Hourglass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Date & Time Calculators | Free Online Tools | Calculatify",
  description:
    "Free online date and time calculators. Calculate days between dates, time differences, and more. Accurate, easy to use, with detailed explanations.",
  keywords: ["date calculator", "time calculator", "days between dates", "date difference", "time calculation tools"],
};

const tools = [
  {
    title: "Date Calculator",
    description:
      "Calculate the difference between two dates. Find days, weeks, months, and working days between any dates with leap year support.",
    href: "/tools/time/date-calculator",
    icon: Calendar,
    features: ["Day counting", "Working days only", "Leap year support"],
  },
];

const comingSoon = [
  {
    title: "Age Calculator",
    description: "Calculate exact age with years, months, days, and even seconds.",
    icon: Hourglass,
  },
];

export default function TimeToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <Clock className="h-4 w-4" />
              Date & Time Category
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Date & Time Calculators
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Free online calculators for date and time calculations. Calculate
              durations, differences, and deadlines with precision.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="border-b border-slate-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/tools" className="hover:text-indigo-600">
                All Tools
              </Link>
              <span>/</span>
              <span className="font-medium text-slate-900">Date & Time</span>
            </nav>
          </div>
        </div>

        {/* Tools Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Calculators ({tools.length})
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <tool.icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                    {tool.title}
                  </h3>

                  <p className="mb-4 flex-1 text-slate-600">{tool.description}</p>

                  <div className="mb-4 space-y-2">
                    {tool.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                    Try Calculator
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            {comingSoon.length > 0 && (
              <div className="mt-12">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Coming Soon
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {comingSoon.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 opacity-75"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                        <item.icon className="h-5 w-5 text-slate-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-700">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related Guides CTA */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Learn the Math Behind the Calculations
            </h2>
            <p className="mb-6 text-slate-600">
              Understanding how date calculations work helps you use them more
              effectively.
            </p>
            <Link
              href="/guides/time"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50 border border-blue-200"
            >
              Browse Date & Time Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
