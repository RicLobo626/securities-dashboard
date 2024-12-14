import { getPercentage } from ".";

describe("getPercentage", () => {
  it("should transform a trend number into a percentage string", () => {
    expect(getPercentage(0.55)).toBe("55%");
    expect(getPercentage(0)).toBe("0%");
    expect(getPercentage(-0.85)).toBe("-85%");
  });
});
