"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CategoryFilters from "@/components/category/category-filters";
import ProductCard from "@/components/product/product-card";
import { Product } from "@/lib/sanity";
import SkeletonLoader from "@/components/layout/sekelton3";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Get parameters from URL
  const page = parseInt(searchParams.get("page") || "1");
  const category = searchParams.get("category") || "all";
  const limit = parseInt(searchParams.get("limit") || "12");

  // Generate title from category
  const title =
    category === "all"
      ? "All Products"
      : `${category.split(",")[0].charAt(0).toUpperCase()}${category.split(",")[0].slice(1)}`;

  // Generate pagination links
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  // Function to build the URL with preserved filters
  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNum.toString());
    params.set("category", category);
    if (limit !== 12) params.set("limit", limit.toString());

    return `/shop?${params.toString()}`;
  };

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        queryParams.set("page", page.toString());
        queryParams.set("limit", limit.toString());

        // Only add category param if not 'all'
        if (category !== "all") {
          queryParams.set("category", category);
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${queryParams.toString()}`
        );
        if (!response.ok)
          throw new Error(`Failed to fetch products: ${response.status}`);

        const data = await response.json();

        setProducts(data.products);
        setTotalCount(data.totalCount);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProducts([]);
        setTotalCount(0);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, category, limit]);

  return (
    <div className="max-w-[100rem] mx-auto px-10 lg:px-24 py-12">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="mb-4 text-gray-600 cursor-default">Get a Quote Now</p>
        </div>
        <h2 className="mb-8 text-sm"><span className="font-bold">({totalCount}) </span>Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <CategoryFilters />
        </div>

        <div className="md:col-span-3">
          {loading ? (
              <SkeletonLoader />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">
                      No products found with the selected filters.
                    </p>
                  </div>
                ) : (
                  products.map((product: Product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                )}
              </div>

              {products.length > 0 && (
                <div className="mt-8 flex justify-between items-center">
                  {prevPage ? (
                    <Link
                      href={buildPageUrl(prevPage)}
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                      Previous
                    </Link>
                  ) : (
                    <button className="px-4 py-2 bg-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                      Previous
                    </button>
                  )}

                  <span>
                    Page {page} of {totalPages}
                  </span>

                  {nextPage ? (
                    <Link
                      href={buildPageUrl(nextPage)}
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                      Next
                    </Link>
                  ) : (
                    <button className="px-4 py-2 bg-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                      Next
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
