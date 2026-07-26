import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    routeTree,
    // Preload a route's JS chunk as soon as the user hovers or touches the
    // link. Without this, the chunk is only fetched on click, so the button
    // sits there doing nothing while it downloads, which reads as broken.
    defaultPreload: "intent",
    defaultPreloadStaleTime: 60_000,
    // Left off. Navigating between the two pages already lands at the top of
    // the new page without it, so it has nothing to add here.
    scrollRestoration: false,
  });
