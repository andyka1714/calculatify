import { CategoryCard } from "@/components/cards/CategoryCard";
import type { LucideIcon } from "lucide-react";
import { Calculator, Clock, Wrench, Heart, DollarSign, Settings } from "lucide-react";

/**
 * 分類資料類型
 */
interface Category {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  toolCount: number;
  color: string;
}

/**
 * Categories 元件 - 計算器分類區域
 * 按類別組織展示計算器
 */
export function Categories() {
  // 分類資料
  const categories: Category[] = [
    {
      id: "math",
      title: "數學",
      description: "百分比、分數、進位制等",
      icon: Calculator,
      href: "/calculators/math",
      toolCount: 12,
      color: "#0891B2",
    },
    {
      id: "time",
      title: "時間",
      description: "日期、年齡、時間差計算",
      icon: Clock,
      href: "/calculators/time",
      toolCount: 8,
      color: "#22D3EE",
    },
    {
      id: "utility",
      title: "實用工具",
      description: "單位轉換、密碼生成等",
      icon: Wrench,
      href: "/calculators/utility",
      toolCount: 15,
      color: "#22C55E",
    },
    {
      id: "health",
      title: "健康",
      description: "BMI、卡路里、體脂率等",
      icon: Heart,
      href: "/calculators/health",
      toolCount: 6,
      color: "#EF4444",
    },
    {
      id: "finance",
      title: "財務",
      description: "貸款、投資、稅務計算",
      icon: DollarSign,
      href: "/calculators/finance",
      toolCount: 10,
      color: "#F59E0B",
    },
    {
      id: "other",
      title: "其他",
      description: "各種特殊用途計算器",
      icon: Settings,
      href: "/calculators/other",
      toolCount: 5,
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="w-full bg-[#ECFEFF] px-4 py-12 transition-colors duration-300 dark:bg-[#0C4A6E] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        {/* 區域標題 */}
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#164E63] dark:text-[#ECFEFF] sm:text-3xl">
              按類別瀏覽
            </h2>
            <p className="mt-2 text-[#0E7490] dark:text-[#A5F3FC]">
              選擇適合您需求的計算器類別
            </p>
          </div>
          <a
            href="/calculators"
            className="hidden cursor-pointer text-sm font-medium text-[#0891B2] transition-colors duration-200 hover:text-[#164E63] dark:text-[#22D3EE] dark:hover:text-[#ECFEFF] sm:block"
          >
            查看全部 →
          </a>
        </div>

        {/* 分類卡片網格 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              href={category.href}
              toolCount={category.toolCount}
              color={category.color}
            />
          ))}
        </div>

        {/* 行動版查看全部連結 */}
        <div className="mt-6 text-center sm:hidden">
          <a
            href="/calculators"
            className="cursor-pointer text-sm font-medium text-[#0891B2] transition-colors duration-200 hover:text-[#164E63] dark:text-[#22D3EE] dark:hover:text-[#ECFEFF]"
          >
            查看全部 →
          </a>
        </div>
      </div>
    </section>
  );
}
