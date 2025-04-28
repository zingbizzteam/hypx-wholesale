// schemas/order.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'product', 
            title: 'Product', 
            type: 'reference', 
            to: [{ type: 'product' }],
            validation: (Rule) => Rule.required()
          },
          { 
            name: 'quantity', 
            title: 'Quantity', 
            type: 'number',
            validation: (Rule) => Rule.required().min(1)
          },
          { 
            name: 'selectedSize', 
            title: 'Selected Size', 
            type: 'reference', 
            to: [{ type: 'size' }]
          },
          { 
            name: 'selectedColor', 
            title: 'Selected Color', 
            type: 'reference', 
            to: [{ type: 'color' }]
          },
          { 
            name: 'price', 
            title: 'Price at Purchase', 
            type: 'number',
            validation: (Rule) => Rule.required()
          }
        ]
      }],
      validation: (Rule) => Rule.required().min(1)
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Returned', value: 'returned' }
        ]
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'statusHistory',
      title: 'Status History',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'status', 
            title: 'Status', 
            type: 'string',
            options: {
              list: [
                { title: 'Pending', value: 'pending' },
                { title: 'Processing', value: 'processing' },
                { title: 'Shipped', value: 'shipped' },
                { title: 'Delivered', value: 'delivered' },
                { title: 'Cancelled', value: 'cancelled' },
                { title: 'Returned', value: 'returned' }
              ]
            }
          },
          { 
            name: 'timestamp', 
            title: 'Timestamp', 
            type: 'datetime',
            initialValue: () => new Date().toISOString()
          },
          { 
            name: 'note', 
            title: 'Note', 
            type: 'string' 
          }
        ]
      }]
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State/Province', type: 'string' },
        { name: 'postalCode', title: 'Postal/Zip Code', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' }
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'billingAddress',
      title: 'Billing Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State/Province', type: 'string' },
        { name: 'postalCode', title: 'Postal/Zip Code', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' }
      ]
    }),
    defineField({
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Credit Card', value: 'credit_card' },
          { title: 'PayPal', value: 'paypal' },
          { title: 'Cash on Delivery', value: 'cod' },
          { title: 'Bank Transfer', value: 'bank_transfer' }
        ]
      }
    }),
    defineField({
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' }
        ]
      },
      initialValue: 'pending'
    }),
    defineField({
      name: 'subtotal',
      title: 'Subtotal',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'tax',
      title: 'Tax',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shippingFee',
      title: 'Shipping Fee',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0
    }),
    defineField({
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string'
    }),
    defineField({
      name: 'carrier',
      title: 'Shipping Carrier',
      type: 'string'
    }),
    defineField({
      name: 'estimatedDelivery',
      title: 'Estimated Delivery Date',
      type: 'date'
    }),
    defineField({
      name: 'notes',
      title: 'Order Notes',
      type: 'text'
    })
  ]
})