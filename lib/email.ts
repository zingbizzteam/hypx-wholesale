import nodemailer from "nodemailer";

// Configure your SMTP server
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Customer email HTML
export function getCustomerEmailHtml(order: any, customer: any) {
  return `
    <div style="font-family:Inter,sans-serif;background:#f9fafb;padding:32px;">
      <div style="background:#fff;border-radius:8px;max-width:480px;margin:auto;padding:32px;box-shadow:0 2px 8px #e5e7eb;">
        <h2 style="font-size:24px;font-weight:700;color:#111827;margin-bottom:16px;">Thank you for your order!</h2>
        <p style="color:#374151;margin-bottom:24px;">Hi ${customer.name},<br>Your order <b>${order.orderNumber}</b> has been received.</p>
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:600;margin-bottom:8px;">Order Summary</h3>
          <ul style="padding-left:0;list-style:none;">
            ${order.items.map((item: { name: any; quantity: any; }) => `<li style="margin-bottom:4px;">${item.name} x ${item.quantity}</li>`).join("")}
          </ul>
        </div>
        <div style="margin-bottom:16px;">
          <span style="font-weight:600;">Total:</span> ₹${order.total}
        </div>
        <p style="color:#6b7280;font-size:14px;">We will contact you soon for confirmation and shipping details.</p>
      </div>
    </div>
  `;
}

// Quote team email HTML
export function getQuoteTeamEmailHtml(order: any, customer: any) {
  return `
    <div style="font-family:Inter,sans-serif;background:#f9fafb;padding:32px;">
      <div style="background:#fff;border-radius:8px;max-width:480px;margin:auto;padding:32px;box-shadow:0 2px 8px #e5e7eb;">
        <h2 style="font-size:24px;font-weight:700;color:#111827;margin-bottom:16px;">New Quote Request</h2>
        <p style="color:#374151;margin-bottom:24px;">Order <b>${order.orderNumber}</b> received from ${customer.name} (${customer.email}, ${customer.phone})</p>
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:600;margin-bottom:8px;">Order Details</h3>
          <ul style="padding-left:0;list-style:none;">
            ${order.items.map((item: { name: any; quantity: any; price: any; }) => `<li style="margin-bottom:4px;">${item.name} x ${item.quantity} (₹${item.price})</li>`).join("")}
          </ul>
        </div>
        <div style="margin-bottom:16px;">
          <span style="font-weight:600;">Total:</span> ₹${order.total}
        </div>
        <div style="margin-bottom:8px;">
          <span style="font-weight:600;">Shipping Address:</span> ${order.shippingAddress}
        </div>
        <p style="color:#6b7280;font-size:14px;">Check Sanity Studio for full order details.</p>
      </div>
    </div>
  `;
}

// Send email
export async function sendEmail(to: string, subject: string, html: string) {
  return transporter.sendMail({
    from: `"HYXP Wholesale" <${process.env.SMTP_FROM}>`,
    to,
    subject,
    html,
  });
}
