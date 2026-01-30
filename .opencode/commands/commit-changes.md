---
description: 自動分析變更並建立符合規範的 commit
descriptionForAgent: |  
  **Commit 變更助手** - 自動處理 Git 提交流程
  
  這個 command 會：
  1. 檢查目前專案的 git 狀態
  2. 分析變更的檔案和內容
  3. 自動生成符合 Conventional Commits 規範的提交訊息
  4. 執行 git add 和 commit
  
  適用於 Calculatify (Next.js 16 + React 19 + Tailwind CSS v4) 專案
  
  使用方式：
  ```
  /commit
  /commit-changes
  ```
---

# Commit Changes - Calculatify 專案

協助自動提交變更並生成符合規範的 commit message。

## 執行流程

### 1. 檢查專案狀態
```bash
git status
```

### 2. 分析變更內容
```bash
git diff          # 檢視詳細變更
git diff --staged # 檢視已暫存的變更
```

### 3. 評估變更類型
分析變更檔案的路徑和內容，判斷：
- **類型 (Type)**: feat, fix, refactor, style, docs, test, chore
- **範圍 (Scope)**: ui, api, config, deps, docs, types, hooks, components
- **描述 (Description)**: 簡短說明變更內容

### 4. 處理提交
1. 評估是否需要提交（排除臨時檔案、建置產物）
2. 暫存相關檔案 (`git add`)
3. 根據變更內容生成提交訊息
4. 建立提交

## 提交訊息格式

```
<type>(<scope>): <簡短描述>

<詳細說明（如需要）>
```

### Type 類型
- `feat`: 新功能
- `fix`: 錯誤修復  
- `refactor`: 重構（不影響功能的程式碼改進）
- `style`: 格式調整（空格、縮排、分號等）
- `docs`: 文件更新（README、註解等）
- `test`: 測試相關
- `chore`: 建構流程、輔助工具、套件更新

### Scope 範圍（針對 Calculatify 專案）
- `ui`: UI 元件、頁面佈局
- `api`: API 路由、伺服器端邏輯
- `config`: 設定檔（next.config, tsconfig, eslint 等）
- `deps`: 依賴套件更新
- `docs`: 文件、README、AGENTS.md
- `types`: TypeScript 型別定義
- `hooks`: React Hooks
- `components`: React 元件
- `styles`: CSS、Tailwind 樣式

### 範例
```
feat(ui): 新增計算機主頁面佈局

fix(api): 修正計算結果精度問題

refactor(components): 重構 Button 元件為可重用設計

docs: 更新 AGENTS.md 新增測試指令說明

chore(deps): 升級 Next.js 至 16.1.6

style: 統一程式碼縮排為 2 空格
```

## 排除檔案（不自動提交）

### Next.js 專案特有
- `node_modules/`
- `.next/` - Next.js 建置輸出
- `out/` - 靜態匯出目錄
- `dist/` - 編譯輸出

### 通用排除
- `.env*` - 環境變數檔案
- `*.key`, `*.pem` - 金鑰檔案
- `.DS_Store` - macOS 系統檔
- `*.log` - 日誌檔案

## 安全檢查

提交前請確認：
- 沒有包含敏感資訊（API 金鑰、密碼、私鑰）
- 移除除錯程式碼（console.log、debugger）
- 不提交 `node_modules` 或建置產物

## 使用範例

### 基本使用
```
/commit-changes
```
自動分析所有變更並建立 commit。

### 指定檔案
```
/commit-changes src/components/Button.tsx
```
只提交特定檔案。

## 注意事項

1. 如果沒有變更，會提示 "沒有需要提交的變更"
2. 如果變更包含敏感檔案，會詢問是否繼續
3. 產生的 commit message 會符合 Conventional Commits 規範
4. 適用於 Calculatify (Next.js 16 + React 19 + TypeScript 5) 專案結構
