import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bookloom-phi.vercel.app';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/examples',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/auth/login',
    '/auth/signup',
    '/docs',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
