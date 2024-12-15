import { prisma } from "@/lib/prisma.ts";

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

const getNonExistentTicker = () => "000000.SZ";

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
  query Security($ticker: String!) {
    security(ticker: $ticker) {
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
  getNonExistentTicker,
};
