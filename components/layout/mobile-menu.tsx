"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronRight, ChevronDown } from "lucide-react"
import MobileSearchBar from "@/components/MobileSearchBar"

type MobileMenuProps = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpand = (item: string) => {
    if (expandedItem === item) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item)
    }
  }

  return (
    <div className="w-[80%] fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="font-space-grotesk text-xl font-medium">
            HYPX | Wholesale
          </Link>
          <button onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <MobileSearchBar />

        <nav className="space-y-0">
          <div className="border-b border-gray-200">
            <div className="py-4 flex justify-between items-center" onClick={() => toggleExpand("men")}>
              <Link href="/shop?category=men" className="text-lg">
                Men
              </Link>
              <ChevronRight size={20} className={`transition-transform ${expandedItem === "men" ? "rotate-90" : ""}`} />
            </div>
            {expandedItem === "men" && (
              <div className="pl-4 pb-4 space-y-2">
                <Link href="/shop?category=t-shirt" className="block py-2">
                  T-Shirts
                </Link>
                <Link href="/shop?category=tank" className="block py-2">
                  Tank
                </Link>
                <Link href="/shop?category=jacket" className="block py-2">
                  Jacket
                </Link>
                <Link href="/shop?category=sweatshirt" className="block py-2">
                  Sweatshirt
                </Link>
                <Link href="/shop?category=hoodie" className="block py-2">
                  Hoodie
                </Link>
                <Link href="/shop?category=gym-wear" className="block py-2">
                  Gym Wear
                </Link>
                <Link href="/shop?category=shorts" className="block py-2">
                  Shorts
                </Link>
                <Link href="/shop?category=pants" className="block py-2">
                  Pants
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <div className="py-4 flex justify-between items-center" onClick={() => toggleExpand("women")}>
              <Link href="/shop?category=women" className="text-lg">
                Women
              </Link>
              <ChevronRight
                size={20}
                className={`transition-transform ${expandedItem === "women" ? "rotate-90" : ""}`}
              />
            </div>
            {expandedItem === "women" && (
              <div className="pl-4 pb-4 space-y-2">
                <Link href="/shop?category=t-shirt" className="block py-2">
                  T-Shirts
                </Link>
                <Link href="/shop?category=tank" className="block py-2">
                  Tank
                </Link>
                <Link href="/shop?category=crop-tee" className="block py-2">
                  Crop Tee
                </Link>
                <Link href="/shop?category=jacket" className="block py-2">
                  Jacket
                </Link>
                <Link href="/shop?category=sweatshirt" className="block py-2">
                  Sweatshirt
                </Link>
                <Link href="/shop?category=hoodie" className="block py-2">
                  Hoodie
                </Link>
                <Link href="/shop?category=gym-wear" className="block py-2">
                  Gym Wear
                </Link>
                <Link href="/shop?category=shorts" className="block py-2">
                  Shorts
                </Link>
                <Link href="/shop?category=pants" className="block py-2">
                  Pants
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <div className="py-4 flex justify-between items-center" onClick={() => toggleExpand("kids")}>
              <Link href="/shop?category=uniform" className="text-lg">
                Uniform
              </Link>
              <ChevronRight
                size={20}
                className={`transition-transform ${expandedItem === "kids" ? "rotate-90" : ""}`}
              />
            </div>
            {expandedItem === "kids" && (
              <div className="pl-4 pb-4 space-y-2">
                <Link href="/shop?category=school-uniforms" className="block py-2">
                  School Uniform
                </Link>
                <Link href="/shop?category=corporate-uniforms" className="block py-2">
                  Corporate Uniform
                </Link>
                <Link href="/shop?category=chef-uniform" className="block py-2">
                  Chef Uniform
                </Link>
                <Link href="/shop?category=construction-wear,surgical-wear" className="block py-2">
                  Construction & Medical Wear
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <div className="py-4 flex justify-between items-center" onClick={() => toggleExpand("accessories")}>
              <Link href="/shop?category=accessories" className="text-lg">
                Accessories
              </Link>
              <ChevronRight
                size={20}
                className={`transition-transform ${expandedItem === "accessories" ? "rotate-90" : ""}`}
              />
            </div>
            {expandedItem === "accessories" && (
              <div className="pl-4 pb-4 space-y-2">
                <Link href="/shop?category=caps" className="block py-2">
                  Caps
                </Link>
                <Link href="/shop?category=bags" className="block py-2">
                  Bags
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <div className="py-4 flex justify-between items-center" onClick={() => toggleExpand("our-story")}>
              Our Story
              <ChevronDown
                size={20}
                className={`transition-transform ${expandedItem === "our-story" ? "rotate-180" : ""}`}
              />
            </div>
            {expandedItem === "our-story" && (
              <div className="pl-4 pb-4 space-y-2">
                <Link href="/about-us" className="block py-2">
                  About Us
                </Link>
                <Link href="/sustainability" className="block py-2">
                  Sustainability
                </Link>
                <Link href="/our-policies" className="block py-2">
                  Our Policy
                </Link>
                <Link href="/terms-and-conditions" className="block py-2">
                  Terms and Conditions
                </Link>
                <Link href="/about-us#our-customizations" className="block py-2">
                  Our Customizations
                </Link>
              </div>
            )}
          </div>

          <div className="pt-4">
            <Link href="/contact-us" className="btn btn-primary block text-center">
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
