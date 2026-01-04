export type NavTab = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const TABS: NavTab[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Lab", href: "/lab" },
];

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/eggfriedrice24",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irakli-dzvelaia",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/IDzvelaia",
  },
] as const;
