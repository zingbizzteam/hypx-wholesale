// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Generate a unique reference number for the inquiry
    const inquiryNumber = `INQ-${Date.now()}`;
    
    // Create the inquiry document for Sanity
    const inquiryDoc = {
      _type: "inquiry", // You'll need to define this schema in Sanity
      inquiryNumber,
      date: new Date().toISOString(),
      name: body.name,
      email: body.email,
      phone: `${body.countryCode}${body.phone}`,
      address: body.address,
      status: "new",
      statusHistory: [
        {
          _key: uuidv4(),
          status: "new",
          timestamp: new Date().toISOString(),
          note: "Inquiry received",
        },
      ],
    };

    // 1. Create the inquiry in Sanity
    const createdInquiry = await client.create(inquiryDoc);

    // 2. Prepare email content
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Thank you for contacting HYPX Wholesale</h2>
        <p>Dear ${body.name},</p>
        <p>We have received your inquiry and will get back to you shortly.</p>
        <p>Your inquiry reference number is: <strong>${inquiryNumber}</strong></p>
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Phone:</strong> ${body.countryCode}${body.phone}</li>
          <li><strong>Address:</strong> ${body.address}</li>
        </ul>
        <p>If you have any further questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>HYPX Wholesale Team</p>
      </div>
    `;

    const teamEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Inquiry Reference:</strong> ${inquiryNumber}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <h3>Customer Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Phone:</strong> ${body.countryCode}${body.phone}</li>
          <li><strong>Address:</strong> ${body.address}</li>
        </ul>
        <p>Please respond to this inquiry at your earliest convenience.</p>
      </div>
    `;

    // 3. Send emails
    await Promise.all([
      sendEmail(body.email, `Thank you for contacting HYPX Wholesale - ${inquiryNumber}`, customerEmailHtml),
      sendEmail("hypxwholesaleofficial@gmail.com", `New Contact Form Submission - ${inquiryNumber}`, teamEmailHtml),
    ]);

    return NextResponse.json({
      success: true,
      inquiryId: createdInquiry._id,
      inquiryNumber,
    });
  } catch (error: any) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
