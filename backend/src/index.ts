import { PORT } from "@/config/env.ts";
import { startServer } from "@/server.ts";

(async () => {
  const { url } = await startServer(PORT);

  console.log(`🚀  Server ready at: ${url}`);
})();
