import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: (Rule) => Rule.required()
    }),
 
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'size' }] }]
    }),
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'color' }]
        }
      ]
    }),
    defineField({
      name: 'colorImages',
      title: 'Color Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'color',
              title: 'Color',
              type: 'reference',
              to: [{ type: 'color' }],
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'stock',
      title: 'In Stock',
      type: 'number',
      validation: (Rule) => Rule.required().min(0)
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false
    }),
    // Add the new fields here
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'gsm',
      title: 'GSM Description',
      type: 'text',
    }),
  ]
})
