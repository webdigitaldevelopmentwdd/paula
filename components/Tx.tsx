'use client';

import { useServicesText } from './useServicesText';

/** A translated Services-page text, usable from server components (e.g. inside the hero banner). */
export default function Tx({ k }: { k: string }) {
  const tr = useServicesText();
  return <>{tr(k)}</>;
}
