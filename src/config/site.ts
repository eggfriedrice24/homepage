export type SiteConfig = {
  name: string;
  url: string;
  description: string;
  author: string;
  twitterHandle: string;
  keywords: string[];
};

export const siteConfig: SiteConfig = {
  name: "Ikako",
  url: "https://ikako.dev",
  description:
    "Software engineer from Tbilisi, Georgia. Currently based in UK, London. Crafting smooth and user-friendly digital experiences with TypeScript, React, and Next.js.",
  author: "Irakli Dzvelaia",
  twitterHandle: "@IDzvelaia",
  keywords: [
    "software engineer",
    "full-stack developer",
    "frontend developer",
    "TypeScript",
    "React",
    "Next.js",
    "web development",
    "Irakli Dzvelaia",
    "Ikako",
    "London",
    "UK",
    "Georgia",
  ],
};
