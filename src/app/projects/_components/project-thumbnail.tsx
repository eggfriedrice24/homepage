import type { ReactNode } from "react";

import type { Project, ProjectImage } from "@/data/projects";

import { cn } from "@/lib/utils";

import { ImageStack } from "./image-stack";
import { StatusDot } from "./status-indicator";

// Diagonal hatch placeholder for projects without art yet. Uses the theme
// token so it follows light/dark rather than a baked-in colour.
export const HATCH
  = "repeating-linear-gradient(45deg, var(--muted) 0px, var(--muted) 1px, transparent 1px, transparent 9px)";

type ProjectThumbnailProps = {
  label: string;
  /** One image for a card, or a gallery's shots with `active` showing. */
  images?: ProjectImage[];
  active?: number;
  sizes: string;
  preload?: boolean;
  status?: Project["status"];
  className?: string;
  /** Extra overlay content, e.g. the gallery's shot counter. */
  children?: ReactNode;
};

export function ProjectThumbnail({
  label,
  images = [],
  active,
  sizes,
  preload,
  status,
  className,
  children,
}: ProjectThumbnailProps) {
  // Spans only (phrasing content), so it can sit inside the gallery's button.
  return (
    <span
      className={cn(
        "relative block overflow-hidden rounded-xl border bg-card",
        className,
      )}
    >
      {images.length > 0
        ? (
            <ImageStack
              images={images}
              active={active}
              sizes={sizes}
              preload={preload}
              className="object-cover"
            />
          )
        : (
            <>
              <span
                className="absolute inset-0 block"
                style={{ backgroundImage: HATCH }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-sm bg-card px-2 py-1 font-mono text-[11px] tracking-wider text-muted-foreground">
                  {label}
                </span>
              </span>
            </>
          )}

      {status && (
        <StatusDot status={status} className="absolute right-2.5 top-2.5" />
      )}

      {children}
    </span>
  );
}
