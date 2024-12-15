import { apolloClient } from "@/app/apollo";
import { routeTree } from "@/routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

export type RouterContext = {
  apolloClient: typeof apolloClient;
};

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  context: {
    apolloClient,
  },
});

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
