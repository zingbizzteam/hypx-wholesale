import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'color',
  title: 'Color',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Color Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'value',
      title: 'Hex Value',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'swatch',
      title: 'Color Swatch',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})