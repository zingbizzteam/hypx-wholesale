// CartItem.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { updateCart, removeFromCart } from "@/lib/localStorage"; 
import { urlFor } from "@/lib/sanity"; 
import Link from "next/link";

type CartItemProps = {
  item: {
    _id: number;
    name: string;
    description: string;
    quantity: number;
    slug: { current: string };
    images: {asset: { _ref: string }; hotspot: boolean }[];
    selectedColor: string;
    selectedSize: string;
    productId?: number; // Added this in case item already has a productId property
  };
  onRemove: (id: number, color: string, size: string) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  // Update the cart in localStorage when quantity is changed
  const updateQuantityInCart = (newQuantity: number) => {
    // Ensure quantity is between 10 and 10,000
    if (newQuantity >= 10 && newQuantity <= 10000) {
      setQuantity(newQuantity);
      updateCart(item, item.selectedColor, item.selectedSize, newQuantity);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 10) {
      updateQuantityInCart(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10000) {
      updateQuantityInCart(quantity + 1);
    }
  };

  // Handle removing the item from the cart
  const handleRemoveItem = () => {
    const productId = item.productId || item._id;
    // Call the removeFromCart function
    removeFromCart(productId, item.selectedColor, item.selectedSize);
    // Also call the parent's onRemove function to update the UI
    onRemove(productId, item.selectedColor, item.selectedSize);
  };

  // Use urlFor to build the correct image URL
  const imageUrl = urlFor(item.images[0].asset).url() || "/placeholder.svg"; // Fallback to placeholder if image URL is empty

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-8">
      <Link href={`/product/${item.slug.current}`} className="flex items-center space-x-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {item.description}
          </p>
        </div>
      </Link>

      <div className="flex items-center justify-end space-x-4">
        <div className="flex items-center">
          <button
            onClick={decreaseQuantity}
            className="quantity-btn"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity-input">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="quantity-btn"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        className="text-red-500 flex gap-2 flex-col items-center justify-end mt-2 text-sm"
        aria-label="Remove item"
        onClick={handleRemoveItem}
      >
        <Trash2 size={22} className="text-black" />
        <span className="mr-1">Remove</span>
      </button>
    </div>
  );
};

export default CartItem;
