import Link from "next/link";
import { Calculator, Calendar, Clock, Dices, Wallet } from "lucide-react";

/**
 * EssentialTools 元件 - 工具展示區塊
 * 低調處理（25% 版面），標題使用 "Practice What You Learned"
 */
export function EssentialTools() {
  const tools = [
    {
      icon: Calculator,
      name: "Percentage",
      description: "Calculate discounts, taxes, and percentages instantly",
      href: "/tools/math/percentage-calculator",
      color: "bg-indigo-100 text-indigo-600",
      status: "live",
    },
    {
      icon: Calendar,
      name: "Date",
      description: "Find the difference between any two dates",
      href: "/tools/time/date-calculator",
      color: "bg-blue-100 text-blue-600",
      status: "live",
    },
    {
      icon: Clock,
      name: "Age",
      description: "Calculate age down to the second",
      href: "/tools/time/age-calculator",
      color: "bg-amber-100 text-amber-600",
      status: "coming-soon",
    },
    {
      icon: Dices,
      name: "Random",
      description: "Generate random numbers for any use case",
      href: "/tools/math/random-number-generator",
      color: "bg-purple-100 text-purple-600",
      status: "coming-soon",
    },
    {
      icon: Wallet,
      name: "Tip",
      description: "Calculate tips and split bills fairly",
      href: "/tools/math/tip-calculator",
      color: "bg-emerald-100 text-emerald-600",
      status: "coming-soon",
    },
  ];

  // 只顯示可用的工具
  const visibleTools = tools.filter((tool) => tool.status === "live");

  return (
    <section
      id="tools"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* 區塊標題 */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
            <Calculator className="h-4 w-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">
              Practice What You Learned
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Free Online Calculators
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Accurate tools to verify your calculations and practice what you
            have learned.
          </p>
        </div>

        {/* 工具卡片網格 - 小尺寸 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col rounded-xl border border-slate-100 bg-slate-50/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:bg-white hover:shadow-md"
              >
                {/* 圖示 */}
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${tool.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* 名稱 */}
                <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                  {tool.name} Calculator
                </h3>

                {/* 描述 */}
                <p className="text-sm text-slate-600">{tool.description}</p>
              </Link>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
          >
            View All Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
