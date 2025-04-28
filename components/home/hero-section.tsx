import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1E1E1E] text-white">
      <div className="container-custom py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Modern & Trendy</h1>
          <p className="text-xl md:text-2xl">HYPX Wholesale – Stock Smart, Save Big</p>
          <Link href="/shop" className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium">
            Shop now
          </Link>
        </div>
        <div className="md:w-1/2 md:absolute md:right-0 md:h-full mt-8 md:mt-0">
          <div className="relative h-[300px] md:h-full w-full">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Models wearing trendy clothing"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
