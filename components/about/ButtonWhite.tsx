import Link from 'next/link';
import React from 'react'

interface ButtonWhiteprops extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string;
    child?: string;
}

export const ButtonWhite: React.FC<ButtonWhiteprops> = ({ link, child = "Shop now" }) => {
    return (
        <Link href={link}
            className='bg-[#FFF6EC] text-black rounded py-3 px-8 text-center text-xl font-bold
             hover:bg-[#F5DDC3] hover:shadow-[#33333380] hover:shadow-md transition-shadow 
             ease-in-out duration-2'>
            {child}
        </Link>
    )
}

export default ButtonWhite;