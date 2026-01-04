import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { M_PLUS_Rounded_1c } from "next/font/google";

import { FloatingNavbar } from "@/components/floating-navbar";
import { Providers } from "@/components/providers";
import { BowlLoader } from "@/components/three/bowl-loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import "./globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-m-plus-rounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const siteConfig = {
  name: "Ikako",
  url: "https://ikako.dev",
  description: "Software engineer from Tbilisi, Georgia. Currently based in UK, London. Crafting smooth and user-friendly digital experiences with TypeScript, React, and Next.js.",
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
    { media: "(prefers-color-scheme: light)", color: "#f1f0ee" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed",
              },
              "sameAs": [
                "https://github.com/eggfriedrice24",
                "https://linkedin.com/in/irakli-dzvelaia",
                "https://twitter.com/IDzvelaia",
              ],
              "knowsAbout": [
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Web Development",
                "Full-Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${mPlusRounded.variable} font-sans antialiased`}
      >
        <Providers>
          <main className="mx-auto flex min-h-screen max-w-2xl flex-col px-6 pb-24 pt-12">
            <div className="mb-8 flex items-center gap-4">
              <Avatar className="size-16">
                <AvatarImage src="/me.jpg" alt="Ikako" />
                <AvatarFallback>IK</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold">Ikako Dzvelaia</h1>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="ml-auto cursor-pointer">
                    <BowlLoader />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>eggfriedrice 🍳</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {children}

            <span className="mt-auto pt-8 text-center text-xs text-muted-foreground">
              &copy;
              {" "}
              {new Date().getFullYear()}
              {" "}
              Ikako Dzvelaia
            </span>
          </main>
          <FloatingNavbar />
        </Providers>
      </body>
    </html>
  );
}
