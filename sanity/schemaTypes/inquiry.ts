// schemas/inquiry.ts
import { defineType, defineField } from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'inquiry',
  title: 'Inquiries',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'inquiryNumber',
      title: 'Inquiry Number',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Responded', value: 'responded' },
          { title: 'Closed', value: 'closed' },
        ],
      },
    }),
    defineField({
      name: 'statusHistory',
      title: 'Status History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
            }),
            defineField({
              name: 'timestamp',
              title: 'Timestamp',
              type: 'datetime',
            }),
            defineField({
              name: 'note',
              title: 'Note',
              type: 'text',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'inquiryNumber',
    },
  },
})
