import Link from "next/link"

export default function ValueProposition() {
  return (
    <section className="container1">
      <div className="container2">
        <div className="container3 flex flex-col test">
          <h2 className='ch2 mb-2'>About us</h2>
          <div className="w-full bg-[#B3AEAE] bg-blend-overlay bg-[url(/Images/Home/fabric.png)] bg-no-repeat 
            bg-cover bg-center text-left y-10 p-7 h-[65vh] flex flex-col gap-4 justify-center place-items-start">
            <h1 className="ch1 leading-normal">
              HYPX - where bulk <br /> meets value!
            </h1>
            <Link href={'/about-us'}
              className='bg-black text-[#FFF6EC] rounded-[8px] py-3 px-8 text-center text-xl font-bold
             hover:bg-[#333333] hover:shadow-[#33333380] hover:shadow-md transition-shadow 
             ease-in-out duration-2'>
              Learn more
            </Link>
          </div>
          <p className="roboto-text font-normal text-left mt-5 mb-32">
            <span className='font-bold'>At HYPX</span>, we believe that style is personal, and your clothes should reflect who you are.
            That’s why we specialize in customized apparel, crafted to match your unique vision.
            Whether you want to tweak the design, play with colors, or add that personal touch,
            we bring your ideas to life with precision and flair.
          </p>
        </div>
      </div>
    </section>
  )
}
