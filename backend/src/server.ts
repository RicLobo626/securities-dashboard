import { Context, createContext } from "@/context.ts";
import { ApolloServer } from "@apollo/server";
import { schema } from "@/schema.ts";
import { startStandaloneServer } from "@apollo/server/standalone";

export const server = new ApolloServer<Context>({ schema });

export const startServer = (port: number) => {
  return startStandaloneServer(server, {
    listen: { port },
    context: createContext,
  });
};

export const stopServer = () => server.stop();
