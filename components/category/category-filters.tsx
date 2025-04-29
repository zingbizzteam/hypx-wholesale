"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Category {
  _id: string;
  name: string;
}

const CategoryFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/products/categories/level1");
      const data = await res.json();
      setCategories(data.categories);
      setSelectedCategories(searchParams.get("category")?.split(",") || []);
    };
    fetchCategories();
  }, [searchParams]);

  const handleCategoryToggle = (categoryName: string) => {
    const newSelected = selectedCategories.includes(categoryName)
      ? selectedCategories.filter((c) => c !== categoryName)
      : [...selectedCategories, categoryName];

    // Build query parts manually to avoid encoding
    const queryParts = [];
    if (newSelected.length > 0) {
      queryParts.push(`category=${newSelected.join(",")}`);
    }
    queryParts.push("page=1");

    router.push(`/shop?${queryParts.join("&")}`);
  };

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-xl">Categories</h2>
        {selectedCategories.length > 0 && (
          <button
            onClick={() => router.push("/shop?page=1")}
            className="text-base text-gray-600 hover:text-black"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category._id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name?.toLowerCase() ?? '')}

              onChange={() => handleCategoryToggle(category.name?.toLowerCase() ?? '')}
              className="w-5 h-5 border-gray-300 rounded accent-black cursor-pointer"
            />
            <label className="text-base cursor-pointer">{category.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;
