import { Heart } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { TimelineCarousel } from "./_components/timeline-carousel";

export default function HomePage() {
  return (
    <article className="space-y-6">
      <section className="animate-rise space-y-4" aria-labelledby="what-i-do-heading">
        <h2 id="what-i-do-heading" className="w-fit border-b pb-2 font-semibold">What I do</h2>

        <p className="text-sm text-muted-foreground">
          Full-stack engineer who loves building products from the ground up. I
          work mostly with TypeScript, React, and Next.js on the frontend, and
          Go for backend services. Particularly drawn to decentralized and
          distributed systems - P2P networks, service meshes, and anything that
          scales horizontally. Also fascinated by lower-level stuff, memory
          management, hardware, and systems programming with Rust. I enjoy the
          whole spectrum, from polished UIs to bare-metal performance.
        </p>
      </section>

      <section className="animate-rise animate-delay-1 space-y-4" aria-labelledby="currently-heading">
        <div className="flex w-max items-center gap-2 border-b pb-2">
          <span
            className="size-2 animate-pulse rounded-full bg-green-400 dark:bg-egg-green"
            aria-hidden="true"
          />
          <h2 id="currently-heading" className="w-fit font-semibold">Currently</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Working full-time on
          {" "}
          <span className="font-medium text-foreground">Tether</span>
          &apos;s mining team, employed through
          {" "}
          <span className="font-medium text-sky-400">Noxtton</span>
          , a Tether company. I build
          {" "}
          <Link href="/projects/mdk" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">MDK</Link>
          {" "}
          and
          {" "}
          <Link href="/projects/miningos" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">MiningOS</Link>
          , Tether&apos;s open-source stack for running Bitcoin mining sites,
          from the peer-to-peer workers that talk to miners to the dashboards
          operators use every day.
        </p>
      </section>

      <section className="animate-rise animate-delay-2 space-y-4" aria-labelledby="open-source-heading">
        <h2 id="open-source-heading" className="w-fit border-b pb-2 font-semibold">Open source</h2>

        <p className="text-sm text-muted-foreground">
          I think the software behind real infrastructure should be open, so
          anyone can run it, read it and fix it. MDK and MiningOS are built in
          public under the Apache 2.0 licence, and my own projects live on
          GitHub too. Outside work I contribute to the tools I use every day,
          like
          {" "}
          <Link href="/projects/t3code" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">T3 Code</Link>
          , where I am a vouched contributor. More on the
          {" "}
          <Link href="/projects" className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary">projects page</Link>
          .
        </p>
      </section>

      <TimelineCarousel />

      <section
        className="animate-rise animate-delay-4 space-y-4"
        aria-labelledby="interests-heading"
      >
        <h2
          id="interests-heading"
          className="flex w-fit items-center gap-2 border-b pb-2 font-semibold"
        >
          <span>I</span>
          <Heart
            className="size-4 fill-pink-500 text-pink-500 dark:fill-egg-red dark:text-egg-red"
            aria-hidden="true"
          />
          <span className="sr-only">love</span>
        </h2>

        <p className="text-sm text-muted-foreground">
          coding, skiing, hiking, reading, movies, manga, anime, sports:
          especially
          {" "}
          <span className="text-primary" aria-hidden="true">-&gt;</span>
          {" "}
          football.
        </p>
      </section>

      <Separator className="animate-rise animate-delay-5 my-12" />

      <aside className="animate-rise animate-delay-6 space-y-4">
        <p className="text-sm text-muted-foreground">
          If you like what I do and want to collaborate, feel free to reach out
          via social links in the navigation below.
        </p>
      </aside>
    </article>
  );
}
