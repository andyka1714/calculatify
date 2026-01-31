import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Calculatify",
  description:
    "Tips, tricks, and tutorials for everyday math. Learn how to use calculators effectively and improve your mental math skills.",
};

const blogPosts = [
  {
    title: "5 Everyday Uses for Percentage Calculators",
    description:
      "Discover practical ways to use percentage calculators in your daily life. From shopping discounts to health tracking, learn how this simple tool can save you time and money.",
    href: "/blog/everyday-uses-percentage",
    readTime: "5 min read",
    category: "Practical Tips",
    date: "Feb 2, 2026",
  },
  {
    title: "How to Calculate Tips Without a Calculator",
    description:
      "Learn simple mental math tricks to calculate restaurant tips quickly without a calculator. Master 15%, 18%, and 20% tip calculations in seconds.",
    href: "/blog/calculate-tips-mentally",
    readTime: "4 min read",
    category: "Mental Math",
    date: "Feb 3, 2026",
  },
  {
    title: "Understanding Sales Tax: A Beginner's Guide",
    description:
      "Learn how sales tax works in the United States. Understand tax rates, how to calculate sales tax, and why prices vary by location.",
    href: "/blog/sales-tax-guide",
    readTime: "7 min read",
    category: "Finance Basics",
    date: "Feb 4, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <BookOpen className="h-4 w-4" />
              Blog
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Math Tips & Tutorials
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Practical tips, mental math tricks, and tutorials to help you
              master everyday calculations. Learn how to use calculators
              effectively and improve your math skills.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>

                  <h2 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-indigo-600">
                    {post.title}
                  </h2>

                  <p className="mb-4 flex-1 text-sm text-slate-600">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Master Math with Our Calculators
            </h2>
            <p className="mb-6 text-slate-600">
              Put these tips into practice with our free online calculators.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
              >
                Try Our Calculators
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 border border-indigo-200"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
