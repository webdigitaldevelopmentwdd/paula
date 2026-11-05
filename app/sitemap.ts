import type { MetadataRoute } from 'next';
import { CONCEPTS, SERVICES, SITE_URL, conceptHref, serviceHref } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/about',
    '/wedding-plans',
    ...CONCEPTS.map((c) => conceptHref(c.slug)),
    conceptHref('cinematic-weddings'),
    '/services',
    ...SERVICES.map((s) => serviceHref(s.slug)),
    '/gallery',
    '/contact',
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p === '/' ? '' : p}`,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : p.split('/').length > 2 ? 0.6 : 0.8,
  }));
}
