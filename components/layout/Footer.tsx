import Link from "next/link";
import { Calculator } from "lucide-react";

/**
 * Footer 元件 - 簡化版頁尾
 * 符合 Content-First 設計，強調教育資源定位
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      {/* Trust Section */}
      <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-12 dark:border-slate-800 dark:bg-slate-800/50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Instant & Accurate
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Get precise results in milliseconds
              </p>
            </div>
            <div>
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Educational First
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Learn the math behind every calculation
              </p>
            </div>
            <div>
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                Privacy Focused
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                No data storage, completely private
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  Calculatify
                </span>
              </Link>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Educational resources and accurate calculators for everyday
                math.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Learn
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/guides/percentage-calculation"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Percentage Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides/date-calculation"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Date Calculation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    All Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Tools
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/tools/percentage-calculator"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Percentage Calc
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/date-calculator"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Date Calc
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    All Tools
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Calculatify. Educational resources for everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
