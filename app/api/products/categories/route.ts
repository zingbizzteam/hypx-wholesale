import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET() {
  try {
    const categories = await client.fetch(`
      *[_type == "category"] | order(level asc) {
        _id,
        name,
        level,
        subcategories[]->{
          _id,
          name,
          level
        }
      }
    `);

    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
