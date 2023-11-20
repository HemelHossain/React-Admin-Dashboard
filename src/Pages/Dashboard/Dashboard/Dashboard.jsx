import React from 'react';
import './Dashboard.css';
import TrTable from '../TransactionTable/TrTable';
import BarCharts from '../../Shared/Charts/BarCharts/BarCharts';
import GeoCharts from '../../Shared/Charts/GeoCharts/GeoCharts';
import Widget from '../Widget/Widget';
import PieCharts from '../../Shared/Charts/PieCharts/PieCharts';
import AreaCharts from '../../Shared/Charts/AreaCharts/AreaCharts';

const Dashboard = () => {
    const height = 250;
    const barHeight = 280;
    return (
        <div className='mb-10 font-Nunito'>
            <Widget></Widget>
            <div>
                <div className='flex items-center justify-center flex-col md:flex-row mt-6 md:space-x-10 mx-[4%]'>
                    <div className='md:w-3/5 w-full'>
                        <AreaCharts height={height}></AreaCharts>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <TrTable></TrTable>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:space-x-10  mx-[4%] mt-6'>
                    <div className='w-full'>
                        <PieCharts></PieCharts>
                    </div>
                    <div className='w-full'>
                        <BarCharts height={barHeight}></BarCharts>
                    </div>
                    <div className='w-full'>
                        <GeoCharts></GeoCharts>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;