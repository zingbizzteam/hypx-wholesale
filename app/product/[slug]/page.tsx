// app/product/[slug]/page.tsx

import { Metadata } from "next";
import ProductDetails from "@/components/product/product-details";
import ProductGallery from "@/components/product/product-gallery";
import { notFound } from "next/navigation";
import { Product, urlFor } from "@/lib/sanity";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Safely access the slug value
  const { slug } = await params;

  // Format the slug for the title
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} - HYPX Wholesale`,
    description: `Wholesale ${formattedTitle} for retailers and businesses. Bulk orders with customization options.`,
  };
}

export default async function ProductPage({ params }: Props) {
  // Safely access the slug
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  // Use the properly accessed slug to fetch the product
  const product:Product = await fetchProduct(slug);
  

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      
      
        <ProductDetails product={product} />
      </div>
  );
}

async function fetchProduct(slug: string) {
  try {
    // Use the full URL for the fetch call
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?slug=${slug}`;
    const response = await fetch(url);
    if (!response.ok) {
      console.error("API response not OK:", response.status);
      return null;
    }

    const res = await response.json();

    // Check if we have products and return the first one (since we're querying by slug)
    return res.products && res.products.length > 0 ? res.products[0] : null;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

