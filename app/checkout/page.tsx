"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutForm from "@/components/forms/checkout-form";
import WholesaleNote from "@/components/cart/wholesale-note";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export default function Checkout() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCartItems(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/cart" className="flex items-center text-sm font-medium mb-4">
        <ChevronLeft /> <span>Back to Cart</span>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <WholesaleNote />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <div>
          <div className="flex justify-between place-content-center">
            <h2 className="text-2xl font-bold mb-6">Product Summary</h2>
            <p className="">({cartItems.length}) Items</p>
          </div>
          <div className="space-y-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24">
                <p className="text-2xl font-semibold mb-4">No items in cart</p>
                <Link
                  href="/category/all"
                  className="bg-black text-white rounded px-8 py-3 text-lg font-medium hover:bg-gray-800 transition"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <Link
                  href={`/product/${item.slug.current}`}
                  key={item.productId}
                  className="flex items-center space-x-4 border-b border-gray-200 pb-6"
                >
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={
                        urlFor(item.images[0]?.asset?._ref).url() ||
                        "/placeholder.svg"
                      }
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Total Quantity : {item.quantity}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="p-5 bg-[#FFF6EC]">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Complete Your Quote Submission
          </h2>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
