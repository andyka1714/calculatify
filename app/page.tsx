import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PopularTools } from "@/components/sections/PopularTools";
import { Categories } from "@/components/sections/Categories";
import { Features } from "@/components/sections/Features";

/**
 * 首頁元件
 * 整合所有頁面區域，構成 Calculatify 網站首頁
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 頂部導航 */}
      <Header />

      {/* 主要內容區域 */}
      <main className="flex-1">
        {/* 首頁橫幅 */}
        <HeroSection />

        {/* 熱門工具區域 */}
        <PopularTools />

        {/* 分類瀏覽區域 */}
        <Categories />

        {/* 特色功能區域 */}
        <Features />

        {/* 廣告區域（預留） */}
        <section className="w-full bg-[#ECFEFF] px-4 py-8 transition-colors duration-300 dark:bg-[#0C4A6E] sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex h-24 items-center justify-center rounded-lg border-2 border-dashed border-[#A5F3FC] bg-white/50 dark:border-[#155E75] dark:bg-[#164E63]/50">
              <p className="text-sm text-[#0E7490] dark:text-[#A5F3FC]">
                廣告版位（AdSense）
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 頁尾 */}
      <Footer />
    </div>
  );
}
