import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='container mx-auto mt-4 '>
            <nav className='flex justify-between px-12 py-6 bg-sky-200 '>
                <div>
                    <p className="font-bold	text-4xl text-blue-800">What A Quiz!</p>
                </div>
                <div className='font-bold flex gap-8 text-2xl text-blue-600  '>
                    <Link className='hover:text-blue-900' to ="/">Topic</Link>
                     <Link className='hover:text-blue-900'  to ="/blog">Blog</Link>
                    <Link className='hover:text-blue-900' to ="/statistic">Statistic</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;