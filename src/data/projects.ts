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
import runeShot01 from "@/assets/projects/rune/01.webp";
import runeShot02 from "@/assets/projects/rune/02.webp";
import runeShot03 from "@/assets/projects/rune/03.webp";
import runeShot04 from "@/assets/projects/rune/04.webp";
import runeThumbnail from "@/assets/projects/rune/thumbnail.webp";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  tech: string[];
  features: string[];
  status: "development" | "live" | "archived";
  url?: string;
  /** 4:3 card art on the project grid. */
  thumbnail?: ProjectImage;
  /** 16:9 shots for the detail page gallery, in display order. */
  screenshots?: ProjectImage[];
};

export const projects: Project[] = [
  {
    name: "rune",
    slug: "rune",
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
