import { Layout } from "@/components/layouts";
import { NotFoundPage } from "@/components/pages";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: NotFoundPage,
});
