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
  - `components/` - Reusable UI components (Navigation, Footer, sections, ui)
  - `routes/` - Page route components (Platform, Mobile, Tablet, LegalNotices, etc.)
  - `screens/` - Screen layout components
  - `lib/` - Utility functions and hooks
- `static/` - Static assets (served via Vite publicDir)
- `api/` - Serverless API functions (email sending, originally for Vercel)
- `index.html` - Entry HTML file

## Development
- **Dev server**: `npm run dev` (runs on port 5000, host 0.0.0.0)
- **Build**: `npm run build` (outputs to `dist/`)
- **Preview**: `npm run preview`

## Deployment
- Configured as a static site deployment
- Build command: `npm run build`
- Public directory: `dist`

## Recent Changes
- Configured Vite for Replit environment (port 5000, allowedHosts)
- Set up static deployment configuration
