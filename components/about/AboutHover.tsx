import React from 'react'
import Image from 'next/image'

const AboutHover = ({Text='', InvisibleText='', ImageUrl=''}) => {
  return (
    <div>
      <div className={`relative bg-cover bg-center h-[250px] transition duration-300 group cc place-content-center`} style={{backgroundImage: `url(${ImageUrl})`}}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300">
              </div>
              <div className="relative z-10 flex flex-col items-center transition-all duration-500 ease-out group-hover:gap-2">
                <p className="text-lg font-bold text-white pt-10">{Text}</p>
              </div>
              <div className='text-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-white'>
                {InvisibleText} <span className='text-2xl font-light'>›</span>
              </div>
            </div>
    </div>
  )
}

export default AboutHover

