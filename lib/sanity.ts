import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

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
  productDetails: string[];
};
