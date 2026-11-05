import type { ReactNode } from 'react';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

/** `name` feeds the structured data; `label` (optional) is what is shown, e.g. a translated text. */
export type Crumb = { name: string; href?: string; label?: ReactNode };

/** Visible breadcrumb trail plus BreadcrumbList structured data. The last crumb is the current page. */
export default function Breadcrumbs({
  items,
  className = '',
  homeLabel,
}: {
  items: Crumb[];
  className?: string;
  homeLabel?: ReactNode;
}) {
  const trail: Crumb[] = [{ name: 'Home', href: '/', label: homeLabel }, ...items];
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
    <nav className={`crumbs ${className}`.trim()} aria-label="Breadcrumb">
      <div className="wrap">
        <ol>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            const text = c.label ?? c.name;
            return (
              <li key={c.name}>
                {last || !c.href ? <span aria-current={last ? 'page' : undefined}>{text}</span> : <Link href={c.href}>{text}</Link>}
              </li>
            );
          })}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
