import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { ExternalLink } from "@/components/external-link";
import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/data/projects";

import { ProjectThumbnail } from "../_components/project-thumbnail";
import { StatusIndicator } from "../_components/status-indicator";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Ikako`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <Link
        href="/projects"
        className="animate-rise mb-7 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Projects</span>
      </Link>

      <div className="animate-rise animate-delay-1">
        <ProjectThumbnail
          label={`${project.slug} screenshot`}
          className="aspect-video"
        />
      </div>

      <header
        className="animate-rise animate-delay-2 mt-6 flex flex-wrap items-center gap-3"
      >
        <h2 className="text-2xl font-bold tracking-[-0.01em]">
          {project.name}
        </h2>
        <StatusIndicator status={project.status} />
        {project.url && (
          <ExternalLink
            href={project.url}
            className="ml-auto text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Source for ${project.name}`}
          >
            Source &#8599;
          </ExternalLink>
        )}
      </header>

      <p
        className="animate-rise animate-delay-3 mt-3 text-pretty text-sm leading-[1.7] text-muted-foreground"
      >
        {project.description}
      </p>

      <section className="animate-rise animate-delay-4 mt-8">
        <h3 className="mb-3 w-fit border-b pb-2 text-sm font-semibold">
          Features
        </h3>
        <ul className="flex flex-col gap-2">
          {project.features.map(feature => (
            <li
              key={feature}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                className="mt-[0.6em] h-px w-3 shrink-0 bg-primary"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="animate-rise animate-delay-5 mt-7">
        <h3 className="mb-3 w-fit border-b pb-2 text-sm font-semibold">
          Stack
        </h3>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map(tech => (
            <li key={tech}>
              <Badge variant="secondary">{tech}</Badge>
            </li>
          ))}
        </ul>
      </section>

      <nav
        className="animate-rise animate-delay-6 mt-10 flex justify-between gap-4 border-t pt-4 text-[13px]"
        aria-label="Project navigation"
      >
        <Link
          href={`/projects/${previous.slug}`}
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span>
          <span>{previous.name}</span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="inline-flex items-center gap-1.5 text-right text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>{next.name}</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>
    </article>
  );
}
