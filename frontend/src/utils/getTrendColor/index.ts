export enum TrendColor {
  Negative = "#f87171",
  Neutral = "#14b8a6",
  Positive = "#0ea5e9",
}

export const getTrendColor = (trend: number): string => {
  if (trend < -0.2) {
    return TrendColor.Negative;
  }

  if (trend <= 0.2) {
    return TrendColor.Neutral;
  }

  return TrendColor.Positive;
};
