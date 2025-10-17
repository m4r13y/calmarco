import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export const revalidate = 86400; // 24h

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://calmarco.com';
  const url = (path = '/') => `${base.replace(/\/$/, '')}${path}`;
  const now = new Date();

  return [
    { url: url('/'), lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: url('/services/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/pricing/'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/contact/'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: url('/terms/'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/refunds/'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/cancellation/'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/legal/'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/promotions/'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
