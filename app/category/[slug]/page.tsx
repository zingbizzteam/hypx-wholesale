import CategoryPageClient from "./CategoryPageClient";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// Server component – renders the client component
export default function CategoryPage({ params }: Props) {
  return <CategoryPageClient params={params} />;
}

// Dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const capitalizedTitle = slug.charAt(0).toUpperCase() + slug.slice(1);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in environment variables");
  }

  return {
    title: `${capitalizedTitle} | HYPX Wholesale`,
    description: `Explore high-quality wholesale ${capitalizedTitle} at unbeatable prices from HYPX. Perfect for resellers, boutiques, and retailers.`,
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
      title: `${capitalizedTitle} | HYPX Wholesale`,
      description: `Discover the best wholesale ${capitalizedTitle} at HYPX. Shop now for exclusive deals.`,
      url: `${baseUrl}/category/${slug}`,
      siteName: "HYPX",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${capitalizedTitle} Category Image`
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${capitalizedTitle} | HYPX Wholesale`,
      description: `Shop bulk ${capitalizedTitle} for your store at HYPX.`,
      images: [`${baseUrl}/og-image.jpg`]
    },
    metadataBase: new URL(baseUrl),
  };
}
