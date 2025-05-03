"use client";

import { useState } from "react";
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
    productId?: number;
  };
  onRemove: (id: number) => void;
};

const CartItem = ({ item, onRemove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const truncateText = (text: string, maxLength: number = 100) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const updateQuantityInCart = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 100000) {
      setQuantity(newQuantity);
      updateCart(item, newQuantity);
    }
  };

  const handleRemoveItem = () => {
    const productId = item.productId || item._id;
    removeFromCart(productId);
    onRemove(productId);
  };

  const imageUrl = urlFor(item.images[0].asset).url() || "/placeholder.svg";
  const truncatedDescription = truncateText(item.description, 100);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center border-b border-[#B5B5B5] pb-8">
      {/* Product info */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:w-full w-full gap-4">
        <Link href={`/product/${item.slug.current}`} className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <Image src={imageUrl} alt={item.name} fill className="object-cover rounded-md" />
          </div>
          <div className="min-w-0">
            <h3 className="text-md font-medium truncate">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{truncatedDescription}</p>
          </div>
        </Link>

        {/* Quantity adjuster and remove button container */}
        <div className="flex flex-row items-center gap-6 w-full md:w-auto">
          <div className="md:w-auto">
            <QuantityAdjuster value={quantity} setValue={updateQuantityInCart} min={1} max={100000} />
          </div>
          <div className="flex justify-start md:justify-center">
            <button
              className="text-[#FF0000] flex items-center gap-2 text-sm hover:underline"
              aria-label="Remove item"
              onClick={handleRemoveItem}
            >
              <Trash2 size={20} className="text-black" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
