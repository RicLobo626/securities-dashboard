import { prisma } from "@/lib/prisma.ts";
import { v4 as uuid } from "uuid";

const resetDatabase = () => prisma.security.deleteMany();

const getSecuritiesInDb = () => prisma.security.findMany();

const initialSecurities = [
  {
    ticker: "000063.SZ",
    securityName: "ZTE Corporation",
    sector: "Technology",
    country: "China",
    trend: 0.82,
  },
  {
    ticker: "000858.SZ",
    securityName: "Wuliangye Yibin",
    sector: "Consumer Non-Cyclicals",
    country: "China",
    trend: 0.17,
  },
];

const getNonExistentId = () => uuid();

const GET_SECURITIES = `
  query Securities {
    securities {
      id
      ticker
      securityName
      sector
      country
      trend
    }
  }
`;

const GET_SECURITY = `
  query Security($id: ID!) {
    security(id: $id) {
      id
      ticker
      securityName
      sector
      country
      trend
    }
  }
`;

export default {
  GET_SECURITIES,
  GET_SECURITY,
  resetDatabase,
  initialSecurities,
  getSecuritiesInDb,
  getNonExistentId,
};
