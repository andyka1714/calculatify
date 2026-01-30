import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * HeroSection 元件 - 首頁主要橫幅區域
 * 包含主標題、副標題和行動按鈕
 */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ECFEFF] px-4 py-16 transition-colors duration-300 dark:bg-[#0C4A6E] sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* 背景裝飾 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#0891B2]/10 blur-3xl dark:bg-[#0891B2]/20" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#22D3EE]/10 blur-3xl dark:bg-[#22D3EE]/20" />
      </div>

      <div className="container relative mx-auto max-w-4xl text-center">
        {/* 標籤 */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A5F3FC] bg-white/80 px-4 py-2 backdrop-blur-sm transition-colors duration-300 dark:border-[#155E75] dark:bg-[#164E63]/80">
          <Sparkles className="h-4 w-4 text-[#0891B2] dark:text-[#22D3EE]" />
          <span className="text-sm font-medium text-[#0891B2] dark:text-[#22D3EE]">
            100% 免費使用
          </span>
        </div>

        {/* 主標題 */}
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-[#164E63] dark:text-[#ECFEFF] sm:text-4xl md:text-5xl lg:text-6xl">
          免費線上計算器工具
        </h1>

        {/* 副標題 */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-[#0E7490] dark:text-[#A5F3FC] sm:text-xl">
          精確、快速、易用的線上計算器集合。無論是數學運算、時間計算、財務分析或健康追蹤，我們都能滿足您的需求。
        </p>

        {/* 行動按鈕 */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#popular-tools" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full cursor-pointer gap-2 bg-[#22C55E] text-white transition-all duration-200 hover:bg-[#16A34A] hover:scale-105 sm:w-auto"
            >
              開始計算
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/calculators" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full cursor-pointer border-[#0891B2] bg-transparent text-[#0891B2] transition-all duration-200 hover:bg-[#0891B2] hover:text-white sm:w-auto dark:border-[#22D3EE] dark:text-[#22D3EE] dark:hover:bg-[#22D3EE] dark:hover:text-[#164E63]"
            >
              瀏覽所有工具
            </Button>
          </Link>
        </div>

        {/* 統計資訊 */}
        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#A5F3FC] pt-8 dark:border-[#155E75] sm:gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#0891B2] dark:text-[#22D3EE] sm:text-3xl">
              50+
            </div>
            <div className="mt-1 text-xs text-[#0E7490] dark:text-[#A5F3FC] sm:text-sm">
              計算器工具
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#0891B2] dark:text-[#22D3EE] sm:text-3xl">
              1M+
            </div>
            <div className="mt-1 text-xs text-[#0E7490] dark:text-[#A5F3FC] sm:text-sm">
              每月使用者
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#0891B2] dark:text-[#22D3EE] sm:text-3xl">
              100%
            </div>
            <div className="mt-1 text-xs text-[#0E7490] dark:text-[#A5F3FC] sm:text-sm">
              免費使用
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
