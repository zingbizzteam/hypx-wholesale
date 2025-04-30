import Image from "next/image"
import Link from "next/link"
import AboutHover from "@/components/about/AboutHover"
import ButtonWhite from "@/components/about/ButtonWhite"
import Aboutcard from "@/components/about/Aboutcard"
import { Metadata } from "next"

// SEO 👇
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in environment variables");
  }

  return {
    title: "About Us | HYPX Wholesale",
    description: "Learn more about HYPX, a wholesale platform where fashion meets individuality. Discover our mission, values, and unique offerings.",
    openGraph: {
      title: "About Us | HYPX Wholesale",
      description: "Discover HYPX Wholesale's mission to revolutionize streetwear fashion and help you express your brand's identity.",
      url: `${baseUrl}/about-us`,
      siteName: "HYPX",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`, // You can customize this image for the About Us page
          width: 1200,
          height: 630,
          alt: "About HYPX"
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | HYPX Wholesale",
      description: "Learn about HYPX Wholesale, your partner in creating premium, customizable streetwear.",
      images: [`${baseUrl}/og-image.jpg`]
    },
    metadataBase: new URL(baseUrl),
  };
}

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-black flex items-center">
        <div className="container mx-auto px-4 text-white z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Welcome to a world where fashion is limitless.</p>
        </div>
        <div className="absolute inset-0 opacity-70">
          <Image
            src="/Images/About/hero_section.png"
            alt="About HYPX"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/Images/About/section2.png"
                alt="Welcome to HYPX"
                width={500}
                height={400}
                className="rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to HYPX</h2>
              <p className="mb-4">Where Fashion Meets Individuality and luxury streetwear finds its home</p>
              <p className="mb-4">
                At HYPX, we believe that style is personal, and your clothes should reflect who you are. That's why
                we've created a wholesale platform that doesn't just offer quality garments, but gives you the tools to
                shape the designs with colors, cuts, and personal touch, so they truly express your brand's identity.
              </p>
              <p className="font-medium">HYPX is here to elevate your wardrobe.</p>
              <p className="mt-4">
                We're not just another wholesale clothing supplier. We're your partner in creating a fashion experience
                that connects you with the finest fabrics that redefine urban elegance. We've curated a selection of
                timeless styles, offering you the best in high-end street fashion at a fair price. Our mission is to
                provide clothing to empower the next iconic street-fashion designers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl font-medium mb-4">Create. Express. Inspire. That's the spirit of HYPX.</p>
              <p className="mb-4">
                Our mission is to revolutionize the way you express yourself through fashion. We are dedicated to
                providing premium wholesale streetwear that empowers brands to showcase their unique individuality. By
                blending creativity with premium quality, we empower you to make your mark in the fashion world.
              </p>
              <p className="mb-4">
                We are also committed to curating the finest in luxury streetwear, connecting style enthusiasts with
                exclusive brands that shape urban culture. Our goal is to ensure self-expression, celebrate uniqueness,
                and redefine streetwear as a canvas for personal identity.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/Images/About/section3.png"
                alt="Our Mission"
                width={500}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 */}
      <div className='container2 justify-items-center'>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          <div className='h-[500px]'>
            <Link href={"/shop"}><AboutHover Text='T-Shirts' InvisibleText='View' ImageUrl='/Images/About/section4_1.png'></AboutHover></Link>
            <Link href={"/shop"}><AboutHover Text='Caps' InvisibleText='View' ImageUrl='/Images/About/section4_2.png'></AboutHover></Link>
          </div>
          <div className='bg-[url(/Images/About/section4_3.png)] bg-cover bg-center h-[500px]'>
            <div className='bg-black/70 place-content-center justify-items-center grid gird-cols-3 gap-1 h-full'>
              <p className='ch3 text-white'>Our Collections</p>
              <p className='cp3 text-white text-justify w-[60%]'>Our collection suits Men, Women, Adults, and Kids, blending customization with the latest streetwear trends for a perfect fit.</p>
              <div className='pt-6'>
                <ButtonWhite link='/shop' child='Shop Now' className=''></ButtonWhite>
              </div>
            </div>
          </div>
          <div className='h-[500px]'>
          <Link href={"/shop"}><AboutHover Text='Hoodies' InvisibleText='View' ImageUrl='/Images/About/section4_4.png'></AboutHover></Link>
          <Link href={"/shop"}><AboutHover Text='Streetstyle Wear' InvisibleText='View' ImageUrl='/Images/About/section4_5.png'></AboutHover></Link>
          </div>
        </div>
      </div>
      
{/* Section 5 */}
<div className='container2 justify-items-center pt-10'>
        <p className='ch3 text-center pb-5'>Our Customizations</p>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          <Aboutcard text='Our Prints and Embroidery' ImageUrl='/Images/About/section5_1.png' linkabt='our-prints-and-embroidery'></Aboutcard>
          <Aboutcard text='Trims and Colours' ImageUrl='/Images/About/section5_2.png' linkabt='trims-and-colours'></Aboutcard>
          <Aboutcard text='Our Fabrics' ImageUrl='/Images/About/section5_3.png' linkabt='our-fabrics'></Aboutcard>
        </div>
      </div>


      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Have questions about customization, orders, or HYPX? We're here to help—reach out to us anytime!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">support@hypx.com</p>
              <p className="text-sm text-gray-500">
                Send us your query anytime! We'll get back to you as soon as possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">+91 9791823980</p>
              <p className="text-sm text-gray-500">Speak directly with our team for quick assistance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  className="lucide lucide-users"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Social Media</h3>
              <div className="flex justify-center space-x-2">
                <Link href="#" className="text-gray-600 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-youtube"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-2">Follow us for updates and inspiration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
