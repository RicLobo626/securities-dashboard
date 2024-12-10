import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context } from "@/context.ts";

export const typeDefs = `
  type Security {
    id: ID!
    ticker: String!
    securityName: String!
    sector: String!
    country: String!
    trend: Float!
    prices: [Price!]
  }

  type Price {
    id: ID!
    date: String!
    close: Float!
    volume: Int!
  }

  type Query {
    securities: [Security!]!
  }
`;

export const resolvers = {
  Query: {
    securities: async (_, __, { prisma }: Context) => {
      return await prisma.security.findMany();
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
