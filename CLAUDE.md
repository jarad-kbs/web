# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 project using the App Router architecture with React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

- **Development server**: `npm run dev` (or `pnpm dev` / `yarn dev` / `bun dev`)
  - Runs at http://localhost:3000
  - Supports hot module replacement
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Lint**: `npm run lint`

## Architecture

### App Router Structure
This project uses Next.js App Router (not Pages Router). All routes live in `src/app/`:
- `src/app/layout.tsx`: Root layout with Geist font configuration
- `src/app/page.tsx`: Home page component
- `src/app/globals.css`: Global styles with Tailwind imports

### TypeScript Configuration
- Path alias `@/*` maps to `./src/*`
- Strict mode enabled
- JSX transform: `react-jsx` (React 19+)

### Styling System
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- CSS custom properties defined in globals.css for theming
- Dark mode via `prefers-color-scheme` media query
- Geist Sans and Geist Mono fonts loaded via `next/font/google`

### ESLint Configuration
- Uses ESLint v9+ flat config format (`eslint.config.mjs`)
- Next.js Core Web Vitals and TypeScript rules enabled
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Notes

- React 19 and Next.js 16 are latest versions with potential breaking changes from earlier versions
- Tailwind v4 uses a different syntax and PostCSS plugin than v3
- The project uses `jsx: "react-jsx"` (no React import needed in components)
