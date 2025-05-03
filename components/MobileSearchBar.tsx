"use client";
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch search results
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(async () => {
      const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.products || []);
      setLoading(false);
      setShowDropdown(true);
    }, 300); // debounce
    return () => clearTimeout(timeout);
  }, [query]);

  // Hide dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest(".mobile-searchbar-dropdown")) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  return (
    <div className="relative mb-4 mobile-searchbar-dropdown">
      <div className="flex items-center bg-gray-100 rounded px-2 py-1">
        <Search className="text-gray-400 mr-2" />
        <input
          ref={inputRef}
          type="text"
          className="w-full bg-transparent outline-none py-1"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (results.length > 0) setShowDropdown(true); }}
        />
      </div>
      {showDropdown && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow z-50 max-h-64 overflow-auto">
          {loading && <div className="p-3 text-gray-400">Searching...</div>}
          {!loading && results.length === 0 && query.length > 1 && (
            <div className="p-3 text-gray-400">No products found.</div>
          )}
          {!loading && results.map((product) => (
            <button
              key={product._id}
              className="w-full text-left px-3 py-2 hover:bg-gray-100"
              onClick={() => {
                setQuery("");
                setResults([]);
                setShowDropdown(false);
                router.push(`/product/${product.slug.current}`);
              }}
            >
              {product.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
