import React from 'react';
import Link from 'next/link';

type MenuItem = {
    label: string;
    href: string;
};

type Category = {
    title: string;
    items: MenuItem[];
};

type CategoryMenuProps = {
    categories: Category[];
};

const Headermenu: React.FC<CategoryMenuProps> = ({ categories }) => {
    return (
        <div className="w-full h-full -mt-4 py-6 px-10 flex justify-center">
            <div className='container2'>
                <div className="flex gap-10 w-[90%]">
                    {categories.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-base font-bold mb-3">{category.title}</h3>
                            <ul className="space-y-1 text-sm font-normal">
                                {category.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="hover:text-black hover:underline block">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Headermenu;
