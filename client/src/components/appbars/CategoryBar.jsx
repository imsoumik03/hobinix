import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBar = ({ post }) => {
    return (
        <div className="py-4 px-10 flex space-x-16 bg-neutral-900 max-sm:space-x-7 max-sm:px-4 overflow-x-auto w-full">
            {category.map(e => {
                return (
                    <Link to={post ? e.link + '/post' : e.link}>
                        <button className="button flex items-center py-1 px-5 border-[1px] border-zinc-100 whitespace-nowrap rounded-full font-serif text-lg text-zinc-200 hover:border-teal-600 hover:text-teal-600">
                            {e.category}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
};

export default CategoryBar;

const category = [
    {
        category: 'Music',
        link: '/music',
    },
    {
        category: 'Photography',
        link: '/gallery',
    },
    {
        category: 'Dance',
        link: '/dance',
    },
    {
        category: 'Read & Write',
        link: '/music',
    },
    {
        category: 'Painting',
        link: '/music',
    },
    {
        category: 'Cooking',
        link: '/music',
    },
    {
        category: 'Sports & Gaming',
        link: '/music',
    },
];
