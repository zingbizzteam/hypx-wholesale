import Image from "next/image"
import { Plus } from "lucide-react"

export const metadata = {
  title: "Fabrics - HYPX Wholesale",
  description: "Explore our high-quality fabric options for wholesale clothing customization.",
}

export default function FabricsPage() {
  // Sample fabric types
  const fabricTypes = [
    { id: 1, name: "COTTON", image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "POLYESTER", image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "LYCRA", image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "POLY-COTTON", image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "TRI-BLEND", image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "NYLON", image: "/placeholder.svg?height=200&width=200" },
    { id: 7, name: "SINGLE JERSEY", image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "DOT KNIT", image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "LOOP KNIT", image: "/placeholder.svg?height=200&width=200" },
    { id: 10, name: "MARS", image: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "COTTON FLEECE", image: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "HONEY COMB", image: "/placeholder.svg?height=200&width=200" },
    { id: 13, name: "AIR TEX", image: "/placeholder.svg?height=200&width=200" },
    { id: 14, name: "LACOSTE", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HYPX%20-%20OUR%20FABRICS.png-jmeKyXAlw7htlIBnWR2SxuJhYVslF0.jpeg"
            alt="Fabric Materials at HYPX"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Fabric Material Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Fabric Material</h2>
          <p className="text-lg mb-12 max-w-4xl mx-auto">
            The foundation of great clothing starts with the right fabric. We offer a wide range of high-quality
            materials, from soft and breathable cotton to durable polyester, stretchable Lycra, and premium blends.
            Whether you need comfort, performance, or style, our diverse fabric options ensure the perfect fit for every
            need. Explore our collections and experience the difference in quality and craftsmanship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricTypes.map((fabric) => (
              <div key={fabric.id} className="bg-gray-50">
                <div className="relative aspect-square">
                  <Image src={fabric.image || "/placeholder.svg"} alt={fabric.name} fill className="object-cover" />
                </div>
                <div className="bg-white text-black text-center py-2 font-medium">{fabric.name}</div>
                <div className="bg-black text-white flex justify-between items-center px-4 py-2">
                  <span className="text-sm">Read More</span>
                  <Plus size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
