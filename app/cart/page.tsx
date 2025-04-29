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
  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const loadCartItems = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartLength(storedCartItems.length);
      setCartItems(storedCartItems);
    };

    loadCartItems();

    // Optional: Add event listener for localStorage changes
    window.addEventListener("storage", loadCartItems);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("storage", loadCartItems);
    };
  }, []);

  // Handle item removal from the cart
  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.productId === productId))
    );
    // Also update localStorage
    const updatedCart = cartItems.filter(
      (item) => !(item.productId === productId)
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartLength(updatedCart.length);
    toast.info(`Item Removed successfully`, {
          position: "top-right",
          autoClose: 3000, // Toast disappears after 3 seconds
        });
  };

  // Calculate total quantity

  return (
    <section className="lg:container1">
      <div className="lg:container2">
        <div className="lg:container3 px-4 py-12">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
            <p className="mt-3">({cartLength}) Items</p>
          </div>

          <div className="border-b border-[#B5B5B5] pb-2 mb-6 flex w-full">
            <div className="md:flex justify-between md:w-5/6">
              <h2 className="font-bold text-base">Product</h2>
              <h2 className="font-bold text-base mr-7">Total Quantity</h2>
            </div>
          </div>

          <div className="space-y-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24">
                <ShoppingCart size={50} className="text-gray-400 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">
                  Your cart is empty
                </h2>
                <p className="mb-6 text-gray-600">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link
                  href="/category/all"
                  className="bg-black text-white rounded px-8 py-3 text-lg font-medium hover:bg-gray-800 transition"
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

          {cartItems.length > 0 && (
            <>
              <WholesaleNote />
              <div className="mt-12 text-center">
                <Link
                  href="/checkout"
                  className="bg-black text-[#FFF6EC] rounded-[6px] py-3 px-48 text-center text-xl font-medium
                 hover:bg-[#333333] hover:shadow-[#33333380] hover:shadow-md transition-shadow 
                 ease-in-out duration-2"
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
