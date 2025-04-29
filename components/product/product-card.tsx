import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity"; // Make sure you import `urlFor` to build the image URL
import { updateCart } from "@/lib/localStorage";
import { toast } from "react-toastify"; // Import toast

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(null);

  const handleAddToCart = () => {
    // Add the product to cart
    updateCart(product, 10);

    // Show a toast notification when an item is added to the cart
    toast.success(`Product added to cart!`, {
      position: "top-right",
      autoClose: 3000, // Toast disappears after 3 seconds
    });
  };

  // Function to handle the hover and switch images
  const handleMouseEnter = () => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    }, 1000);
    setIntervalId(interval);
  };

  // Function to clear the interval when the hover ends
  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setCurrentImageIndex(0); // Reset to the first image
    }
  };

  return (
    <div className="group bg-white border border-[#B5B5B5]">
      <div
        className="relative aspect-square mb-3 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={`/product/${product.slug}`}>
          <Image
            src={
              product.images?.[currentImageIndex]?.asset?._ref
                ? urlFor(product.images[currentImageIndex].asset).url()
                : "/placeholder.svg?height=400&width=400"
            }
            alt={product.name}
            fill
            className="object-cover"
          />
        </Link>
      </div>

      <div className="relative flex flex-col h-[130px]  px-4 pb-4 pt-3 gap-4">
        <Link href={`/product/${product.slug}`} passHref>
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <div className="flex space-x-2 mt-auto">
          <button
            className="flex-1 rounded border border-black py-1.5 text-sm flex items-center justify-center hover:bg-gray-100"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-1" />
            <span>Add to cart</span>
          </button>
          <Link
            href={`/contact-us?product=${product.slug}`}
            className="flex-1 bg-black text-white py-1.5 text-sm rounded text-center hover:bg-gray-800"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
