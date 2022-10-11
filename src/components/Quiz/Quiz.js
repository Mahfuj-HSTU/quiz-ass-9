import React from 'react';

const Quiz = ( { qus, size } ) => {
    // console.log( qus );
    const { question, options } = qus;
    // console.log( options )
    // console.log( size );

    return (
        <div className='p-6 px-12 w-3/4 mx-auto shadow-lg shadow-slate-400 mb-20'>
            <h2 className='text-2xl font-semibold text-left pb-2'> Quiz { size }: { question } </h2>
            <div className='text-left ml-9'>
                {
                    options.map( option => <div>
                        {
                            <h3 >{ option }</h3>
                        }
                    </div> )
                }
            </div>
        </div >
    );
};
{/* <h2> Quiz { question } </h2> */ }

export default Quiz;
