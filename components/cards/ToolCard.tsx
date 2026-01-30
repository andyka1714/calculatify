import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/**
 * ToolCard 元件屬性類型
 */
interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  monthlyUsers: string;
  category: string;
}

/**
 * ToolCard 元件 - 計算器工具卡片
 * 用於展示單個計算器工具的可重複使用卡片元件
 */
export function ToolCard({
  title,
  description,
  icon: Icon,
  href,
  monthlyUsers,
  category,
}: ToolCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="group h-full cursor-pointer border-[#A5F3FC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0891B2] hover:bg-[#ECFEFF] dark:border-[#155E75] dark:bg-[#0C4A6E] dark:hover:border-[#22D3EE] dark:hover:bg-[#155E75]">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            {/* 圖示和類別 */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0891B2]/10 transition-all duration-300 group-hover:bg-[#0891B2]/20 dark:bg-[#22D3EE]/10 dark:group-hover:bg-[#22D3EE]/20">
                <Icon className="h-6 w-6 text-[#0891B2] transition-all duration-300 group-hover:scale-110 dark:text-[#22D3EE]" />
              </div>
              <div>
                <span className="text-xs font-medium text-[#0891B2] dark:text-[#22D3EE]">
                  {category}
                </span>
                <h3 className="font-semibold text-[#164E63] transition-colors duration-200 group-hover:text-[#0891B2] dark:text-[#ECFEFF] dark:group-hover:text-[#22D3EE]">
                  {title}
                </h3>
              </div>
            </div>

            {/* 箭頭圖示 */}
            <ArrowUpRight className="h-5 w-5 text-[#A5F3FC] opacity-0 transition-all duration-200 group-hover:text-[#0891B2] group-hover:opacity-100 dark:text-[#155E75] dark:group-hover:text-[#22D3EE]" />
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* 描述文字 */}
          <p className="mb-4 text-sm text-[#0E7490] dark:text-[#A5F3FC]">
            {description}
          </p>

          {/* 使用者數量 */}
          <div className="flex items-center gap-1 text-xs text-[#0891B2] dark:text-[#22D3EE]">
            <Users className="h-3 w-3" />
            <span>{monthlyUsers} 用戶/月</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
