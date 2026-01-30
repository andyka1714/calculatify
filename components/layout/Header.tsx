"use client";

import Link from "next/link";
import { useState } from "react";
import { Calculator, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Header 元件 - 網站頂部導航欄
 * 包含 Logo、搜尋框和行動裝置選單
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "首頁", href: "/" },
    { label: "數學工具", href: "/calculators/math" },
    { label: "時間工具", href: "/calculators/time" },
    { label: "財務工具", href: "/calculators/finance" },
    { label: "健康工具", href: "/calculators/health" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#A5F3FC] bg-[#ECFEFF]/95 backdrop-blur-sm transition-colors duration-300 dark:border-[#155E75] dark:bg-[#0C4A6E]/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo 區域 */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0891B2] transition-transform duration-200 hover:scale-105">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-[#164E63] dark:text-[#ECFEFF]">
            Calculatify
          </span>
        </Link>

        {/* 桌面版搜尋框 */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:px-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0E7490]" />
            <Input
              type="search"
              placeholder="搜尋計算器..."
              className="w-full border-[#A5F3FC] bg-white pl-10 text-[#164E63] placeholder:text-[#0E7490] focus:border-[#0891B2] focus:ring-[#0891B2] dark:border-[#155E75] dark:bg-[#164E63] dark:text-[#ECFEFF] dark:placeholder:text-[#A5F3FC]"
            />
          </div>
        </div>

        {/* 桌面版導航連結 */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#164E63] transition-colors duration-200 hover:bg-[#CFFAFE] hover:text-[#0891B2] dark:text-[#ECFEFF] dark:hover:bg-[#155E75] dark:hover:text-[#22D3EE]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 行動裝置選單按鈕 */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#164E63] dark:text-[#ECFEFF]" />
          ) : (
            <Menu className="h-6 w-6 text-[#164E63] dark:text-[#ECFEFF]" />
          )}
        </Button>
      </div>

      {/* 行動裝置選單 */}
      {isMenuOpen && (
        <div className="border-t border-[#A5F3FC] bg-[#ECFEFF] dark:border-[#155E75] dark:bg-[#0C4A6E] lg:hidden">
          {/* 行動版搜尋框 */}
          <div className="border-b border-[#A5F3FC] p-4 dark:border-[#155E75]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0E7490]" />
              <Input
                type="search"
                placeholder="搜尋計算器..."
                className="w-full border-[#A5F3FC] bg-white pl-10 text-[#164E63] placeholder:text-[#0E7490] focus:border-[#0891B2] focus:ring-[#0891B2] dark:border-[#155E75] dark:bg-[#164E63] dark:text-[#ECFEFF] dark:placeholder:text-[#A5F3FC]"
              />
            </div>
          </div>

          {/* 行動版導航連結 */}
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-3 text-base font-medium text-[#164E63] transition-colors duration-200 hover:bg-[#CFFAFE] hover:text-[#0891B2] dark:text-[#ECFEFF] dark:hover:bg-[#155E75] dark:hover:text-[#22D3EE]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
