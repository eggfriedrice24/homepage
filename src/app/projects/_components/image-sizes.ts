import type { StaticImageData } from "next/image";

import { getImageProps } from "next/image";

// `sizes` hints derived from the layout, so the browser picks the smallest
// srcset candidate that is still sharp. The content column is `max-w-xl`
// (576px) with `px-6` gutters: 528px wide, or 100vw - 48px below 576px.

/** Detail page hero, full column width. */
export const HERO_SIZES = "(min-width: 576px) 528px, calc(100vw - 48px)";

/**
 * Project grid cards: `minmax(190px, 1fr)` columns with a 20px gap, so two
 * columns once the column reaches 400px (a 448px viewport), one below that.
 */
export const CARD_SIZES
  = "(min-width: 576px) 254px, (min-width: 448px) calc((100vw - 68px) / 2), calc(100vw - 48px)";

/** Gallery strip: `count` equal columns with 8px gaps across the column. */
export function stripSizes(count: number) {
  const gaps = 8 * (count - 1);
  return `(min-width: 576px) ${Math.floor((528 - gaps) / count)}px, calc((100vw - ${48 + gaps}px) / ${count})`;
}

const warmed = new Set<string>();

/**
 * Starts downloading an image into the browser cache ahead of the <img> that
 * will show it. Given the same `sizes` (and `unoptimized`) as that <img>, the
 * browser resolves the same srcset candidate, so the later request is a hit.
 */
export function warmImage(
  src: StaticImageData,
  { sizes, unoptimized }: { sizes?: string; unoptimized?: boolean } = {},
) {
  const key = `${src.src}|${sizes}|${unoptimized}`;
  if (warmed.has(key))
    return;
  warmed.add(key);

  const { props } = getImageProps({ src, alt: "", fill: true, sizes, unoptimized });
  const img = new window.Image();
  if (props.sizes)
    img.sizes = props.sizes;
  if (props.srcSet)
    img.srcset = props.srcSet;
  img.src = props.src;
}
