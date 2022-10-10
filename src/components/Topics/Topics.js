import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = ( { quiz } ) => {
    const quizs = useLoaderData()
    return (
        <div className='grid grid-cols-2 gap-12 mt-20'>
            {
                quizs.data.map( quiz => <Topic key={ quiz.id } quiz={ quiz }></Topic> )
            }
        </div>
    );
};

export default Topics;
