import React from 'react';
import './Dashboard.css';
import TrTable from '../TransactionTable/TrTable';
import BarCharts from '../../Shared/Charts/BarCharts/BarCharts';
import GeoCharts from '../../Shared/Charts/GeoCharts/GeoCharts';
import Widget from '../Widget/Widget';
import PieCharts from '../../Shared/Charts/PieCharts/PieCharts';
import AreaCharts from '../../Shared/Charts/AreaCharts/AreaCharts';

const Dashboard = () => {
    const height = 260;
    return (
        <div className='mb-10 font-Nunito mx-3'>
            <Widget></Widget>

            <div className='flex justify-center wrap md:flex-row flex-col md:gap-5'>
                <div className='md:grow grow-0'>
                    <AreaCharts height={height}></AreaCharts>
                </div>
                <div className=''>
                    <TrTable></TrTable>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-10 mt-6'>
                <PieCharts></PieCharts>
                <BarCharts ></BarCharts>
                <GeoCharts></GeoCharts>
            </div>
        </div>

    );
};

export default Dashboard;