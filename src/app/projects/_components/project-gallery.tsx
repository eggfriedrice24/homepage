"use client";

import { useCallback, useEffect, useState } from "react";

import type { ProjectImage } from "@/data/projects";

import { BlurImage } from "@/components/blur-image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { HERO_SIZES, stripSizes, warmImage } from "./image-sizes";
import { ImageStack } from "./image-stack";
import { HATCH, ProjectThumbnail } from "./project-thumbnail";

const pad = (index: number) => String(index + 1).padStart(2, "0");

type ProjectGalleryProps = {
  slug: string;
  /** Empty means the project has no art yet; one hatch placeholder shows. */
  images?: ProjectImage[];
};

export function ProjectGallery({ slug, images = [] }: ProjectGalleryProps) {
  const total = Math.max(1, images.length);
  const [shot, setShot] = useState(0);
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const step = useCallback(
    (delta: number) => {
      setShot(current => (current + delta + total) % total);
    },
    [total],
  );

  // Radix handles Escape, focus and scroll locking. Arrow keys are ours.
  useEffect(() => {
    if (!isPreviewOpen)
      return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight")
        step(1);
      if (event.key === "ArrowLeft")
        step(-1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPreviewOpen, step]);

  const image = images[shot];
  const label = `${slug} ${pad(shot)}`;
  const counter = `${pad(shot)} / ${pad(total - 1)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setPreviewOpen(true)}
        // Intent to open: start fetching the full-size original now so the
        // lightbox has it by the time the click lands.
        onPointerEnter={() => image && warmImage(image.src, { unoptimized: true })}
        onFocus={() => image && warmImage(image.src, { unoptimized: true })}
        aria-label={`Open ${slug} preview`}
        className="animate-rise animate-delay-2 group block w-full cursor-zoom-in"
      >
        <ProjectThumbnail
          label={label}
          images={images}
          active={shot}
          sizes={HERO_SIZES}
          preload
          className="aspect-video transition-colors duration-200 group-hover:border-primary"
        >
          <span className="absolute bottom-2.5 right-3 font-mono text-[10px] tracking-wider text-muted-foreground">
            {counter}
          </span>
        </ProjectThumbnail>
      </button>

      {total > 1 && (
        <div className="animate-rise animate-delay-3 mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] gap-2">
          {images.map((thumb, index) => (
            <button
              key={thumb.src.src}
              type="button"
              onClick={() => setShot(index)}
              aria-label={`Show ${slug} image ${pad(index)}`}
              aria-current={index === shot}
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-md border bg-card transition duration-200 hover:opacity-100",
                index === shot ? "border-primary opacity-100" : "opacity-55",
              )}
            >
              <BlurImage
                src={thumb.src}
                alt=""
                sizes={stripSizes(images.length)}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <Dialog open={isPreviewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent
          showCloseButton={false}
          // As wide as the window allows while the 16:9 shot, its counter
          // line and the 6rem of arrow buttons still fit the height.
          className="flex w-[min(94vw,calc((100dvh-7rem)*16/9+6rem))] max-w-none flex-col gap-4 border-none bg-transparent p-0 shadow-none sm:max-w-none"
        >
          <DialogTitle className="sr-only">
            {`${slug} preview, image ${counter}`}
          </DialogTitle>

          <div className="flex w-full items-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="inline-flex size-9 flex-none items-center justify-center rounded-full border border-white/30 text-sm text-white transition-colors hover:bg-white/15"
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div className="relative aspect-video flex-1 overflow-hidden rounded-xl border border-white/20 bg-card">
              {images.length > 0
                ? (
                    // Full-size originals: these are already compressed WebP,
                    // and re-encoding blurs the small text in screenshots.
                    <ImageStack
                      images={images}
                      active={shot}
                      unoptimized
                      className="object-contain"
                    />
                  )
                : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{ backgroundImage: HATCH }}
                        aria-hidden="true"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-wider text-muted-foreground">
                        {label}
                      </span>
                    </>
                  )}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="inline-flex size-9 flex-none items-center justify-center rounded-full border border-white/30 text-sm text-white transition-colors hover:bg-white/15"
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <p className="text-center font-mono text-[11px] tracking-[0.08em] text-white">
            {counter}
            {" "}
            &middot; esc to close
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
