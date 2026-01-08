# DepositCloud Website

A modern, responsive website for DepositCloud built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for Desktop (1280px+), Tablet (768px-1279px), and Mobile (<768px)
- **Smooth Animations**: Scroll-triggered animations and smooth scrolling navigation
- **Contact Form**: Integrated with Formspree for email submissions
- **Legal Pages**: Terms of Service, Privacy Policy, and Legal Notices
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized bundle size with code splitting and lazy loading

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Radix UI** - Accessible component primitives
- **Formspree** - Form submission handling

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/depositcloud-website.git
cd depositcloud-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
depositcloud-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation/      # Navigation component (shared)
│   │   ├── Footer/          # Footer component (shared)
│   │   └── ui/              # UI primitives (buttons, cards, etc.)
│   ├── screens/             # Main page components
│   │   ├── FullWidth/       # Desktop layout (1280px+)
│   │   ├── Tablet/          # Tablet layout (768px-1279px)
│   │   └── Mobile44/        # Mobile layout (<768px)
│   ├── routes/              # Legal pages
│   │   ├── TermsOfService/
│   │   ├── PrivacyPolicy/
│   │   └── LegalNotices/
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app with routing
│   └── index.tsx            # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── vercel.json              # Vercel deployment config
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## 🎨 Design System

### Typography
- **Headings**: Helvetica Bold
- **Body Text**: Courier Prime
- **Font Sizes**: Responsive with CSS custom properties

### Colors
- **Primary**: #51b0ff (Blue)
- **Background**: #161616 (Dark)
- **Text**: White, #2b2b2b (Dark Gray)
- **Accent**: #DFDFDF (Light Gray)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

## 📧 Contact Form

The contact form is integrated with Formspree:
- **Endpoint**: https://formspree.io/f/xaqnzljo
- **Recipient**: stevenescape@gmail.com
- **Fields**: Full Name, Company Name, Portfolio Size, Work Email

## ♿ Accessibility Features

- Skip to main content link
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader optimized
- Color contrast compliance (WCAG AA)

## 🔗 Navigation

### Main Navigation
- Platform (scrolls to #platform)
- Features (scrolls to #features)
- Book a demo (scrolls to #contact)
- Login (opens https://new.depositcloud.com/sign_in in new tab)

### Footer Links
- Terms of Service (/terms-of-service)
- Privacy Policy (/privacy-policy)
- Legal Notices (/legal-notices)

## 📱 Responsive Behavior

The site automatically detects screen size and renders the appropriate layout:
- **Desktop (1280px+)**: Full-width layout with side-by-side content
- **Tablet (768px-1279px)**: Stacked layout with adjusted spacing
- **Mobile (<768px)**: Single-column layout with hamburger menu

## 🐛 Known Issues

None currently. All features are working as expected.

## 📄 License

All rights reserved - DepositCloud © 2017 - 2026

## 📞 Support

For questions or issues, contact:
- Email: sales@depositcloud.com
- Website: www.depositcloud.com

## 🔄 Updates

To update the site:
1. Make changes to the code
2. Test locally with `npm run dev`
3. Build for production with `npm run build`
4. Commit and push to GitHub
5. Deployment platform will auto-deploy

---

Built with ❤️ for DepositCloud
