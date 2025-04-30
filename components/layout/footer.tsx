import Link from "next/link"
import { Instagram, Youtube, Facebook, ChevronDown } from "lucide-react"
import NewsletterForm from "../ui/newsletter-form"

const Footer = () => {
  return (
    <footer className="container1 bg-black text-white">
      <div className="container2 mx-auto py-12">
        <div className="container3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="space-y-4">
              <h2 className="ch2">HYPX</h2>
              <p className="text-sm text-gray-400 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
              <NewsletterForm />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="ch3 mb-4">Quick Links</h3>
              <nav>
                <Link href="/" className="footer-link">
                  Home
                </Link>
                <Link href="/contact-us" className="footer-link">
                  contact us
                </Link>
                <div className="relative group">
                    <div className="flex gap-1 items-center cursor-pointer py-1 text-gray-500 hover:text-white transition-colors">
                      Our story
                      <ChevronDown size={20} />
                    </div>
                    <ul className="absolute hidden group-hover:block text-white cp3 left-0 top-8 w-44">
                      <li className="w-full px-3 py-1 hover:text-[#858585]">
                        <a href={'about-us'}>About us</a>
                      </li>
                      <li className="w-full px-3 py-1 hover:text-[#858585]">
                        <a href={'sustainability'}>sustainability</a>
                      </li>
                      <li className="w-full px-3 py-1 hover:text-[#858585]">
                        <a href={'our-policies'}>Quality policy</a>
                      </li>
                      <li className="w-full px-3 py-1 hover:text-[#858585]">
                        <a href={'terms-and-conditions'}>T&C</a>
                      </li>
                    </ul>
                  </div>
              </nav>
            </div>

            {/* Shop Now */}
            <div>
              <h3 className="ch3 mb-4">Shop Now</h3>
              <nav>
                <Link href="/shop?category=men" className="footer-link">
                  Men
                </Link>
                <Link href="/shop?category=women" className="footer-link">
                  Women
                </Link>
                <Link href="/shop?category=uniform" className="footer-link">
                  Uniforms
                </Link>
                <Link href="/shop?category=accessories" className="footer-link">
                  Accessories
                </Link>
              </nav>
            </div>

            {/* Reach us */}
            <div>
              <h3 className="ch3 mb-4">Reach us</h3>
              <div className="space-y-4">
                <Link href={'https://maps.app.goo.gl/fr2PAn23KCYkGhBt7'} target="_blank"
                  className="flex">
                  <div className="flex-shrink-0 mr-3">
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
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-sm text-justify">
                    990,TNHB Main Rd, TamilNadu Housing Board Colony, TNHB Colony, Velachery, Chennai, Tamil Nadu 600042
                  </p>
                </Link>
                <Link href={"tel:+919791823908"}
                  className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
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
                  <p className="text-sm">+91 9791823908</p>
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">@HYPX.STORE 2025</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
