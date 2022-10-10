import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <div className='mb-20'>
                <h3 className='text-3xl text-indigo-800 text-left font-semibold mb-3'>Intuitive Quiz Builder</h3>
                <p className='text-left text-cyan-900'>Advanced quiz builder that includes SETTINGS and QUESTIONS sections. Settings control WHAT, WHEN, FOR WHOM, and HOW the quiz will function. The questions section allows the creation of various question types with images, GIFs, and videos</p>
            </div>
            <div className='grid grid-cols-2 gap-12'>
                {
                    quizs.data.map( quiz => <Topics key={ quiz.id } quiz={ quiz }></Topics> )
                }
            </div>
        </div>

    );
};

export default Home;
