'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/lang';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
};

/* Scroll reveal: adds `is-in` once the element enters the viewport. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setOn(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} reveal${on ? ' is-in' : ''}`} {...rest}>
      {children}
    </Tag>
  );
}
