import Image from "next/image"

export const metadata = {
  title: "Terms and Conditions - HYPX Wholesale",
  description: "Read our terms and conditions for wholesale orders and business relationships.",
}

export default function TermsAndConditionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/Images/Terms&Conditions/term&condition.png"
            alt="Terms and Conditions"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or placing an order through our website, you agree to be bound by these Terms and
                Conditions. If you do not agree with any part of these terms, please refrain from using our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">2. Eligibility</h2>
              <p>
                To purchase from our website, you must be a registered business, retailer, or authorized reseller. We
                reserve the right to verify your business credentials prior to processing your order.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. Wholesale Orders</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>All prices listed are wholesale rates and may be subject to minimum order quantities (MOQs).</li>
                <li>Orders are accepted based on stock availability.</li>
                <li>Once confirmed, orders cannot be modified or canceled.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Payment must be made in full before dispatch unless prior arrangements have been made.</li>
                <li>
                  Accepted payment methods include [list accepted payment types – bank transfer, credit/debit card, etc.
                </li>
                <li>We reserve the right to withhold delivery for unpaid or partially paid orders.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Shipping & Delivery</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders are shipped via delivery partners within 3-7 business days.</li>
                <li>Shipping charges and delivery times may vary based on location and order size.</li>
                <li>We are not responsible for delays due to customs clearance or unforeseen logistics issues.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Returns & Exchanges</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Returns are accepted only for damaged, defective, or incorrectly shipped items.</li>
                <li>You must notify us within 30 days of receipt for any issues.</li>
                <li>Items must be returned in original condition with tags intact.</li>
                <li>Custom or made-to-order items are non-returnable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">7. Intellectual Property</h2>
              <p>
                All content, product images, branding, and designs on this site are the property of HYPX and may not be
                used or reproduced without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">8. Limitation of Liability</h2>
              <p>
                We are not liable for any direct, indirect, or consequential losses arising from the use or inability to
                use our website or products.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">9. Privacy Policy</h2>
              <p>
                We are committed to protecting your personal and business information. Please refer to our Privacy
                Policy for more details on how your data is used.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">10. Modifications to Terms</h2>
              <p>
                We reserve the right to update these Terms and Conditions at any time without prior notice. Continued
                use of the site constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
