import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // Enables React's <ViewTransition>, which powers the route exit/enter
    // animations in globals.css. Still experimental and undocumented as of
    // Next 16.3: turning it on switches the app to React's experimental
    // channel builds. Remove this and the <ViewTransition> wrapper in
    // layout.tsx to go back to stable React.
    viewTransition: true,
  },
};

export default nextConfig;
