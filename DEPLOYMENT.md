# Deployment Guide

## GitHub Repository Setup

All images and static assets are included in the repository and will be pushed to GitHub.

### Files Included:
- All source code (`src/` directory)
- All images (referenced via CDN URLs - no local images to push)
- Configuration files (`package.json`, `vite.config.ts`, `tailwind.config.js`)
- HTML entry point (`index.html`)
- CSS files (`tailwind.css`)

### Images Note:
All images are hosted on Anima's CDN (c.animaapp.com) and are referenced via URLs in the code. No local image files need to be committed to the repository.

## Deployment Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - DepositCloud website"
```

### 2. Create GitHub Repository
1. Go to GitHub and create a new repository
2. Name it `depositcloud-website` (or your preferred name)
3. Do NOT initialize with README, .gitignore, or license (we already have these)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel (Recommended)

#### Option A: Via Vercel Dashboard
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### 5. Deploy to Netlify (Alternative)

1. Go to https://netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Environment Configuration

No environment variables are required for the current setup. The contact form uses Formspree (ID: xaqnzljo) which is already configured.

## Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS records

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

### Images Not Loading
All images are hosted on CDN (c.animaapp.com). If images don't load:
1. Check your internet connection
2. Verify CDN URLs are accessible
3. Check browser console for errors

### Form Not Submitting
1. Verify Formspree endpoint: https://formspree.io/f/xaqnzljo
2. Check browser console for errors
3. Ensure all form fields are filled

### Routing Issues
The `vercel.json` file is configured for client-side routing. If pages don't load:
1. Verify `vercel.json` is in the root directory
2. Check that it contains the rewrite rule for SPA routing

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- GitHub: https://docs.github.com

## Production URL

After deployment, your site will be available at:
- Vercel: `https://your-project-name.vercel.app`
- Netlify: `https://your-project-name.netlify.app`
- Custom domain: `https://yourdomain.com` (after DNS configuration)
