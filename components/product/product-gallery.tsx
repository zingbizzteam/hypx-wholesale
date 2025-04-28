"use client"

import { useState } from "react"
import Image from "next/image"
import { Search } from "lucide-react"

type ProductGalleryProps = {
  images: string[]
  thumbnails: string[]
}

const ProductGallery = ({ images, thumbnails }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div>
      <div className="relative mb-4 aspect-square">
        <Image src={images[activeImage] || "/placeholder.svg"} alt="Product image" fill className="object-cover" />
        <button
          className="absolute right-4 top-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
          aria-label="Zoom image"
        >
          <Search size={16} />
        </button>
      </div>

      <div className="flex space-x-4">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={index}
            className={`relative w-20 h-20 border-2 ${activeImage === index ? "border-black" : "border-transparent"}`}
            onClick={() => setActiveImage(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image src={thumbnail || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      
      </div>
    </div>
  )
}

export default ProductGallery
