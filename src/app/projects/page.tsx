import type { Metadata } from "next";

import { projects } from "@/data/projects";

import { CARD_SIZES } from "./_components/image-sizes";
import { ProjectCardLink } from "./_components/project-card-link";
import { ProjectThumbnail } from "./_components/project-thumbnail";

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
      <section className="animate-rise space-y-2">
        <h2 className="text-2xl font-bold tracking-[-0.01em]">Projects</h2>
        <p className="text-sm text-muted-foreground">
          A collection of things I&apos;ve been building.
        </p>
      </section>

      <section
        className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-x-5 gap-y-7"
        aria-label="Project list"
      >
        {projects.map((project, index) => (
          <ProjectCardLink
            key={project.slug}
            href={`/projects/${project.slug}`}
            hero={project.screenshots?.[0]?.src}
            className="group animate-rise block"
            style={{ animationDelay: `calc(var(--rise-base, 0.6s) + ${index * 60}ms)` }}
          >
            <ProjectThumbnail
              label={project.slug}
              images={project.thumbnail && [project.thumbnail]}
              sizes={CARD_SIZES}
              // The first row is the largest content on load; the rest are
              // lazy and start as they near the viewport.
              preload={index < 2}
              status={project.status}
              className="aspect-[4/3] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] group-hover:border-primary group-hover:shadow-lg"
            />
            <p className="mt-2.5 truncate text-center text-sm font-medium">
              {project.name}
            </p>
          </ProjectCardLink>
        ))}
      </section>
    </div>
  );
}
