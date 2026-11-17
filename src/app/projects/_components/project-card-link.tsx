"use client";

import type { StaticImageData } from "next/image";
import type { ComponentProps } from "react";

import Link from "next/link";

import { HERO_SIZES, warmImage } from "./image-sizes";

type ProjectCardLinkProps = ComponentProps<typeof Link> & {
  /** The detail page's first screenshot, fetched on hover or focus. */
  hero?: StaticImageData;
};

/**
 * Link already prefetches the route; this also prefetches the image the
 * detail page opens with, at the exact srcset candidate its hero will pick.
 */
export function ProjectCardLink({ hero, ...props }: ProjectCardLinkProps) {
  const warm = () => {
    if (hero)
      warmImage(hero, { sizes: HERO_SIZES });
  };

  return <Link {...props} onPointerEnter={warm} onFocus={warm} />;
}
