import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ quest }) => {
    const { question, options } = quest;
    const query = question.slice(3, -4);
    return (
        <div className='flex flex-col items-center border border-purple-600 m-3 p-3/4 rounded-3xl bg-sky-200'>
            <li className='bg-indigo-900 text-white px-3 py-2 border rounded-2xl'>{query}</li>
            {
               options.map(option =><Option
               key={option.id}
               option ={option}
               ></Option>)
            }

        </div>
    );
};

export default Quiz;