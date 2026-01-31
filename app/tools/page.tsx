import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Wrench,
  ArrowRight,
  Calculator,
  TrendingUp,
  Heart,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Calculators | Calculatify Tools",
  description:
    "Free online calculators for math, finance, and health. Accurate, easy to use, with detailed explanations and step-by-step solutions.",
  keywords: ["online calculators", "math tools", "free calculator", "calculation tools"],
};

const categories = [
  {
    title: "Math",
    description:
      "Free calculators for everyday math problems. Percentages and more.",
    href: "/tools/math",
    icon: Calculator,
    count: 1,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Time",
    description:
      "Date and age calculators for planning and scheduling needs.",
    href: "/tools/time",
    icon: Clock,
    count: 1,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Finance",
    description:
      "Financial calculators for taxes, investments, loans, and budgeting.",
    href: "/tools/finance",
    icon: TrendingUp,
    count: 0,
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
    comingSoon: true,
  },
  {
    title: "Health",
    description:
      "Health and fitness calculators for BMI, calories, and body metrics.",
    href: "/tools/health",
    icon: Heart,
    count: 0,
    color: "bg-rose-100",
    iconColor: "text-rose-600",
    comingSoon: true,
  },
];

export default function AllToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <Wrench className="h-4 w-4" />
              Calculator Tools
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              All Calculators
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Free online calculators organized by category. Accurate tools for
              everyday calculations.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className={`group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    category.comingSoon ? "opacity-75" : ""
                  }`}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.color}`}
                    >
                      <category.icon
                        className={`h-7 w-7 ${category.iconColor}`}
                      />
                    </div>
                    {category.comingSoon ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                        {category.count} tools
                      </span>
                    )}
                  </div>

                  <h2 className="mb-2 text-2xl font-bold text-slate-900 group-hover:text-indigo-600">
                    {category.title}
                  </h2>

                  <p className="mb-6 flex-1 text-slate-600">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                    {category.comingSoon ? "Coming Soon" : "Explore Tools"}
                    <ArrowRight className="h-4 w-4" />
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
              Learn the Math Behind the Calculations
            </h2>
            <p className="mb-6 text-slate-600">
              Understanding how calculations work helps you use them more effectively.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 border border-indigo-200"
            >
              Browse All Guides
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
