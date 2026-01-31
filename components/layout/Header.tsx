"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  BookOpen,
  Wrench,
  Info,
  Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component - Website Top Navigation Bar
 * Content-First Design: Learning Center First, Tools Secondary
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation Items - Content-First Architecture
  const learnItems = [
    {
      label: "Percentage Calculation Guide",
      href: "/guides/percentage-calculation",
      status: "live",
    },
    {
      label: "Date Calculation Guide",
      href: "/guides/date-calculation",
      status: "live",
    },
    {
      label: "Age Calculation Guide",
      href: "/guides/age-calculation",
      status: "coming-soon",
    },
  ];

  const toolItems = [
    {
      label: "Percentage Calculator",
      href: "/tools/percentage-calculator",
      status: "live",
    },
    {
      label: "Date Calculator",
      href: "/tools/date-calculator",
      status: "live",
    },
    {
      label: "Age Calculator",
      href: "/tools/age-calculator",
      status: "coming-soon",
    },
  ];

  // Filter visible items
  const visibleLearnItems = learnItems.filter((item) => item.status === "live");
  const visibleToolItems = toolItems.filter((item) => item.status === "live");

  // Blog items
  const blogItems = [
    {
      label: "5 Everyday Uses for Percentage Calculators",
      href: "/blog/everyday-uses-percentage",
    },
    {
      label: "How to Calculate Tips Without a Calculator",
      href: "/blog/calculate-tips-mentally",
    },
    {
      label: "Understanding Sales Tax: A Beginner's Guide",
      href: "/blog/sales-tax-guide",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg transition-transform duration-200 hover:scale-105">
            <Image
              src="/Logo.png"
              alt="Calculatify Logo"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Calculatify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Learning Center - Most Important */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400">
              <BookOpen className="h-4 w-4" />
              Learn
            </button>
            {visibleLearnItems.length > 0 && (
              <div className="absolute left-0 top-full z-50 hidden w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Math
                </div>
                {visibleLearnItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-slate-100 px-3 py-2 dark:border-slate-700">
                  <Link
                    href="/guides"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    View All Guides →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Tools - Secondary */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400">
              <Wrench className="h-4 w-4" />
              Tools
            </button>
            {visibleToolItems.length > 0 && (
              <div className="absolute left-0 top-full z-50 hidden w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Popular
                </div>
                {visibleToolItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-slate-100 px-3 py-2 dark:border-slate-700">
                  <Link
                    href="/tools"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    View All Tools →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Blog */}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400">
              <Newspaper className="h-4 w-4" />
              Blog
            </button>
            <div className="absolute left-0 top-full z-50 hidden w-56 rounded-lg border border-slate-200 bg-white p-2 shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Latest Posts
              </div>
              {blogItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-700"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-slate-100 px-3 py-2 dark:border-slate-700">
                <Link
                  href="/blog"
                  className="text-xs font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                >
                  View All Posts →
                </Link>
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          >
            <Info className="h-4 w-4" />
            About
          </Link>
        </nav>

        {/* Search & Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Search Icon (Desktop) */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Contact Button */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:hidden">
          <nav className="flex flex-col p-4">
            {/* Learning Center - Mobile */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <BookOpen className="h-4 w-4" />
                Learning Guides
              </div>
              {visibleLearnItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-4 py-3 text-base text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/tools"
                className="block rounded-md px-4 py-3 text-base font-medium text-indigo-600 transition-colors duration-200 hover:bg-slate-100 dark:text-indigo-400 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                View All Tools →
              </Link>
            </div>

            {/* Blog - Mobile */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                <Newspaper className="h-4 w-4" />
                Blog
              </div>
              {blogItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-4 py-3 text-base text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block rounded-md px-4 py-3 text-base font-medium text-indigo-600 transition-colors duration-200 hover:bg-slate-100 dark:text-indigo-400 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                View All Posts →
              </Link>
            </div>

            {/* Other Links */}
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-md px-4 py-3 text-base text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-4 w-4" />
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-4 py-3 text-base text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
