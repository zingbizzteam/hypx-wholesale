import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const slug = searchParams.get("slug");
    const categoryParam = searchParams.get("category");

    // Handle category names
    const categoryNames = categoryParam?.split(",") || [];
    let categoryIds: string[] = [];

    // Skip category filtering if "all" is specified
    if (!categoryNames.includes("all") && categoryNames.length > 0) {
      // Case-insensitive name match for categories
      categoryIds = await client.fetch(
        `*[_type == "category" && lower(name) in $names]._id`,
        { names: categoryNames.map(n => n.toLowerCase()) }
      );
    }

    // Base query with draft exclusion
    let query = '*[_type == "product" && !(_id in path("drafts.**"))';
    const params: Record<string, any> = {};
    const filters = [];

    // Slug filter
    if (slug && slug !== "all") {
      filters.push(`slug.current == $slug`);
      params.slug = slug;
    }

    // Category filter for ARRAY references
    if (categoryIds.length > 0) {
      filters.push(`count(categories[@._ref in $categoryIds]) > 0`);
      params.categoryIds = categoryIds;
    }

    // Build final query
    if (filters.length > 0) {
      query += " && " + filters.join(" && ");
    }
    query += "]";

    // Field selection
    query += `{
      _id,
      name,
      "slug": slug.current,
      images,
      description,
      categories,
      productDetails
    }`;

    // Count query
    const countQuery = `count(${query})`;

    // Execute queries
    const [totalCount, products] = await Promise.all([
      client.fetch(countQuery, params),
      client.fetch(
        `${query} | order(name asc) [${(page - 1) * limit}...${page * limit}]`,
        params
      )
    ]);

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
