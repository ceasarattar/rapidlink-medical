import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // The site has no server functions, no data loaders, and no dynamic
    // content, so every route is prerendered to static HTML at build time.
    // There is no server runtime in production; `dist/client` is the
    // entire deployable artifact. Security headers therefore live in
    // vercel.json rather than in request middleware.
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
    }),
    viteReact(),
  ],
});
