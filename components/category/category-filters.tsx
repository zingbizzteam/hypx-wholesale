"use client"

import { Size } from "@/lib/sanity";
import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryBase {
  _id: string;
  name: string;
  level?: number;
}

interface Category extends CategoryBase {
  subcategories?: CategoryBase[];
}

const CategoryFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [processedCategories, setProcessedCategories] = useState<Category[]>([]);
  
  // Changed from single selection to multiple selections
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Use a debounce flag to prevent multiple URL updates
  const [updateTimeout, setUpdateTimeout] = useState<NodeJS.Timeout | null>(null);

  // Load initial selections from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const sizeParam = searchParams.get("size");
    
    if (categoryParam) {
      setSelectedCategories(categoryParam.split(","));
    } else {
      setSelectedCategories([]);
    }
    
    if (sizeParam) {
      setSelectedSizes(sizeParam.split(","));
    } else {
      setSelectedSizes([]);
    }
  }, [searchParams]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/categories`);
      if (!res.ok) throw new Error('Failed to fetch categories');
      const data = await res.json();
      setCategories(data.categories);
      organizeCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const organizeCategories = (categoriesData: Category[]) => {
    // Find top-level categories (level 1 or undefined level)
    const topLevelCategories = categoriesData.filter(cat => 
      !cat.level || cat.level === 1
    );
    
    // Create a deep copy of these categories
    const processed = topLevelCategories.map(topCat => {
      const processedTopCat: Category = {
        _id: topCat._id,
        name: topCat.name,
        level: topCat.level,
        subcategories: []
      };
      
      // Find direct child categories
      if (topCat.subcategories && topCat.subcategories.length > 0) {
        const level2Categories = topCat.subcategories.map(subCatRef => {
          const fullSubCat = categoriesData.find(c => c._id === subCatRef._id);
          if (fullSubCat) {
            const processedSubCat: Category = {
              _id: fullSubCat._id,
              name: fullSubCat.name,
              level: fullSubCat.level,
              subcategories: []
            };
            
            // Find level 3 categories (if any)
            if (fullSubCat.subcategories && fullSubCat.subcategories.length > 0) {
              const level3Categories = fullSubCat.subcategories.map(subSubCatRef => {
                return categoriesData.find(c => c._id === subSubCatRef._id);
              }).filter(Boolean) as Category[];
              
              processedSubCat.subcategories = level3Categories;
            }
            
            return processedSubCat;
          }
          return null;
        }).filter(Boolean) as Category[];
        
        processedTopCat.subcategories = level2Categories;
      }
      
      return processedTopCat;
    });
    
    setProcessedCategories(processed);
    
    // Auto-expand any categories that are selected
    const newExpandedState: Record<string, boolean> = {};
    categories.forEach(cat => {
      if (selectedCategories.includes(cat._id)) {
        // Find parent categories and expand them
        const parentCat = findParentCategory(categoriesData, cat._id);
        if (parentCat) {
          newExpandedState[parentCat._id] = true;
        }
      }
    });
    
    setExpandedCategories(prev => ({...prev, ...newExpandedState}));
  };
  
  // Helper function to find parent category
  const findParentCategory = (categories: Category[], childId: string): Category | null => {
    for (const cat of categories) {
      if (cat.subcategories?.some(subcat => subcat._id === childId)) {
        return cat;
      }
    }
    return null;
  };

  const fetchSizes = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/sizes`);
      if (!res.ok) throw new Error('Failed to fetch sizes');
      const data = await res.json();
      setSizes(data.sizes);
    } catch (error) {
      console.error("Error fetching sizes:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSizes();
  }, []);

  const toggleCategory = useCallback((categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  }, []);

  // Update to handle multiple selections with checkboxes
  const handleCategorySelect = useCallback((categoryId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    
    setSelectedCategories(prev => {
      // If already selected, remove it
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      }
      // Otherwise add it
      return [...prev, categoryId];
    });
    
    // Schedule the URL update with debounce
    if (updateTimeout) {
      clearTimeout(updateTimeout);
    }
    
    const timeout = setTimeout(() => {
      updateFiltersInURL();
    }, 300);
    
    setUpdateTimeout(timeout);
  }, [updateTimeout]);

  // Update to handle multiple size selections
  const handleSizeSelect = useCallback((sizeId: string) => {
    setSelectedSizes(prev => {
      if (prev.includes(sizeId)) {
        return prev.filter(id => id !== sizeId);
      }
      return [...prev, sizeId];
    });
    
    // Schedule the URL update with debounce
    if (updateTimeout) {
      clearTimeout(updateTimeout);
    }
    
    const timeout = setTimeout(() => {
      updateFiltersInURL();
    }, 300);
    
    setUpdateTimeout(timeout);
  }, [updateTimeout]);

  // Apply filters to the URL
  const updateFiltersInURL = useCallback(() => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams(searchParams.toString());
    
    // Update category parameter if we have selections
    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","));
    } else {
      params.delete("category");
    }
    
    // Update size parameter if we have selections
    if (selectedSizes.length > 0) {
      params.set("size", selectedSizes.join(","));
    } else {
      params.delete("size");
    }
    
    // Reset to page 1 when filters change
    params.set("page", "1");
    
    // Construct the new URL with the same pathname but updated search params
    const pathname = window.location.pathname;
    const newUrl = `${pathname}?${params.toString()}`;
    
    // Push the new URL to the router
    router.push(newUrl);
  }, [router, searchParams, selectedCategories, selectedSizes]);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    
    // Remove all filter parameters from URL
    const pathname = window.location.pathname;
    router.push(`${pathname}?page=1`);
  }, [router]);

  // Recursive function to render categories and their subcategories
  const renderCategory = useCallback((category: Category, depth: number = 0) => {
    const isTopLevel = depth === 0;
    const isSelected = selectedCategories.includes(category._id);
    
    return (
      <div 
        key={category._id} 
        className={`${isTopLevel ? 'border-b border-gray-200 pb-3 mb-3' : 'mb-2'} ${depth > 0 ? 'ml-4' : ''}`}
      >
        <div 
          className="flex justify-between items-center cursor-pointer py-1"
          onClick={(e) => toggleCategory(category._id, e)}
        >
          <div className="flex items-center">
            <div className="relative flex items-center mr-2">
              <input
                type="checkbox"
                id={`category-${category._id}`}
                checked={isSelected}
                onChange={() => {}} // Controlled component needs onChange
                className="appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white checked:bg-black checked:border-black cursor-pointer"
                onClick={(e) => handleCategorySelect(category._id, e)}
              />
              <svg 
                className={`absolute w-3 h-3 text-white pointer-events-none ${isSelected ? 'opacity-100' : 'opacity-0'}`}
                viewBox="0 0 17 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 4.5L6 9.5L15.5 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <label 
              htmlFor={`category-${category._id}`} 
              className="text-sm cursor-pointer"
              onClick={(e) => e.preventDefault()} // Prevent label from triggering checkbox twice
            >
              {category.name}
            </label>
          </div>
          
          {category.subcategories && category.subcategories.length > 0 && (
            <span className="text-sm">
              {expandedCategories[category._id] ? "(-)" : "(+)"}
            </span>
          )}
        </div>

        {expandedCategories[category._id] && category.subcategories && category.subcategories.length > 0 && (
          <div className="pl-2 mt-2">
            {category.subcategories.map(subcat => renderCategory(subcat as Category, depth + 1))}
          </div>
        )}
      </div>
    );
  }, [selectedCategories, expandedCategories, handleCategorySelect, toggleCategory]);

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-medium text-lg">Filters</h2>
        {(selectedCategories.length > 0 || selectedSizes.length > 0) && (
          <button 
            onClick={clearAllFilters}
            className="text-sm text-gray-600 hover:text-black"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories Section */}
        <div>
          <h3 className="font-medium mb-4">Categories</h3>
          <div>
            {processedCategories.map(category => renderCategory(category))}
          </div>
        </div>

        {/* Sizes Section */}
        <div>
          <h3 className="font-medium mb-4">Sizes</h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size._id}
                type="button"
                onClick={() => handleSizeSelect(size._id)}
                className={`
                  px-3 py-1 text-sm border rounded-md transition-colors
                  ${selectedSizes.includes(size._id) 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-300 hover:border-gray-400'}
                `}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;