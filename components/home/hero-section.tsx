import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
      <section className="container1 mobile-hero-bg desktop-hero-bg bg-no-repeat bg-cover bg-center text-white">
        <div className="container2 md:h-[60vh] lg:h-[90vh] h-[60vh] flex flex-col place-items-center justify-center">
          <div className="container3 text-center lg:text-left flex flex-col place-items-start md:mt-0 -mt-20">
            <h1 className="ch1 text-white">Modern & Trendy</h1>
            <span className="cp1 text-white md:pb-14 pb-5 text-left">
              HYPX Wholesale – Stock Smart, Save Big
            </span>
            <h2><Link href="/shop" className="bg-[#FFF6EC] text-black rounded-[8px] py-3 px-8 text-center
             hover:bg-[#F5DDC3] hover:shadow-[#33333380] hover:shadow-md transition-shadow text-xl font-bold
             ease-in-out duration-2">
            Shop now
          </Link></h2>
          </div>
        </div>
    </section>
  )
}
