'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CategoryFilters from "@/components/category/category-filters";
import ProductCard from "@/components/product/product-card";
import { Product } from "@/lib/sanity";

type Props = {
  params: { slug: string };
};

export default function CategoryPageClient({ params }: Props) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const title = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Category";

  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const page = searchParams.get("page") ? parseInt(searchParams.get("page") || "1") : 1;
  const category = searchParams.get("category") || "";

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams();
    params.set("page", pageNum.toString());
    if (category) params.set("category", category);
    return `/category/${slug}?${params.toString()}`;
  };

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        queryParams.set("page", page.toString());
        queryParams.set("limit", "12");

        if (slug !== "all") {
          queryParams.set("slug", slug);
        }

        if (category) {
          const categoryIds = category.split(",");
          categoryIds.forEach(id => {
            queryParams.append("category", id);
          });
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${queryParams.toString()}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.status}`);
        }

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

    fetchCategoryProducts();
  }, [slug, page, category]);

  return (
    <div className="max-w-[100rem] mx-auto px-10 lg:px-24 py-12">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="mb-4 text-gray-600">Lorem ipsum</p>
      <p className="mb-8 text-sm">{totalCount} Products</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <CategoryFilters />
        </div>

        <div className="md:col-span-3">
          {loading ? (
            <div className="col-span-full flex justify-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-500">No products found with the selected filters.</p>
                  </div>
                ) : (
                  products.map((product: Product) => (
                    <ProductCard key={product._id || product.name} product={product} />
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
