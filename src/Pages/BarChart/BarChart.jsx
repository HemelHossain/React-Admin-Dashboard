import React from 'react';
import BarCharts from '../Shared/Charts/BarCharts/BarCharts';


const BarChart = () => {
    const height = 400;
    return (
        <div className='md:ml-10'>
            <div className='mt-2 md:ml-0 ml-4'>
                <h4 className='text-2xl dark:text-white font-bold'>Bar Chart</h4>
                <p className='text-sm text-[#8884d8]'>Simple Bar Chart</p>
            </div>
            
            {/* import bar chart from shared  */}
            <div className='mt-5 mx-[4%]'>
                <BarCharts height={height}></BarCharts>
            </div>

        </div>
    );
};

export default BarChart;