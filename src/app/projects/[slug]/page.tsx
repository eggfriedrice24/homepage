import type { Metadata } from "next";

import Link from "next/link";
import { notFound } from "next/navigation";

import { ExternalLink } from "@/components/external-link";
import { getProjectBySlug, projects } from "@/data/projects";

import { ProjectGallery } from "../_components/project-gallery";
import { StatusDot, statusLabels } from "../_components/status-indicator";

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
        className="animate-rise inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden="true">&larr;</span>
        <span>Projects</span>
      </Link>

      <header className="animate-rise animate-delay-1 mb-3.5 mt-5 flex flex-wrap items-baseline gap-2.5">
        <h2 className="text-base font-semibold tracking-[-0.01em]">
          {project.name}
        </h2>
        <StatusDot status={project.status} className="size-1.5" />
        <span className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          {statusLabels[project.status]}
        </span>
        {project.url && (
          <ExternalLink
            href={project.url}
            className="ml-auto font-mono text-[11px] tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Source for ${project.name}`}
          >
            source &#8599;
          </ExternalLink>
        )}
      </header>

      <ProjectGallery slug={project.slug} />

      <p className="animate-rise animate-delay-4 mt-[22px] text-pretty text-sm leading-[1.7] text-muted-foreground">
        {project.description}
      </p>

      <ul className="animate-rise animate-delay-5 mt-[22px] flex flex-col gap-1.5">
        {project.features.map(feature => (
          <li
            key={feature}
            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              className="mt-[0.6em] h-px w-3 shrink-0 bg-border"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p
        className="animate-rise animate-delay-6 mt-6 text-pretty font-mono text-[11px] leading-[1.9] tracking-[0.04em] text-muted-foreground"
        aria-label="Technologies used"
      >
        {project.tech.join("  ·  ")}
      </p>

      <nav
        className="animate-rise animate-delay-7 mt-10 flex justify-between gap-4 border-t pt-4 text-[13px]"
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
