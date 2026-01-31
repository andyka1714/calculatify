import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * FeaturedGuides 元件 - 精選指南區塊
 * 首頁核心區塊（45% 版面），展示教育內容
 */
export function FeaturedGuides() {
  const guides = [
    {
      icon: "📊",
      iconBg: "bg-indigo-100",
      title: "The Complete Percentage Guide",
      description:
        "Master percentage calculations with our comprehensive guide. Learn the three essential formulas, real-world applications, and common mistakes to avoid.",
      href: "/guides/math/percentage-calculation",
      category: "Math",
      readTime: "10 min read",
    },
    {
      icon: "📅",
      iconBg: "bg-blue-100",
      title: "Understanding Date Math",
      description:
        "From Unix timestamps to leap years, discover the science behind date calculations. Perfect for project planning and scheduling.",
      href: "/guides/time/date-calculation",
      category: "Date & Time",
      readTime: "12 min read",
    },
    {
      icon: "🎂",
      iconBg: "bg-amber-100",
      title: "Age Calculation Explained",
      description:
        "Different cultures calculate age differently. Learn about Korean age, exact second calculations, and zodiac sign determinations.",
      href: "/guides/math/age-calculation",
      category: "Math",
      readTime: "6 min read",
    },
  ];

  return (
    <section
      id="guides"
      className="w-full bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* 區塊標題 */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Featured Guides
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learn the Math Behind the Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Comprehensive guides that teach you how calculations work, not just
            the answers.
          </p>
        </div>

        {/* 指南卡片網格 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* 圖示 */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${guide.iconBg} transition-transform duration-300 group-hover:scale-110`}
              >
                <span className="text-2xl">{guide.icon}</span>
              </div>

              {/* 分類與閱讀時間 */}
              <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-600">
                  {guide.category}
                </span>
                <span>{guide.readTime}</span>
              </div>

              {/* 標題 */}
              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-200 group-hover:text-indigo-600">
                {guide.title}
              </h3>

              {/* 描述 */}
              <p className="mb-6 flex-1 text-slate-600 leading-relaxed">
                {guide.description}
              </p>

              {/* 行動連結 */}
              <div className="flex items-center gap-2 font-medium text-indigo-600 transition-all duration-200 group-hover:gap-3">
                <span>Read Full Guide</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Browse All Guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
