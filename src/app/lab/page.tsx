import type { Metadata } from "next";

import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Lab",
  description: "Experiments, component explorations, and creative coding projects.",
  openGraph: {
    title: "Lab | Ikako",
    description: "Experiments, component explorations, and creative coding projects.",
  },
};

export default function LabPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-4" aria-labelledby="lab-heading">
      <div className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_0ms_both]">
        <FlaskConical className="size-16 text-emerald-500" aria-hidden="true" />
      </div>

      <div className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_100ms_both] space-y-2 text-center">
        <h2 id="lab-heading" className="text-2xl font-bold">Lab</h2>
        <p className="text-sm text-muted-foreground">
          Experiments and components coming soon.
        </p>
      </div>
    </section>
  );
}
