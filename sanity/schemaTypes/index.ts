import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import category from "./category";
import size from "./size";
import color from "./color";
import order from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, size, color, order],
};
