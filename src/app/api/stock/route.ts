import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

export const MESSAGES = {
  FETCHING_ERROR: "You do not have access to this stock data",
  INVALID_SYMBOL: "Please enter a valid stock symbol (AAPL or GOOG)",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");

  if (!symbol || typeof symbol !== "string") {
    return NextResponse.json(
      { error: MESSAGES.INVALID_SYMBOL },
      { status: 400 }
    );
  }

  try {
    const profileResponse = await fetch(
      `${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`
    );
    const quoteResponse = await fetch(
      `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`
    );

    if (!profileResponse.ok || !quoteResponse.ok) {
      return NextResponse.json(
        { error: MESSAGES.FETCHING_ERROR },
        { status: 403 }
      );
    }

    const profileData = await profileResponse.json();
    const quoteData = await quoteResponse.json();

    if (!profileData.name || !profileData.ticker || !quoteData.c) {
      return NextResponse.json(
        { error: MESSAGES.INVALID_SYMBOL },
        { status: 400 }
      );
    }

    const data = {
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

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
