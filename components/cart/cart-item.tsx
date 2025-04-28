"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { updateCart, removeFromCart } from "@/lib/localStorage";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { fetchColors } from "@/lib/productFeatureFetch";

type CartItemProps = {
  item: {
    _id: number;
    name: string;
    description: string;
    quantity: number;
    slug: { current: string };
    images: { asset: { _ref: string }; hotspot: boolean }[];
    selectedColor: any;
    selectedSize: any;
    productId?: number;
  };
  onRemove: (id: number, color: any, size: any) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [colorName, setColorName] = useState<string>("");
  const [sizeName, setSizeName] = useState<string>("");

  // Function to truncate text with ellipsis
  const truncateText = (text: string, maxLength: number = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Fetch color and size information when component mounts
  useEffect(() => {
    const fetchColorAndSizeInfo = async () => {
      try {
        // This would normally be an API call, but for simplicity we'll just use the _ref
        if (item.selectedColor && item.selectedColor._ref) {
           const colors = await fetchColors([item.selectedColor]);
           console.log(colors);
          setColorName(colors[0].name);
        }

        if (item.selectedSize && item.selectedSize._ref) {
          const sizes = await fetchColors([item.selectedSize]);
          setSizeName(sizes[0].name);
        }
      } catch (error) {
        console.error("Error fetching color and size info:", error);
      }
    };

    fetchColorAndSizeInfo();
  }, [item.selectedColor, item.selectedSize]);

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
  const imageUrl = urlFor(item.images[0].asset).url() || "/placeholder.svg";

  // Truncate the description
  const truncatedDescription = truncateText(item.description, 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-gray-200 pb-8">
      <Link
        href={`/product/${item.slug.current}`}
        className="flex items-center space-x-4"
      >
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image src={imageUrl} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-medium">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{truncatedDescription}</p>
          <p className="flex text-sm text-gray-600 mt-1">
            {colorName && <span><b>Color:</b> {colorName}</span>}
            {sizeName && <span className="ml-2"><b>Size:</b> {sizeName}</span>}
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
