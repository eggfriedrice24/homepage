"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { CarouselApi } from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import {
  Carousel,

  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { timelineEvents } from "@/data/timeline";

const ITEMS_PER_PAGE = 4;

export function TimelineCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const result = [];
    for (let i = 0; i < timelineEvents.length; i += ITEMS_PER_PAGE) {
      result.push(timelineEvents.slice(i, i + ITEMS_PER_PAGE));
    }
    return result;
  }, []);

  const totalPages = pages.length;

  useEffect(() => {
    if (!api)
      return;

    setCurrentPage(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentPage(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section
      className="animate-in animate-in-4 space-y-4"
      aria-labelledby="bio-heading"
    >
      <div className="flex items-center justify-between">
        <h2 id="bio-heading" className="w-fit border-b pb-2 font-semibold">
          Bio
        </h2>

        {totalPages > 1 && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={scrollPrev}
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </Button>
            <span className="text-xs text-muted-foreground">
              {currentPage + 1}
              {" / "}
              {totalPages}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={scrollNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next page"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>

      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {pages.map((pageEvents, pageIndex) => (
            <CarouselItem key={pageIndex}>
              <div className="relative">
                <div
                  className="absolute left-16 top-0 h-full w-0.5 bg-border"
                  role="presentation"
                />

                <ol className="relative list-none p-0">
                  {pageEvents.map(event => (
                    <li
                      key={event.year}
                      className="relative mb-2 flex items-start gap-8 last:mb-0"
                    >
                      <time
                        dateTime={event.year}
                        className="w-12 text-right font-bold text-foreground"
                      >
                        {event.year}
                      </time>

                      <p className="flex-1 pt-[2px] text-sm text-muted-foreground">
                        {event.content}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
