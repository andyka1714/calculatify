import Link from "next/link";
import { Calculator, Github, Twitter, Mail } from "lucide-react";

/**
 * Footer 元件 - 網站底部區域
 * 包含版權資訊、連結和社交媒體圖示
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tools: [
      { label: "數學計算器", href: "/calculators/math" },
      { label: "時間計算器", href: "/calculators/time" },
      { label: "財務計算器", href: "/calculators/finance" },
      { label: "健康計算器", href: "/calculators/health" },
      { label: "實用工具", href: "/calculators/utility" },
    ],
    company: [
      { label: "關於我們", href: "/about" },
      { label: "聯絡我們", href: "/contact" },
      { label: "隱私政策", href: "/privacy" },
      { label: "使用條款", href: "/terms" },
    ],
    resources: [
      { label: "使用說明", href: "/help" },
      { label: "常見問題", href: "/faq" },
      { label: "API 文件", href: "/api-docs" },
      { label: "部落格", href: "/blog" },
    ],
  };

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/calculatify",
      icon: Github,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/calculatify",
      icon: Twitter,
    },
    {
      label: "Email",
      href: "mailto:hello@calculatify.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full border-t border-[#A5F3FC] bg-white transition-colors duration-300 dark:border-[#155E75] dark:bg-[#164E63]">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* 主要內容區域 */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo 與描述區域 */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0891B2]">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-[#164E63] dark:text-[#ECFEFF]">
                Calculatify
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[#0E7490] dark:text-[#A5F3FC]">
              提供各種實用的免費線上計算器工具，讓您的計算更精確、更快速、更簡單。
            </p>

            {/* 社交媒體連結 */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CFFAFE] text-[#0891B2] transition-all duration-200 hover:bg-[#0891B2] hover:text-white dark:bg-[#155E75] dark:text-[#22D3EE] dark:hover:bg-[#22D3EE] dark:hover:text-[#164E63]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 工具連結 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#164E63] dark:text-[#ECFEFF]">
              計算器工具
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#0E7490] transition-colors duration-200 hover:text-[#0891B2] dark:text-[#A5F3FC] dark:hover:text-[#22D3EE]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 公司連結 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#164E63] dark:text-[#ECFEFF]">
              關於
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#0E7490] transition-colors duration-200 hover:text-[#0891B2] dark:text-[#A5F3FC] dark:hover:text-[#22D3EE]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 資源連結 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#164E63] dark:text-[#ECFEFF]">
              資源
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#0E7490] transition-colors duration-200 hover:text-[#0891B2] dark:text-[#A5F3FC] dark:hover:text-[#22D3EE]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 版權區域 */}
        <div className="mt-12 border-t border-[#A5F3FC] pt-8 dark:border-[#155E75]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#0E7490] dark:text-[#A5F3FC]">
              © {currentYear} Calculatify. 保留所有權利。
            </p>
            <p className="text-sm text-[#0E7490] dark:text-[#A5F3FC]">
              使用本網站即表示您同意我們的{" "}
              <Link
                href="/terms"
                className="text-[#0891B2] underline transition-colors duration-200 hover:text-[#164E63] dark:text-[#22D3EE] dark:hover:text-[#ECFEFF]"
              >
                使用條款
              </Link>{" "}
              和{" "}
              <Link
                href="/privacy"
                className="text-[#0891B2] underline transition-colors duration-200 hover:text-[#164E63] dark:text-[#22D3EE] dark:hover:text-[#ECFEFF]"
              >
                隱私政策
              </Link>
              。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
