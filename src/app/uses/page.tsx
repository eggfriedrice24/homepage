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

// Seven stagger steps exist (animate-delay-1..7); later sections share the last.
const DELAYS = [
  "animate-delay-1",
  "animate-delay-2",
  "animate-delay-3",
  "animate-delay-4",
  "animate-delay-5",
  "animate-delay-6",
  "animate-delay-7",
];

export default function UsesPage() {
  return (
    <div className="space-y-10">
      <section className="animate-rise space-y-2">
        <h2 className="text-2xl font-bold tracking-[-0.01em]">Uses</h2>
        <p className="text-sm text-muted-foreground">
          {description}
          {" "}
          Everything runs the same eggfriedrice palette.
        </p>
      </section>

      {uses.map((section, index) => (
        <section
          key={section.title}
          className={`animate-rise ${DELAYS[Math.min(index, DELAYS.length - 1)]} space-y-3`}
          aria-labelledby={`uses-${index}`}
        >
          <header className="space-y-1">
            <h3 id={`uses-${index}`} className="w-fit border-b pb-2 font-semibold">
              {section.title}
            </h3>
            {section.description && (
              <p className="pt-1 text-sm text-muted-foreground">{section.description}</p>
            )}
          </header>

          <dl className="divide-y divide-border/60">
            {section.items.map(item => (
              <div
                key={`${item.label}-${item.name}`}
                className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4 py-2 text-sm"
              >
                <dt className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="min-w-0">
                  {item.href
                    ? (
                        <Link
                          href={item.href}
                          className="font-medium underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                        >
                          {item.name}
                        </Link>
                      )
                    : <span className="font-medium">{item.name}</span>}
                  {item.note && (
                    <span className="text-muted-foreground">
                      {" "}
                      &middot;
                      {" "}
                      {item.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
