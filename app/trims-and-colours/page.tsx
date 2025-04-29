import React from 'react'
import Image from 'next/image'
import Trimscard from '../../components/multi/Trimscard'
import HeroSection from '../../components/multi/HeroSection'
import colours from '../../public/Images/Trims&colours/colors.png'

const page = () => {

  const trimsContent = [
    {
      title: "BUTTONS",
      imageSrc: "/Images/Trims&colours/Trims/buttons.jpg",
      description: "Small but impactful, buttons are more than just fasteners—they add style, detail, and character to any garment. Available in a variety of materials, shapes, and finishes, they enhance both functionality and design. Whether classic, modern, or decorative, our high-quality buttons ensure durability and a polished look for every piece."
    },
    {
      title: "THREADS",
      imageSrc: "/Images/Trims&colours/Trims/threads.jpg",
      description: "The backbone of every garment, thread ensures strength, durability, and seamless stitching. Available in various textures, thicknesses, and colors, it plays a vital role in both functionality and design. Whether for construction, embroidery, or decorative detailing, our high-quality threads provide lasting hold and a flawless finish."
    },
    {
      title: "SWING TAGS",
      imageSrc: "/Images/Trims&colours/Trims/swing-tags.jpg",
      description: "The backbone of every garment, thread ensures strength, durability, and seamless stitching. Available in various textures, thicknesses, and colors, it plays a vital role in both functionality and design. Whether for construction, embroidery, or decorative detailing, our high-quality threads provide lasting hold and a flawless finish."
    },
    {
      title: "LABELS",
      imageSrc: "/Images/Trims&colours/Trims/labels.png",
      description: "A mark of identity and quality, labels provide essential branding, sizing, and care details for every garment. Whether woven, printed, or heat-transferred, they add a professional touch while ensuring durability and comfort. Our high-quality labels are designed to reflect brand authenticity and enhance the overall garment experience."
    },
    {
      title: "CORDS",
      imageSrc: "/Images/Trims&colours/Trims/cords.png",
      description: "Cords add both utility and design to garments. Used in hoodies, joggers, and drawstring bags, they provide adjustability while enhancing the overall look. Available in various materials, thicknesses, and finishes, our high-quality cords ensure durability, comfort, and a refined touch."
    },
    {
      title: "EYELETS",
      imageSrc: "/Images/Trims&colours/Trims/eyelets.jpg",
      description: "Durable, stylish, and functional—eyelets are small metal or reinforced holes that enhance both design and practicality. Commonly used for drawstrings, laces, and ventilation, they add strength while preventing fabric fraying. Available in various sizes and finishes, our high-quality eyelets ensure a polished look with lasting durability."
    },
  ]

  return (
    <div>
      <HeroSection ImageUrl='/Images/Trims&colours/trims-cover.png' Title='Trims & Colours' />
      {/*Section-2*/}
      <div className='container1'>
        <div className='container2'>
          <div className='container3'>
            <div className="flex flex-col items-center justify-center mb-8">
              <p className="ch2 py-3">Trims</p>
              <p className="cp3 text-justify">
                <span className='font-semibold'>Trims</span> are the small yet essential details that enhance both the functionality and aesthetics of a garment. From buttons and zippers to labels, threads, and decorative accents, trims add the perfect finishing touch to clothing. Whether for style, durability, or branding, our carefully selected trims ensure high-quality craftsmanship and a refined look in every piece.
              </p>
            </div>
            <div className='w-full m-0 p-0 grid grid-cols-3 gap-10 justify-items-center'>
              {trimsContent.map((trims, index) => (
                <Trimscard
                  key={index}
                  title={trims.title}
                  imageSrc={trims.imageSrc}
                  description={trims.description} />
              ))}
            </div>
            {/*Section-3*/}
            <div>
              <h2 className='text-center font-bold text-2xl my-12 uppercase'>
                Colours
              </h2>
              <Image
                src={colours}
                width={1280}
                alt='colours'
                className='w-full h-auto' />
              <p className="cp3 text-justify my-8">
                We offer a wide range of vibrant and versatile color options to suit every style and preference. 
                From classic neutrals to bold, trendy shades, our carefully curated color palette ensures the perfect 
                match for any design. Whether you prefer timeless elegance or eye-catching hues, our high-quality 
                dyes provide rich, long-lasting color for every garment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page