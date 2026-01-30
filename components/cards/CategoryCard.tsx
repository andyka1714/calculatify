import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * CategoryCard 元件屬性類型
 */
interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  toolCount: number;
  color: string;
}

/**
 * CategoryCard 元件 - 計算器分類卡片
 * 用於展示計算器類別的可重複使用卡片元件
 */
export function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
  toolCount,
  color,
}: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <Card
        className="group h-full cursor-pointer border-[#A5F3FC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0891B2] hover:bg-[#ECFEFF] dark:border-[#155E75] dark:bg-[#0C4A6E] dark:hover:border-[#22D3EE] dark:hover:bg-[#155E75]"
        style={
          {
            "--category-color": color,
          } as React.CSSProperties
        }
      >
        <CardContent className="flex h-full flex-col items-center p-4 text-center sm:p-6">
          {/* 圖示 */}
          <div
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14"
            style={{
              backgroundColor: `${color}15`,
            }}
          >
            <Icon
              className="h-6 w-6 sm:h-7 sm:w-7"
              color={color}
            />
          </div>

          {/* 標題 */}
          <h3 className="mb-1 text-base font-semibold text-[#164E63] transition-colors duration-200 group-hover:text-[#0891B2] dark:text-[#ECFEFF] dark:group-hover:text-[#22D3EE] sm:text-lg">
            {title}
          </h3>

          {/* 描述 - 僅在桌面版顯示 */}
          <p className="mb-2 hidden text-xs text-[#0E7490] dark:text-[#A5F3FC] sm:block sm:text-sm">
            {description}
          </p>

          {/* 工具數量 */}
          <div className="mt-auto flex items-center gap-1 text-xs text-[#0891B2] dark:text-[#22D3EE]">
            <span>{toolCount} 個工具</span>
            <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
