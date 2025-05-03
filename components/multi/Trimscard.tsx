import React from 'react'
import Image from 'next/image'

type Trimscardprops = {
    title: string;
    imageSrc: string;
    description: string;
}

export const Trimscard: React.FC<Trimscardprops> = ({ title, imageSrc, description }) => {
    return (
        <div className='w-full md:w-[300px] h-auto'>
            <div className='md:w-[300px] md:h-[280px] aspect-square bg-center bg-cover' style={{
                backgroundImage: `url('${imageSrc}')`
            }}></div>
            <h2 className='text-center font-bold text-2xl pt-4 pb-2 uppercase'>
                {title}
            </h2>
            <p className='text-justify cp3'>
                {description}
            </p>
        </div>
    )
}

export default Trimscard
