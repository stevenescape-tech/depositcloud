# DepositCloud Website

A modern, responsive website for DepositCloud built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design (Desktop, Tablet, Mobile)
- Smooth scroll animations
- Contact form with email integration
- Form validation with error handling
- Optimized for production deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
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

## Deployment

### GitHub Pages

1. Update `vite.config.ts` base path to match your repository name:
```typescript
base: '/your-repo-name/'
```

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist` folder to GitHub Pages

### Vercel/Netlify

Simply connect your GitHub repository and these platforms will automatically detect the Vite configuration and deploy.

## Project Structure

```
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/          # Page components (Desktop, Tablet, Mobile)
│   ├── routes/           # Route-specific pages (Terms, Privacy, Legal)
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main app component
├── static/               # Static assets
├── index.html           # HTML entry point
└── package.json         # Dependencies and scripts
```

## Performance Optimizations

- Code splitting with dynamic imports
- Lazy loading of images
- Minified CSS and JavaScript
- Tree-shaking of unused code
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - DepositCloud © 2018 - 2026
