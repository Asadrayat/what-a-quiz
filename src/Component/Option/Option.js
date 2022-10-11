import React from 'react';

const Option = ({option}) => {
    return (
        <div className='w-96 bg-indigo-600 text-white my-3 px-6 py-2 border rounded-3xl gap-2'>
            {
                <form action=""><input type="radio" />{option}</form>
            }
        </div>
    );
};

export default Option;