import Image from "next/image"
import ContactForm from "@/components/forms/contact-form"

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-16 flex items-center">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto bg-gray-100">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HYPX%20-%20CONTACT%20US-ZVOb8Ggk3d7J22iXkTzlFM7ggbByqR.png"
            alt="Contact HYPX Wholesale"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
