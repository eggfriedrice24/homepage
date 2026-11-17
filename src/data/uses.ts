export type UsesItem = {
  /** Short role shown in the left column, e.g. "CPU". */
  label?: string;
  name: string;
  note?: string;
  /** Internal path or external URL. */
  href?: string;
};

export type UsesSection = {
  title: string;
  description?: string;
  items: UsesItem[];
};

export const uses: UsesSection[] = [
  {
    title: "Desktop",
    description: "The main machine. Arch Linux and Hyprland, set up from my dotfiles.",
    items: [
      { label: "CPU", name: "AMD Ryzen 9 7950X", note: "16 cores, 32 threads" },
      { label: "GPU", name: "AMD Radeon RX 7900 XTX" },
      { label: "Board", name: "Gigabyte B650 AORUS ELITE AX V2" },
      { label: "Memory", name: "64 GB DDR5" },
      { label: "Storage", name: "Crucial T500 2 TB + 1 TB", note: "NVMe, btrfs with snapper" },
      { label: "Display", name: "ASUS XG27AQDMG", note: "27\" 1440p 240 Hz OLED" },
      { label: "Display", name: "HP P27q G4", note: "27\" 1440p, in portrait" },
    ],
  },
  {
    title: "Laptops",
    description: "Same dotfiles, picked up per machine through DMI-matched profiles.",
    items: [
      {
        label: "Always on",
        name: "ThinkPad T14s Gen 1 AMD",
        note: "Ryzen 7 PRO 4750U, a work box over Tailscale",
      },
      {
        label: "Arriving",
        name: "Framework Laptop 13 Pro",
        note: "Intel Core Ultra X7 358H, 2880x1920, in December",
      },
    ],
  },
  {
    title: "Desk",
    items: [
      { label: "Keyboard", name: "Keychron K4" },
      { label: "Keyboard", name: "Anne Pro 2" },
      { label: "Mouse", name: "Logitech PRO X 2c" },
      { label: "Speaker", name: "Bang & Olufsen Beosound A1 2nd Gen", note: "over USB, wired sounds better" },
      { label: "Headphones", name: "Sony WH-1000XM5", note: "on LDAC" },
    ],
  },
  {
    title: "Desktop environment",
    description: "One palette across every app, generated from eggfriedrice.nvim.",
    items: [
      { label: "OS", name: "Arch Linux" },
      { label: "Compositor", name: "Hyprland", note: "Lua config, hyprlock, hypridle" },
      { label: "Bar", name: "Waybar" },
      { label: "Launcher", name: "rofi", note: "apps, emoji, calculator, clipboard" },
      { label: "Overlay", name: "frameit", note: "a selection box for screen shares", href: "/projects/frameit" },
      { label: "Config", name: "dotfiles", note: "one installer for all three machines", href: "/projects/dotfiles" },
    ],
  },
  {
    title: "Terminal & editor",
    items: [
      { label: "Terminal", name: "Ghostty" },
      { label: "Shell", name: "zsh", note: "Zinit plugins, Starship prompt" },
      { label: "Editor", name: "Neovim" },
      { label: "Theme", name: "eggfriedrice.nvim", note: "my own, with extras for 20+ tools", href: "/projects/efr.nvim" },
      { label: "CLI", name: "eza, bat, fzf, ripgrep, fd, btop" },
      { label: "Fonts", name: "Cartograph CF", note: "and Atkinson Hyperlegible Next for UI" },
    ],
  },
  {
    title: "Coding agents",
    items: [
      { name: "Claude Code" },
      { name: "OpenCode" },
      { name: "Codex CLI" },
      { name: "efr", note: "my own, a harness that lives in zsh", href: "/projects/efr" },
    ],
  },
  {
    title: "Languages & tooling",
    items: [
      { label: "Languages", name: "TypeScript, Rust, Go, Zig" },
      { label: "JS runtime", name: "Bun, Node, pnpm" },
      { label: "Rust", name: "nightly via rustup" },
      { label: "Infra", name: "Docker, Tailscale" },
    ],
  },
  {
    title: "Apps",
    items: [
      { label: "Browser", name: "Zen", note: "and Helium" },
      { label: "Chat", name: "Slack, Discord, Signal" },
      { label: "Other", name: "OBS, Blender, LocalSend, Steam" },
    ],
  },
];
