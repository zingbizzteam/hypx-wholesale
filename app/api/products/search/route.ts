// app/api/products/search/route.ts

import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client'; // Import sanity client
import { client } from '@/lib/sanity';



export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const searchQuery = searchParams.get('query');  // Get the search query parameter

    if (!searchQuery) {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }

    // Fetch products that match the search query
    const products = await client.fetch(
      `*[_type == "product" && name match "${searchQuery}*"]{
        name,
        slug,
        price,
        images,
        description,
        category,
      }`
    );

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
