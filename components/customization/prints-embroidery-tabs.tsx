"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

const PrintsEmbroideryTabs = () => {
  const [activeTab, setActiveTab] = useState<"prints" | "embroidery">("prints")

  // Sample printing techniques
  const printingTechniques = [
    { id: 1, name: "NON-PVC PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "GLITTER PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Foil Printing", image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "PUFF PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "HD PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "DISCHARGE PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 7, name: "PHTHALATE FREE PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "RIG SILICON PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "PHOTO PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 10, name: "SUBLIMATION", image: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "EMBOSSING", image: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "3D SILICONE PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 13, name: "DIGITAL TRANSFER PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "REFLECTIVE PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 15, name: "VINYL PRINTING", image: "/placeholder.svg?height=200&width=200" },
    { id: 16, name: "ORGANIC PRINTING", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="border-b border-gray-200 mb-8">
        <div className="flex">
          <button
            className={`policy-tab ${activeTab === "prints" ? "active" : ""}`}
            onClick={() => setActiveTab("prints")}
          >
            Our Prints
          </button>
          <button
            className={`policy-tab ${activeTab === "embroidery" ? "active" : ""}`}
            onClick={() => setActiveTab("embroidery")}
          >
            Embroidery
          </button>
        </div>
      </div>

      {activeTab === "prints" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {printingTechniques.map((technique) => (
            <div key={technique.id} className="bg-white">
              <div className="relative aspect-square">
                <Image src={technique.image || "/placeholder.svg"} alt={technique.name} fill className="object-cover" />
              </div>
              <div className="bg-black text-white text-center py-2 font-medium">{technique.name}</div>
              <div className="bg-black text-white flex justify-between items-center px-4 py-2">
                <span className="text-sm">Read More</span>
                <Plus size={16} />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "embroidery" && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Embroidery"
                width={400}
                height={400}
                className="rounded"
              />
            </div>
            <div>
              <p className="mb-6">
                A timeless art of decorating fabric with needle and thread, embroidery adds texture, elegance, and
                personality to any design. From delicate hand-stitched patterns to intricate machine-made details, this
                craft enhances clothing, accessories, and home decor with unique artistry. Whether classic or modern,
                embroidery brings creativity to life with every stitch.
              </p>
              <ul className="space-y-2">
                <li>• Hand Embroidery</li>
                <li>• Machine Embroidery</li>
                <li>• Digital Embroidery (Computerized Embroidery)</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3">
                <li>• Running Stitch – A simple, straight stitch used for outlines.</li>
                <li>• Chain Stitch – Creates a looped, textured effect.</li>
                <li>• Satin Stitch – Fills areas with smooth, dense stitching.</li>
                <li>• French Knots – Small, raised knots for detailing.</li>
                <li>• Cross Stitch – X-shaped stitches forming patterns.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Embroidery Stitches"
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Machine Embroidery"
                width={400}
                height={400}
                className="rounded"
              />
            </div>
            <div>
              <ul className="space-y-3">
                <li>• Running Stitch – A simple, straight stitch used for outlines.</li>
                <li>• Flat Embroidery – Standard embroidery using a machine to create smooth, intricate designs.</li>
                <li>
                  • 3D Puff Embroidery – Raised embroidery using foam for a 3D effect (popular on caps and jackets).
                </li>
                <li>• Chenille Embroidery – Uses a looped, fuzzy texture (commonly seen in varsity jackets).</li>
                <li>• Sequin & Bead Embroidery – Adds embellishments like sequins or beads for a decorative effect.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-3">
                <li>• Appliqué Embroidery – Fabric patches are stitched onto the base fabric for a layered look.</li>
                <li>• Laser Cut Embroidery – Designs are precision-cut using lasers before being stitched.</li>
                <li>• Photo Stitch Embroidery – Creates detailed, realistic images using multiple thread shades.</li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Special Embroidery Techniques"
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PrintsEmbroideryTabs
