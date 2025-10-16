This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and integrated with Firebase.

## Getting Started

### Environment Variables

Before running the project, you need to set up your environment variables:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Firebase configuration values:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   # ... etc
   ```

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Firebase Integration

This project includes Firebase Analytics and is configured for Firebase Hosting.

### Firebase Features
- ✅ **Analytics** - Track user interactions and page views
- ✅ **Hosting** - Static site hosting with CDN
- 🔒 **Secure Configuration** - Environment variables for sensitive data

### Deployment

To deploy to Firebase Hosting:

```bash
# Build and deploy in one command
npm run deploy

# Or manually
npm run build
firebase deploy --only hosting
```

### Firebase Analytics Usage

```typescript
import { trackPageView, trackButtonClick } from '@/lib/firebaseUtils';

// Track page views
trackPageView('Home Page');

// Track button clicks
trackButtonClick('hero_cta', 'header');
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
