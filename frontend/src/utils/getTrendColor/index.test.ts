import { getTrendColor, TrendColor } from ".";

describe("getTrendColor", () => {
  it("should return a positive color for trends above 20%", () => {
    expect(getTrendColor(0.21)).toBe(TrendColor.Positive);
  });

  it("should return a neutral color for trends between -20% and 20%", () => {
    expect(getTrendColor(-0.2)).toBe(TrendColor.Neutral);
    expect(getTrendColor(0)).toBe(TrendColor.Neutral);
    expect(getTrendColor(0.2)).toBe(TrendColor.Neutral);
  });

  it("should return a negative color for trends below -20%", () => {
    expect(getTrendColor(-0.21)).toBe(TrendColor.Negative);
  });
});
