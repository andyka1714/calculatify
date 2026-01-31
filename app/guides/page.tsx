import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Calendar, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "All Math Guides | Calculatify",
  description:
    "Browse our comprehensive collection of math guides. Learn percentage calculations, date math, and more with step-by-step tutorials.",
};

const guides = [
  {
    title: "The Complete Guide to Percentage Calculations",
    description:
      "Master percentage calculations with our comprehensive guide. Learn the three essential formulas, real-world applications, and common mistakes to avoid.",
    href: "/guides/percentage-calculation",
    icon: Calculator,
    readTime: "10 min read",
    category: "Math Fundamentals",
  },
  {
    title: "How to Calculate Dates and Time Differences Like a Pro",
    description:
      "Master date calculations with our comprehensive guide. Learn how to calculate days between dates, understand leap years, handle time zones, and solve real-world date problems.",
    href: "/guides/date-calculation-guide",
    icon: Calendar,
    readTime: "12 min read",
    category: "Date & Time",
  },
];

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <BookOpen className="h-4 w-4" />
              Learning Center
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Math Guides
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Comprehensive tutorials to help you master everyday math. From
              percentage calculations to date arithmetic, learn at your own
              pace.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <guide.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {guide.category}
                    </span>
                  </div>

                  <h2 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-indigo-600">
                    {guide.title}
                  </h2>

                  <p className="mb-4 flex-1 text-slate-600">{guide.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      {guide.readTime}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Want to Practice What You Learned?
            </h2>
            <p className="mb-6 text-slate-600">
              Try our free online calculators to apply your new math skills.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Explore Calculators
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
