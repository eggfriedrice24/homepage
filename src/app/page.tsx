import { Heart } from "lucide-react";

import { Separator } from "@/components/ui/separator";

type TimelineEvent = {
  year: string;
  content: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "1996",
    content: "Born in Tbilisi, Georgia.",
  },
  {
    year: "2014",
    content: "Got accepted in CU (Caucasus University).",
  },
  {
    year: "2018",
    content: "Started working as a financial analyst.",
  },
  {
    year: "2022",
    content:
      "Left then current role and started working as a front-end engineer.",
  },
  {
    year: "2023",
    content:
      "Got accepted in University of Essex for BSc in Computer Science and relocated to UK.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-11">
      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_100ms_both] space-y-4">
        <h3 className="w-fit border-b pb-2 font-semibold">What I do</h3>

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

      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_200ms_both] space-y-4">
        <div className="flex w-max items-center gap-2 border-b pb-2">
          <div className="size-2 animate-pulse rounded-full bg-green-400" />
          <h3 className="w-fit font-semibold">Currently</h3>
        </div>

        <p className="text-sm text-muted-foreground">
          Building
          {" "}
          <span className="font-medium text-foreground">Tally</span>
          , a
          modern accounting &amp; invoicing platform with AI-powered invoice
          creation, multi-tenant architecture, and a cross-platform desktop app
          built with Tauri. Also working on my capstone project
          {" "}
          <span className="font-medium text-foreground">t-mesh</span>
          , a
          distributed P2P translation service mesh in Go featuring a CLI
          orchestrator, PostgreSQL backend, and intelligent worker selection.
          Final year at University of Essex, graduating 2026.
        </p>
      </section>

      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_300ms_both] space-y-4">
        <h3 className="w-fit border-b pb-2 font-semibold">Bio</h3>

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

      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_400ms_both] space-y-4">
        <h3 className="flex w-fit items-center gap-2 border-b pb-2 font-semibold">
          I
          {" "}
          <Heart className="size-4 fill-pink-500 text-pink-500" />
        </h3>

        <p className="text-sm text-muted-foreground">
          coding, skiing, hiking, reading, movies, manga, anime, sports:
          especially
          {" "}
          <span className="text-primary">-&gt;</span>
          {" "}
          football.
        </p>
      </section>

      <Separator className="my-12 animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_500ms_both]" />

      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_600ms_both] space-y-4">
        <p className="text-sm text-muted-foreground">
          If you like what I do and want to collaborate, feel free to reach out
          via social links in the navigation below.
        </p>
      </section>
    </div>
  );
}
