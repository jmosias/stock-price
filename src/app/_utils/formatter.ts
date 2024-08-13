export const formatMarketCap = (value: number) => {
  if (value >= 1e12) {
    return (value / 1e12).toFixed(2) + "T"; // Trillions
  } else if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B"; // Billions
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M"; // Millions
  } else {
    return value.toLocaleString(); // Less than a million, show the full number with commas
  }
};
