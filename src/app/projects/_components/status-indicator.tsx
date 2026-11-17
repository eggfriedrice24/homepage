import type { Project } from "@/data/projects";

import { cn } from "@/lib/utils";

export const statusLabels: Record<Project["status"], string> = {
  development: "In Development",
  live: "Live",
  archived: "Archived",
};

const statusColors: Record<Project["status"], string> = {
  development: "bg-yellow-400 dark:bg-egg-yellow",
  live: "bg-green-400 dark:bg-egg-green",
  archived: "bg-gray-400 dark:bg-egg-comment",
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
