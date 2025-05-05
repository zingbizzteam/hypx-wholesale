"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

type ProductGalleryProps = {
  images: string[]
  thumbnails: string[]
}

const THUMBNAILS_VISIBLE = 5

const ProductGallery = ({ images, thumbnails }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0)
  const [thumbStart, setThumbStart] = useState(0)
  const thumbEnd = Math.min(thumbStart + THUMBNAILS_VISIBLE, thumbnails.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevImage()
      } else if (e.key === "ArrowRight") {
        handleNextImage()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeImage, thumbStart, thumbEnd])

  const handlePrevImage = () => {
    setActiveImage(prev => {
      const newIndex = (prev - 1 + images.length) % images.length
      if (newIndex < thumbStart) setThumbStart(Math.max(0, newIndex))
      return newIndex
    })
  }

  const handleNextImage = () => {
    setActiveImage(prev => {
      const newIndex = (prev + 1) % images.length
      if (newIndex >= thumbEnd) setThumbStart(Math.min(thumbnails.length - THUMBNAILS_VISIBLE, newIndex - THUMBNAILS_VISIBLE + 1))
      return newIndex
    })
  }

  return (
    <div>
      <div className="relative mb-4 aspect-square">
        <Zoom>
          <Image
            src={images[activeImage] || "/placeholder.svg"}
            alt="Product image"
            fill
            className="object-cover cursor-zoom-in"
            style={{ borderRadius: "8px" }}
          />
        </Zoom>
        {/* Right Arrow */}
        <button
          onClick={handleNextImage}
          className="gallery-arrow absolute right-4 top-[280px] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
          aria-label="Next image"
          type="button"
        >
          <ChevronRight />
        </button>
        {/* Left Arrow */}
        <button
          onClick={handlePrevImage}
          className="gallery-arrow absolute right-[530px] top-[280px] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
          aria-label="Previous image"
          type="button"
        >
          <ChevronLeft />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center space-x-2 mt-2">
        <div className="flex space-x-2 overflow-hidden">
          {thumbnails.slice(thumbStart, thumbEnd).map((thumbnail, index) => {
            const realIndex = thumbStart + index
            return (
              <button
                key={realIndex}
                className={`relative w-20 h-20 border-2 ${activeImage === realIndex ? "border-black" : "border-transparent"} rounded`}
                onClick={() => setActiveImage(realIndex)}
                aria-label={`View image ${realIndex + 1}`}
                tabIndex={0}
                type="button"
              >
                <Image
                  src={thumbnail || "/placeholder.svg"}
                  alt={`Thumbnail ${realIndex + 1}`}
                  fill
                  className="object-cover"
                  style={{ borderRadius: "6px" }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
