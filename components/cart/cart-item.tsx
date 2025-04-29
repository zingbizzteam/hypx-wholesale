"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { updateCart, removeFromCart } from "@/lib/localStorage";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import QuantityAdjuster from "../product/QuantityAdjuster";

type CartItemProps = {
  item: {
    _id: number;
    name: string;
    description: string;
    quantity: number;
    slug: { current: string };
    images: { asset: { _ref: string }; hotspot: boolean }[];

    productId?: number; // Added this in case item already has a productId property
  };
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  // Function to truncate text with ellipsis
  const truncateText = (text: string, maxLength: number = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Update the cart in localStorage when quantity is changed
  const updateQuantityInCart = (newQuantity: number) => {
    // Ensure quantity is between 10 and 10,000
    if (newQuantity >= 10 && newQuantity <= 10000) {
      setQuantity(newQuantity);
      updateCart(item, newQuantity);
    }
  };



  // Handle removing the item from the cart
  const handleRemoveItem = () => {
    const productId = item.productId || item._id;
    // Call the removeFromCart function
    removeFromCart(productId);
    // Also call the parent's onRemove function to update the UI
    onRemove(productId);
  };

  // Use urlFor to build the correct image URL
  const imageUrl = urlFor(item.images[0].asset).url() || "/placeholder.svg";

  // Truncate the description
  const truncatedDescription = truncateText(item.description, 100);

  return (
    <div className="grid grid-cols-1 md:flex gap-4 items-center border-b border-[#B5B5B5] pb-8">
      <div className="md:flex justify-between items-center md:w-5/6">
        <Link
          href={`/product/${item.slug.current}`}
          className="flex items-center space-x-4"
        >
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
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        </Link>

        <QuantityAdjuster
          value={quantity}
          setValue={updateQuantityInCart}
          min={100}
          max={100000}
        />
      </div>

      <div className="md:w-1/6 md:flex md:justify-center">
        <button
          className="text-[#FF0000] flex gap-2 flex-col items-center justify-end mt-2 text-sm"
          aria-label="Remove item"
          onClick={handleRemoveItem}
        >
          <Trash2 size={22} className="text-black" />
          <span className="mr-1">Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
