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

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "./theme-toggle";

export function FloatingNavbar() {
  const pathname = usePathname();

  const isActiveRoute = (route: string) => {
    if (route === "/") {
      return pathname === route;
    }
    return pathname.startsWith(route);
  };

  return (
    <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-20 mx-auto mb-4 flex h-12 px-6">
      <div className="pointer-events-auto relative mx-auto flex h-full items-center gap-2 overflow-y-scroll rounded-2xl bg-background/10 px-4 py-2 shadow-[rgba(142,140,152,0.2)_0px_0px_30px,rgba(219,216,224,0.2)_0px_0px_0px_1px] backdrop-blur-md sm:overflow-y-visible">
        <div className="flex items-center gap-2">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    isActiveRoute("/") && "bg-accent text-accent-foreground",
                  )}
                >
                  <Home className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-foreground">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    isActiveRoute("/projects")
                    && "bg-accent text-accent-foreground",
                  )}
                >
                  <FolderKanban className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-foreground">
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/lab"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    isActiveRoute("/lab")
                    && "bg-accent text-accent-foreground",
                  )}
                >
                  <FlaskConical className="size-5 text-emerald-500" />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-secondary text-foreground">
                <p>Lab</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Separator className="mx-3 h-6" orientation="vertical" />

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>What I use</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/eggfriedrice24"
                className="transition-all hover:scale-105"
              >
                <DropdownMenuItem>
                  <Github className="size-5" />
                  GitHub
                </DropdownMenuItem>
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/irakli-dzvelaia"
                className="transition-all hover:scale-105"
              >
                <DropdownMenuItem>
                  <Linkedin className="size-5 text-sky-700" />
                  LinkedIn
                </DropdownMenuItem>
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/IDzvelaia"
                className="transition-all hover:scale-105"
              >
                <DropdownMenuItem>
                  <Twitter className="size-5 text-sky-400" />
                  Twitter
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
