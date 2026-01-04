"use client";

import dynamic from "next/dynamic";

function BowlSkeleton() {
  return (
    <div className="flex size-24 items-center justify-center">
      <div className="size-16 animate-pulse rounded-full bg-muted" />
    </div>
  );
}

const EggFriedRiceBowl = dynamic(
  () => import("@/components/three/egg-fried-rice-bowl").then(mod => mod.EggFriedRiceBowl),
  {
    ssr: false,
    loading: () => <BowlSkeleton />,
  },
);

export function BowlLoader() {
  return <EggFriedRiceBowl />;
}
