import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarCharts = () => {
    const data = [
        {
          name: 'AD',
          Sales: 4000,
          Quantity: 2400,
          amt: 2400,
        },
        {
          name: 'AE',
          Sales: 3000,
          Quantity: 1398,
          amt: 2210,
        },
        {
          name: 'AF',
          Sales: 2000,
          Quantity: 4300,
          amt: 2290,
        },
        {
          name: 'AG',
          Sales: 2780,
          Quantity: 3908,
          amt: 2000,
        },
        {
          name: 'AI',
          Sales: 1890,
          Quantity: 4400,
          amt: 2181,
        },
      ];
    return (
        <div className='box-shadow dark:shadow-none dark:bg-gray-800 mx-auto'>
            <div className='pl-4 py-2 dark:text-white'>Sales Quantity</div>
            <ResponsiveContainer className='mt-6' width='100%' height={280}>
                <BarChart height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Quantity" fill="#8884d8" />
                    <Bar dataKey="Sales" fill="#b180ab" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarCharts;