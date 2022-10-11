import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo } = topic;
    return (
        <div>

            <div className='w-100 h-auto bg-indigo-600	 border-purple-600 my-12 rounded-2xl'>
                <img src={logo} alt="" />
                <div className='flex justify-between pt-16 '>
                    <p className='text-2xl px-12  font-bold text-white'>{name}</p>
                    <button className='bg-green-600  hover:bg-green-400  px-12 py-4 text-2xl border rounded-br-2xl rounded=tl border-blue-900 text-white  '>Start Quiz</button>
                </div>

            </div>

        </div>
    );
};

export default Topic;