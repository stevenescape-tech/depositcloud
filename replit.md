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
  - `sections/about/` - About page sections (AboutHero, MeetExecutiveTeam, CoreValues, AdvisoryCounsel)
  - `components/` - Reusable UI components (PageLayout, Navigation, Footer, sections/UnifiedPlatformSection, ui including Carousel)
  - `routes/` - Legal page route components (TermsOfService, PrivacyPolicy, LegalNotices) - each contains only a screen component
  - `lib/` - Utility functions, hooks, and constants (useScrollAnimation, utils, constants)
- `static/` - Static assets served via Vite publicDir (images in /img/)
- `index.html` - Entry HTML file

## Architecture
- Single responsive codebase using Tailwind CSS breakpoints (mobile-first: base, md: 768px+, xl: 1280px+)
- Shared `PageLayout` component wraps all pages with consistent Navigation + Footer + dark footer background
- App.tsx defines HomePage and AboutPage components, each composed of section components
- No JavaScript screen-size detection - pure CSS responsive design
- Shared FeatureCard component used across ValueDelivery and DepositBenefits sections
- Reusable Carousel component (`src/components/ui/carousel.tsx`) with light/dark variants

## Design Decisions
- Brand colors centralized in Tailwind config: `brand-blue` (#51b0ff), `brand-dark` (#161616)
- Header: bg-black/70 backdrop-blur-md for frosted glass effect
- Body font size: 14px (CSS variable --body-font-size)
- Feature cards use blue circle check icons (brand-blue)
- Constants centralized in `src/lib/constants.ts` (Formspree endpoint, Login URL)
- All external images localized to /img/ directory

## Pages & Routes
- `/` - Homepage (Hero → ProblemStatement → UnifiedPlatform → Implementation → ValueDelivery → DepositBenefits → WhoWeAre → ContactForm)
- `/about` - About page (AboutHero → MeetExecutiveTeam → CoreValues → AdvisoryCounsel → ContactForm)
- `/terms-of-service` - Terms of Service
- `/privacy-policy` - Privacy Policy
- `/legal-notices` - Legal Notices

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Deployment
- Configured as a static site deployment
- Build command: `npm run build`
- Public directory: `dist`
- SPA fallback: `scripts/spa-fallback.sh` copies index.html to route directories

## Section Order (Homepage)
1. HeroSection
2. ProblemStatementSection
3. UnifiedPlatformSection
4. ImplementationSection
5. ValueDeliverySection
6. DepositBenefitsSection
7. WhoWeAreSection (carousel - "Who we are" team section with executive cards)
8. ContactFormSection

## Section Order (About Page)
1. AboutHeroSection (dark hero with wave bg)
2. MeetExecutiveTeamSection (light bg, reuses Carousel + same executive data)
3. CoreValuesSection (dark bg with image, 5 value cards: 2 top row + 3 bottom row)
4. AdvisoryCounselSection (dark bg, Carousel dark variant with advisor cards including bios)
5. ContactFormSection (reused from homepage)

## Team Data
- **Executives**: Michael Bowman (Founder & CEO), Ash Bell (President & COO), Hannah Crompton (SVP of Finance), Niki Trimble (SVP of Client Success), Daria Davis (SVP of DevOps)
- **Advisory Counsel**: David Walther (CRO, Asset Living), Mark Stringer (EVP, Avenue5 Residential), Kesha Fisher (SVP, Asset Living), Melissa Bartolucci (Principal, TRE Asset Partners), Erica Fedeczko (Director, F&F Properties), Scott Bishop (EVP, Asset Living)

## Recent Changes
- 2026-03-09: Replaced two separate phone images in UnifiedPlatformSection with single combined phones-v1.png from Figma; removed old phone-front/phone-back assets
- 2026-02-24: Built About page (/about) with AboutHero, MeetExecutiveTeam (reuses Carousel), CoreValues (5 cards), AdvisoryCounsel (dark Carousel variant), and reused ContactForm
- 2026-02-24: Extracted reusable Carousel component with light/dark variants from WhoWeAreSection
- 2026-02-24: Added WhoWeAreSection with executive carousel (desktop: 2 visible, mobile: 1, overflow at 30% opacity)
- 2026-02-24: Updated Navigation - "About" links to /about page, fallback for hash links navigates to homepage
- 2026-02-24: Created shared MainButton component (glass/outline variants) for CTA buttons
- 2026-02-24: Reordered sections, added blue divider between sections 3-4
- 2026-02-22: Fixed SPA routing, updated Terms of Service to Jan 2026 version, removed CDN dependencies
- 2026-02-20: Code cleanup - centralized brand colors in Tailwind config, created shared PageLayout component
- 2026-02-20: Consolidated three separate breakpoint codebases into single responsive implementation
