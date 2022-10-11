import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ( { quiz } ) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='p-6 px-12 shadow-lg shadow-slate-400 mb-20'>
            <img className='bg-slate-400 mx-auto' src={ logo } alt="" />
            <div className='flex justify-between bg-white mt-7'>
                <h3 className='text-2xl'>{ name }</h3>
                <p className='mt-2'>Total { total } quiz's</p>
                <button><Link className='flex bg-blue-600 text-white font-semibold p-2 px-2 rounded-md gap-2 hover:bg-blue-800' to={ `topics/topic/${ id }` }>Let's Start <ArrowRightIcon className="h-6 w-6 text-white-500" /></Link></button>
            </div>
        </div>
    );
};

export default Topic;
