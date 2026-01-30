"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calculator,
  Menu,
  X,
  Search,
  BookOpen,
  Wrench,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header 元件 - 網站頂部導航欄
 * Content-First 設計：學習中心優先，工具次要
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 導航項目 - 內容優先架構
  const learnItems = [
    {
      label: "百分比計算指南",
      href: "/guides/percentage-calculation",
      status: "live",
    },
    {
      label: "日期計算教學",
      href: "/guides/date-calculation",
      status: "coming-soon",
    },
    {
      label: "年齡計算方法",
      href: "/guides/age-calculation",
      status: "coming-soon",
    },
  ];

  const toolItems = [
    {
      label: "百分比計算機",
      href: "/tools/percentage-calculator",
      status: "live",
    },
    { label: "日期計算機", href: "/tools/date-calculator", status: "live" },
    {
      label: "年齡計算機",
      href: "/tools/age-calculator",
      status: "coming-soon",
    },
  ];

  // 過濾可用的項目
  const visibleLearnItems = learnItems.filter((item) => item.status === "live");
  const visibleToolItems = toolItems.filter((item) => item.status === "live");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo 區域 */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 transition-transform duration-200 hover:scale-105">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Calculatify
          </span>
        </Link>

        {/* 桌面版導航 */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* 學習中心 - 最重要 */}
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
              </div>
            )}
          </div>

          {/* 工具 - 次要 */}
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

          {/* 關於 */}
          <Link
            href="/about"
            className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
          >
            <Info className="h-4 w-4" />
            About
          </Link>
        </nav>

        {/* 搜尋與行動按鈕 */}
        <div className="flex items-center gap-2">
          {/* 搜尋圖示（桌面版） */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* 聯絡我們按鈕 */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-slate-600 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>

          {/* 行動裝置選單按鈕 */}
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

      {/* 行動裝置選單 */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:hidden">
          <nav className="flex flex-col p-4">
            {/* 學習中心 - 行動版 */}
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
            </div>

            {/* 工具 - 行動版 */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                <Wrench className="h-4 w-4" />
                Calculators
              </div>
              {visibleToolItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-4 py-3 text-base text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* 其他連結 */}
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
