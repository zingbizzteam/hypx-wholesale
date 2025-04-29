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
      total: body.total ?? 0,
      trackingNumber: "",
      carrier: "",
      estimatedDelivery: null,
      notes: body.notes || "",
    };

    // 1. Create the order in Sanity
    const createdOrder = await client.create(orderDoc);

    // 2. Fetch product details for email
    const productIds = items.map((item: any) => item.product._ref);
    const products = await client.fetch(
      `*[_type == "product" && _id in $ids]{_id, name, slug, "imageUrl": images[0].asset->url}`,
      { ids: productIds }
    );

    // 3. Merge product details into items for email
    const itemsWithDetails = items.map((item: any) => {
      const prod = products.find((p: any) => p._id === item.product._ref);
      return {
        ...item,
        name: prod?.name || "Product",
        slug: prod?.slug?.current || "",
        imageUrl: prod?.imageUrl || "",
      };
    });

    // 4. Prepare email data
    const customer = {
      name: body.customerName,
      email: body.customerEmail,
      phone: body.customerPhone,
      address: body.shippingAddress,
    };
    const orderForEmail = {
      orderNumber,
      items: itemsWithDetails,
      shippingAddress: body.shippingAddress,
      total: body.total ?? 0,
    };

    // 5. Send emails
    const customerHtml = getCustomerEmailHtml(orderForEmail, customer);
    const teamHtml = getQuoteTeamEmailHtml(orderForEmail, customer);

    await Promise.all([
      sendEmail(customer.email, `Your Quote Confirmation - ${orderNumber}`, customerHtml),
      sendEmail("zingbizzteam@gmail.com", `New Quote Request - ${orderNumber}`, teamHtml),
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
