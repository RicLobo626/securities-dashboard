import { gql } from "@apollo/client";

export const GET_SECURITIES = gql`
  query GetSecurities {
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
