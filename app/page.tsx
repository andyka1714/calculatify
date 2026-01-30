import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { EssentialTools } from "@/components/sections/EssentialTools";

/**
 * 首頁元件
 * Content-First Architecture：70% 內容 / 30% 工具
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 頂部導航 */}
      <Header />

      {/* 主要內容區域 */}
      <main className="flex-1">
        {/* Hero 區塊 - 15% 版面 */}
        <HeroSection />

        {/* 精選指南 - 45% 版面（核心區塊） */}
        <FeaturedGuides />

        {/* 工具展示 - 25% 版面 */}
        <EssentialTools />
      </main>

      {/* 頁尾 */}
      <Footer />
    </div>
  );
}
