import { NotFoundPage, SecurityPage } from "@/components/pages";
import { GET_SECURITY } from "@/queries/securities";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/securities/$ticker")({
  component: SecurityPage,
  loader: async ({ context, params: { ticker } }) => {
    try {
      const { data } = await context.apolloClient.query({
        query: GET_SECURITY,
        variables: { ticker },
      });

      return data.security;
    } catch {
      throw notFound();
    }
  },
  notFoundComponent: () => {
    return <NotFoundPage title="Security not found" text="The security symbol is incorrect" />;
  },
});
