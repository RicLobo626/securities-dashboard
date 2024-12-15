import { screen, render } from "@testing-library/react";
import { SecuritiesTable } from ".";
import { getPercentage, getTrendColor } from "@/utils";

const mockSecurities = [
  {
    id: "1",
    ticker: "AAPL",
    securityName: "Apple Inc.",
    sector: "Technology",
    country: "USA",
    trend: 0.4,
  },
  {
    id: "2",
    ticker: "MSFT",
    securityName: "Microsoft Corp.",
    sector: "Technology",
    country: "USA",
    trend: -0.3,
  },
  {
    id: "3",
    ticker: "XYZ",
    securityName: "XYZ Inc.",
    sector: "Technology",
    country: "Portugal",
    trend: 0.1,
  },
];

describe("securities table component", () => {
  beforeEach(() => {
    render(<SecuritiesTable securities={mockSecurities} />);
  });

  it("renders table correctly", () => {
    expect(screen.getByRole("table", { name: "securities table" })).toBeInTheDocument();

    const headers = screen.getAllByRole("columnheader");
    const headerNames = ["Symbol", "Name", "Sector", "Country", "Trend"];

    expect(headers).toHaveLength(headerNames.length);
    expect(headers.map((header) => header.textContent)).toStrictEqual(headerNames);
  });

  it("renders data correctly", () => {
    const [_headerRow, ...rows] = screen.getAllByRole("row");

    expect(rows).toHaveLength(mockSecurities.length);

    rows.forEach((row, idx) => {
      const security = mockSecurities[idx];

      const [ticker, name, sector, country, trend] = row.children;

      expect(ticker).toHaveTextContent(security.ticker);
      expect(name).toHaveTextContent(security.securityName);
      expect(sector).toHaveTextContent(security.sector);
      expect(country).toHaveTextContent(security.country);
      expect(trend).toHaveTextContent(getPercentage(security.trend));
    });
  });

  it("renders trend color correctly", () => {
    const headers = screen.getAllByRole("columnheader");
    const trendIdx = headers.findIndex((header) => header.textContent === "Trend");

    const [_headerRow, ...rows] = screen.getAllByRole("row");

    rows.forEach((row, idx) => {
      const { trend } = mockSecurities[idx];
      const trendCell = row.children[trendIdx];

      expect(trendCell).toHaveStyle({ backgroundColor: getTrendColor(trend) });
    });
  });
});
