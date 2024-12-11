import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context } from "@/server/context.ts";
import { NotFoundError } from "@/errors/NotFoundError.ts";
import { GraphQLScalarType } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "A custom scalar for Date objects. Serializes Date instances to ISO strings.",
  serialize(val) {
    if (val instanceof Date) {
      return val.toISOString();
    }

    throw new Error(`Date Scalar serializer expected a 'Date' object, got ${typeof val} instead`);
  },
});

export const typeDefs = `
  scalar Date

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
    date: Date!
    close: Float!
    volume: Int!
  }

  type Query {
    securities: [Security!]!
    security(id: ID!): Security
  }
`;

export const resolvers = {
  Date: dateScalar,
  Query: {
    securities: (_, __, { prisma }: Context) => prisma.security.findMany(),

    security: async (_, { id }, { prisma }: Context) => {
      const security = await prisma.security.findUnique({
        where: { id },
        include: { prices: true },
      });

      if (!security) {
        throw new NotFoundError("Security not found");
      }

      return security;
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
