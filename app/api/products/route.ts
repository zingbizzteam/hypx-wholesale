import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categories = searchParams.getAll("category");
    const slug = searchParams.get("slug");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let query = '*[_type == "product" && !(_id in path("drafts.**"))';

    let filters = [];

    if (slug && slug !== "all") {
      filters.push(`slug.current == "${slug}"`);
    }

    // Handle multiple category filters (OR logic between categories)
    if (categories.length > 0) {
      const categoryConditions = categories.map(cat => `references("${cat}")`).join(" || ");
      filters.push(`(${categoryConditions})`);
    }

    // Add all filters to the query
    if (filters.length > 0) {
      query += " && " + filters.join(" && ");
    }

    // Close the query condition
    query += "]";

    // Select the fields to return
    query += "{_id, name, slug, images, description, category, productDetails}";

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
