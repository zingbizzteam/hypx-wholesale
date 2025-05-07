// schemas/order.ts
import { defineField, defineType } from "sanity";
import { DocumentSheetIcon } from "@sanity/icons";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: DocumentSheetIcon,
  fields: [
      defineField({
        name: "orderNumber",
        title: "Order Number",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
  
      defineField({
        name: "orderDate",
        title: "Order Date",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "customerName",
        title: "Customer Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "customerEmail",
        title: "Customer Email",
        type: "string",
        validation: (Rule) => Rule.required().email(),
      }),
      defineField({
        name: "customerPhone",
        title: "Customer Phone",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: "items",
      title: "Order Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },

            {
              name: "price",
              title: "Price at Purchase",
              type: "number",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Returned", value: "returned" },
        ],
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "statusHistory",
      title: "Status History",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "status",
              title: "Status",
              type: "string",
              options: {
                list: [
                  { title: "Pending", value: "pending" },
                  { title: "Processing", value: "processing" },
                  { title: "Shipped", value: "shipped" },
                  { title: "Delivered", value: "delivered" },
                  { title: "Cancelled", value: "cancelled" },
                  { title: "Returned", value: "returned" },
                ],
              },
            },
            {
              name: "timestamp",
              title: "Timestamp",
              type: "datetime",
              initialValue: () => new Date().toISOString(),
            },
            {
              name: "note",
              title: "Note",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "shippingAddress",
      title: "Shipping Address",
      type: "string",

      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Credit Card", value: "credit_card" },
          { title: "PayPal", value: "paypal" },
          { title: "Cash on Delivery", value: "cod" },
          { title: "Bank Transfer", value: "bank_transfer" },
        ],
      },
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
          { title: "Refunded", value: "refunded" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "total",
      title: "Total",
      type: "number",
    }),
    defineField({
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
    }),
    defineField({
      name: "carrier",
      title: "Shipping Carrier",
      type: "string",
    }),
    defineField({
      name: "estimatedDelivery",
      title: "Estimated Delivery Date",
      type: "date",
    }),
    defineField({
      name: "notes",
      title: "Order Notes",
      type: "text",
    }),
  ],
});
