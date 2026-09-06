export type Project = {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  features: string[];
  status: "development" | "live" | "archived";
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Tally",
    slug: "tally",
    description:
      "Modern accounting and invoicing platform for small businesses and teams. A multi-tenant SaaS application for managing financial workflows, built under Fluxx.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Rust",
      "PostgreSQL",
      "Drizzle ORM",
      "Tauri",
      "Turborepo",
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
    url: "https://github.com/eggfriedrice24",
  },
  {
    name: "t-mesh",
    slug: "t-mesh",
    description:
      "Self-hosted distributed translation mesh. CLI-submitted jobs are routed by an ML-scored orchestrator across worker nodes running local MarianMT engines.",
    tech: ["Go", "libp2p", "Python", "FastAPI", "Next.js"],
    features: [
      "P2P service mesh built on libp2p",
      "ML-scored worker selection and job routing",
      "CLI-based job orchestration",
      "Local MarianMT inference on each node",
    ],
    status: "development",
    url: "https://github.com/eggfriedrice24/t-mesh",
  },
  {
    name: "rune",
    slug: "rune",
    description:
      "AI-native, local-first markdown notes with desktop and MCP creation surfaces. Your notes stay on disk; the agent works alongside them.",
    tech: ["TypeScript", "Tauri", "Rust", "MCP", "React"],
    features: [
      "Local-first markdown storage",
      "MCP server for agent-driven note creation",
      "Native desktop app",
      "Published to the AUR",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/rune",
  },
  {
    name: "dispatch",
    slug: "dispatch",
    description:
      "A desktop code review app with CI/CD integration - review, comment and merge without leaving the editor mindset.",
    tech: ["Electron", "React", "TypeScript", "TailwindCSS"],
    features: [
      "Pull request review in a native window",
      "CI/CD status inline with the diff",
      "Keyboard-first navigation",
    ],
    status: "development",
    url: "https://github.com/eggfriedrice24/dispatch",
  },
  {
    name: "tnnl",
    slug: "tnnl",
    description:
      "Self-hosted mesh VPN for connecting personal devices anywhere, built on WireGuard.",
    tech: ["Go", "WireGuard", "SQLite"],
    features: [
      "WireGuard-based encrypted mesh",
      "Self-hosted coordination server",
      "Zero-config peer discovery",
    ],
    status: "development",
    url: "https://github.com/eggfriedrice24/tnnl",
  },
  {
    name: "eggfriedrice.nvim",
    slug: "efr.nvim",
    description:
      "A warm Neovim colorscheme on halcyon navy - yolk yellow keywords, rice cream text, scallion strings, and an alive One Dark-inspired accent palette.",
    tech: ["Lua", "Neovim"],
    features: [
      "Halcyon navy base with warm accents",
      "Treesitter and LSP semantic highlights",
      "Lualine and plugin integrations",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/eggfriedrice.nvim",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
}
