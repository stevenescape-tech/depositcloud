# Deployment Guide

## Static Assets
All images and static assets are stored locally in the `static/img/` directory and served via Vite's publicDir configuration. No external CDN dependencies.

### Files Included:
- All source code (`src/` directory)
- All images (`static/img/` directory)
- Configuration files (`package.json`, `vite.config.ts`, `tailwind.config.js`)
- HTML entry point (`index.html`)
- CSS files (`tailwind.css`)

## Deployment on Replit
This project is deployed as a static site on Replit.
- Build command: `npm run build`
- Output directory: `dist/`

## Post-Deployment Checklist
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Test all legal page links
- [ ] Verify footer links work
- [ ] Test Login link opens in new tab
- [ ] Check favicon appears
- [ ] Test smooth scrolling
- [ ] Verify all images load correctly

## Troubleshooting

### Form Not Submitting
1. Verify Formspree endpoint
2. Check browser console for errors
3. Ensure all form fields are filled

### Routing Issues
Client-side routing is configured. Ensure the server rewrites all routes to index.html for SPA support.
