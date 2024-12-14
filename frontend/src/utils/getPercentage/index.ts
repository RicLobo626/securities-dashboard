export const getPercentage = (trend: number) => {
  const percentage = trend * 100;

  return `${percentage.toFixed(0)}%`;
};
