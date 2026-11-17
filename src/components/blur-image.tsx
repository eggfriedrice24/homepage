"use client";

import type { ImageProps, StaticImageData } from "next/image";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// Flips once the first commit's effects run. Refs of images rendered during
// hydration see `false`, so a page load always gets the blur-up; images
// mounted later (client navigation back to a page) see `true`.
let hasHydrated = false;

type Phase = "loading" | "loaded" | "cached";

type BlurImageProps = Omit<ImageProps, "src" | "placeholder" | "onLoad" | "fill"> & {
  src: StaticImageData;
};

/**
 * A filled next/image that starts as the build-time blurred preview and
 * sharpens into the real image once its bytes arrive. An image that is
 * already in the browser cache when mounted after hydration shows at once,
 * since there is nothing to wait for. The parent must be `relative` with
 * `overflow-hidden`.
 */
export function BlurImage({ src, alt, className, ...props }: BlurImageProps) {
  const [phase, setPhase] = useState<Phase>("loading");

  useEffect(() => {
    hasHydrated = true;
  }, []);

  // A layout-phase update, so a cached image never paints its blurred state.
  const ref = useCallback((img: HTMLImageElement | null) => {
    if (img && hasHydrated && img.complete && img.naturalWidth > 0)
      setPhase("cached");
  }, []);

  const isShown = phase !== "loading";
  const animates = phase !== "cached";

  return (
    <>
      {src.blurDataURL && (
        <span
          aria-hidden="true"
          data-blur-image=""
          className={cn(
            "absolute inset-0 scale-110 bg-cover bg-center blur-xl",
            animates && "transition-opacity duration-700 motion-reduce:transition-none",
            isShown && "opacity-0",
          )}
          style={{ backgroundImage: `url(${src.blurDataURL})` }}
        />
      )}
      <Image
        ref={ref}
        src={src}
        alt={alt}
        fill
        data-blur-image=""
        onLoad={() => setPhase(current => (current === "cached" ? current : "loaded"))}
        className={cn(
          animates
          && "transition-[opacity,filter,scale] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          isShown ? "scale-100 opacity-100 blur-none" : "scale-[1.03] opacity-0 blur-lg",
          className,
        )}
        {...props}
      />
    </>
  );
}
