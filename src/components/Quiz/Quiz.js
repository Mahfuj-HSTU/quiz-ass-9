import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ( { qus, size } ) => {
    const { question, options, correctAnswer, id } = qus;
    // console.log( options )
    // console.log( correctAnswer, id );

    const showToastMessage = ( option ) => {
        const selectedAnswer = Object.values( option ).toString()
        if ( selectedAnswer === correctAnswer ) {
            toast.success( 'Your Selected Answer is Correct', {
                position: toast.POSITION.TOP_CENTER
            } );
        }
        else {
            toast.error( 'Oops!! Your Selected Answer is Wrong', {
                position: toast.POSITION.TOP_CENTER
            } );
        }
    }

    const showCorrectAnswer = () => {
        toast.success( correctAnswer, {
            position: toast.POSITION.TOP_CENTER
        } );
    }


    return (
        <div className='p-4 px-12 w-3/4 mx-auto shadow-lg shadow-slate-400 mb-20'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold text-left pb-2'>{ <u className='text-blue-800'>Quiz { size } : </u> } { question } </h2>
                <h3><EyeIcon onClick={ showCorrectAnswer } className="h-6 w-6 cursor-pointer p-0" /></h3>
            </div>
            <div className='text-left ml-9'>
                {
                    options.map( option => <div>
                        <input className='mr-2 cursor-pointer' onClick={ () => showToastMessage( { option } ) } type="radio" name={ id } value="option" id="xs" />
                        <label for="xs">{ option }</label>
                        <ToastContainer />
                    </div> )
                }
            </div>
        </div >
    );
};
{/* <h2> Quiz { question } </h2> */ }

export default Quiz;
