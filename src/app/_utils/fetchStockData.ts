import { StockData } from "../store";

const API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

export const fetchStockData = async (symbol: string): Promise<StockData> => {
  try {
    const profileResponse = await fetch(
      `${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`
    );
    const quoteResponse = await fetch(
      `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`
    );

    if (!profileResponse.ok || !quoteResponse.ok) {
      throw new Error("Error fetching data");
    }

    const profileData = await profileResponse.json();
    const quoteData = await quoteResponse.json();

    if (!profileData.name || !profileData.ticker || !quoteData.c) {
      throw new Error("Please enter a valid stock symbol (AAPL, GOOG)");
    }

    return {
      logo: profileData.logo,
      name: profileData.name,
      ticker: profileData.ticker,
      weburl: profileData.weburl,

      country: profileData.country,
      marketCapitalization: profileData.marketCapitalization,
      listedExchange: profileData.exchange,
      ipo: profileData.ipo,

      currency: profileData.currency,
      currentPrice: quoteData.c,
      percentChange: quoteData.dp,
      absoluteChange: quoteData.d,

      previousClose: quoteData.pc,
      openPrice: quoteData.o,
      highPrice: quoteData.h,
      lowPrice: quoteData.l,
    };
  } catch (error: any) {
    if (
      error.message === "Error fetching data" ||
      error.message === "Please enter a valid stock symbol (AAPL, GOOG)"
    ) {
      throw error;
    }
    throw new Error("Network error");
  }
};
