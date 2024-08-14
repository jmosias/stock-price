/**
 * Formats a large numerical value (like market capitalization) into a more human-readable string.
 *
 * The function converts values into trillions (T), billions (B), or millions (M), depending on
 * the size of the number. If the value is less than a million, it returns the full number with commas.
 *
 * @param value - The numerical value to be formatted (e.g., 2030187.4641078862).
 * @returns A string representing the formatted value with an appropriate suffix
 *          (e.g., "2.03M" for 2030187.4641078862).
 *
 * @example
 * // Returns "2.03M"
 * formatMarketCap(2030187.4641078862);
 */
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

/**
 * Formats a date string into a more human-readable format "MMM DD, YYYY".
 *
 * The function takes a date string in the format "YYYY-MM-DD" and converts it
 * to a string formatted as "MMM DD, YYYY".
 *
 * @param value - The date string to be formatted (e.g., "2004-08-19").
 * @returns A string representing the formatted date (e.g., "Aug 19, 2004").
 *
 * @example
 * // Returns "Aug 19, 2004"
 * formatDate("2004-08-19");
 */
export const formatDate = (value: string) => {
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
