// @/lib/localStorageUtils.ts

import { Product } from "./sanity";

// Helper function to update the cart with new products or modified quantity
export const updateCart = (product: { _id: any; }, selectedColor: any, selectedSize: any, quantity: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const existingProductIndex = existingCart.findIndex(
      (cartProduct: any) => {
        // Check if product ID matches
        const idMatch = (cartProduct.productId === product._id || cartProduct._id === product._id);
        
        // Check if color matches by comparing _ref
        const colorMatch = cartProduct.selectedColor && selectedColor && 
                          cartProduct.selectedColor._ref === selectedColor._ref;
        
        // Check if size matches by comparing _ref
        const sizeMatch = cartProduct.selectedSize && selectedSize && 
                         cartProduct.selectedSize._ref === selectedSize._ref;
        
        return idMatch && colorMatch && sizeMatch;
      }
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
    return existingCart;
};

// Add a function to remove items from the cart
export const removeFromCart = (productId: any, selectedColor: any, selectedSize: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Filter out the item that matches the criteria
    const updatedCart = existingCart.filter(
      (cartProduct: any) => {
        // Check if product ID matches
        const idMatch = (cartProduct.productId === productId || cartProduct._id === productId);
        
        // Check if color matches by comparing _ref
        const colorMatch = cartProduct.selectedColor && selectedColor && 
                          cartProduct.selectedColor._ref === selectedColor._ref;
        
        // Check if size matches by comparing _ref
        const sizeMatch = cartProduct.selectedSize && selectedSize && 
                         cartProduct.selectedSize._ref === selectedSize._ref;
        
        // Only keep items that don't match all criteria
        return !(idMatch && colorMatch && sizeMatch);
      }
    );
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
};
