import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-2/5'>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-red-200 '>Q</span> What is purpose react router?</p>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-orange-200 '>Ans </span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='w-2/5'>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-red-200 '>Q</span> How does context api works?</p>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-orange-200 '>Ans </span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='w-2/5'>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-red-200 '>Q</span> What is the definition of useRef?</p>
                <p className='container mx-auto text-white p-4 w-100 h-auto bg-indigo-600	 border-purple-600 my-4 rounded-2xl'><span className='text-4xl text-orange-200 '>Ans </span>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
            </div>

        </div>
    );
};

export default Blog;