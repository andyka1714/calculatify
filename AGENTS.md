# AGENTS.md - Coding Guidelines for Calculatify

> This file provides guidelines for AI agents working on this codebase.

## Project Overview

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 with strict mode
- **UI**: React 19, Tailwind CSS v4
- **Build Tool**: Next.js (uses Turbopack in dev)
- **Package Manager**: npm

## Build/Lint Commands

```bash
# Development server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint              # Lint all files
npx eslint .              # Alternative: lint with detailed output
npx eslint --fix .        # Auto-fix linting issues

# Type checking
npx tsc --noEmit
```

**Note**: No test framework is currently configured. Consider adding Jest, Vitest, or Playwright for testing.

## Code Style Guidelines

### TypeScript

- Enable `strict: true` in tsconfig (already configured)
- Use explicit types for function parameters and return types
- Import types using `import type { ... } from '...'`
- Avoid `any` types; use `unknown` with type guards when needed

### Imports

```typescript
// Order: External libs → Internal modules → Types → Styles
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Image from 'next/image';
import '@/components/ui';
import './globals.css';
```

- Use path alias `@/*` for imports from project root
- Prefer named imports for utilities, default imports for components/pages

### React Components

```typescript
// Use arrow functions for components
export default function Home() {
  return <div>...</div>;
}

// Type props explicitly
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

- Use default exports for page components (Next.js convention)
- Use named exports for reusable UI components and utilities
- Prefer `function` declarations for top-level components
- Add `use client` directive only when using client-side features

### Naming Conventions

- **Files**: PascalCase for components (`Button.tsx`), camelCase for utilities (`utils.ts`)
- **Components**: PascalCase (`UserProfile`)
- **Functions/Variables**: camelCase (`handleClick`, `userData`)
- **Types/Interfaces**: PascalCase (`UserData`, `ApiResponse`)
- **Constants**: SCREAMING_SNAKE_CASE for true constants

### Formatting

- No semicolons required (project style)
- Use single quotes for strings
- 2 spaces indentation
- Max line length: 100 characters
- Trailing commas in multi-line objects/arrays

### Tailwind CSS

- Use Tailwind v4 syntax with `@import "tailwindcss"`
- Prefer utility classes over custom CSS
- Use `@theme inline` for theme customization in CSS
- Dark mode: use `dark:` prefix classes
- Responsive: use `sm:`, `md:`, `lg:` prefixes (mobile-first)

### Error Handling

```typescript
// Use try/catch for async operations
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

### File Structure

```
app/
├── page.tsx          # Home page
├── layout.tsx        # Root layout
├── globals.css       # Global styles
├── components/       # Reusable components
├── lib/              # Utilities and helpers
└── types/            # TypeScript types
public/               # Static assets
```

### Environment Variables

- Prefix client-side variables with `NEXT_PUBLIC_`
- Never commit `.env` files
- Use `.env.local` for local overrides

### Git

- Follow conventional commit messages
- Keep commits focused and atomic
- Do not commit `node_modules`, `.next/`, or environment files
