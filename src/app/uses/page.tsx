import type { Metadata } from "next";

import Link from "next/link";

import { uses } from "@/data/uses";

const description = "The hardware and software I use every day.";

export const metadata: Metadata = {
  title: "Uses",
  description,
  openGraph: {
    title: "Uses | Ikako",
    description,
  },
};

// The intro rises first, the section index one step later, then each section
// a step after that. Seven stagger steps exist; later sections share the last.
const DELAYS = [
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
  "animate-delay-5",
  "animate-delay-6",
  "animate-delay-7",
];
const delay = (step: number) => DELAYS[Math.min(step, DELAYS.length) - 1];

function slug(title: string) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");
}

const pad = (count: number) => String(count).padStart(2, "0");

export default function UsesPage() {
  return (
    <div>
      <header className="animate-rise">
        <h1 className="sr-only">Uses</h1>
        <p className="text-pretty text-sm text-muted-foreground">
          {description}
          {" "}
          Everything runs the same eggfriedrice palette.
        </p>
      </header>

      <nav
        aria-label="On this page"
        className={`animate-rise ${delay(1)} mt-5`}
      >
        <ul role="list" className="flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-[11px] tracking-[0.04em]">
          {uses.map(section => (
            <li key={section.title}>
              <a
                href={`#${slug(section.title)}`}
                className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 flex flex-col gap-11">
        {uses.map((section, index) => (
          <section
            key={section.title}
            id={slug(section.title)}
            aria-labelledby={`${slug(section.title)}-heading`}
            className={`animate-rise ${delay(index + 2)} scroll-mt-6`}
          >
            <header className="flex items-baseline gap-3">
              <h2 id={`${slug(section.title)}-heading`} className="text-sm font-semibold">{section.title}</h2>
              <span className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
                {pad(section.items.length)}
                <span className="sr-only"> items</span>
              </span>
            </header>

            {section.description && (
              <p className="mt-2 text-pretty text-[13px] leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            )}

            <dl className="mt-3.5 flex flex-col gap-3">
              {section.items.map(item => (
                <div
                  key={`${item.label}-${item.name}`}
                  className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-4"
                >
                  <dt className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="min-w-0">
                    {item.href
                      ? (
                          <Link
                            href={item.href}
                            className="inline-flex items-baseline gap-1.5 text-sm font-medium transition-colors duration-150 hover:text-primary"
                          >
                            <span>{item.name}</span>
                            <span aria-hidden="true" className="text-xs text-primary">&rarr;</span>
                          </Link>
                        )
                      : <span className="text-sm font-medium">{item.name}</span>}
                    {item.note && (
                      <p className="mt-0.5 text-pretty text-[13px] leading-normal text-muted-foreground">
                        {item.note}
                      </p>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
