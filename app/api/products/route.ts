// app/api/products/route.ts
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categories = searchParams.getAll("category");
    const sizes = searchParams.getAll("size");
    const colors = searchParams.getAll("color");
    const slug = searchParams.get("slug");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let query = '*[_type == "product"';
    let filters = [];

    if (slug && slug !== "all") {
      filters.push(`slug.current == "${slug}"`);
    }

    // Handle multiple category filters (OR logic between categories)
    if (categories.length > 0) {
      const categoryConditions = categories.map(cat => `references("${cat}")`).join(" || ");
      filters.push(`(${categoryConditions})`);
    }
    
    // Handle multiple size filters (OR logic between sizes)
    if (sizes.length > 0) {
      const sizeConditions = sizes.map(size => `references("${size}")`).join(" || ");
      filters.push(`(${sizeConditions})`);
    }
    
    // Handle multiple color filters (OR logic between colors)
    if (colors.length > 0) {
      const colorConditions = colors.map(color => `references("${color}")`).join(" || ");
      filters.push(`(${colorConditions})`);
    }

    // Add all filters to the query
    if (filters.length > 0) {
      query += " && " + filters.join(" && ");
    }

    // Close the query condition
    query += "]";

    // Select the fields to return
    query += "{_id, name, slug,  images, description, category, sizes, colors, colorImages, gsm, productDetails}";

    // Build the totalCount query
    let countQuery = `count(*[_type == "product"`;
    if (filters.length > 0) {
      countQuery += " && " + filters.join(" && ");
    }
    countQuery += "])";

    // Execute queries
    const totalCount = await client.fetch(countQuery);
    const products = await client.fetch(
      query + ` | order(name asc) [${(page - 1) * limit}...${page * limit}]`
    );

    return NextResponse.json({
      products,
      totalCount,
      page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}