import type { LucideIcon } from "lucide-react";
import { Zap, Smartphone, Shield, Clock, Globe, Sparkles } from "lucide-react";

/**
 * 功能特色資料類型
 */
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Features 元件 - 網站特色功能區域
 * 展示 Calculatify 的主要優勢
 */
export function Features() {
  // 功能特色資料
  const features: Feature[] = [
    {
      id: "instant",
      title: "即時計算",
      description: "無需等待，輸入數值立即獲得結果，提升您的工作效率",
      icon: Zap,
    },
    {
      id: "mobile",
      title: "行動裝置支援",
      description: "完美支援手機和平板，隨時隨地都能使用計算器",
      icon: Smartphone,
    },
    {
      id: "privacy",
      title: "隱私保護",
      description: "所有計算都在您的裝置上進行，資料不會上傳到伺服器",
      icon: Shield,
    },
    {
      id: "uptime",
      title: "24/7 可用",
      description: "全年無休，任何時間都能使用我們的計算器工具",
      icon: Clock,
    },
    {
      id: "language",
      title: "中文介面",
      description: "完整的中文支援，使用起來更直覺、更方便",
      icon: Globe,
    },
    {
      id: "free",
      title: "完全免費",
      description: "所有計算器工具都是免費使用，無需註冊或付費",
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-12 transition-colors duration-300 dark:bg-[#164E63] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        {/* 區域標題 */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-[#164E63] dark:text-[#ECFEFF] sm:text-3xl">
            為什麼選擇 Calculatify？
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-[#0E7490] dark:text-[#A5F3FC]">
            我們致力於提供最好的計算器使用體驗
          </p>
        </div>

        {/* 功能特色網格 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center rounded-xl border border-[#A5F3FC] bg-[#ECFEFF] p-6 text-center transition-all duration-300 hover:border-[#0891B2] hover:bg-white dark:border-[#155E75] dark:bg-[#0C4A6E] dark:hover:border-[#22D3EE] dark:hover:bg-[#155E75]"
            >
              {/* 圖示 */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0891B2]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0891B2]/20 dark:bg-[#22D3EE]/10 dark:group-hover:bg-[#22D3EE]/20">
                <feature.icon className="h-7 w-7 text-[#0891B2] dark:text-[#22D3EE]" />
              </div>

              {/* 標題 */}
              <h3 className="mb-2 text-lg font-semibold text-[#164E63] dark:text-[#ECFEFF]">
                {feature.title}
              </h3>

              {/* 描述 */}
              <p className="text-sm text-[#0E7490] dark:text-[#A5F3FC]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
