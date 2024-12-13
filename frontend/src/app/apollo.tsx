import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  cache: new InMemoryCache(),
});

type Props = {
  children: ReactNode;
};

export const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
