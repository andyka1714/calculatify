import Link from "next/link";
import { ArrowRight, BookOpen, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * HeroSection 元件 - 首頁主要橫幅區域
 * Content-First 設計：強調教育內容，工具為輔
 */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* 左側文字內容 */}
          <div className="flex flex-col items-start">
            {/* 標籤 */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">
              <BookOpen className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">
                Free Educational Resources
              </span>
            </div>

            {/* 主標題 */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Master Everyday Math
            </h1>

            {/* 副標題 */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Expert guides and accurate tools for finance, health, and daily
              life calculations. Learn the math behind the numbers.
            </p>

            {/* CTA 按鈕組 */}
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* 主要按鈕 - 瀏覽教學 */}
              <Link href="#guides">
                <Button
                  size="lg"
                  className="w-full gap-2 bg-indigo-600 text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg sm:w-auto"
                >
                  <BookOpen className="h-4 w-4" />
                  Explore Guides
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              {/* 次要按鈕 - 使用工具 */}
              <Link href="#tools">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-indigo-600 sm:w-auto"
                >
                  <Calculator className="h-4 w-4" />
                  Try Calculators
                </Button>
              </Link>
            </div>

            {/* 信任指標 */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* 右側圖片/插圖區域 */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* 簡約插圖設計 */}
            <div className="relative w-full max-w-md">
              {/* 背景裝飾圓形 */}
              <div className="absolute -left-8 -top-8 h-64 w-64 rounded-full bg-indigo-100/50" />
              <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-slate-100" />

              {/* 主要內容卡片 */}
              <div className="relative rounded-2xl bg-white p-6 shadow-xl">
                {/* 指南卡片預覽 */}
                <div className="mb-4 rounded-xl bg-slate-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                      <span className="text-lg">📊</span>
                    </div>
                    <span className="font-semibold text-slate-900">
                      Percentage Guide
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Learn the three essential formulas...
                  </p>
                </div>

                {/* 工具卡片預覽 */}
                <div className="rounded-xl border border-slate-100 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-medium text-slate-900">
                      Calculator
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-500">
                      Enter value...
                    </div>
                    <div className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white">
                      Calculate
                    </div>
                  </div>
                </div>

                {/* 浮動元素 */}
                <div className="absolute -right-4 -top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  Instant Results
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
