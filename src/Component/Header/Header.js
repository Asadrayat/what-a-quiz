import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container mx-auto mt-4 '>
            <nav className='flex justify-between px-12 py-6  bg-indigo-600 '>
                <div>
                    <p className="font-bold	text-4xl text-white">What A Quiz!</p>
                </div>
                <div className='font-bold flex gap-8 text-2xl text-white  '>
                    <Link className='hover:text-gray-400' to="/">Home</Link>
                    <Link className='hover:text-gray-400' to="/blog">Blog</Link>
                    <Link className='hover:text-gray-400' to="/statistic">Statistic</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;