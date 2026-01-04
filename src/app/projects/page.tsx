import type { Metadata } from "next";

import { ExternalLink as ExternalLinkIcon } from "lucide-react";

import { ExternalLink } from "@/components/external-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

import { StatusIndicator } from "./_components/status-indicator";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've been working on. Full-stack applications, open source contributions, and experiments.",
  openGraph: {
    title: "Projects | Ikako",
    description: "A collection of projects I've been working on. Full-stack applications, open source contributions, and experiments.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="animate-in animate-in-1 space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-sm text-muted-foreground">
          A collection of projects I&apos;ve been working on.
        </p>
      </section>

      <section className="grid gap-6" aria-label="Project list">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="animate-in"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {project.name}
                      {project.url && (
                        <ExternalLink
                          href={project.url}
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLinkIcon className="size-4" aria-hidden="true" />
                        </ExternalLink>
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
