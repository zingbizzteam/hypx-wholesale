import React from 'react'
import Image from 'next/image'

type Washcardprops = {
    title: string;
    imageSrc: string;
    description: string;
}

export const Washcard: React.FC<Washcardprops> = ({ title, imageSrc, description }) => {
    return (
        <div className='w-full md:w-[480px]'>
            <Image
                src={imageSrc}
                alt="404"
                width={480}
                height={280}
                className='w-full h-auto'/>
            <h2 className='text-center font-bold text-2xl pt-4 pb-2 uppercase'>
                {title}
            </h2>
            <p className='text-justify cp3'>
                {description}
            </p>
        </div>
    )
}

export default Washcard
