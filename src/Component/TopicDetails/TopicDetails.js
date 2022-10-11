import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const topics = useLoaderData();
   const {total,questions} = topics.data;
  
    return (
        <div className='flex flex-col items-center'>
            <p className='my-12 text-2xl text-indigo-600'>Total Quiz :{total}</p>
            <div className=''>
            {
                questions.map(quest => <Quiz
                 key={quest.id}
                 quest ={quest}
                ></Quiz> )
             }
            </div>
             
        </div>

    );
};

export default TopicDetails;