# AGENTS.md - Calculatify 編碼規範

> 本文件為 AI 助手提供在此專案工作時的規範指引。

## 溝通語言規範（重要！）

**所有對話、程式碼註解、提交訊息和文件撰寫都必須使用繁體中文。**

- **使用者互動**：使用繁體中文回應所有問題和請求
- **程式碼註解**：使用繁體中文撰寫所有註解
- **Git 提交訊息**：使用繁體中文撰寫提交訊息
- **文件撰寫**：使用繁體中文撰寫所有技術文件
- **變數命名**：程式碼中的變數和函式名稱仍使用英文，但註解必須是繁體中文

## 專案概述

Calculatify 是一個**專門實作各種計算器（Calculator）的工具型網站**，以 **SEO 和 AI SEO 優先（First）** 為核心策略。

- **框架**: Next.js 16 (App Router)
- **語言**: TypeScript 5（嚴格模式）
- **UI**: React 19, Tailwind CSS v4
- **建構工具**: Next.js（開發環境使用 Turbopack）
- **套件管理**: npm
- **核心目標**: 提供多種實用計算器，最大化搜尋引擎優化（SEO）與 AI 搜尋優化（AI SEO）

## 建置/檢查指令

```bash
# 開發伺服器（Turbopack）
npm run dev

# 正式環境建置
npm run build

# 啟動正式伺服器
npm start

# 語法檢查
npm run lint              # 檢查所有檔案
npx eslint .              # 替代方案：詳細輸出檢查結果
npx eslint --fix .        # 自動修復語法問題

# 型別檢查
npx tsc --noEmit
```

**注意**: 目前未設定測試框架。建議新增 Jest、Vitest 或 Playwright 進行測試。

## 程式碼風格規範

### SEO 優先原則（重要！）

由於本專案以 SEO 為首要目標，請遵循以下原則：

- **每個計算器都必須有獨立的頁面路由**（如 `/calculators/bmi`、`/calculators/loan`）
- **標題（Title）和描述（Description）必須針對搜尋意圖優化**
- **使用 Next.js Metadata API** 設定每頁的 meta 標籤
- **圖片必須有描述性的 alt 文字**
- **URL 結構應簡潔且包含關鍵字**
- **確保網站效能優秀（Core Web Vitals）**
- **使用結構化資料（Schema.org JSON-LD）標記計算器內容**
- **為 AI 搜尋引擎提供清晰的內容結構**

### TypeScript

- 在 tsconfig 中啟用 `strict: true`（已設定）
- 函式參數和回傳值使用明確型別
- 使用 `import type { ... } from '...'` 匯入型別
- 避免使用 `any` 型別；需要時使用 `unknown` 配合型別守衛

### 匯入規則

```typescript
// 順序：外部函式庫 → 內部模組 → 型別 → 樣式
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Image from 'next/image';
import '@/components/ui';
import './globals.css';
```

- 使用路徑別名 `@/*` 匯入專案根目錄檔案
- 工具函式使用具名匯入，元件/頁面使用預設匯入

### React 元件

```typescript
// 使用箭頭函式定義元件
export default function Home() {
  return <div>...</div>;
}

// 明確定義 props 型別
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

- 頁面元件使用預設匯出（Next.js 慣例）
- 可重複使用的 UI 元件和工具函式使用具名匯出
- 頂層元件優先使用 `function` 宣告
- 僅在使用用戶端功能時才加入 `use client` 指令

### 命名慣例

- **檔案**: 元件使用 PascalCase（`Button.tsx`），工具函式使用 camelCase（`utils.ts`）
- **元件**: PascalCase（`UserProfile`）
- **函式/變數**: camelCase（`handleClick`, `userData`）
- **型別/介面**: PascalCase（`UserData`, `ApiResponse`）
- **常數**: SCREAMING_SNAKE_CASE（真正的常數）

### 格式化

- 不需要分號（專案風格）
- 字串使用單引號
- 2 空格縮排
- 每行最多 100 字元
- 多行物件/陣列使用尾隨逗號

### Tailwind CSS

- 使用 Tailwind v4 語法 `@import "tailwindcss"`
- 優先使用工具類別而非自訂 CSS
- 使用 `@theme inline` 在 CSS 中自訂主題
- 深色模式：使用 `dark:` 前綴類別
- 響應式：使用 `sm:`, `md:`, `lg:` 前綴（行動優先）

### 錯誤處理

```typescript
// 非同步操作使用 try/catch
async function fetchData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
```

### 檔案結構

```
app/
├── page.tsx          # 首頁（計算器目錄/搜尋入口）
├── layout.tsx        # 根佈局（包含全站 SEO 設定）
├── globals.css       # 全域樣式
├── calculators/      # 各類計算器頁面
│   ├── bmi/
│   │   └── page.tsx  # BMI 計算器（含 SEO meta）
│   ├── loan/
│   │   └── page.tsx  # 貸款計算器
│   └── ...           # 其他計算器
├── components/       # 可重複使用元件
├── lib/              # 工具函式和輔助程式
├── types/            # TypeScript 型別定義
└── metadata/         # SEO 相關設定和模板
docs/                 # 專案文件與規劃
├── ROADMAP.md        # 產品路線圖 (24個月規劃)
└── ...               # 其他技術文件
public/               # 靜態資源
```

### 環境變數

- 用戶端變數前綴為 `NEXT_PUBLIC_`
- 絕不提交 `.env` 檔案
- 使用 `.env.local` 進行本機覆寫

### Git

- 遵循 conventional commit 訊息格式
- 保持提交聚焦且原子化
- 不要提交 `node_modules`、`.next/` 或環境檔案
- **所有提交訊息必須使用繁體中文**
