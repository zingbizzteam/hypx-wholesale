// /app/shop/page.tsx

import { Suspense } from "react";
import { Metadata } from "next";
import ShopPageContent from "./ShopPageContent";

type Props = {
  params: { slug: string };
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="flex justify-center py-12"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div></div>}>
      <ShopPageContent />
    </Suspense>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in environment variables");
  }

  return {
    title: "Shop | HYPX Wholesale",
    description: "Explore high-quality wholesale products at unbeatable prices from HYPX.",
    generator: "v0.dev",
    keywords: [
      "wholesale clothing",
      "bulk apparel",
      "fashion for retailers",
      "HYPX wholesale",
      "cheap clothing bulk",
      "ecommerce wholesale store",
      "retail fashion supply"
    ],
    authors: [{ name: "HYPX", url: baseUrl }],
    creator: "HYPX Team",
    publisher: "HYPX",
    openGraph: {
      title: "Shop | HYPX Wholesale",
      description: "Explore high-quality wholesale products at unbeatable prices from HYPX.",
      url: `${baseUrl}/shop`,
      siteName: "HYPX",
      images: [
        {
          url: `hypx.png`,
          width: 1200,
          height: 630,
          alt: `shop Category Image`
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop | HYPX Wholesale",
      description: `Shop bulk wholesale for your store at HYPX.`,
      images: [`/hypx.png`]
    },
    metadataBase: new URL(baseUrl),
  };
}
