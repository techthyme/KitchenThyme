# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 "coming soon" landing page application built with React 19, TypeScript, and Tailwind CSS v4. The project is named "coming-soon-app" and appears to be for a product called "kitchenthyme" (based on directory structure).

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build production**: `npm run build`
- **Start production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture & Structure

### App Router Structure
- Uses Next.js App Router (`src/app/`)
- Main layout in `src/app/layout.tsx` with Geist fonts
- Landing page in `src/app/page.tsx` (currently a Headless UI hero section)
- Additional page template in `src/app/x_page.tsx`

### Components
- Reusable components in `src/components/`
- `CountdownTimer.tsx`: Client-side countdown component with hydration handling

### Styling & UI
- Tailwind CSS v4 with dark mode support
- Headless UI for accessible components (@headlessui/react)
- Heroicons for iconography (@heroicons/react)
- CSS custom properties for Geist Sans and Geist Mono fonts

### TypeScript Configuration
- Strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- Target ES2017 with Next.js plugin integration

## Key Patterns

### Client-Side Components
- Use `"use client"` directive for interactive components
- Handle hydration mismatches with client-side state (`isClient` pattern)
- Example in `CountdownTimer.tsx` shows proper SSR/hydration handling

### Dark Mode Support
- Components use conditional classes: `dark:` prefixes
- Hero section has dual image sources for light/dark themes
- Navigation and UI elements support both themes

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Mobile menu using Headless UI Dialog component
- Grid layouts adapt from 2 columns to 4 columns on larger screens

## Dependencies

### Core Framework
- Next.js 15.4.7 with React 19.1.0
- TypeScript 5 for type safety

### UI Libraries
- Headless UI for accessible components
- Heroicons for SVG icons
- Tailwind CSS v4 for styling

### Development Tools
- ESLint with Next.js TypeScript configuration
- Next.js core-web-vitals rules enabled