import { MESSAGES } from "../_lib/constants";
import { StockData } from "../store";

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  try {
    const response = await fetch(`/api/stock?symbol=${symbol}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || MESSAGES.FETCHING_ERROR);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    if (
      error.message === MESSAGES.FETCHING_ERROR ||
      error.message === MESSAGES.INVALID_SYMBOL
    ) {
      throw error;
    }
    throw new Error("Network error");
  }
};
