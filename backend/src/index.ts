import { PORT } from "@/config/env.ts";
import { createContext } from "@/context.ts";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "@/schema.ts";

const server = new ApolloServer({
  schema,
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
    context: createContext,
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
