import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-100 p-2 px-3 mb-7 shadow-lg shadow-slate-300'>
            <Link to='/'><h2 className='text-4xl text-indigo-700 font-semibold '>My Quiz</h2></Link>
            <nav >
                <Link className='mx-4 text-xl' to='/'>Home</Link>
                <Link className='mx-4 text-xl' to='/'>Topics</Link>
                <Link className='mx-4 text-xl' to='/statistics'>Statistics</Link>
                <Link className='mx-4 text-xl' to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;
