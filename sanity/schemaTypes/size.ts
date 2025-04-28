import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'size',
  title: 'Size',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Size Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required()
    })
  ]
})