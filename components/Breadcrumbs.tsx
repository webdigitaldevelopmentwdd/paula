import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export type Crumb = { name: string; href?: string };

/** Visible breadcrumb trail plus BreadcrumbList structured data. The last crumb is the current page. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: 'Home', href: '/' }, ...items];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  };

  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <div className="wrap">
        <ol>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.name}>
                {last || !c.href ? <span aria-current={last ? 'page' : undefined}>{c.name}</span> : <Link href={c.href}>{c.name}</Link>}
              </li>
            );
          })}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
