import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET() {
  try {
    const query = `*[_type == "category" && (level == 1 || !defined(level)) && !(_id in path("drafts.**"))]{
      _id,
      name,
    }`;
    
    const categories = await client.fetch(query);
    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
