import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { M_PLUS_Rounded_1c } from "next/font/google";
import Image from "next/image";
import { ViewTransition } from "react";

import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { BowlLoader } from "@/components/three/bowl-loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Software Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0d111a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Lets Next turn smooth scrolling off while it scrolls a new route to
      // the top, so only in-page anchor jumps animate.
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": siteConfig.author,
              "alternateName": siteConfig.name,
              "url": siteConfig.url,
              "image": `${siteConfig.url}/og-image.png`,
              "jobTitle": "Software Engineer",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Noxtton",
                },
                {
                  "@type": "Organization",
                  "name": "Fluxx",
                  "description": "Co-Founder & CTO",
                },
              ],
              "sameAs": [
                "https://github.com/eggfriedrice24",
                "https://linkedin.com/in/irakli-dzvelaia",
                "https://x.com/IDzvelaia",
              ],
              "knowsAbout": [
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Go",
                "Rust",
                "Python",
                "PostgreSQL",
                "Distributed Systems",
                "Web Development",
                "Full-Stack Development",
                "Systems Programming",
              ],
            }),
          }}
        />
      </head>
      <body className={`${mPlusRounded.variable} font-sans antialiased`}>
        {/* BlurImage reveals images from JS once they load. Without JS, show
            them as they arrive and drop the blurred previews. */}
        <noscript>
          <style>
            {"img[data-blur-image]{opacity:1!important;filter:none!important;scale:1!important}span[data-blur-image]{display:none}"}
          </style>
        </noscript>
        <Providers>
          {/* No top padding below lg: the sticky nav row sits flush at the
              top from the start, so its resting and stuck positions match. */}
          <div className="relative mx-auto flex min-h-screen max-w-xl flex-col px-6 pb-12 lg:pt-12">
            <Navbar />

            {/* Frozen masthead: sticky exactly where it rests (under the 60px
                nav row on phones, at the top of the page on lg), so it never
                scrolls away and every navigation keeps it in place. Its page
                background (reaching up to the top of the column via the
                negative margin and matching padding) hides content scrolling
                under it, fading out over the last 24px of its bottom padding:
                at rest that gap is empty, so the fade only shows once content
                scrolls through it. A plain CSS gradient, so it blends to
                transparent without going grey in light mode. Its own
                view-transition layer sits above the outgoing page (see
                globals.css). */}
            <header className="sticky top-[60px] z-10 -mt-6 flex flex-col items-start gap-4 bg-[linear-gradient(to_bottom,var(--background)_calc(100%-24px),transparent)] pb-8 pt-6 [view-transition-name:masthead] sm:flex-row sm:items-center lg:top-0 lg:-mt-12 lg:pt-12">
              <div className="flex items-center gap-4">
                <Avatar className="size-16">
                  <AvatarImage src="/me.jpg" alt="Ikako" />
                  <AvatarFallback>IK</AvatarFallback>
                </Avatar>
                <div>
                  {/* Not a heading: each page carries its own h1. */}
                  <p className="font-semibold">Ikako Dzvelaia</p>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground">
                    Co-Founder & CTO at
                    <Image
                      src="/fluxx-logo-light.svg"
                      alt="Fluxx"
                      width={40}
                      height={14}
                      priority
                      className="dark:hidden"
                    />
                    <Image
                      src="/fluxx-logo-dark.svg"
                      alt="Fluxx"
                      width={40}
                      height={14}
                      priority
                      className="hidden dark:inline-block"
                    />
                  </p>
                </div>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  {/* Focusable so keyboard users get the tooltip too; not a
                      button, since the bowl is dragged rather than clicked. */}
                  <div
                    role="img"
                    tabIndex={0}
                    className="cursor-pointer sm:ml-auto"
                    aria-label="eggfriedrice mascot"
                  >
                    <BowlLoader />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>eggfriedrice 🍳</p>
                </TooltipContent>
              </Tooltip>
            </header>

            <main>
              {/* Only the route content transitions; the navbar, masthead and
                  footer sit outside and stay put across navigations. */}
              <ViewTransition name="page">{children}</ViewTransition>
            </main>

            <footer className="mt-auto pt-8 text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                If you like what I do and want to collaborate, feel free to reach out
                via social links.
              </p>

              <small className="text-xs text-muted-foreground">
                &copy;
                {" "}
                {new Date().getFullYear()}
                {" "}
                Ikako Dzvelaia
              </small>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
