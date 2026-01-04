import { Heart } from "lucide-react";

import { BowlLoader } from "@/components/three/bowl-loader";
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
    <div className="relative">
      <div className="fixed right-8 top-1/4 hidden lg:block">
        <BowlLoader />
      </div>

      <div className="space-y-11 lg:max-w-xl">
        <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_0ms_both] rounded-md border bg-secondary px-4 py-2">
          <span className="inline-flex animate-[background-shine_2s_linear_infinite] bg-[linear-gradient(110deg,hsl(var(--foreground)),45%,hsl(var(--primary)),55%,hsl(var(--foreground)))] bg-[length:200%_100%] bg-clip-text text-sm font-bold text-transparent">
            👋 Hello there! I&apos;m Ikako, software engineer from Tbilisi,
            Georgia. Currently based in UK, London.
          </span>
        </section>

        <div className="flex justify-center lg:hidden">
          <BowlLoader />
        </div>

        <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_100ms_both] space-y-4">
          <h3 className="w-fit border-b pb-2 font-semibold">What I do</h3>

          <p className="text-sm text-muted-foreground">
            As an engineer, I love crafting smooth and user-friendly digital
            experiences, optimize server-side logic, and design efficient APIs
            that power the web. Thanks to my knack for TypeScript, I can keep the
            code clean and easy to work with, making those big projects a whole
            lot simpler to manage. When I&apos;m not coding, I&apos;m usually
            exploring new tech or fine-tuning my engineering skills.
          </p>
        </section>

        <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_200ms_both] space-y-4">
          <div className="flex w-max items-center gap-2 border-b pb-2">
            <div className="size-2 animate-pulse rounded-full bg-green-400" />
            <h3 className="w-fit font-semibold">Currently</h3>
          </div>

          <p className="text-sm text-muted-foreground">
            I&apos;m trying to level-up my dev skills by expanding my knowledge
            arsenal, mainly learning golang and rust, working on several projects
            at work while attending university. I&apos;m also in search of good
            open source projects to contribute to.
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
    </div>
  );
}
