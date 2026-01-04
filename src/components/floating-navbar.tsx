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
import { cn } from "@/lib/utils";

const TABS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Lab", href: "/lab" },
] as const;

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/eggfriedrice24",
    icon: <Github className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irakli-dzvelaia",
    icon: <Linkedin className="size-4 text-blue-600" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/IDzvelaia",
    icon: <Twitter className="size-4 text-sky-500" />,
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

  const activeTab = getActiveTab();

  return (
    <nav
      aria-label="Main navigation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6"
    >
      <div className="pointer-events-auto relative mx-auto flex h-full items-center gap-2 rounded-xl border bg-glass p-2 shadow-lg backdrop-blur-md">
        <AnimatedBackground
          defaultValue={activeTab}
          className="rounded-lg bg-muted"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.label;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                data-id={tab.label}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                className="inline-flex size-9 items-center justify-center text-muted-foreground transition-colors duration-100 focus-visible:outline-2"
              >
                {tab.label === "Home" && (
                  <Home className={cn("size-4", isActive && "text-primary")} />
                )}
                {tab.label === "Projects" && (
                  <FolderKanban
                    className={cn("size-4", isActive && "text-primary")}
                  />
                )}
                {tab.label === "Lab" && (
                  <FlaskConical className="size-4 text-emerald-500" />
                )}
              </Link>
            );
          })}
        </AnimatedBackground>

        <Separator
          orientation="vertical"
          className="mx-1 h-6"
          aria-hidden="true"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-9"
              aria-label="Social links"
            >
              <MoreHorizontal className="size-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {SOCIALS.map(social => (
              <DropdownMenuItem
                key={social.label}
                asChild
                className="cursor-pointer gap-2"
              >
                <a href={social.href} target="_blank" rel="noreferrer">
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
