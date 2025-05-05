"use client";
import Link from "next/link";
import React, { useState } from "react";
import Headermenu from "./Megamenu";
import MobileMenu from "./mobile-menu";
import { ChevronDown, Menu, ShoppingCartIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";

const Men = [
  { title: "T-Shirts", href: "/shop?category=t-shirt" },
  { title: "Tank", href: "/shop?category=tank" },
  { title: "Jacket", href: "/shop?category=jacket" },
  { title: "Sweatshirt", href: "/shop?category=sweatshirt" },
  { title: "Hoodie", href: "/shop?category=hoodie" },
  { title: "Shorts", href: "/shop?category=shorts" },
  { title: "Pants", href: "/shop?category=pants" },
];

const Women = [
  { title: "T-Shirts", href: "/shop?category=t-shirt" },
  { title: "Tank", href: "/shop?category=tank" },
  { title: "Crop Tee", href: "/shop?category=crop-tee" },
  { title: "Jacket", href: "/shop?category=jacket" },
  { title: "Sweatshirt", href: "/shop?category=sweatshirt" },
  { title: "Hoodie", href: "/shop?category=hoodie" },
  { title: "Shorts", href: "/shop?category=shorts" },
  { title: "Pants", href: "/shop?category=pants" },
];

const Uniform = [
  { title: "School Uniform", href: "/shop?category=school-uniforms" },
  { title: "Corporate Uniform", href: "/shop?category=corporate-uniforms" },
  { title: "Chef Uniform", href: "/shop?category=chef-uniform" },
  {
    title: "Construction & Medical Wear",
    href: "/shop?category=construction-wear,surgical-wear",
  },
];

const Accessories = [
  { title: "Bags", href: "/shop?category=bags" },
  { title: "Caps", href: "/shop?category=caps" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="w-full flex justify-between items-center p-3">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="lg:text-2xl md:text-base text-lg">
          <Link href="/" className="font-bold">
            HYPX <span className="roboto-text font-light">| Wholesale</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-11 lg:gap-5 text-sm text-[#333333] ml-10">
          {/* Men Menu */}
          <div className="relative group h-10 flex items-center">
            <Link href="/shop?category=men">
              <h3 className="flex gap-1 hover:text-[#858585] cursor-pointer font-bold text-base">
                Men
              </h3>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-[#333333] left-0 top-10">
              <Headermenu categories={Men} />
            </ul>
          </div>

          {/* Women Menu */}
          <div className="relative group h-10 flex items-center">
            <Link href="/shop?category=women">
              <h3 className="flex gap-1 hover:text-[#858585] cursor-pointer font-bold text-base">
                Women
              </h3>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-[#333333] left-0 top-10">
              <Headermenu categories={Women} />
            </ul>
          </div>

          {/* Accessories Menu */}
          <div className="relative group h-10 flex items-center">
            <Link href="/shop?category=accessories">
              <h3 className="flex gap-1 hover:text-[#858585] cursor-pointer font-bold text-base">
                Accessories
              </h3>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-[#333333] left-0 top-10 w-28">
              <Headermenu categories={Accessories} />
            </ul>
          </div>

          {/* Uniform Menu */}
          <div className="relative group h-10 flex items-center">
            <Link href="/shop?category=uniform">
              <h3 className="flex gap-1 hover:text-[#858585] cursor-pointer font-bold text-base">
                Uniform
              </h3>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-[#333333] left-0 top-10 w-44">
              <Headermenu categories={Uniform} />
            </ul>
          </div>

          {/* Dropdown - Our Story */}
          <div className="relative group h-10 flex items-center">
            <div className="flex items-center gap-1 hover:text-[#858585] text-base font-bold cursor-pointer">
              <h3>Our story</h3>
              <ChevronDown size={20} />
            </div>
            <ul className="absolute hidden group-hover:block bg-[#F4F4F4] text-[#333333] left-0 top-10 w-44">
              <Link href="/sustainability">
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Sustainability
                </li>
              </Link>
              <Link href="/our-policies">
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Our policy
                </li>
              </Link>
              <Link href="/about-us">
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  About
                </li>
              </Link>
              <Link href="/terms-and-conditions">
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Terms and Conditions
                </li>
              </Link>
              <Link href="/about-us#our-customizations">
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Our Customizations
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Desktop Search and Contact */}
        <div className="flex gap-3 lg:gap-8 items-center">
          <div className="hidden lg:block">
            <SearchBar />
          </div>
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
          <Link
            href="/contact-us"
            className="hidden lg:block bg-black rounded-sm text-white px-5 py-1 roboto-text font-medium text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </div>
  );
};

export default Header;
