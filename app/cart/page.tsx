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


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      

      <div className="border-b border-gray-200 pb-2 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="font-medium">Product</div>
          <div className="font-medium text-right">Total Quantity</div>
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
          className="bg-black text-white px-8 py-4 inline-block font-medium hover:bg-gray-800 transition-colors"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}