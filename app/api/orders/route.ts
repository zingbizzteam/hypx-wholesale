import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { v4 as uuidv4 } from 'uuid';
import { getCustomerEmailHtml, getQuoteTeamEmailHtml, sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items = (body.items || []).map((item: any) => ({
      _key: uuidv4(),
      _type: "object",
      product: { _type: "reference", _ref: item.productId },
      quantity: item.quantity,
      price: item.price ?? 0,
      name: item.name, // Make sure to include name for email summary
    }));

    const statusHistory = [
      {
        _key: uuidv4(),
        status: "pending",
        timestamp: new Date().toISOString(),
        note: "Order created",
      },
    ];

    const orderNumber = `ORD-${Date.now()}`;

    const orderDoc = {
      _type: "order",
      orderNumber,
      orderDate: new Date().toISOString(),
      items,
      status: "pending",
      statusHistory,
      shippingAddress: body.shippingAddress,
      paymentMethod: body.paymentMethod || "",
      paymentStatus: "pending",
      subtotal: body.subtotal ?? 0,
      tax: body.tax ?? 0,
      shippingFee: body.shippingFee ?? 0,
      discount: body.discount ?? 0,
      total: body.total ?? 0,
      trackingNumber: "",
      carrier: "",
      estimatedDelivery: null,
      notes: body.notes || "",
    };

    // Create the order in Sanity
    const createdOrder = await client.create(orderDoc);

    // Prepare email data
    const customer = {
      name: body.customerName,
      email: body.customerEmail,
      phone: body.customerPhone,
    };
    const orderForEmail = {
      orderNumber,
      items,
      total: body.total ?? 0,
      shippingAddress: body.shippingAddress,
    };

    // Send emails
    const customerHtml = getCustomerEmailHtml(orderForEmail, customer);
    const teamHtml = getQuoteTeamEmailHtml(orderForEmail, customer);

    await Promise.all([
      sendEmail(customer.email, `Your Order Confirmation - ${orderNumber}`, customerHtml),
      sendEmail("quote@hypx.com", `New Quote Request - ${orderNumber}`, teamHtml),
    ]);

    return NextResponse.json({
      success: true,
      orderId: createdOrder._id,
      orderNumber,
    });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
