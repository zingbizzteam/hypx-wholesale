"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import Gsm from './gsm'
import { Product, urlFor } from "@/lib/sanity";
import {
  fetchCategories,
} from "@/lib/productFeatureFetch"; // Import the functions from the API file
import ProductGallery from "./product-gallery";
import { useRouter } from "next/navigation"; // To handle redirection
import { updateCart } from "@/lib/localStorage"; // Import the helper functions
import { toast } from "react-toastify";
import Link from "next/link";

const ProductDetails = ({ product }: { product: Product }) => {
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [isGSMOpen, setIsGSMOpen] = useState(false);
  const [resolvedCategories, setResolvedCategories] = useState<any[]>([]);

  const router = useRouter(); // Router for redirection

  const resolveData = async () => {
    const fetchedCategories = await fetchCategories([product.category]);
    setResolvedCategories(fetchedCategories);
  };


  useEffect(() => {
    resolveData();
  }, [product]); // Run the function when the product changes


 

  // Save product to localStorage when Add to Cart is clicked
  const handleAddToCart = () => {
    updateCart(product,  100);
    toast.success(`Product added to cart!`, {
          position: "top-right",
          autoClose: 3000, // Toast disappears after 3 seconds
        });
  };

  // Save product to localStorage and redirect to the quote page when Get Quote is clicked
  const handleGetQuote = () => {
    updateCart(product,  100);
    router.push("/checkout"); // Navigate to the quote page
  };
 const imageUrls: string[] = product.images.map(img => urlFor(img.asset._ref).url());
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductGallery images={imageUrls} thumbnails={imageUrls} />
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="mt-6 text-gray-700">{product.description}</p>

      
        {/* Fabric field */}
        <div className="mt-8">
          <h2 className="text-base font-semibold mb-2">Fabrics:</h2>
          <div className="flex w-full space-x-2">
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/trims-and-colours'}
              >Trims / Colours</Link></h3>
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/our-fabrics'}
              >Fabrics</Link></h3>
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/our-prints-and-embroidery'}
              >Printing / Embroidery</Link></h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            className="w-full flex items-center justify-between py-3 border-t border-b border-gray-200"
            onClick={() => setIsProductDetailsOpen(!isProductDetailsOpen)}
            aria-expanded={isProductDetailsOpen}
          >
            <span className="font-medium">Product Details</span>
            {isProductDetailsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isProductDetailsOpen && (
            <div className="py-4 px-2">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.productDetails && product.productDetails.length > 0 ? (
                  product.productDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <p>No details found</p>
                )}
              </ul>
            </div>
          )}

          <button
            className="w-full flex items-center justify-between py-3 border-b border-gray-200"
            onClick={() => setIsGSMOpen(!isGSMOpen)}
            aria-expanded={isGSMOpen}
          >
            <span className="font-medium">GSM</span>
            {isGSMOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isGSMOpen && (
            <div className="py-4 px-2">
              <Gsm/>
              {/* <p className="text-gray-700">{product.gsm || "No GSM information available."}</p> */}
            </div>
          )}
        </div>
      
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center btn btn-outline" onClick={handleAddToCart}>
          <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
          <button className="btn btn-primary" onClick={handleGetQuote}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
