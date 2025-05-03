import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    }),
    defineField({
      name: "productDetails",
      title: "Product Details",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
      mediaType: "images.0._type",
      subtitle: "description",
    },
    prepare(selection) {
      const { title, media, subtitle, mediaType } = selection;
      return {
        title,
        subtitle: subtitle ? subtitle.substring(0, 50) + "..." : "",
        media: media,
      };
    },
  },
});
