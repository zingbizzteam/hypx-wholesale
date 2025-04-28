"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { Product, urlFor } from "@/lib/sanity"; // Assuming you have a urlFor function in your lib/sanity.ts
import ProductCard from "../product/product-card";


export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="container1 bg-[#F0F0F0] py-12">
        <div className="container2">
          <div className="container3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Best Sellers</h2>
              <Link href="/category/all" className="text-base flex items-center text-black hover:text-[#333333]">
                Explore <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div>Loading...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container1 bg-[#F0F0F0] py-12">
      <div className="container2">
        <div className="container3">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Best Sellers</h2>
            <Link href="/category/all" className="flex items-center text-sm font-medium">
              Explore <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



