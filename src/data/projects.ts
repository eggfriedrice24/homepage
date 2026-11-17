import type { StaticImageData } from "next/image";

import bondidShot01 from "@/assets/projects/bondid/01.webp";
import bondidShot02 from "@/assets/projects/bondid/02.webp";
import bondidShot03 from "@/assets/projects/bondid/03.webp";
import bondidShot04 from "@/assets/projects/bondid/04.webp";
import bondidThumbnail from "@/assets/projects/bondid/thumbnail.webp";
import dotfilesShot01 from "@/assets/projects/dotfiles/01.webp";
import dotfilesShot02 from "@/assets/projects/dotfiles/02.webp";
import dotfilesThumbnail from "@/assets/projects/dotfiles/thumbnail.webp";
import efrNvimShot01 from "@/assets/projects/efr.nvim/01.webp";
import efrNvimShot02 from "@/assets/projects/efr.nvim/02.webp";
import efrNvimShot03 from "@/assets/projects/efr.nvim/03.webp";
import efrNvimShot04 from "@/assets/projects/efr.nvim/04.webp";
import efrNvimThumbnail from "@/assets/projects/efr.nvim/thumbnail.webp";
import efrShot01 from "@/assets/projects/efr/01.webp";
import efrShot02 from "@/assets/projects/efr/02.webp";
import efrShot03 from "@/assets/projects/efr/03.webp";
import efrThumbnail from "@/assets/projects/efr/thumbnail.webp";
import frameitShot01 from "@/assets/projects/frameit/01.webp";
import frameitShot02 from "@/assets/projects/frameit/02.webp";
import frameitThumbnail from "@/assets/projects/frameit/thumbnail.webp";
import mdkShot01 from "@/assets/projects/mdk/01.webp";
import mdkShot02 from "@/assets/projects/mdk/02.webp";
import mdkShot03 from "@/assets/projects/mdk/03.webp";
import mdkShot04 from "@/assets/projects/mdk/04.webp";
import mdkShot05 from "@/assets/projects/mdk/05.webp";
import mdkShot06 from "@/assets/projects/mdk/06.webp";
import mdkThumbnail from "@/assets/projects/mdk/thumbnail.webp";
import miningosShot01 from "@/assets/projects/miningos/01.webp";
import miningosShot02 from "@/assets/projects/miningos/02.webp";
import miningosShot03 from "@/assets/projects/miningos/03.webp";
import miningosShot04 from "@/assets/projects/miningos/04.webp";
import miningosThumbnail from "@/assets/projects/miningos/thumbnail.webp";
import runeShot01 from "@/assets/projects/rune/01.webp";
import runeShot02 from "@/assets/projects/rune/02.webp";
import runeShot03 from "@/assets/projects/rune/03.webp";
import runeShot04 from "@/assets/projects/rune/04.webp";
import runeThumbnail from "@/assets/projects/rune/thumbnail.webp";
import t3codeShot01 from "@/assets/projects/t3code/01.webp";
import t3codeShot02 from "@/assets/projects/t3code/02.webp";
import t3codeShot03 from "@/assets/projects/t3code/03.webp";
import t3codeThumbnail from "@/assets/projects/t3code/thumbnail.webp";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  name: string;
  slug: string;
  /** First paragraph; also the page's meta description. */
  description: string;
  /** Further paragraphs under the description. */
  details?: string[];
  tech: string[];
  features?: string[];
  status: "development" | "live" | "archived";
  /** Open-source work (Tether products, outside contributions) or my own projects. */
  category: "open-source" | "personal";
  /** My part in a project I do not own, e.g. "Tether team". */
  role?: string;
  url?: string;
  /** Extra links shown next to "source", e.g. a docs site. */
  links?: { label: string; href: string }[];
  /** 4:3 card art on the project grid. */
  thumbnail?: ProjectImage;
  /** 16:9 shots for the detail page gallery, in display order. */
  screenshots?: ProjectImage[];
};

