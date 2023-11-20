import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaCharts = ({height}) => {
    const data = [
        { name: "January", Total: 1200, Revenue: 800 },
        { name: "February", Total: 2100, Revenue: 1200 },
        { name: "March", Total: 800, Revenue: 400 },
        { name: "April", Total: 1600, Revenue: 1000 },
        { name: "May", Total: 900, Revenue: 500 },
        { name: "June", Total: 1700, Revenue: 1100 }
    ];
    return (
        <div className={`box-shadow rounded-md dark:shadow-none dark:bg-gray-800 dark:text-white`}>
            <div className='text-gray-500 dark:text-white pt-3 ml-5'>Last 6 Months Sales & Revenue</div>
            <ResponsiveContainer width='100%' height={height}>
                <AreaChart height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ecd4ec" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#b180ab" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                    <Area type="monotone" dataKey="Revenue" stroke="#b180ab" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                </ResponsiveContainer>
        </div>
    );
};

export default AreaCharts;