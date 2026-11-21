import type { ProjectImage } from "@/data/projects";

import { BlurImage } from "@/components/blur-image";
import { cn } from "@/lib/utils";

type ImageStackProps = {
  images: ProjectImage[];
  active?: number;
  sizes?: string;
  /** Preload the first image: set it for the page's LCP image only. */
  preload?: boolean;
  unoptimized?: boolean;
  className?: string;
};

/**
 * Every image stays mounted on top of each other and only `active` is
 * visible, so switching is a crossfade between images that already loaded
 * instead of a fresh request. The hidden ones download at low priority, after
 * whatever the page needs first.
 *
 * Renders spans only (phrasing content), so it can sit inside a button.
 */
export function ImageStack({
  images,
  active = 0,
  sizes,
  preload,
  unoptimized,
  className,
}: ImageStackProps) {
  return images.map((image, index) => {
    const isActive = index === active;
    const isPreloaded = preload && index === 0;

    return (
      <span
        key={image.src.src}
        aria-hidden={!isActive}
        className={cn(
          "absolute inset-0 block transition-opacity duration-300 ease-out motion-reduce:transition-none",
          isActive ? "opacity-100" : "opacity-0",
        )}
      >
        <BlurImage
          src={image.src}
          alt={image.alt}
          sizes={sizes}
          unoptimized={unoptimized}
          preload={isPreloaded}
          fetchPriority={isActive || isPreloaded ? undefined : "low"}
          className={className}
        />
      </span>
    );
  });
}
