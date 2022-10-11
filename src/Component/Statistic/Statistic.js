import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const data = [
        {
            name: "React",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Java script",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "CSS",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Git",
            uv: 2780,
            pv: 3908,
            amt: 2000
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
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>

    );
};
export default Statistic;

