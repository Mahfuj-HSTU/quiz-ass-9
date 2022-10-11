import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;


    return (
        <div className='mt-12'>
            <h2 className='text-5xl text-blue-900'>Quiz of { name }</h2>
            <div className='mt-9'>
                {
                    questions.map( ( qus, index ) => <Quiz key={ qus.id } qus={ qus } size={ index + 1 }></Quiz> )
                }

            </div>
        </div>
    );
};

export default Quizs;
