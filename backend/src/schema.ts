import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context } from "@/context.ts";
import { GraphQLScalarType } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "A custom date scalar that handles Unix timestamps and ISO strings",
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
  }
`;

export const resolvers = {
  Date: dateScalar,
  Query: {
    securities: (_, __, { prisma }: Context) => prisma.security.findMany(),
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });
