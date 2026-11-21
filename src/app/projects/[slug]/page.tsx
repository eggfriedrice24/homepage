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
      <nav aria-label="Breadcrumb">
        <Link
          href="/projects"
          className="animate-rise inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Projects</span>
        </Link>
      </nav>

      <header className="animate-rise animate-delay-1 mb-3.5 mt-5 flex flex-wrap items-baseline gap-2.5">
        <h1 className="text-base font-semibold tracking-[-0.01em]">
          {project.name}
        </h1>
        <StatusDot status={project.status} className="size-1.5" />
        <span className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          {statusLabels[project.status]}
          {project.role && ` · ${project.role}`}
        </span>
        <span className="ml-auto flex gap-4 font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          {project.links?.map(link => (
            <ExternalLink
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
              aria-label={`${link.label} for ${project.name}`}
            >
              {link.label}
              {" "}
              &#8599;
            </ExternalLink>
          ))}
          {project.url && (
            <ExternalLink
              href={project.url}
              className="transition-colors hover:text-foreground"
              aria-label={`Source for ${project.name}`}
            >
              source &#8599;
            </ExternalLink>
          )}
        </span>
      </header>

      <ProjectGallery slug={project.slug} images={project.screenshots} />

      <p className="animate-rise animate-delay-4 mt-[22px] text-pretty text-sm leading-[1.7] text-muted-foreground">
        {project.description}
      </p>

      {project.details?.map(paragraph => (
        <p
          key={paragraph}
          className="animate-rise animate-delay-4 mt-4 text-pretty text-sm leading-[1.7] text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}

      {project.features && project.features.length > 0 && (
        <ul className="animate-rise animate-delay-5 mt-[22px] list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
          {project.features.map(feature => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      {/* Inline items with CSS separators, so it wraps like the old joined
          string did while reading as a list. */}
      <ul
        role="list"
        className="animate-rise animate-delay-6 mt-6 text-pretty font-mono text-[11px] leading-[1.9] tracking-[0.04em] text-muted-foreground"
        aria-label="Technologies used"
      >
        {project.tech.map(tech => (
          <li key={tech} className="inline after:content-['_·_'] last:after:content-none">
            {tech}
          </li>
        ))}
      </ul>

      <nav
        className="animate-rise animate-delay-7 mt-10 flex justify-between gap-4 border-t pt-4 text-[13px]"
        aria-label="Project navigation"
      >
        <Link
          href={`/projects/${previous.slug}`}
          className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span aria-hidden="true">&larr;</span>
          <span>
            <span className="sr-only">Previous project: </span>
            {previous.name}
          </span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="inline-flex items-center gap-1.5 text-right text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>
            <span className="sr-only">Next project: </span>
            {next.name}
          </span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </nav>
    </article>
  );
}
