// @/lib/localStorageUtils.ts

import { Product } from "./sanity";

// Helper function to update the cart with new products or modified quantity
export const updateCart = (product: { _id: any; }, selectedColor: any, selectedSize: any, quantity: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Use the product._id for comparison, not productId
    const existingProductIndex = existingCart.findIndex(
      (cartProduct: any) =>
        (cartProduct.productId === product._id || cartProduct._id === product._id) &&
        cartProduct.selectedColor === selectedColor &&
        cartProduct.selectedSize === selectedSize
    );
  
    if (existingProductIndex !== -1) {
      // If the product exists, only update the quantity
      existingCart[existingProductIndex].quantity = quantity;
    } else {
      // If the product is new, add it to the cart
      existingCart.push({
        ...product,
        selectedColor,
        selectedSize,
        quantity,
        productId: product._id, // Ensure we track the product by its ID
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
    return existingCart; // Return the updated cart
};

// Add a function to remove items from the cart
export const removeFromCart = (productId: any, selectedColor: any, selectedSize: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Filter out the item that matches the criteria
    const updatedCart = existingCart.filter(
      (cartProduct: any) => 
        !(
          (cartProduct.productId === productId || cartProduct._id === productId) && 
          cartProduct.selectedColor === selectedColor && 
          cartProduct.selectedSize === selectedSize
        )
    );
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart; // Return the updated cart
};
