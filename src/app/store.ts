import { atom } from "jotai";

export interface StockData {
  logo: string;
  name: string;
  ticker: string;
  weburl: string;

  country: string;
  marketCapitalization: number;
  listedExchange: string;
  ipo: string;

  currency: string;
  currentPrice: number;
  percentChange: number;
  absoluteChange: number;

  previousClose: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
}

export const queryAtom = atom<string>("");
export const stockDataAtom = atom<StockData>({} as StockData);
export const loadingAtom = atom<boolean>(false);
export const errorAtom = atom<string>("");
