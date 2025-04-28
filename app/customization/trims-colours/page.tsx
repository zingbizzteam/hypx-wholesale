import Image from "next/image"

export const metadata = {
  title: "Trims & Colours - HYPX Wholesale",
  description: "Explore our high-quality trims and colour options for wholesale clothing customization.",
}

export default function TrimsColoursPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trims & Colours</h1>
        </div>
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HYPX%20-%20TRIMS%20AND%20COLOURS.png-KmnIE8guXGt2Z15bsSoxNaORJK6qJH.jpeg"
            alt="Trims and Colours at HYPX"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Trims Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trims</h2>
          <p className="text-lg mb-12 max-w-4xl mx-auto">
            Trims are the small yet essential details that enhance both the functionality and aesthetics of a garment.
            From buttons and zippers to labels, threads, and decorative accents, trims add the perfect finishing touch
            to clothing. Whether for style, durability, or branding, our carefully selected trims{" "}
            <strong>ensure high-quality craftsmanship</strong> and a refined look in every piece.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Buttons" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">BUTTONS</h3>
              <p className="text-sm">
                Small but impactful, buttons are more than just fasteners—they add style, detail, and character to
                garments. Available in a variety of materials, shapes, and finishes, they enhance both functionality and
                aesthetics. Whether practical or decorative, our high-quality buttons ensure durability and a polished
                look for any piece.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Threads" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">THREADS</h3>
              <p className="text-sm">
                The backbone of every garment, thread ensures strength, durability, and seamless construction. Available
                in various thicknesses, and colors, it plays a vital role in both functionality and design. From
                structural seams to intricate decorative detailing, our high-quality threads provide lasting hold and a
                professional finish.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Swing Tags" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">SWING TAGS</h3>
              <p className="text-sm">
                The backbone of every garment, thread ensures strength, durability, and seamless construction. Available
                in various thicknesses, and colors, it plays a vital role in both functionality and design. From
                structural seams to intricate decorative detailing, our high-quality threads provide lasting hold and a
                professional finish.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Labels" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">LABELS</h3>
              <p className="text-sm">
                A mark of identity and quality, labels provide essential branding, sizing, and care details for every
                garment. Whether woven, printed, or heat-transferred, they add a professional touch while offering
                crucial information on materials, care, and origin. Our high-quality labels are designed to reflect
                brand identity while ensuring durability and comfort. The right label elevates the entire garment
                experience.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Cords" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">CORDS</h3>
              <p className="text-sm">
                Cords add both utility and design to garments. Used in hoodies, joggers, and drawstring bags, they
                provide adjustability while enhancing the overall look. Available in various materials, thicknesses, and
                finishes, our high-quality cords ensure durability, comfort, and a refined touch.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-60 mb-4">
                <Image src="/placeholder.svg?height=240&width=240" alt="Eyelets" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4">EYELETS</h3>
              <p className="text-sm">
                Durable, stylish, and functional—eyelets are small metal or reinforced holes that enhance both fashion
                and practicality. Commonly used for drawstrings, lacing, and ventilation while preventing fabric
                fraying. Available in various sizes and finishes, our high-quality eyelets add both strength and style
                to garments while ensuring long-lasting durability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colours Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Colours</h2>

          <div className="relative h-[300px] mb-8">
            <Image src="/placeholder.svg?height=300&width=1000" alt="Color Palette" fill className="object-cover" />
          </div>

          <p className="text-lg max-w-4xl mx-auto">
            We offer a wide range of vibrant and versatile color options to suit every style and preference. From
            classic neutrals to bold, trendy shades, our carefully curated color palette ensures the perfect match for
            any design. Whether you prefer timeless elegance or eye-catching hues, our high-quality dyes provide rich,
            long-lasting color for every garment.
          </p>
        </div>
      </section>
    </div>
  )
}
