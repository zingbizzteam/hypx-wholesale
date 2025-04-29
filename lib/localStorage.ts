// @/lib/localStorageUtils.ts

import { Product } from "./sanity";

// Helper function to update the cart with new products or modified quantity
export const updateCart = (product: { _id: any; },  quantity: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const existingProductIndex = existingCart.findIndex(
      (cartProduct: any) => {
        // Check if product ID matches
        const idMatch = (cartProduct.productId === product._id || cartProduct._id === product._id);
        
       
        
        return idMatch  ;
      }
    );
  
    if (existingProductIndex !== -1) {
      // If the product exists, only update the quantity
      existingCart[existingProductIndex].quantity = quantity;
    } else {
      // If the product is new, add it to the cart
      existingCart.push({
        ...product,
        quantity,
        productId: product._id, // Ensure we track the product by its ID
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(existingCart));
    return existingCart;
};

// Add a function to remove items from the cart
export const removeFromCart = (productId: any, ) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Filter out the item that matches the criteria
    const updatedCart = existingCart.filter(
      (cartProduct: any) => {
        // Check if product ID matches
        const idMatch = (cartProduct.productId === productId || cartProduct._id === productId);
        
    
        // Only keep items that don't match all criteria
        return !(idMatch);
      }
    );
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
};
