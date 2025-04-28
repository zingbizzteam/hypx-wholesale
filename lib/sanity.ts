import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import { ImageAsset } from '@sanity/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// types.ts



export type Category = {
  _id:string;
  name: string;
  slug: string;
  description: string;
  image: {
    asset: { _ref: string };
    hotspot: boolean;
  };
  subcategories: Array<{ _ref: string }>;
  level: number;
};

export type Order = {
  orderNumber: string;
  orderDate: string; // ISO datetime string
  items: Array<{
    product: { _ref: string };
    quantity: number;
  }>;
  value: string;
};

export type Product = {
  _id:string;
  name: string;
  slug: {current:string};
  description: string;
  images: Array<{ asset: { _ref: string }; hotspot: boolean }>;
  category: { _ref: string };
  sizes: Array<{ _ref: string }>;
  colors: Array<{ _ref: string }>;
  stock: number;
  featured: boolean;
  // New field to hold color-specific images
  colorImages: Array<{
    color: { _ref: string }; // Reference to a color document
    image: { asset: { _ref: string }; hotspot: boolean }; // Image for that color
  }>;
  // New field for product details (list of strings)
  productDetails: string[];
  // New field for GSM description
  gsm: string;
};

export type Size = {
  _id:string;
  name: string;
  value: string; // Example: "Small", "Medium", "Large"
};

export type Color = {
  name: string;
  hexCode: string;
};
