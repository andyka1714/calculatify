import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const baseUrl = "https://calculatify.com";
const appDir = join(process.cwd(), "app");

// 排除的資料夾或檔案模式
const EXCLUDED_PATTERNS = [
  /^\(/, // 群組資料夾，例如 (marketing)
  /^api/, // API 路由
  /^\[\.\.\.\]/, // catch-all 路由
  /^@/, // 並行路由
];

// 判斷是否為動態路由資料夾
function isDynamicRoute(segment: string): boolean {
  return segment.startsWith("[") && segment.endsWith("]");
}

// 遞迴掃描 app 目錄中的所有 page.tsx 和 route.ts
function scanDirectory(dir: string, routePath: string = ""): string[] {
  const results: string[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // 檢查是否為排除的資料夾
      if (EXCLUDED_PATTERNS.some((pattern) => pattern.test(item))) {
        continue;
      }

      // 如果是動態路由資料夾，暫時跳過（需要特殊處理）
      if (isDynamicRoute(item)) {
        continue;
      }

      // 遞迴掃描子目錄
      const newRoutePath = routePath ? `${routePath}/${item}` : item;
      results.push(...scanDirectory(fullPath, newRoutePath));
    } else if (stat.isFile()) {
      // 檢查是否為 page.tsx 或 route.ts
      if (item === "page.tsx" || item === "page.ts" || item === "page.js") {
        // 首頁特殊處理
        if (routePath === "") {
          results.push("/");
        } else {
          results.push(`/${routePath}`);
        }
      }
    }
  }

  return results;
}

// 根據路由路徑判斷頁面類型並設定優先級和更新頻率
function getPageConfig(
  route: string
): Pick<MetadataRoute.Sitemap[0], "priority" | "changeFrequency"> {
  // 首頁
  if (route === "/") {
    return { priority: 1.0, changeFrequency: "weekly" };
  }

  // 工具頁面
  if (route.startsWith("/tools/")) {
    return { priority: 0.9, changeFrequency: "weekly" };
  }

  // 指南頁面
  if (route.startsWith("/guides/")) {
    return { priority: 0.9, changeFrequency: "monthly" };
  }

  // 部落格文章
  if (route.startsWith("/blog/")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  // About 頁面
  if (route === "/about") {
    return { priority: 0.8, changeFrequency: "monthly" };
  }

  // Contact 頁面
  if (route === "/contact") {
    return { priority: 0.5, changeFrequency: "monthly" };
  }

  // 法律頁面（隱私政策、服務條款）
  if (route === "/privacy" || route === "/terms") {
    return { priority: 0.3, changeFrequency: "yearly" };
  }

  // 預設設定
  return { priority: 0.5, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 掃描所有靜態頁面
  const routes = scanDirectory(appDir);

  // 轉換為 sitemap 格式
  return routes.map((route) => {
    const config = getPageConfig(route);

    return {
      url: route === "/" ? baseUrl : `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
}
