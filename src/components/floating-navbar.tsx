"use client";

import {
  FlaskConical,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const TABS = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="size-5" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <FolderKanban className="size-5" />,
  },
  {
    label: "Lab",
    href: "/lab",
    icon: <FlaskConical className="size-5 text-emerald-500" />,
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/eggfriedrice24",
    icon: <Github className="size-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irakli-dzvelaia",
    icon: <Linkedin className="size-5 text-sky-700" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/IDzvelaia",
    icon: <Twitter className="size-5 text-sky-400" />,
  },
];

export function FloatingNavbar() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/")
      return "Home";
    if (pathname.startsWith("/projects"))
      return "Projects";
    if (pathname.startsWith("/lab"))
      return "Lab";
    return "Home";
  };

  return (
    <nav aria-label="Main navigation" className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
      <div className="pointer-events-auto relative mx-auto flex h-full items-center gap-2 rounded-xl border border-zinc-950/10 bg-white p-2 shadow-lg dark:border-zinc-50/10 dark:bg-zinc-900">
        <AnimatedBackground
          defaultValue={getActiveTab()}
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map(tab => (
            <Link
              key={tab.label}
              href={tab.href}
              data-id={tab.label}
              aria-label={tab.label}
              aria-current={getActiveTab() === tab.label ? "page" : undefined}
              className="inline-flex size-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            >
              {tab.icon}
            </Link>
          ))}
        </AnimatedBackground>

        <Separator orientation="vertical" className="mx-1 h-6" aria-hidden="true" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-9" aria-label="Social links">
              <MoreHorizontal className="size-5" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {SOCIALS.map(social => (
              <DropdownMenuItem key={social.label} asChild className="cursor-pointer gap-2">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">{social.icon}</span>
                  {social.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />
      </div>
    </nav>
  );
}
