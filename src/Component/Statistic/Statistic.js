import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const data = [
        {
            name: "React",
            
            pv: 8,
            amt: 8
        },
        {
            name: "Java script",
            
            pv: 9,
            amt: 9
        },
        {
            name: "CSS",
            
            pv: 8,
            amt: 8
        },
        {
            name: "Git",
            
            pv: 11,
            amt: 11
        }
    ];
    return (
        <div className='container flex py-36 justify-center'>
            <BarChart
                width={900}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Quizes" fill="#8884d8" />
            </BarChart>
        </div>

    );
};
export default Statistic;

