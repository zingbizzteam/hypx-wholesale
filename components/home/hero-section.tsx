import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
      <section className="lg:container1 bg-[url(../public/home/hero-sample.png)] bg-no-repeat bg-cover bg-center text-white">
        <div className="lg:container2 h-[90vh] flex flex-col place-items-center justify-center">
          <div className="lg:container3 text-center lg:text-left flex flex-col place-items-start">
            <h1 className="ch1 text-white">Modern & Trendy</h1>
            <span className="cp1 text-white pb-14">
              HYPX Wholesale – Stock Smart, Save Big
            </span>
            <h2><Link href="/category/all" className="bg-[#FFF6EC] text-black rounded-[8px] py-3 px-8 text-center
             hover:bg-[#F5DDC3] hover:shadow-[#33333380] hover:shadow-md transition-shadow text-xl font-bold
             ease-in-out duration-2">
            Shop now
          </Link></h2>
          </div>
        </div>
    </section>
  )
}
