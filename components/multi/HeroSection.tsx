import React from 'react'
 
const HeroSection = ({Title='', Description='', ImageUrl=''}) => {
  return (
    <div className={`bg-cover bg-center h-[55vh]`} style={{backgroundImage: `url('${ImageUrl}')
    `}}>
      <div className='bg-black/50 h-full w-full cc'>
        <div className='lg:container2 justify-items-center'>
          <h1 className='ch1 text-white'>{Title}</h1>
          <p className='cp1 text-white'>{Description}</p>
        </div>
      </div> 
    </div>
  )
}

export default HeroSection
