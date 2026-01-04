"use client";

import dynamic from "next/dynamic";

const EggFriedRiceBowl = dynamic(
  () => import("@/components/three/egg-fried-rice-bowl").then(mod => mod.EggFriedRiceBowl),
  { ssr: false },
);

export function BowlLoader() {
  return <EggFriedRiceBowl />;
}
