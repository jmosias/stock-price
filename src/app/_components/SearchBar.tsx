"use client";

import { useAtom } from "jotai";
import { queryAtom, loadingAtom, errorAtom } from "../store";
import { useDebouncedCallback } from "use-debounce";
import { Search, LoaderCircle } from "lucide-react";

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
    <div className="rounded-xl flex items-center gap-2 bg-background-darker shadow">
      <div className="px-4 py-2">
        {loading ? (
          <LoaderCircle size={16} className="animate-spin" />
        ) : (
          <Search size={16} />
        )}
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search stock symbols (AAPL, GOOG)"
        className={`caret-primary w-full py-2 bg-transparent outline-none ${
          query.length > 0 && "uppercase"
        }`}
      />
    </div>
  );
};

export default SearchBar;
