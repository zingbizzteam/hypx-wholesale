import React from 'react';
import Link from 'next/link';

type Category = {
    title: string;
    href: string;
};

type CategoryMenuProps = {
    categories: Category[];
};

const Headermenu: React.FC<CategoryMenuProps> = ({ categories }) => {
    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <div key={category.title}>
                        <Link href={category.href} className="hover:text-black hover:underline block w-full px-3 py-1.5">
                            <h3>{category.title}</h3>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Headermenu;
