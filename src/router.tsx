import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    routeTree,
    scrollRestoration: false,
    defaultPreloadStaleTime: 60_000,
  });
