import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function GET() {
    try {
      // Fetch sizes with resolved references if they are references
      const sizes = await client.fetch(`
        *[_type == "size"] {
          _id,
          name
        }
      `);
  
      return NextResponse.json({ sizes });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch sizes" }, { status: 500 });
    }
  }
  