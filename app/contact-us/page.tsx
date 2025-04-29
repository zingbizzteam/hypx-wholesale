import Image from "next/image"
import ContactForm from "@/components/forms/contact-form"

export default function ContactUs() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:flex">
        <div className="p-8 md:p-16 flex items-center md:w-[70%]">
          <div className="ml-[10%] max-w-md">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
        <div className="relative h-[50vh] md:w-[30%] md:h-auto bg-gray-100 justify-last">
          <Image
            src="Images/Contact/contact.png"
            alt="Contact HYPX Wholesale"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
