import type { ReactNode } from "react";

import type { Project } from "@/data/projects";

import { cn } from "@/lib/utils";

import { StatusDot } from "./status-indicator";

// Diagonal hatch placeholder standing in for a screenshot. Uses the theme
// token so it follows light/dark rather than a baked-in colour.
export const HATCH
  = "repeating-linear-gradient(45deg, var(--muted) 0px, var(--muted) 1px, transparent 1px, transparent 9px)";

type ProjectThumbnailProps = {
  label: string;
  status?: Project["status"];
  className?: string;
  /** Extra overlay content, e.g. the gallery's shot counter. */
  children?: ReactNode;
};

export function ProjectThumbnail({
  label,
  status,
  className,
  children,
}: ProjectThumbnailProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: HATCH }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-sm bg-card px-2 py-1 font-mono text-[11px] tracking-wider text-muted-foreground">
          {label}
        </span>
      </div>

      {status && (
        <StatusDot status={status} className="absolute right-2.5 top-2.5" />
      )}

      {children}
    </div>
  );
}
