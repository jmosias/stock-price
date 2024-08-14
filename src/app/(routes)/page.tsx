"use client";

import { useAtom } from "jotai";
import {
  queryAtom,
  stockDataAtom,
  loadingAtom,
  errorAtom,
  StockData,
} from "../store";
import SearchBar from "../_components/SearchBar";
import StockProfile from "../_components/StockProfile";
import AnimateHeight from "react-animate-height";
import { fetchStockData } from "../_utils/fetchStockData";

const Home: React.FC = () => {
  const [query, setQuery] = useAtom(queryAtom);
  const [stockData, setStockData] = useAtom(stockDataAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [error, setError] = useAtom(errorAtom);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery) return;
    setQuery(searchQuery);
    setLoading(true);
    setError("");
    setStockData({} as StockData);

    try {
      const data = await fetchStockData(searchQuery);
      setStockData(data);
    } catch (error: any) {
      setError(error.message);
      setStockData({} as StockData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-svw h-svh flex justify-center items-center gap-4 px-8 py-8 overflow-hidden">
      <section className="max-w-2xl flex flex-col justify-center items-center gap-4 sm:w-4/5 lg:w-3/5">
        <div className="w-full flex flex-col gap-2">
          <SearchBar onSearch={handleSearch} />
          <AnimateHeight
            animateOpacity
            duration={200}
            height={error && query && !stockData.currentPrice ? "auto" : 0}
          >
            <div className="px-4 py-2 rounded-xl flex justify-center items-center opacity-65 bg-background-darker shadow">
              <p className="text-sm font-extralight">{error}</p>
            </div>
          </AnimateHeight>
        </div>

        <div className="w-full max-w-2xl">
          <AnimateHeight
            animateOpacity
            duration={200}
            height={!isNaN(stockData.currentPrice) ? "auto" : 0}
          >
            <StockProfile />
          </AnimateHeight>
        </div>
      </section>
    </main>
  );
};

export default Home;
