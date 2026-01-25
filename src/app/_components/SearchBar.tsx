"use client";

import { useAtom } from "jotai";
import { queryAtom, loadingAtom, errorAtom } from "../store";
import { useDebouncedCallback } from "use-debounce";
import { Search, LoaderCircle, Square } from "lucide-react";

interface SearchBarProps {
  onSearch: (symbol: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useAtom(queryAtom);
  const [loading] = useAtom(loadingAtom);
  const [, setError] = useAtom(errorAtom);

  const debouncedSearch = useDebouncedCallback(() => {
    onSearch(query.trim().toUpperCase());
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setError("");
    if (value.trim()) {
      debouncedSearch();
    }
  };

  return (
    <div className="font-mono flex items-center bg-background-darker shadow border border-transparent focus-within:border-primary transition-all">
      <div className="px-4 py-2">
        {loading ? (
          <Square size={16} className="animate-spin" />
        ) : (
          <Search size={16} />
        )}
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for stock symbols [e.g. AAPL / GOOG / MSFT]"
        className={`caret-primary w-full py-2 bg-transparent outline-none text-sm md:text-base ${
          query.length > 0 && "uppercase"
        }`}
      />
    </div>
  );
};

export default SearchBar;
