// lib/email.ts
import nodemailer from 'nodemailer';

// Configure your email service
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.example.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@example.com',
    pass: process.env.EMAIL_PASSWORD || 'your-password',
  },
});

/**
 * Sends verification email to new users
 */
export async function sendVerificationEmail(
  email: string, 
  name: string, 
  token: string
) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/verify-email?token=${token}`;
  
  await transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || 'Your Store'}" <${process.env.EMAIL_FROM || 'noreply@example.com'}>`,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Welcome to Our Store!</h2>
        <p>Hello ${name},</p>
        <p>Thank you for registering. Please verify your email address by clicking the button below:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 15px 25px; text-decoration: none; border-radius: 4px;">
            Verify Email
          </a>
        </div>
        <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
        <p>${verificationUrl}</p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>The Store Team</p>
      </div>
    `,
  });
}

/**
 * Sends order confirmation email
 */
export async function sendOrderConfirmationEmail(
  email: string,
  name: string,
  orderNumber: string,
  orderDetails: any
) {
  const orderUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/account/orders/${orderNumber}`;
  
  // Generate HTML for order items
  const itemsHtml = orderDetails.items.map((item: any) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.product.name}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.quantity}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">$${item.price.toFixed(2)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">$${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  `).join('');
  
  await transporter.sendMail({
    from: `"${process.env.EMAIL_FROM_NAME || 'Your Store'}" <${process.env.EMAIL_FROM || 'noreply@example.com'}>`,
    to: email,
    subject: `Order Confirmation #${orderNumber}`,
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Order Confirmation</h2>
        <p>Hello ${name},</p>
        <p>Thank you for your order! We've received your order and are processing it now.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
          <p><strong>Order Number:</strong> ${orderNumber}</p>
          <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <h3>Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f3f3f3;">
              <th style="padding: 10px; text-align: left;">Product</th>
              <th style="padding: 10px; text-align: left;">Quantity</th>
              <th style="padding: 10px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Subtotal:</strong></td>
              <td style="padding: 10px;">$${orderDetails.subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Shipping:</strong></td>
              <td style="padding: 10px;">$${orderDetails.shippingFee.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Tax:</strong></td>
              <td style="padding: 10px;">$${orderDetails.tax.toFixed(2)}</td>
            </tr>
            ${orderDetails.discount > 0 ? `
              <tr>
                <td colspan="3" style="padding: 10px; text-align: right;"><strong>Discount:</strong></td>
                <td style="padding: 10px;">-$${orderDetails.discount.toFixed(2)}</td>
              </tr>
            ` : ''}
            <tr>
              <td colspan="3" style="padding: 10px; text-align: right;"><strong>Total:</strong></td>
              <td style="padding: 10px;"><strong>$${orderDetails.total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${orderUrl}" style="background-color: #4CAF50; color: white; padding: 15px 25px; text-decoration: none; border-radius: 4px;">
            View Order Details
          </a>
        </div>
        
        <p>If you have any questions about your order, please contact our customer service.</p>
        <p>Best regards,<br>The Store Team</p>
      </div>
    `,
  });
}