import { client } from "@/lib/sanity";


// Function to fetch category data by reference IDs
export const fetchCategories = async (categoryRefs: Array<{ _ref: string }>) => {
  const categories = await Promise.all(
    categoryRefs.map(async (categoryRef) => {
      const category = await client.fetch(`*[_id == $id]`, { id: categoryRef._ref });
      return category[0] || null;
    })
  );
  return categories;
};
