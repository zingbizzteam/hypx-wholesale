"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import Gsm from './gsm'
import { Product, urlFor } from "@/lib/sanity";
import {
  fetchSizes,
  fetchColors,
  fetchCategories,
} from "@/lib/productFeatureFetch"; // Import the functions from the API file
import ProductGallery from "./product-gallery";
import { useRouter } from "next/navigation"; // To handle redirection
import { updateCart } from "@/lib/localStorage"; // Import the helper functions
import { toast } from "react-toastify";
import Link from "next/link";

const ProductDetails = ({ product }: { product: Product }) => {
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
  const [isGSMOpen, setIsGSMOpen] = useState(false);

  const [resolvedSizes, setResolvedSizes] = useState<any[]>([]);
  const [resolvedColors, setResolvedColors] = useState<any[]>([]);
  const [resolvedCategories, setResolvedCategories] = useState<any[]>([]);

  const [filteredImages, setFilteredImages] = useState<any[]>([]); // Store filtered images based on selected color

  const [quantity, setQuantity] = useState<number>(10); // Default quantity is 10

  const router = useRouter(); // Router for redirection

  // Function to resolve sizes, colors, and categories by fetching data from Sanity
  const resolveData = async () => {
    const fetchedSizes = await fetchSizes(product.sizes);
    const fetchedColors = await fetchColors(product.colors);
    const fetchedCategories = await fetchCategories([product.category]);

    setResolvedSizes(fetchedSizes);
    setResolvedColors(fetchedColors);
    setResolvedCategories(fetchedCategories);

    // Set default size and color
    const defaultColor = fetchedColors[0]?.value || null; // Use the first color as default
    const defaultSize = fetchedSizes[0]?.name || null; // Use the first size as default

    setSelectedColor(defaultColor);
    setSelectedSize(defaultSize);

    // Filter images based on default selected color
    filterImagesByColor(defaultColor);
  };

  const filterImagesByColor = (colorValue: string | null) => {
    if (colorValue) {
      const colorImages = product.colorImages.filter((colorImage) => {
        // Dereference the color by fetching its `value` property
        const color = resolvedColors.find(
          (c) => c._id === colorImage.color?._ref
        );
        return color && color.value === colorValue;
      });
      setFilteredImages(
        colorImages.map((colorImage) => urlFor(colorImage.image).url())
      );
    }
  };

  useEffect(() => {
    resolveData();
  }, [product]); // Run the function when the product changes

  const handleColorChange = (colorValue: string) => {
    setSelectedColor(colorValue);
    filterImagesByColor(colorValue); // Filter images when color is changed
  };

  const productImages =
    filteredImages.length > 0
      ? filteredImages
      : product.images.map((image) => urlFor(image.asset).url());

  // Handle quantity change
  const incrementQuantity = () => {
    if (quantity < 10000) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 10) setQuantity(quantity - 1);
  };

  // Save product to localStorage when Add to Cart is clicked
  const handleAddToCart = () => {
    updateCart(product, selectedColor, selectedSize, quantity);
    toast.success(`Product added to cart!`, {
          position: "top-right",
          autoClose: 3000, // Toast disappears after 3 seconds
        });
  };

  // Save product to localStorage and redirect to the quote page when Get Quote is clicked
  const handleGetQuote = () => {
    updateCart(product, selectedColor, selectedSize, quantity);
    router.push("/checkout"); // Navigate to the quote page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductGallery images={productImages} thumbnails={productImages} />
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="mt-6 text-gray-700">{product.description}</p>

        {/* colour
        <div className="mt-8">
          <h2 className="text-sm font-medium mb-2">Colours available:</h2>
          <div className="flex space-x-2 mb-6">
            {resolvedColors.map((color, index) => {
              const colorValue = color?.value;
              return (
                <button
                  key={index}
                  className={`color-option ${selectedColor === colorValue ? "selected" : ""}`}
                  style={{ backgroundColor: `#${colorValue}` }}
                  onClick={() => handleColorChange(colorValue)}
                  aria-label={`Select ${colorValue} color`}
                />
              );
            })}
          </div>
        </div> */}

        {/* size
         <div className="mt-4">
          <h2 className="text-sm font-medium mb-2">Sizes:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {resolvedSizes.map((size, index) => {
              const sizeValue = size?.name || size?._id;
              return (
                <button
                  key={index}
                  className={`size-option ${selectedSize === sizeValue ? "selected" : ""}`}
                  onClick={() => setSelectedSize(sizeValue)}
                >
                  {sizeValue}
                </button>
              );
            })}
          </div>
        </div> */}

        {/* quantity
         <div className="mt-4 flex items-center space-x-4">
          <button onClick={decrementQuantity} className="p-2 border border-gray-300 rounded-lg">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity} className="p-2 border border-gray-300 rounded-lg">
            +
          </button>
        </div> */}

        {/* Fabric field */}
        <div className="mt-8">
          <h2 className="text-base font-semibold mb-2">Fabrics:</h2>
          <div className="flex w-full space-x-2">
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/our-prints-and-embroidery'}
              >Trims / Colours</Link></h3>
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/our-prints-and-embroidery'}
              >Fabrics</Link></h3>
            <h3 className="font-light text-base border border-[#B9B9B9] 
            rounded py-2 px-6 hover:border-black
            transition-all ease-in-out duration-200">
              <Link href={'/our-prints-and-embroidery'}
              >Printing / Embroidery</Link></h3>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            className="w-full flex items-center justify-between py-3 border-t border-b border-gray-200"
            onClick={() => setIsProductDetailsOpen(!isProductDetailsOpen)}
            aria-expanded={isProductDetailsOpen}
          >
            <span className="font-medium">Product Details</span>
            {isProductDetailsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isProductDetailsOpen && (
            <div className="py-4 px-2">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.productDetails && product.productDetails.length > 0 ? (
                  product.productDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))
                ) : (
                  <p>No details found</p>
                )}
              </ul>
            </div>
          )}

          <button
            className="w-full flex items-center justify-between py-3 border-b border-gray-200"
            onClick={() => setIsGSMOpen(!isGSMOpen)}
            aria-expanded={isGSMOpen}
          >
            <span className="font-medium">GSM</span>
            {isGSMOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {isGSMOpen && (
            <div className="py-4 px-2">
              <Gsm/>
              {/* <p className="text-gray-700">{product.gsm || "No GSM information available."}</p> */}
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center btn btn-outline" onClick={handleAddToCart}>
          <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
          <button className="btn btn-primary" onClick={handleGetQuote}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
