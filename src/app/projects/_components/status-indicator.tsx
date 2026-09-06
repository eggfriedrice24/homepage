import type { Project } from "@/data/projects";

import { cn } from "@/lib/utils";

const statusConfig = {
  development: { color: "bg-yellow-400", label: "In Development" },
  live: { color: "bg-green-400", label: "Live" },
  archived: { color: "bg-gray-400", label: "Archived" },
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
        statusConfig[status].color,
        className,
      )}
      aria-hidden="true"
    />
  );
}

type StatusIndicatorProps = {
  status: Project["status"];
};

export function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <StatusDot status={status} />
      <span className="text-xs text-muted-foreground">
        {statusConfig[status].label}
      </span>
    </span>
  );
}
