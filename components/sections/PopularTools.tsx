import { ToolCard } from "@/components/cards/ToolCard";
import type { LucideIcon } from "lucide-react";
import { Percent, Calendar, Clock, User, DollarSign, Scale } from "lucide-react";

/**
 * 熱門工具資料類型
 */
interface Tool {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  monthlyUsers: string;
  category: string;
}

/**
 * PopularTools 元件 - 熱門計算器工具區域
 * 展示最受歡迎的計算器卡片網格
 */
export function PopularTools() {
  // 熱門工具資料
  const popularTools: Tool[] = [
    {
      id: "percentage",
      title: "百分比計算器",
      description: "快速計算百分比、增減幅度和比例",
      icon: Percent,
      href: "/calculators/percentage",
      monthlyUsers: "220萬",
      category: "數學",
    },
    {
      id: "date",
      title: "日期計算器",
      description: "計算日期差異、推算未來或過去日期",
      icon: Calendar,
      href: "/calculators/date",
      monthlyUsers: "55萬",
      category: "時間",
    },
    {
      id: "age",
      title: "年齡計算器",
      description: "精確計算您的年齡，包含年月日",
      icon: User,
      href: "/calculators/age",
      monthlyUsers: "110萬",
      category: "時間",
    },
    {
      id: "bmi",
      title: "BMI 計算器",
      description: "計算身體質量指數，評估健康狀況",
      icon: Scale,
      href: "/calculators/bmi",
      monthlyUsers: "85萬",
      category: "健康",
    },
    {
      id: "loan",
      title: "貸款計算器",
      description: "計算每月還款金額和總利息",
      icon: DollarSign,
      href: "/calculators/loan",
      monthlyUsers: "42萬",
      category: "財務",
    },
    {
      id: "time",
      title: "時間計算器",
      description: "加減時間、計算時間差異",
      icon: Clock,
      href: "/calculators/time",
      monthlyUsers: "38萬",
      category: "時間",
    },
  ];

  return (
    <section id="popular-tools" className="w-full bg-white px-4 py-12 transition-colors duration-300 dark:bg-[#164E63] sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="container mx-auto">
        {/* 區域標題 */}
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <div>
            <h2 className="text-2xl font-bold text-[#164E63] dark:text-[#ECFEFF] sm:text-3xl">
              熱門工具
            </h2>
            <p className="mt-2 text-[#0E7490] dark:text-[#A5F3FC]">
              最受歡迎的計算器，立即試用
            </p>
          </div>
          <a
            href="/calculators"
            className="hidden cursor-pointer text-sm font-medium text-[#0891B2] transition-colors duration-200 hover:text-[#164E63] dark:text-[#22D3EE] dark:hover:text-[#ECFEFF] sm:block"
          >
            查看全部 →
          </a>
        </div>

        {/* 工具卡片網格 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              href={tool.href}
              monthlyUsers={tool.monthlyUsers}
              category={tool.category}
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
