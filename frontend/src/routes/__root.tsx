import { RouterContext } from "@/app/router";
import { Layout } from "@/components/layouts";
import { NotFoundPage } from "@/components/pages";
import { createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Layout,
  notFoundComponent: () => <NotFoundPage />,
});
