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

export const GET_SECURITY = gql`
  query GetSecurity($ticker: String!) {
    security(ticker: $ticker) {
      id
      ticker
      securityName
      sector
      country
      trend
      prices {
        id
        date
        close
        volume
      }
    }
  }
`;
