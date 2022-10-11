import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();
    // console.log(topic.data.questions);
    return (
        <div>
            <h1>Quizes are here</h1>
            <p>Questions: {topic.data.questions}</p>
        </div>
    );
};

export default TopicDetails;