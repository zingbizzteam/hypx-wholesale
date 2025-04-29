import nodemailer from "nodemailer";

// Configure your SMTP server
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_APP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  requireTLS: true,
});

// Customer email HTML
export function getCustomerEmailHtml(order: any, customer: any) {
  return `
    <div style="font-family:Inter,sans-serif;background:#f9fafb;padding:32px;">
      <div style="background:#fff;border-radius:8px;max-width:600px;margin:auto;padding:32px;box-shadow:0 2px 8px #e5e7eb;">
        <h2 style="font-size:24px;font-weight:700;color:#111827;margin-bottom:16px;">Thank you for your order!</h2>
        <p style="color:#374151;margin-bottom:24px;">Hi ${customer.name},<br>Your order <b>${order.orderNumber}</b> has been received.</p>
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:600;margin-bottom:8px;">Order Summary</h3>
          <table style="width:100%;border-collapse:collapse;">
            <thead>
              <tr>
                <th style="border:1px solid #e5e7eb;padding:8px;text-align:left;">Product</th>
                <th style="border:1px solid #e5e7eb;padding:8px;text-align:center;">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${order.items
                .map(
                  (item: any) => `
                <tr>
                  <td style="border:1px solid #e5e7eb;padding:8px;display:flex;align-items:center;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/product/${item.slug}" style="display:flex;align-items:center;text-decoration:none;color:#111827;">
                      <img src="${item.imageUrl}" alt="${item.name}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;margin-right:10px;">
                      ${item.name}
                    </a>
                  </td>
                  <td style="border:1px solid #e5e7eb;padding:8px;text-align:center;">${item.quantity}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
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
      <div style="background:#fff;border-radius:8px;max-width:600px;margin:auto;padding:32px;box-shadow:0 2px 8px #e5e7eb;">
        <h2 style="font-size:24px;font-weight:700;color:#111827;margin-bottom:16px;">New Quote Request</h2>
        <p style="color:#374151;margin-bottom:24px;">Order <b>${order.orderNumber}</b> received from ${customer.name} (${customer.email}, ${customer.phone})</p>
        <div style="margin-bottom:16px;">
          <h3 style="font-size:18px;font-weight:600;margin-bottom:8px;">Order Details</h3>
          <table style="width:100%;border-collapse:collapse;">
            <thead>
              <tr>
                <th style="border:1px solid #e5e7eb;padding:8px;text-align:left;">Product</th>
                <th style="border:1px solid #e5e7eb;padding:8px;text-align:center;">Quantity</th>
              </tr>
            </thead>
            <tbody>
              ${order.items
                .map(
                  (item: any) => `
                <tr>
                  <td style="border:1px solid #e5e7eb;padding:8px;display:flex;align-items:center;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL}/product/${item.slug}" style="display:flex;align-items:center;text-decoration:none;color:#111827;">
                      <img src="${item.imageUrl}" alt="${item.name}" style="width:40px;height:40px;object-fit:cover;border-radius:4px;margin-right:10px;">
                      ${item.name}
                    </a>
                  </td>
                  <td style="border:1px solid #e5e7eb;padding:8px;text-align:center;">${item.quantity}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div style="margin-bottom:8px;">
          <span style="font-weight:600;">Shipping Address:</span> ${order.shippingAddress}
        </div>
        <p style="color:#6b7280;font-size:14px;">Check <a href="https://hypxw.sanity.studio/studio/order">Sanity Studio</a> for full order details.</p>
      </div>
    </div>
  `;
}

// Send email
export async function sendEmail(to: string, subject: string, html: string) {
  return transporter.sendMail({
    from: `"HYXP Wholesale" <${process.env.FROM_EMAIL}>`, // sender address
    to,
    subject,
    html,
  });
}
