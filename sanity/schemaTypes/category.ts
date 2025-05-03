import { defineField, defineType } from 'sanity'
import {UlistIcon} from '@sanity/icons'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: UlistIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
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
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text' 
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [
        { 
          type: 'reference',
          to: [{ type: 'category' }],
        }
      ],
      description: 'Subcategories can be nested to create a category hierarchy.'
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      description: 'The level of the category in the hierarchy. Top level categories should have 1, subcategories should have 2, and so on.',
      validation: (Rule) => Rule.required().min(1)
    })
  ]
})
