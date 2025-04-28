import Link from "next/link"

export default function ValueProposition() {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="bg-gray-100 p-8 md:p-16 rounded-lg text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HYPX - where bulk
              <br />
              meets value !
            </h2>
            <Link href="/learn-more" className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium mb-8">
              Learn more
            </Link>
            <p className="text-gray-700 leading-relaxed">
              At HYPX, we believe that style is personal, and your clothes should reflect who you are. That's why we
              specialize in customized apparel, crafted to match your unique vision. Whether you want to tweak the
              design, play with colors, or add that personal touch, we bring your ideas to life with precision and
              flair.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
