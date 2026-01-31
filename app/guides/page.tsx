import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Calculator,
  TrendingUp,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "All Guides | Calculatify Learning Center",
  description:
    "Browse our comprehensive collection of math, finance, and health guides. Learn practical calculations with step-by-step tutorials.",
  keywords: ["learning guides", "math tutorials", "calculation guides", "educational resources"],
};

const categories = [
  {
    title: "Math",
    description:
      "Master everyday math with our comprehensive guides. From percentage calculations to date arithmetic.",
    href: "/guides/math",
    icon: Calculator,
    count: 2,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Finance",
    description:
      "Understanding personal finance, taxes, investments, and financial planning calculations.",
    href: "/guides/finance",
    icon: TrendingUp,
    count: 0,
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
    comingSoon: true,
  },
  {
    title: "Health",
    description:
      "Health and fitness calculations including BMI, calories, body composition, and more.",
    href: "/guides/health",
    icon: Heart,
    count: 0,
    color: "bg-rose-100",
    iconColor: "text-rose-600",
    comingSoon: true,
  },
];

export default function AllGuidesPage() {
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
              All Guides
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Comprehensive tutorials organized by category. Master practical
              calculations for everyday life.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        {category.count} guides
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
                    {category.comingSoon ? "Coming Soon" : "Explore Guides"}
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
              Want to Practice What You Learned?
            </h2>
            <p className="mb-6 text-slate-600">
              Try our free online calculators to apply your new skills.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Explore All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
