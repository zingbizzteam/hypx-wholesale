"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "@/components/cart/cart-item";
import WholesaleNote from "@/components/cart/wholesale-note";
import { ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const loadCartItems = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartLength(storedCartItems.length);
      setCartItems(storedCartItems);
    };

    loadCartItems();
    window.addEventListener("storage", loadCartItems);

    return () => {
      window.removeEventListener("storage", loadCartItems);
    };
  }, []);

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.productId === productId))
    );
    const updatedCart = cartItems.filter(
      (item) => !(item.productId === productId)
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartLength(updatedCart.length);
    toast.info(`Item Removed successfully`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <section className="container1">
      <div className="container2">
        <div className="container3 px-2 sm:px-4 py-8 sm:py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-8">Your Cart</h1>
            <p className="mb-4 sm:mb-0 mt-1 sm:mt-3 text-base sm:text-lg">({cartLength}) Items</p>
          </div>

          {/* Table Header */}
          <div className="border-b border-[#B5B5B5] pb-2 mb-4 sm:mb-6 flex flex-col sm:flex-row w-full">
            <div className="flex justify-between w-full sm:md:w-5/6">
              <h2 className="font-bold text-sm sm:text-base">Product</h2>
              <h2 className="font-bold text-sm sm:text-base mr-2 sm:mr-7">Total Quantity</h2>
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-6 sm:space-y-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 sm:py-24">
                <ShoppingCart size={40} className="text-gray-400 mb-3 sm:mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                  Your cart is empty
                </h2>
                <p className="mb-4 sm:mb-6 text-gray-600 text-center">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  href="/shop"
                  className="bg-black text-white rounded px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium hover:bg-gray-800 transition"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={`${item.productId}`}
                  item={item}
                  onRemove={(id) => handleRemoveItem(id.toString())}
                />
              ))
            )}
          </div>

          {/* Checkout Section */}
          {cartItems.length > 0 && (
            <>
              <WholesaleNote />
              <div className="mt-8 sm:mt-12 text-center">
                <Link
                  href="/checkout"
                  className="bg-black text-[#FFF6EC] rounded-[6px] py-3 px-10 sm:px-48 text-center text-lg sm:text-xl font-medium
                 hover:bg-[#333333] hover:shadow-[#33333380] hover:shadow-md transition-shadow 
                 ease-in-out duration-200"
                >
                  Proceed to checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}