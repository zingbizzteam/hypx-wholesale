import Image from "next/image"

export default function Sustainability() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainability</h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-50">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HYPX%20-%20SUSTAINABILITY-gjQhFgaRB3WibffB3S1CALgmkR9MT7.png"
            alt="Sustainability at HYPX"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-600">Sustainability at HYPX</h2>
          <p className="max-w-3xl mx-auto text-lg">
            At Hypx, we believe streetwear should be bold, stylish, and responsible. As a{" "}
            <strong>wholesale clothing brand</strong>, we are committed to making fashion that not only looks good but
            also does good for the planet.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Eco-friendly materials"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Commitment to a <span className="text-green-600">Greener Future</span>
              </h2>

              <h3 className="text-xl font-bold mb-2">Eco-Friendly Materials</h3>
              <p className="mb-6">
                We prioritize sustainable fabrics, including organic cotton, recycled polyester, and ethically sourced
                materials. Our goal is to reduce waste while maintaining the premium quality you expect from streetwear
              </p>

              <h3 className="text-xl font-bold mb-2">Responsible Production</h3>
              <p className="mb-6">
                Our manufacturing partners follow <strong>ethical labor practices</strong>, ensuring fair wages and safe
                working conditions. We also work to minimize water waste and carbon emissions in our production process.
              </p>

              <h3 className="text-xl font-bold mb-2">Less Waste, More Impact</h3>
              <p className="mb-6">
                Fast fashion contributes to massive landfill waste. At Hypx, we focus on{" "}
                <strong>durable, timeless designs</strong> that last, encouraging a shift away from disposable fashion.
                Our packaging is also biodegradable and recyclable to cut down on plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Movement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join The Movement</h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Sustainability is a collective effort. Whether you're a retailer or an individual, your choice to support
            eco-conscious brands like Hypx helps drive positive change in the industry.
          </p>
          <p className="text-2xl font-bold">Streetwear with a Purpose. Fashion for the Future.</p>
        </div>
      </section>
    </div>
  )
}
