import { Heart } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { timelineEvents } from "@/data/timeline";

export default function HomePage() {
  return (
    <article className="space-y-11">
      <section className="animate-in animate-in-2 space-y-4">
        <h2 className="w-fit border-b pb-2 font-semibold">What I do</h2>

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

      <section className="animate-in animate-in-3 space-y-4">
        <div className="flex w-max items-center gap-2 border-b pb-2">
          <span className="size-2 animate-pulse rounded-full bg-green-400" aria-hidden="true" />
          <h2 className="w-fit font-semibold">Currently</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Building
          {" "}
          <span className="font-medium text-foreground">Tally</span>
          , a modern accounting & invoicing platform with AI-powered invoice
          creation, multi-tenant architecture, and a cross-platform desktop app
          built with Tauri. Also working on my capstone project
          {" "}
          <span className="font-medium text-foreground">t-mesh</span>
          , a decentralized P2P translation service mesh in Go using libp2p,
          featuring CLI-based job orchestration and AI-powered worker selection.
          Final year at University of Essex, graduating 2026.
        </p>
      </section>

      <section className="animate-in animate-in-4 space-y-4" aria-labelledby="bio-heading">
        <h2 id="bio-heading" className="w-fit border-b pb-2 font-semibold">Bio</h2>

        <div className="relative" aria-label="Timeline">
          <div
            className="absolute left-16 top-0 h-full w-0.5 bg-border"
            role="presentation"
          />

          <ol className="relative list-none p-0">
            {timelineEvents.map(event => (
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
      </section>

      <section className="animate-in animate-in-5 space-y-4" aria-labelledby="interests-heading">
        <h2 id="interests-heading" className="flex w-fit items-center gap-2 border-b pb-2 font-semibold">
          <span>I</span>
          <Heart className="size-4 fill-pink-500 text-pink-500" aria-label="love" />
        </h2>

        <p className="text-sm text-muted-foreground">
          coding, skiing, hiking, reading, movies, manga, anime, sports:
          especially
          {" "}
          <span className="text-primary">-&gt;</span>
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
