import React from 'react';

const Quiz = ({quest}) => {
    const {question , options} = quest;
    return (
        <div className='flex flex-col items-center'>
            <h1>Question :{question}</h1>
            <input type="radio" name="radio-4" className="radio radio-accent" >{options}</input>
        </div>
    );
};

export default Quiz;