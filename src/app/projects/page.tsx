import type { Metadata } from "next";

import type { Project } from "@/data/projects";

import { projects } from "@/data/projects";

import { CARD_SIZES } from "./_components/image-sizes";
import { ProjectCardLink } from "./_components/project-card-link";
import { ProjectThumbnail } from "./_components/project-thumbnail";

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source work at Tether and beyond, and the things I build on my own.",
  openGraph: {
    title: "Projects | Ikako",
    description: "Open-source work at Tether and beyond, and the things I build on my own.",
  },
};

const GROUPS: { category: Project["category"]; title: string }[] = [
  { category: "open-source", title: "Open Source" },
  { category: "personal", title: "Personal" },
];

function rise(step: number) {
  return {
    animationDelay: `calc(var(--rise-base, 0.6s) + ${step * 60}ms)`,
  };
}

export default function ProjectsPage() {
  // One stagger across both grids, so the second group keeps rising where the
  // first one stopped. Each group's header takes a step of its own.
  let step = 0;

  return (
    <div className="space-y-10">
      {GROUPS.map((group) => {
        const items = projects.filter(project => project.category === group.category);
        const headerStep = ++step;

        return (
          <section key={group.category} aria-labelledby={`group-${group.category}`} className="space-y-4">
            <h2
              id={`group-${group.category}`}
              className="animate-rise text-base font-semibold tracking-[-0.01em]"
              style={rise(headerStep)}
            >
              {group.title}
            </h2>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-x-5 gap-y-7">
              {items.map((project) => {
                const cardStep = ++step;

                return (
                  <ProjectCardLink
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    hero={project.screenshots?.[0]?.src}
                    className="group animate-rise block"
                    style={rise(cardStep)}
                  >
                    <ProjectThumbnail
                      label={project.slug}
                      images={project.thumbnail && [project.thumbnail]}
                      sizes={CARD_SIZES}
                      // The first row is the largest content on load; the
                      // rest are lazy and start as they near the viewport.
                      preload={projects.indexOf(project) < 2}
                      status={project.status}
                      className="aspect-[4/3] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[3px] group-hover:border-primary group-hover:shadow-lg"
                    />
                    <p className="mt-2.5 truncate text-center text-sm font-medium">
                      {project.name}
                    </p>
                  </ProjectCardLink>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
