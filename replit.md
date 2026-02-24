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
  - `sections/` - Unified responsive page sections (Hero, ProblemStatement, ValueDelivery, Implementation, DepositBenefits, WhoWeAre, ContactForm)
  - `components/` - Reusable UI components (PageLayout, Navigation, Footer, sections/UnifiedPlatformSection, ui)
  - `routes/` - Legal page route components (TermsOfService, PrivacyPolicy, LegalNotices) - each contains only a screen component
  - `lib/` - Utility functions, hooks, and constants (useScrollAnimation, utils, constants)
- `static/` - Static assets served via Vite publicDir (images in /img/)
- `index.html` - Entry HTML file

## Architecture
- Single responsive codebase using Tailwind CSS breakpoints (mobile-first: base, md: 768px+, xl: 1280px+)
- Shared `PageLayout` component wraps all pages with consistent Navigation + Footer + dark footer background
- App.tsx renders a single HomePage component with all sections
- No JavaScript screen-size detection - pure CSS responsive design
- Shared FeatureCard component used across ValueDelivery and DepositBenefits sections

## Design Decisions
- Brand colors centralized in Tailwind config: `brand-blue` (#51b0ff), `brand-dark` (#161616)
- Header: bg-black/70 backdrop-blur-md for frosted glass effect
- Body font size: 14px (CSS variable --body-font-size)
- Feature cards use blue circle check icons (brand-blue)
- Constants centralized in `src/lib/constants.ts` (Formspree endpoint, Login URL)
- All external images localized to /img/ directory

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Deployment
- Configured as a static site deployment
- Build command: `npm run build`
- Public directory: `dist`

## Section Order (Homepage)
1. HeroSection
2. ProblemStatementSection
3. UnifiedPlatformSection
4. ImplementationSection
5. ValueDeliverySection
6. DepositBenefitsSection
7. WhoWeAreSection (carousel - "Who we are" team section with executive cards)
8. ContactFormSection

## Recent Changes
- 2026-02-24: Added WhoWeAreSection with executive carousel (desktop: 2 visible, mobile: 1, overflow at 70% opacity)
- 2026-02-24: Updated Navigation - added "About" link, styled Login button with blue outline + user icon
- 2026-02-24: Created shared MainButton component (glass/outline variants) for CTA buttons
- 2026-02-24: Reordered sections, added blue divider between sections 3-4
- 2026-02-22: Fixed SPA routing, updated Terms of Service to Jan 2026 version, removed CDN dependencies
- 2026-02-20: Code cleanup - centralized brand colors in Tailwind config, created shared PageLayout component, removed duplicate ui/lib files from legal routes, centralized constants (Formspree URL, Login URL)
- 2026-02-20: Consolidated three separate breakpoint codebases (FullWidth, Tablet, Mobile44) into single responsive implementation
