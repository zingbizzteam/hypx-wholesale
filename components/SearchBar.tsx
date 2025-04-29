// components/SearchBar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when search bar opens
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  // Fetch search results
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timeout = setTimeout(async () => {
      const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data.products || []);
      setLoading(false);
    }, 300); // debounce
    return () => clearTimeout(timeout);
  }, [query]);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if ((e.target as HTMLElement).closest(".search-dropdown")) return;
      setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative search-dropdown">
      <button
        className="p-2"
        onClick={() => setOpen((o) => !o)}
        aria-label="Search"
      >
        <Search />
      </button>
      {open && (
        <div className="absolute left-0 z-50 mt-2 w-72 bg-white border rounded shadow-lg">
          <input
            ref={inputRef}
            type="text"
            className="w-full px-3 py-2 border-b outline-none"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            {loading && <div className="p-3 text-gray-400">Searching...</div>}
            {!loading && results.length === 0 && query.length > 1 && (
              <div className="p-3 text-gray-400">No products found.</div>
            )}
            {!loading && results.map((product) => (
              <button
                key={product._id}
                className="flex items-center w-full px-3 py-2 hover:bg-gray-100 text-left"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                  setResults([]);
                  router.push(`/product/${product.slug.current}`);
                }}
              >
                <span>{product.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
