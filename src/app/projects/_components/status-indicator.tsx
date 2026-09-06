import type { Project } from "@/data/projects";

import { cn } from "@/lib/utils";

export const statusLabels: Record<Project["status"], string> = {
  development: "In Development",
  live: "Live",
  archived: "Archived",
};

const statusColors: Record<Project["status"], string> = {
  development: "bg-yellow-400",
  live: "bg-green-400",
  archived: "bg-gray-400",
};

type StatusDotProps = {
  status: Project["status"];
  className?: string;
};

export function StatusDot({ status, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "size-2 shrink-0 rounded-full",
        statusColors[status],
        className,
      )}
      aria-hidden="true"
    />
  );
}
