"use client";

import {
  Github,
  Linkedin,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ExternalLink } from "@/components/external-link";
import { XformerlyTwitter } from "@/components/icons/x-formerly-twitter";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SOCIALS, TABS } from "@/config/navigation";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = {
  LinkedIn: Linkedin,
  GitHub: Github,
  X: XformerlyTwitter,
} as const;

// Official brand colours. GitHub's near-black, X's black and LinkedIn's
// #0A66C2 vanish on the navy dark theme, so dark mode uses their white and
// LinkedIn's own dark-mode blue. Set on the icon itself too: menu items grey
// out any svg without its own text colour.
const SOCIAL_COLORS = {
  LinkedIn: "text-[#0A66C2] dark:text-[#71B7FB]",
  GitHub: "text-[#181717] dark:text-white",
  X: "text-black dark:text-white",
} as const;

type SocialLabel = keyof typeof SOCIAL_ICONS;

function SocialIcon({ label }: { label: SocialLabel }) {
  const Icon = SOCIAL_ICONS[label];
  return <Icon className={cn("size-4", SOCIAL_COLORS[label])} aria-hidden="true" />;
}

/**
 * Rendered as the first child of the layout's content column (which is
 * `relative`).
 *
 * - lg and up: a borderless vertical list in the gutter left of the column,
 *   right-aligned to hug the content, sticky 48px from the top (the same as
 *   the column's top padding, so it never jumps when sticking starts).
 * - Below lg there is no gutter to use, so it is a borderless row above the
 *   masthead, sticky to the top over a soft background.
 */
export function Navbar() {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname === "/")
      return "About me";
    if (pathname.startsWith("/projects"))
      return "Work";
    if (pathname.startsWith("/uses"))
      return "Uses";
    return "About me";
  };

  const activeTab = getActiveTab();

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        // Phones: the whole sticky row (with its background) is the
        // view-transition layer. On lg the nav is an invisible full-height
        // column, so the visible list below carries the name instead.
        "sticky top-0 z-20 -mx-6 mb-6 bg-background/85 px-6 py-3 backdrop-blur-md [view-transition-name:site-nav] lg:[view-transition-name:none]",
        "lg:absolute lg:inset-y-0 lg:right-full lg:top-12 lg:m-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
      )}
    >
      {/* The visible list carries the view-transition name, not the nav: on
          lg the nav is an invisible full-height column, and naming it made
          the browser slide that whole column in from wherever it scrolled
          to. The list sits at the same spot on every page, so it can stay
          put (see globals.css). */}
      <div className="flex items-center gap-1 lg:sticky lg:top-12 lg:mr-6 lg:w-max lg:flex-col lg:items-end lg:gap-6 lg:[view-transition-name:site-nav]">
        <div className="flex items-center gap-1 lg:flex-col lg:items-end">
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
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "inline-flex h-9 items-center px-3 text-sm transition-colors duration-100 hover:text-foreground focus-visible:outline-2",
                    isActive ? "font-medium text-primary" : "text-muted-foreground",
                  )}
                >
                  {tab.label}
                </Link>
              );
            })}
          </AnimatedBackground>
        </div>

        <div className="ml-auto flex items-center gap-1 lg:ml-0 lg:flex-col lg:items-end">
          {/* Socials inline from sm up; phones keep them in a menu so the
              row never overflows. */}
          {/* Coloured icons inline from sm up; phones keep them, labelled,
              in the menu below. */}
          {SOCIALS.map(social => (
            <ExternalLink
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={cn(
                "hidden h-9 items-center gap-2 rounded-md px-2.5 text-sm transition-opacity hover:opacity-75 focus-visible:outline-2 sm:inline-flex lg:px-3",
                SOCIAL_COLORS[social.label as SocialLabel],
              )}
            >
              <SocialIcon label={social.label as SocialLabel} />
            </ExternalLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 sm:hidden"
                aria-label="Social links"
              >
                <MoreHorizontal className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SOCIALS.map(social => (
                <DropdownMenuItem
                  key={social.label}
                  asChild
                  className="cursor-pointer gap-2"
                >
                  <ExternalLink
                    href={social.href}
                    className={SOCIAL_COLORS[social.label as SocialLabel]}
                  >
                    <SocialIcon label={social.label as SocialLabel} />
                    {social.label}
                  </ExternalLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
