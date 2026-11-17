export type NavTab = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const TABS: NavTab[] = [
  { label: "About me", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Uses", href: "/uses" },
];

export const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irakli-dzvelaia",
  },
  {
    label: "GitHub",
    href: "https://github.com/eggfriedrice24",
  },
  {
    label: "X",
    href: "https://x.com/IDzvelaia",
  },
] as const;
