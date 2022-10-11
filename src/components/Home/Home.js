import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <div className='mb-12'>
                <h3 className='text-3xl text-indigo-800 text-left font-semibold mb-3'>Intuitive Quiz Builder</h3>
                <p className='text-left text-cyan-900'>Advanced quiz builder that includes SETTINGS and QUESTIONS sections. Settings control WHAT, WHEN, FOR WHOM, and HOW the quiz will function. The questions section allows the creation of various question types with images, GIFs, and videos.The platform supports up to 100,000 concurrent players per quiz. myQuiz is running in a Microsoft Azure cloud environment which allows autoscaling to meet changing demands.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-7'>
                {
                    quizs.data.map( quiz => <Topic key={ quiz.id } quiz={ quiz }></Topic> )
                }
            </div>
        </div>

    );
};

export default Home;
