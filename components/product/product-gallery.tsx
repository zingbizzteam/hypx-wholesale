"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

type ProductGalleryProps = {
  images: string[]
  thumbnails: string[]
}

const THUMBNAILS_VISIBLE = 5 // Number of thumbnails visible at once

const ProductGallery = ({ images, thumbnails }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0)
  const [thumbStart, setThumbStart] = useState(0)
  const thumbEnd = Math.min(thumbStart + THUMBNAILS_VISIBLE, thumbnails.length)

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
        if (activeImage === thumbStart && thumbStart > 0) setThumbStart(thumbStart - 1)
      } else if (e.key === "ArrowRight") {
        setActiveImage((prev) => (prev + 1) % images.length)
        if (activeImage === thumbEnd - 1 && thumbEnd < thumbnails.length) setThumbStart(thumbStart + 1)
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [activeImage, images.length, thumbStart, thumbEnd, thumbnails.length])

  // Arrow navigation for thumbnails
  const handlePrevThumbs = () => {
    setThumbStart((prev) => Math.max(0, prev - 1))
  }
  const handleNextThumbs = () => {
    setThumbStart((prev) => Math.min(thumbnails.length - THUMBNAILS_VISIBLE, prev + 1))
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
        <button
          className="absolute right-4 top-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
          aria-label="Zoom image"
          // Zoom handled by react-medium-image-zoom, so no onClick needed
        >
          <Search size={16} />
        </button>
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <button
          onClick={handlePrevThumbs}
          disabled={thumbStart === 0}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Scroll thumbnails left"
        >
          <ChevronLeft />
        </button>
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
        <button
          onClick={handleNextThumbs}
          disabled={thumbEnd >= thumbnails.length}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Scroll thumbnails right"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default ProductGallery
