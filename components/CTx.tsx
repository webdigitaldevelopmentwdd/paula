'use client';

import { useCinematicText } from './useCinematicText';

/** A translated Cinematic-page text, usable from server components (e.g. inside the hero banner). */
export default function CTx({ k }: { k: string }) {
  const tr = useCinematicText();
  return <>{tr(k)}</>;
}
