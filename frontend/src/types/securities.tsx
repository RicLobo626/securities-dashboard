export type Price = {
  id: string;
  date: string;
  close: number;
  volume: number;
};

export type Security = {
  id: string;
  ticker: string;
  securityName: string;
  sector: string;
  country: string;
  trend: number;
  prices?: Price[];
};
