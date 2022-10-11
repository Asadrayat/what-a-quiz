import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    return (
        <div className='flex flex-col items-center'>
            <div className='container mx-auto my-6 bg-indigo-600 text-white p-12 border  rounded-lg text-xl'>
                <p>A quiz is a form of game or mind sport in which players attempt to  answer questions correctly about a certain or variety of subjects.  Quizzes can be used as a brief assessment in education and similar  fields to measure growth in knowledge, abilities, or skills. They can  also be televised for entertainment purposes, often in a game show format.</p>
                <p>React (also known as React.js or ReactJS) is a free and open-source  front-end JavaScript library for building user interfaces based 
                 on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
            </div>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic ={topic}
                ></Topic> )
            }
        </div>
    );
};

export default Home;