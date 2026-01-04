import type { Project } from "@/data/projects";

const statusConfig = {
  development: { color: "bg-yellow-400", label: "In Development" },
  live: { color: "bg-green-400", label: "Live" },
  archived: { color: "bg-gray-400 animate-none", label: "Archived" },
};

type StatusIndicatorProps = {
  status: Project["status"];
};

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const { color, label } = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <span
        className={`size-2 animate-pulse rounded-full ${color}`}
        aria-hidden="true"
      />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
