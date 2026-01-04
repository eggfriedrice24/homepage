export type Project = {
  name: string;
  description: string;
  tech: string[];
  features: string[];
  status: "development" | "live" | "archived";
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Tally",
    description:
      "Modern accounting & invoicing platform for small businesses and teams. A multi-tenant SaaS application for managing financial workflows.",
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
