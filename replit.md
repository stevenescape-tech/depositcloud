# DepositCloud Website

## Overview
DepositCloud is a modern deposit management platform marketing website built with React, TypeScript, and Vite. It showcases the platform's features for property deposit management.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **UI Components**: Radix UI primitives, Lucide icons
- **Analytics**: Vercel Web Analytics (dev mode only)

## Project Structure
- `src/` - Source code
  - `sections/` - Unified responsive page sections (Hero, ProblemStatement, ValueDelivery, Implementation, DepositBenefits, ContactForm)
  - `components/` - Reusable UI components (Navigation, Footer, sections/UnifiedPlatformSection, ui)
  - `routes/` - Legal page route components (TermsOfService, PrivacyPolicy, LegalNotices)
  - `lib/` - Utility functions and hooks (useScrollAnimation, utils)
- `static/` - Static assets served via Vite publicDir (images in /img/)
- `index.html` - Entry HTML file

## Architecture
- Single responsive codebase using Tailwind CSS breakpoints (mobile-first: base, md: 768px+, xl: 1280px+)
- App.tsx renders a single HomePage component with all sections
- No JavaScript screen-size detection - pure CSS responsive design
- Shared FeatureCard component used across ValueDelivery and DepositBenefits sections
- Footer component shared across all pages

## Design Decisions
- Header: bg-black/70 backdrop-blur-md for frosted glass effect
- Body font size: 14px (CSS variable --body-font-size)
- Feature cards use blue circle check icons (#51B1FF)
- Contact form submits to Formspree (https://formspree.io/f/xaqnzljo)
- All external images localized to /img/ directory

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Deployment
- Configured as a static site deployment
- Build command: `npm run build`
- Public directory: `dist`

## Recent Changes
- 2026-02-20: Consolidated three separate breakpoint codebases (FullWidth, Tablet, Mobile44) into single responsive implementation
- Removed all duplicate screen/route code - single set of sections in src/sections/
- Eliminated JavaScript screen-size detection in favor of Tailwind responsive classes
