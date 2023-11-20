import React from 'react';
import GeoCharts from '../Shared/Charts/GeoCharts/GeoCharts';

const GeographyChart = () => {
    return (
        <div className='md:ml-10'>
            <div className='mt-2 md:ml-0 ml-4'>
                <h4 className='text-2xl font-bold dark:text-white'>Geography</h4>
                <p className='text-sm text-[#8884d8]'>Simple Geography Chart</p>
            </div>

            {/* import geo chart from shared  */}
            <div className='mt-5 mx-[4%] md:mx-[0]'>
                <GeoCharts></GeoCharts>
            </div>

        </div>
    );
};

export default GeographyChart;