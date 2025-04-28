import Link from "next/link"

export default function QuoteConfirmation() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-green-600">Thank you for submitting your quote request</h1>

        <p className="text-lg mb-8">
          You will shortly receive an <strong>email confirmation</strong> with the details of the products you've
          requested a quote for. Our team will review your enquiry and get in touch with you soon to discuss the next
          steps — including{" "}
          <strong>price size selection, color preferences, customization options, segregation, and sorting</strong>{" "}
          based on your requirements.
        </p>

        <div className="flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone mr-2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <p className="text-lg">
            For any immediate queries, feel free to{" "}
            <Link href="/contact-us" className="underline font-medium">
              contact our team
            </Link>
            .
          </p>
        </div>

        <Link
          href="/"
          className="bg-white border border-black text-black px-8 py-4 inline-block font-medium hover:bg-gray-100 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
