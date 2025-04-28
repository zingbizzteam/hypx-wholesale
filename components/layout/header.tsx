"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Headermenu from './Megamenu'
import MobileMenu from './mobile-menu'
import { ChevronDown, Menu, SearchIcon, ShoppingCartIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Men = [
  {
    title: 'T-Shirts',
    items: [
      { label: 'Basic tee', href: '' },
      { label: 'Dri-Fit Tee', href: '' },
      { label: 'Drop Shoulder Tee', href: '' },
      { label: 'Oversized tee', href: '' },
      { label: 'Polo Tee', href: '' },
      { label: 'Raglan Tee', href: '' },
      { label: 'Sports Jersey', href: '' },
      { label: 'Tie-Dye Tee', href: '' },
    ],
  },
  {
    title: 'Tank',
    items: [
      { label: 'Muscle tank top', href: '' },
      { label: 'Oversized Tank top', href: '' },
    ],
  },
  {
    title: 'Jacket',
    items: [
      { label: 'Bomber Jacket', href: '' },
      { label: 'Varsity Jacket', href: '' },
    ],
  },
  {
    title: 'Sweatshirt',
    items: [
      { label: 'Drop Shoulder', href: '' },
      { label: 'Cropped sweatshirt', href: '' },
      { label: 'Crew Neck with invisible zip', href: '' },
    ],
  },
  {
    title: 'Hoodie',
    items: [],
  },
  {
    title: 'Shorts',
    items: [
      { label: 'Cotton', href: '' },
      { label: 'Dri-Fit', href: '' },
    ],
  },
  {
    title: 'Pants',
    items: [
      { label: 'Straight pants', href: '' },
      { label: 'Track pants', href: '' },
      { label: 'Baggy Pants', href: '' },
      { label: 'Heavyweight sweatpants', href: '' },
      { label: 'Joggers', href: '' },
    ],
  },
];

const Women = [
  {
    title: 'T-Shirts',
    items: [
      { label: 'Basic tee', href: '' },
      { label: 'Dri-Fit Tee', href: '' },
      { label: 'Drop Shoulder Tee', href: '' },
      { label: 'Oversized tee', href: '' },
      { label: 'Polo Tee', href: '' },
      { label: 'Raglan Tee', href: '' },
      { label: 'Sports Jersey', href: '' },
      { label: 'Tie-Dye Tee', href: '' },
      { label: 'Slim fit', href: '' },
    ],
  },
  {
    title: 'Tank',
    items: [
      { label: 'Muscle tank top', href: '' },
      { label: 'Oversized Tank top', href: '' },
      { label: 'Flowy Scoop muscle', href: '' },
      { label: 'Rib muscle', href: '' },
      { label: 'Slouchy tank', href: '' },
      { label: 'Sports jersey tank', href: '' },
      { label: 'Racerback', href: '' },
    ],
  },
  {
    title: 'Crop Tee',
    items: [
      { label: 'Dri-fit', href: '' },
      { label: 'Rib raglan', href: '' },
      { label: 'Sports Jersey', href: '' },
    ],
  },
  {
    title: 'Jacket',
    items: [
      { label: 'Bomber Jacket', href: '' },
      { label: 'Varsity Jacket', href: '' },
    ],
  },
  {
    title: 'Sweatshirt',
    items: [
      { label: 'Drop Shoulder', href: '' },
      { label: 'Cropped sweatshirt', href: '' },
      { label: 'Crew Neck with invisible zip', href: '' },
    ],
  },
  {
    title: 'Hoodie',
    items: [],
  },
  {
    title: 'Shorts',
    items: [
      { label: 'Cotton', href: '' },
      { label: 'Dri-Fit', href: '' },
    ],
  },
  {
    title: 'Pants',
    items: [
      { label: 'Straight pants', href: '' },
      { label: 'Track pants', href: '' },
      { label: 'Baggy Pants', href: '' },
      { label: 'Heavyweight sweatpants', href: '' },
      { label: 'Joggers', href: '' },
      { label: 'Flare track pants', href: '' },
      { label: 'High waisted gym pants', href: '' },
    ],
  },
];


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className='sticky top-0 bg-white z-50'>
      <div className='lg:min-w-[1280px] lg:max-w-[1920px] w-full flex justify-self-center justify-between place-items-center p-5'>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className='text-2xl'>
          <Link href={'/'} className='font-bold'>HYPX <span className='roboto-text font-light'>| Wholesale</span></Link>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-11 text-sm text-[#333333] justify-between'>
          <div className="relative group  h-10 flex justify-center items-center">
            <Link href="/men" className="hover:text-[#858585]">Men</Link>
            <div className="fixed hidden group-hover:flex left-0 top-16 w-screen h-[65vh] bg-white justify-center items-start z-40">
              <div className='flex gap-10 justify-center items-start w-full h-full'>
                <Headermenu categories={Men} />
              </div>
            </div>
          </div>

          <div className="relative group  h-10 flex justify-center items-center">
            <Link href={'women'} className='hover:text-[#858585]'>Women</Link>
            <div className="fixed hidden group-hover:flex left-0 top-16 w-screen h-[65vh] bg-white justify-center items-start z-40">
              <div className='flex gap-10 justify-center items-start w-full h-full'>
                <Headermenu categories={Women} />
              </div>
            </div>
          </div>

          <div className="relative group  h-10 flex justify-center items-center"><Link href={'kids'} className='hover:text-[#858585]'>Kids</Link></div>
          <div className="relative group  h-10 flex justify-center items-center"><Link href={'accessories'} className='hover:text-[#858585]'>Accessories</Link></div>
          <div className="relative group  h-10 flex justify-center items-center"><Link href={'uniforms'} className='hover:text-[#858585]'>Uniforms</Link></div>
          
          {/* Dropdown Menu */}
          <div className='relative group h-10 flex justify-center items-center'>
            <div className='flex gap-1 hover:text-[#858585] cursor-pointer'>Our story
              <ChevronDown size={20} />
            </div>
            <ul className='absolute hidden group-hover:block bg-[#F4F4F4] text-[#333333] left-0 top-10 w-44'>
              <li className='hover:bg-black hover:text-white w-full px-3 py-3'><a href={'sustainability'}>Sustainability</a></li>
              <li className='hover:bg-black hover:text-white w-full px-3 py-3'><a href={'our-policy'}>Our policy</a></li>
              <li className='hover:bg-black hover:text-white w-full px-3 py-3'><a href={'about'}>About</a></li>
              <li className='hover:bg-black hover:text-white w-full px-3 py-3'><a href={'terms-and-conditions'}>Terms and Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Desktop Search and Contact */}
        <div className='flex gap-3 md:gap-8'>
          <SearchIcon />
          <Link href="/cart"><ShoppingCartIcon /></Link>
          <Link href={'contact'} className='hidden md:block bg-black rounded-sm text-white px-5 py-1 roboto-text font-medium text-base'>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}

      {/* Mobile Navigation */}
    
    </div>
  )
}

export default Header