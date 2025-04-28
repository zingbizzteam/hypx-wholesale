// Cart.jsx
"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "@/components/cart/cart-item";
import WholesaleNote from "@/components/cart/wholesale-note";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const loadCartItems = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(storedCartItems);
    };

    loadCartItems();

    // Optional: Add event listener for localStorage changes
    window.addEventListener('storage', loadCartItems);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener('storage', loadCartItems);
    };
  }, []);

  // Handle item removal from the cart
  const handleRemoveItem = (productId: number, color: string, size: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item =>
        !(item.productId === productId &&
          item.selectedColor === color &&
          item.selectedSize === size)
      )
    );
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="container1">
      <div className="container2">
        <div className="container3 px-4 py-12">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
            <p className="mt-3">({totalQuantity}) Items</p>
          </div>


          <div className="border-b border-[#B5B5B5] pb-2 mb-6 flex w-full">
            <div className="md:flex justify-between md:w-5/6">
              <h2 className="font-bold text-base">Product</h2>
              <h2 className="font-bold text-base mr-7">Total Quantity</h2>
            </div>
          </div>

          <div className="space-y-8">
            {cartItems.length === 0 ? (
              <p>Your cart is empty. Add some items to your cart.</p>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.selectedColor}-${item.selectedSize}`}
                  item={item}
                  onRemove={handleRemoveItem}
                />
              ))
            )}
          </div>

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
        </div>
      </div>
    </section>
  );
}