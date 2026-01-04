import { Heart } from "lucide-react";

import { FluxxText } from "@/components/fluxx-text";
import { Separator } from "@/components/ui/separator";

import { TimelineCarousel } from "./_components/timeline-carousel";

export default function HomePage() {
  return (
    <article className="space-y-6">
      <section className="animate-in animate-in-2 space-y-4" aria-labelledby="what-i-do-heading">
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

      <section className="animate-in animate-in-3 space-y-4" aria-labelledby="currently-heading">
        <div className="flex w-max items-center gap-2 border-b pb-2">
          <span
            className="size-2 animate-pulse rounded-full bg-green-400"
            aria-hidden="true"
          />
          <h2 id="currently-heading" className="w-fit font-semibold">Currently</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Working full-time at
          {" "}
          <span className="font-medium text-sky-400">Noxtton</span>
          . On the
          side, building
          {" "}
          <span className="font-medium text-foreground">Tally</span>
          {" "}
          under
          {" "}
          <FluxxText />
          , a modern accounting & invoicing platform with AI-powered invoice
          creation, multi-tenant architecture, and a cross-platform desktop app
          built with Tauri. Also working on my capstone project
          {" "}
          <span className="font-medium text-foreground">t-mesh</span>
          , a
          decentralized P2P translation service mesh in Go using libp2p,
          featuring CLI-based job orchestration and AI-powered worker selection.
          Final year at University of Essex, graduating 2026.
        </p>
      </section>

      <TimelineCarousel />

      <section
        className="animate-in animate-in-5 space-y-4"
        aria-labelledby="interests-heading"
      >
        <h2
          id="interests-heading"
          className="flex w-fit items-center gap-2 border-b pb-2 font-semibold"
        >
          <span>I</span>
          <Heart
            className="size-4 fill-pink-500 text-pink-500"
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

      <Separator className="animate-in animate-in-6 my-12" />

      <aside className="animate-in animate-in-7 space-y-4">
        <p className="text-sm text-muted-foreground">
          If you like what I do and want to collaborate, feel free to reach out
          via social links in the navigation below.
        </p>
      </aside>
    </article>
  );
}
