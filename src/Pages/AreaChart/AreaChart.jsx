import React from 'react';
import AreaCharts from '../Shared/Charts/AreaCharts/AreaCharts';

const AreaChart = () => {
    const height= 400;
    return (
        <div className='md:ml-10'>
            <div className='mt-2 md:ml-0 ml-4'>
                <h4 className='text-2xl dark:text-white font-bold'>Area Chart</h4>
                <p className='text-sm text-[#8884d8]'>Simple Area Chart</p>
            </div>
            
                    {/* import area chart from shared  */}
            <div className='mt-5 mx-[4%]'>
                <AreaCharts height={height}></AreaCharts>
            </div>

        </div>
    );
};

export default AreaChart;