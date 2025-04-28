import React from 'react'
import ButtonWhite from './ButtonWhite'

const Aboutcard = ({text='', ImageUrl='', linkabt=''}) => {
  return (
    <div>
        <div className={`h-[500px] bg-cover bg-center`} style={{backgroundImage: `url(${ImageUrl})`}}>
            <div className='bg-black/30 w-full h-full cc place-content-center justify-items-center'>
                <p className='ch3 text-[#ffffff]'>{text}</p>
                <div className='pt-6'>
                <ButtonWhite link={linkabt} child='Learn more'></ButtonWhite>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcard
