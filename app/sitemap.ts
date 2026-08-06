import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bookloom-phi.vercel.app';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/examples',
    '/pricing',
    '/features',
    '/templates',
    '/developers',
    '/about',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/auth/login',
    '/auth/signup',
    '/docs',
    '/blog',
    '/blog/ai-writing-prompts',
    '/blog/epub-formatting-guide',
    '/blog/kindle-publishing-2026',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.7 : 0.8,
  }));
}
