'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONCEPTS, conceptHref } from '@/lib/site';

const SHORT: Record<string, string> = {
  'between-history-and-eternity': 'Medieval',
  'mediterranean-in-a-different-light': 'Mediterranean',
  'thematic-weddings': 'Thematic',
};
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

/** Slim switcher between the wedding concepts; sticks under the header on concept pages. */
export default function ConceptNav() {
  const pathname = usePathname();
  return (
    <nav className="wp-concepts" aria-label="Wedding concepts">
      <div className="wrap wp-concepts-inner">
        {CONCEPTS.map((c, i) => {
          const href = conceptHref(c.slug);
          return (
            <Link key={c.slug} href={href} aria-current={pathname === href ? 'page' : undefined}>
              <span className="wp-concepts-num">{ROMAN[i]}</span>
              <span className="wp-concepts-long">{c.title}</span>
              <span className="wp-concepts-short">{SHORT[c.slug]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
