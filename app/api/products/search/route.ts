// /app/api/products/search/route.ts
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  if (!q) {
    return NextResponse.json({ products: [] });
  }

  // Search by product name (case-insensitive), you can also add other fields
  const query = `*[_type == "product" && name match $q]{
    _id, name, slug, images
  }[0...10]`;

  const params = { q: `*${q}*` };

  const products = await client.fetch(query, params);

  return NextResponse.json({ products });
}
