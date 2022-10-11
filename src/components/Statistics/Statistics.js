import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const quizes = useLoaderData();
    return (
        <div className='mb-16'>
            <h2 className='sm:text-4xl text-2xl text-blue-900 mb-12'>In the bar chart below shows the total number of quizzes by topic.</h2>
            <ResponsiveContainer width='100%' aspect={ 3 }>
                <BarChart data={ quizes.data } width={ 400 } height={ 400 }>
                    <XAxis dataKey='name' />
                    <YAxis dataKey='total' />
                    <Tooltip></Tooltip>
                    <Bar dataKey='total' fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <h3 className='text-2xl my-4'>Bar Chart</h3>
        </div >
    );
};

export default Statistics;

