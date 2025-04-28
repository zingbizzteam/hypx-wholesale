import { client } from "@/lib/sanity";

// Function to fetch size data by reference IDs
export const fetchSizes = async (sizeRefs: Array<{ _ref: string }>) => {
  const sizes = await Promise.all(
    sizeRefs.map(async (sizeRef) => {
      const size = await client.fetch(`*[_id == $id]`, { id: sizeRef._ref });
      return size[0] || null;
    })
  );
  return sizes;
};

// Function to fetch color data by reference IDs
export const fetchColors = async (colorRefs: Array<{ _ref: string }>) => {
  const colors = await Promise.all(
    colorRefs.map(async (colorRef) => {
      const color = await client.fetch(`*[_id == $id]`, { id: colorRef._ref });
      return color[0] || null;
    })
  );
  return colors;
};

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
