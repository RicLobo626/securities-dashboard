import { routeTree } from "@/routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
