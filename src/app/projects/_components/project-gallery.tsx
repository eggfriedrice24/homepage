"use client";

import { useCallback, useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { HATCH, ProjectThumbnail } from "./project-thumbnail";

const pad = (index: number) => String(index + 1).padStart(2, "0");

type ProjectGalleryProps = {
  slug: string;
  /** Placeholder shots until real screenshots land. */
  count?: number;
};

export function ProjectGallery({ slug, count = 4 }: ProjectGalleryProps) {
  const total = Math.max(1, count);
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

  const label = `${slug} ${pad(shot)}`;
  const counter = `${pad(shot)} / ${pad(total - 1)}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setPreviewOpen(true)}
        aria-label={`Open ${slug} preview`}
        className="animate-rise animate-delay-2 group block w-full cursor-zoom-in"
      >
        <ProjectThumbnail
          label={label}
          className="aspect-video transition-colors duration-200 group-hover:border-primary"
        >
          <span className="absolute bottom-2.5 right-3 font-mono text-[10px] tracking-wider text-muted-foreground">
            {counter}
          </span>
        </ProjectThumbnail>
      </button>

      {total > 1 && (
        <div className="animate-rise animate-delay-3 mt-2.5 grid grid-cols-[repeat(auto-fit,minmax(72px,1fr))] gap-2">
          {Array.from({ length: total }, (_, index) => (
            <button
              key={pad(index)}
              type="button"
              onClick={() => setShot(index)}
              aria-label={`Show ${slug} image ${pad(index)}`}
              aria-current={index === shot}
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-md border bg-card transition duration-200 hover:opacity-100",
                index === shot ? "border-primary opacity-100" : "opacity-55",
              )}
            >
              <span
                className="absolute inset-0"
                style={{ backgroundImage: HATCH }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-muted-foreground">
                {pad(index)}
              </span>
            </button>
          ))}
        </div>
      )}

      <Dialog open={isPreviewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent
          showCloseButton={false}
          className="flex max-w-[880px] flex-col gap-4 border-none bg-transparent p-0 shadow-none sm:max-w-[880px]"
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
              <div
                className="absolute inset-0"
                style={{ backgroundImage: HATCH }}
                aria-hidden="true"
              />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-wider text-muted-foreground">
                {label}
              </span>
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
