import type { Metadata } from "next";

import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've been working on. Full-stack applications, open source contributions, and experiments.",
  openGraph: {
    title: "Projects | Ikako",
    description: "A collection of projects I've been working on. Full-stack applications, open source contributions, and experiments.",
  },
};

type Project = {
  name: string;
  description: string;
  tech: string[];
  features: string[];
  status: "development" | "live" | "archived";
  url?: string;
};

const projects: Project[] = [
  {
    name: "Tally",
    description: "Modern accounting & invoicing platform for small businesses and teams. A multi-tenant SaaS application for managing financial workflows.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tauri",
      "OpenAI GPT-4",
      "TailwindCSS",
    ],
    features: [
      "AI-powered invoice creation with natural language",
      "Multi-tenant architecture with RBAC",
      "Cross-platform desktop app (macOS, Windows, Linux)",
      "Invoice PDF generation with customizable templates",
      "Financial reporting and analytics",
    ],
    status: "development",
  },
];

function StatusIndicator({ status }: { status: Project["status"] }) {
  const colors = {
    development: "bg-yellow-400",
    live: "bg-green-400",
    archived: "bg-gray-400",
  };

  const labels = {
    development: "In Development",
    live: "Live",
    archived: "Archived",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`size-2 animate-pulse rounded-full ${colors[status]}`} />
      <span className="text-xs text-muted-foreground">{labels[status]}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_0ms_both] space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-sm text-muted-foreground">
          A collection of projects I&apos;ve been working on.
        </p>
      </section>

      <section className="grid gap-6" aria-label="Project list">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="animate-[slide-down-fade_0.6s_cubic-bezier(0.16,1,0.3,1)_both]"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {project.name}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLink className="size-4" aria-hidden="true" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <StatusIndicator status={project.status} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Features</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {project.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Tech Stack</h3>
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tech.map(tech => (
                      <li key={tech}>
                        <Badge variant="secondary">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </section>
    </div>
  );
}
