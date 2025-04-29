"use client";
import Link from "next/link";
import React, { useState } from "react";
import Headermenu from "./Megamenu";
import MobileMenu from "./mobile-menu";
import { ChevronDown, Menu, SearchIcon, ShoppingCartIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Men = [
  {
    title: "T-Shirts",
    items: [
      { label: "Basic Tee", href: "/shop?category=basic-tee" },
      { label: "Dri-Fit Tee", href: "/shop?category=dri-fit-tee" },
      { label: "Drop Shoulder Tee", href: "/shop?category=drop-shoulder-tee" },
      { label: "Oversized Tee", href: "/shop?category=oversized-tee" },
      { label: "Polo Tee", href: "/shop?category=polo-tee" },
      { label: "Raglan Tee", href: "/shop?category=raglan-tee" },
      { label: "Sports Jersey", href: "/shop?category=sports-jersey" },
      { label: "Tie-Dye Tee", href: "/shop?category=tie-dye-tee" },
    ],
  },
  {
    title: "Tank",
    items: [
      { label: "Muscle Tank Top", href: "/shop?category=muscle-tank-top" },
      { label: "Oversized Tank Top", href: "/shop?category=oversized-tank-top" },
    ],
  },
  {
    title: "Jacket",
    items: [
      { label: "Bomber Jacket", href: "/shop?category=bomber-jacket" },
      { label: "Varsity Jacket", href: "/shop?category=varsity-jacket" },
    ],
  },
  {
    title: "Sweatshirt",
    items: [
      { label: "Drop Shoulder", href: "/shop?category=drop-shoulder" },
      { label: "Cropped Sweatshirt", href: "/shop?category=cropped-sweatshirt" },
      {
        label: "Crew Neck with invisible zip",
        href: "/shop?category=crew-neck-with-invisible-zip",
      },
    ],
  },
  {
    title: "Hoodie",
    items: [
      { label: "Oversized", href: "/shop?category=oversized" },
      {
        label: "Oversized with drawsting",
        href: "/shop?category=oversized-with-drawstring",
      },
      { label: "Oversized with zip", href: "/shop?category=oversized-with-zip" },
    ],
  },
  {
    title: "Shorts",
    items: [
      { label: "Cotton", href: "/shop?category=cotton-shorts" },
      { label: "Dri-Fit", href: "/shop?category=dri-fit" },
    ],
  },
  {
    title: "Pants",
    items: [
      { label: "Straight pants", href: "/shop?category=straight-pants" },
      { label: "Track pants", href: "/shop?category=track-pants" },
      { label: "Baggy Pants", href: "/shop?category=baggy-pants" },
      {
        label: "Heavyweight sweatpants",
        href: "/shop?category=heavyweight-sweatpants",
      },
      { label: "Joggers", href: "/shop?category=joggers" },
    ],
  },
];

const Women = [
  {
    title: "T-Shirts",
    items: [
      { label: "Basic Tee", href: "/shop?category=basic-tee" },
      { label: "Dri-Fit Tee", href: "/shop?category=dri-fit-tee" },
      { label: "Drop Shoulder Tee", href: "/shop?category=drop-shoulder-tee" },
      { label: "Oversized Tee", href: "/shop?category=oversized-tee" },
      { label: "Polo Tee", href: "/shop?category=polo-tee" },
      { label: "Raglan Tee", href: "/shop?category=raglan-tee" },
      { label: "Sports Jersey", href: "/shop?category=sports-jersey" },
      { label: "Tie-Dye Tee", href: "/shop?category=tie-dye-tee" },
      { label: "Slim fit", href: "/shop?category=slim-fit" },
    ],
  },
  {
    title: "Tank",
    items: [
      { label: "Muscle Tank Top", href: "/shop?category=muscle-tank-top" },
      { label: "Oversized Tank Top", href: "/shop?category=oversized-tank-top" },
      { label: "Flowy Scoop muscle", href: "/shop?category=flowy-scoop-muscle" },
      { label: "Rib muscle", href: "/shop?category=rib-muscle" },
      { label: "Slouchy tank", href: "/shop?category=slouchy-tank" },
      { label: "Sports jersey tank", href: "/shop?category=sports-jersey-tank" },
      { label: "Racerback", href: "/shop?category=racerback" },
    ],
  },
  {
    title: "Crop Tee",
    items: [
      { label: "Dri-fit", href: "/shop?category=dri-fit-crop-tee" },
      { label: "Rib raglan", href: "/shop?category=rib-raglan" },
      { label: "Sports Jersey", href: "/shop?category=sports-jersey-crop-tee" },
    ],
  },
  {
    title: "Jacket",
    items: [
      { label: "Bomber Jacket", href: "/shop?category=bomber-jacket" },
      { label: "Varsity Jacket", href: "/shop?category=varsity-jacket" },
    ],
  },
  {
    title: "Sweatshirt",
    items: [
      { label: "Drop Shoulder", href: "/shop?category=drop-shoulder" },
      { label: "Cropped Sweatshirt", href: "/shop?category=cropped-sweatshirt" },
      {
        label: "Crew Neck with invisible zip",
        href: "/shop?category=crew-neck-with-invisible-zip",
      },
    ],
  },
  {
    title: "Hoodie",
    items: [
      { label: "Oversized", href: "/shop?category=oversized" },
      {
        label: "Oversized with drawsting",
        href: "/shop?category=oversized-with-drawstring",
      },
      { label: "Oversized with zip", href: "/shop?category=oversized-with-zip" },
    ],
  },
  {
    title: "Shorts",
    items: [
      { label: "Cotton", href: "/shop?category=cotton-shorts" },
      { label: "Dri-Fit", href: "/shop?category=dri-fit" },
    ],
  },
  {
    title: "Pants",
    items: [
      { label: "Straight pants", href: "/shop?category=straight-pants" },
      { label: "Track pants", href: "/shop?category=track-pants" },
      { label: "Baggy Pants", href: "/shop?category=baggy-pants" },
      {
        label: "Heavyweight sweatpants",
        href: "/shop?category=heavyweight-sweatpants",
      },
      { label: "Joggers", href: "/shop?category=joggers" },
      { label: "Flare track pants", href: "/shop?category=flare-track-pants" },
      {
        label: "High waisted gym pants",
        href: "/shop?category=high-waisted-gym-pants",
      },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="lg:min-w-[1250px] lg:max-w-[1920px] w-full flex justify-self-center justify-between place-items-center p-5">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="text-2xl">
          <Link href={"/"} className="font-bold">
            HYPX <span className="roboto-text font-light">| Wholesale</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-11 text-sm text-[#333333] justify-between">
          <div className="relative group  h-10 flex justify-center items-center">
            <Link href="/shop?category=men" className="hover:text-[#858585]">
              Men
            </Link>
            <div className="fixed hidden group-hover:flex left-0 top-16 w-screen h-[65vh] bg-white justify-center items-start z-40">
              <div className="flex gap-10 justify-center items-start w-full h-full">
                <Headermenu categories={Men} />
              </div>
            </div>
          </div>

          <div className="relative group  h-10 flex justify-center items-center">
            <Link href={"/shop?category=women"} className="hover:text-[#858585]">
              Women
            </Link>
            <div className="fixed hidden group-hover:flex left-0 top-16 w-screen h-[65vh] bg-white justify-center items-start z-40">
              <div className="flex gap-10 justify-center items-start w-full h-full">
                <Headermenu categories={Women} />
              </div>
            </div>
          </div>

          <div className="relative group  h-10 flex justify-center items-center">
            <Link href={"/shop?category=kids"} className="hover:text-[#858585]">
              Kids
            </Link>
          </div>
          <div className="relative group  h-10 flex justify-center items-center">
            <Link href={"/shop?category=accessories"} className="hover:text-[#858585]">
              Accessories
            </Link>
          </div>
          <div className="relative group  h-10 flex justify-center items-center">
            <Link href={"/shop?category=uniform"} className="hover:text-[#858585]">
              Uniforms
            </Link>
          </div>

          {/* Dropdown Menu */}
          <div className="relative group h-10 flex justify-center items-center">
            <div className="flex gap-1 hover:text-[#858585] cursor-pointer">
              Our story
              <ChevronDown size={20} />
            </div>
            <ul className="absolute hidden group-hover:block bg-[#F4F4F4] text-[#333333] left-0 top-10 w-44">
              <Link href={"/sustainability"}>
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Sustainability
                </li>
              </Link>
              <Link href={"/our-policies"}>
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Our policy
                </li>
              </Link>
              <Link href={"/about-us"}>
                {" "}
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  About
                </li>
              </Link>
              <Link href={"/terms-and-conditions"}>
                {" "}
                <li className="hover:bg-black hover:text-white w-full px-3 py-3">
                  Terms and Conditions
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Desktop Search and Contact */}
        <div className="flex gap-3 md:gap-8">
          <SearchIcon />
          <Link href="/cart">
            <ShoppingCartIcon />
          </Link>
          <Link
            href={"/contact-us"}
            className="hidden md:block bg-black rounded-sm text-white px-5 py-1 roboto-text font-medium text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}

      {/* Mobile Navigation */}
    </div>
  );
};

export default Header;
