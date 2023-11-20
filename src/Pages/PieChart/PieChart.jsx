import React from 'react';
import PieCharts from '../Shared/Charts/PieCharts/PieCharts';

const PieChart = () => {
    return (
        <div className='md:ml-32 mx-auto'>
            <div className='mt-4 md:ml-0'>
                <h4 className='text-2xl font-bold'>Geography</h4>
                <p className='text-sm text-[#8884d8]'>Simple Geography Chart</p>
            </div>
            
            {/* import pie chart from shared  */}
            <div className='max-w-lg mt-6'>
                <PieCharts></PieCharts>
            </div>

        </div>
    );
};

export default PieChart;