export const projects: Project[] = [
  {
    name: "MDK",
    slug: "mdk",
    category: "open-source",
    role: "Tether team",
    description:
      "Tether's open-source Mining Development Kit for building Bitcoin mining software. Workers translate vendor protocols from miners, containers, pools and power meters into one MDK protocol and talk to a kernel peer to peer over Hyperswarm RPC. A gateway, an MCP server and React UI packages sit on top for dashboards and agents.",
    tech: ["Node.js", "Hyperswarm RPC", "HyperDHT", "MCP", "AI SDK", "React", "TypeScript", "TanStack Query", "Zustand", "Radix UI", "Turborepo"],
    details: [
      "I work on the React UI packages and the operations centre views built on them: site overview, container layouts, the explorer, power adjustment and temperature heatmaps. I also work on Operation Center Lite, an app built on MDK.",
    ],
    status: "live",
    url: "https://github.com/tetherto/mdk",
    links: [
      { label: "docs", href: "https://docs.mdk.tether.io" },
    ],
    thumbnail: {
      src: mdkThumbnail,
      alt: "MDK Site Overview with mining containers, per-rack tables and miner status counts",
    },
    screenshots: [
      {
        src: mdkShot01,
        alt: "MDK dashboard running the Operation Center Lite app: site hash rate against nominal and power consumption charts with a miners, hashrate, consumption and efficiency strip",
      },
      {
        src: mdkShot02,
        alt: "MDK Site Overview with one card per mining container showing power draw, efficiency, a per-rack table, miner status counts and power mode controls",
      },
      {
        src: mdkShot03,
        alt: "MDK container Power Adjustment tab: a grid of rack sockets with all miners selected and a panel to set their power percentage",
      },
      {
        src: mdkShot04,
        alt: "MDK container Heatmap tab: rack sockets coloured by miner inlet temperature",
      },
      {
        src: mdkShot05,
        alt: "The MDK docs site home page with getting started cards for the overview, the CLI, a first app and agent skills",
      },
      {
        src: mdkShot06,
        alt: "An MDK docs tutorial for building a first app with a UI, with the sidebar and the on this page outline",
      },
    ],
  },
  {
    name: "MiningOS",
    slug: "miningos",
    category: "open-source",
    role: "Tether team",
    description:
      "Tether's open-source operating system for Bitcoin mining sites. Every device runs as a worker built from shared thing and miner templates, keeps its data in Hypercore and Hyperbee, and is reached over Hyperswarm RPC and HyperDHT. A Fastify API gateway and a React dashboard on top monitor and control miners, containers, cooling and power.",
    tech: ["Node.js", "Hyperswarm RPC", "HyperDHT", "Hyperbee", "Fastify", "SQLite", "React", "TypeScript", "RTK Query", "Ant Design"],
    details: [
      "I work mainly on the dashboard: the power adjustment tab for Whatsminer containers, operations reports on the v2 metrics API and typed RTK Query hooks for the finance endpoints, with the occasional fix in the Node.js API gateway.",
    ],
    status: "live",
    url: "https://github.com/tetherto/miningos-app-ui",
    thumbnail: {
      src: miningosThumbnail,
      alt: "MiningOS Site Overview with container cards showing power, cooling readings and miner status counts",
    },
    screenshots: [
      {
        src: miningosShot01,
        alt: "MiningOS Site Overview: cards for six mining containers showing power draw, tank temperatures and pressures, pump states and miner status counts",
      },
      {
        src: miningosShot02,
        alt: "MiningOS container Home tab: miner stats, cooling pump and fan states, pressure and power meter readings, container controls and active alarms",
      },
      {
        src: miningosShot03,
        alt: "MiningOS container Power Adjustment tab: rack and socket grid with selected miners and a power controls panel with percentage presets",
      },
      {
        src: miningosShot04,
        alt: "MiningOS operations report with hashrate, power consumption, site efficiency and miners status charts over a week",
      },
    ],
  },
  {
    name: "T3 Code",
    slug: "t3code",
    category: "open-source",
    role: "Vouched contributor",
    description:
      "A desktop and web app for driving coding agents like Claude Code and Codex from any computer or phone.",
    tech: ["TypeScript", "Effect", "React", "Electron"],
    details: [
      "I am a vouched contributor. My merged work fixed checkpoint diffs that never resolved, kept the diff panel state across threads, fixed closing the diff panel and fixed adding projects in the Linux desktop app.",
    ],
    status: "live",
    url: "https://github.com/pingdotgg/t3code",
    thumbnail: {
      src: t3codeThumbnail,
      alt: "T3 Code sidebar with two threads next to an agent conversation showing a prompt and the commands the agent ran",
    },
    screenshots: [
      {
        src: t3codeShot01,
        alt: "T3 Code thread where Claude Sonnet adds a --json flag to a CLI, showing the prompt, the commands it ran and its reply, with the git panel on the right",
      },
      {
        src: t3codeShot02,
        alt: "T3 Code with the diff panel open next to the conversation, showing the latest turn's changes to src/cli.ts as a line-by-line diff",
      },
      {
        src: t3codeShot03,
        alt: "T3 Code model picker open over a thread, listing Claude models with reasoning levels from low to max and a tab for Codex models",
      },
    ],
  },
  {
    name: "rune",
    slug: "rune",
    category: "personal",
    description:
      "Local-first markdown notes where an AI agent works next to you. Notes stay as plain .md files on disk, and the desktop editor and a local MCP server both read and write the same library.",
    tech: ["TypeScript", "Tauri", "React", "CodeMirror", "MCP", "SQLite", "Bun"],
    features: [
      "Notes are plain .md files; the SQLite search index is rebuildable",
      "Local MCP server for agents to create, edit and search notes",
      "Command palette for notes, notebooks and full-text search",
      "CodeMirror editor with live preview, reading mode and vim mode",
      "Desktop builds on GitHub Releases and the AUR (rune-notes-bin)",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/rune",
    thumbnail: {
      src: runeThumbnail,
      alt: "rune editor and live markdown preview side by side in dark theme",
    },
    screenshots: [
      {
        src: runeShot01,
        alt: "rune editor with a markdown note open on the left and its live preview on the right, dark theme",
      },
      {
        src: runeShot02,
        alt: "rune command palette showing full-text search results across notes for the query watcher",
      },
      {
        src: runeShot03,
        alt: "rune keybindings popover listing shortcuts for the palette, preview, reading mode, vim mode and theme",
      },
      {
        src: runeShot04,
        alt: "rune in light theme with a reading note in the editor and the rendered preview beside it",
      },
    ],
  },
  {
    name: "eggfriedrice.nvim",
    slug: "efr.nvim",
    category: "personal",
    description:
      "A dark, warm Neovim colorscheme: yolk-yellow functions and types, scallion-green strings and rice-cream text on a halcyon navy, with One Dark Pro token roles. The same Lua palette also generates matching themes for 20+ other tools.",
    tech: ["Lua", "Neovim", "Treesitter", "OKLCH", "GitHub Actions"],
    features: [
      "Treesitter, LSP semantic tokens and legacy syntax agree on every role",
      "Extras for Ghostty, Hyprland, rofi, bat, fzf, Starship, Zen and more",
      "CI fails when a generated extra drifts from the palette",
      "Diff and search backgrounds derived in OKLCH at load time",
      "Bundled lualine theme and on_colors / on_highlights hooks",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/eggfriedrice.nvim",
    thumbnail: {
      src: efrNvimThumbnail,
      alt: "Close-up of TypeScript code in Neovim with yellow functions, red identifiers, purple keywords and green strings on a dark navy background",
    },
    screenshots: [
      {
        src: efrNvimShot01,
        alt: "Neovim in Ghostty with a TypeScript React component and a Rust file side by side, highlighted by Treesitter in the eggfriedrice theme",
      },
      {
        src: efrNvimShot02,
        alt: "The theme's own colors.lua with inline color swatches next to treesitter.lua, the capture-to-color role map",
      },
      {
        src: efrNvimShot03,
        alt: "A Telescope file picker with a live preview, framed in the theme's yellow float borders",
      },
      {
        src: efrNvimShot04,
        alt: "Ghostty using the generated eggfriedrice terminal theme: eza listing, bat showing the 16-color palette file, and the ANSI color swatches",
      },
    ],
  },
  {
    name: "dotfiles",
    slug: "dotfiles",
    category: "personal",
    description:
      "Arch Linux and Hyprland dotfiles for three machines, a desktop and two laptops. One script installs a machine from the Arch ISO, DMI-matched profiles hold the per-machine bits, and every app draws from one palette and type scale.",
    tech: ["Hyprland", "Lua", "Bash", "Arch Linux", "Neovim", "Waybar", "Ghostty", "rofi"],
    features: [
      "bootstrap.sh installs Arch from the ISO: btrfs, snapper, optional LUKS",
      "DMI-matched machine profiles for monitors, packages and /etc files",
      "Idempotent 9-stage installer with a dry run and per-stage skips",
      "dots-update with pre-update snapshots and one-off migrations",
      "One eggfriedrice.nvim palette and type scale across every app",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/hyprland-dots",
    thumbnail: {
      src: dotfilesThumbnail,
      alt: "Ghostty terminal with the machine profiles tree and btop next to Neovim on the Hyprland desktop",
    },
    screenshots: [
      {
        src: dotfilesShot01,
        alt: "Hyprland desktop with waybar, a Ghostty terminal listing the machine profiles and printing the detected profile, btop, and Neovim editing the desktop profile",
      },
      {
        src: dotfilesShot02,
        alt: "The rofi wallpaper picker showing a grid of square thumbnails over the current wallpaper",
      },
    ],
  },
  {
    name: "frameit",
    slug: "frameit",
    category: "personal",
    description:
      "Temporary selection rectangle for Wayland. Hold a chord, drag with the mouse, and a translucent box follows the pointer. It is a real layer-shell overlay, so it shows up in Discord, Meet or OBS screen shares, then vanishes on release.",
    tech: ["Rust", "Wayland", "layer-shell", "Hyprland"],
    features: [
      "Layer-shell overlay that screen shares through PipeWire pick up",
      "No pixels redrawn while dragging, only subsurface positions and sizes",
      "TOML config for colours, border, corner radius and cursor",
      "frameit bind registers the trigger chord with Hyprland",
      "On the AUR as frameit and frameit-bin",
    ],
    status: "live",
    url: "https://github.com/eggfriedrice24/frameit",
    thumbnail: {
      src: frameitThumbnail,
      alt: "translucent amber selection rectangle drawn over Rust code in neovim",
    },
    screenshots: [
      {
        src: frameitShot01,
        alt: "frameit rectangle in the eggfriedrice theme colours framing a Rust function in neovim",
      },
      {
        src: frameitShot02,
        alt: "default blue frameit rectangle highlighting the gesture steps in the frameit man page",
      },
    ],
  },
  {
    name: "Bondid",
    slug: "bondid",
    category: "personal",
    description:
      "Social app where everyone has a personal AI agent that coordinates with friends' agents on their behalf. Every action goes through a permission model: the owner approves it, and a friend has to grant access before their agent shares anything.",
    tech: ["TypeScript", "Bun", "Hono", "React", "PostgreSQL", "Drizzle ORM", "Expo", "Vercel AI SDK", "Better Auth", "Turborepo"],
    features: [
      "Approval queue for anything the agent wants to do",
      "Agent-to-agent asks with a preview of exactly what gets shared",
      "Three autonomy levels plus actions that always need a human",
      "Google Calendar, Gmail, Contacts and Drive through approved actions",
      "Web app and native iOS app on one typed API",
    ],
    status: "development",
    thumbnail: {
      src: bondidThumbnail,
      alt: "Grant request card asking to share busy times only, with a preview of what the other agent would see",
    },
    screenshots: [
      {
        src: bondidShot01,
        alt: "Home screen with the agent Juno: two friend-agent asks waiting for approval above a timeline of calendar checks and agent replies",
      },
      {
        src: bondidShot02,
        alt: "Grant request from a friend's agent showing scope chips, the date range and the exact busy times it would see, with Grant once and Not now",
      },
      {
        src: bondidShot03,
        alt: "Autonomy settings with Cautious, Balanced and Trusted levels and the list of actions that always ask",
      },
      {
        src: bondidShot04,
        alt: "Integrations settings with Google Calendar, Contacts, Gmail and Drive connected",
      },
    ],
  },
  {
    name: "efr",
    slug: "efr",
    category: "personal",
    description:
      "A terminal-first AI agent harness that lives in zsh. A line that starts with a comma goes to the agent, a daemon runs the model loop and real hidden shells, and permissions follow the path instead of the project directory.",
    tech: ["Rust", "zsh", "libghostty", "SQLite", "bubblewrap", "Tailscale", "React Native"],
    features: [
      "Comma-prefixed prompts and a sticky agent mode inside zsh",
      "Daemon with persistent hidden shells on the Ghostty terminal engine",
      "Permission modes, incl. a kernel sandbox with a reviewer model",
      "Inline diffs, efr diff and efr undo for every turn",
      "Phone app over your tailnet, no relay",
    ],
    status: "development",
    url: "https://github.com/eggfriedrice24/eggfriedrice.code",
    thumbnail: {
      src: efrThumbnail,
      alt: "An efr turn in the terminal: a failing cargo test, a one-line fix shown as a diff, then a passing run",
    },
    screenshots: [
      {
        src: efrShot01,
        alt: "efr in zsh: a comma prompt asks why cargo test fails, the agent runs the tests, edits the bug with an inline diff, reruns them and explains the fix",
      },
      {
        src: efrShot02,
        alt: "efr in cautious mode asking before it edits ~/.zshrc, with the diff and the reason shown below the prompt",
      },
      {
        src: efrShot03,
        alt: "The efr phone app showing a turn that waits for approval to edit /etc/systemd/journald.conf, with Deny and Allow buttons",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find(project => project.slug === slug);
}
