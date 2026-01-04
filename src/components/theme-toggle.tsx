"use client";

import { motion as m } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const raysVariants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

const shineVariant = {
  hidden: {
    opacity: 0,
    scale: 2,
    strokeDasharray: "20, 1000",
    strokeDashoffset: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: [0, 1, 0],
    strokeDashoffset: [0, -50, -100],
    filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
    transition: {
      duration: 0.75,
      ease: "linear" as const,
    },
  },
};

const sunPath
  = "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
const moonPath
  = "M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <m.svg
        strokeWidth="4"
        strokeLinecap="round"
        width={16}
        height={16}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <m.path
          variants={shineVariant}
          d={sunPath}
          className="absolute left-0 top-0 stroke-yellow-200"
          initial="hidden"
          animate={theme === "light" ? "visible" : "hidden"}
        />

        <m.g
          variants={raysVariants}
          initial="hidden"
          animate={theme === "dark" ? "visible" : "hidden"}
          className="stroke-yellow-500"
          style={{ strokeLinecap: "round" }}
        >
          <m.path className="origin-center" variants={rayVariant} d="M50 -2V11" />
          <m.path variants={rayVariant} d="M88 12L78 22" />
          <m.path variants={rayVariant} d="M102 50H89" />
          <m.path variants={rayVariant} d="M88 88L78 78" />
          <m.path variants={rayVariant} d="M50 102V89" />
          <m.path variants={rayVariant} d="M12 88L22 78" />
          <m.path variants={rayVariant} d="M-2 50H11" />
          <m.path variants={rayVariant} d="M12 12L22 22" />
        </m.g>

        <m.path
          d={moonPath}
          className="fill-violet-500/35 stroke-violet-500 dark:fill-primary dark:stroke-primary"
          transition={{ duration: 1, type: "spring" }}
          animate={
            theme === "light"
              ? {
                  d: moonPath,
                  rotate: 0,
                  scale: 2,
                }
              : {
                  d: sunPath,
                  rotate: 360,
                  scale: 1,
                  transition: { delay: 0.1 },
                }
          }
        />
      </m.svg>
    </Button>
  );
}
