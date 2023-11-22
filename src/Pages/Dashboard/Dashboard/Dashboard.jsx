import React, { useContext } from 'react';
import './Dashboard.css';
import TrTable from '../TransactionTable/TrTable';
import BarCharts from '../../Shared/Charts/BarCharts/BarCharts';
import GeoCharts from '../../Shared/Charts/GeoCharts/GeoCharts';
import Widget from '../Widget/Widget';
import PieCharts from '../../Shared/Charts/PieCharts/PieCharts';
import AreaCharts from '../../Shared/Charts/AreaCharts/AreaCharts';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { isSideBarOpen } = useContext(AuthContext)

    const height = 260;
    const barHeight = 280;
    return (
        <div className='mb-10 font-Nunito mx-3'>
            <Widget></Widget>

            <div className='flex justify-center flex-col md:flex-row md:gap-5'>
                <div className={`${isSideBarOpen ? 'md:w-[50vw] xs:w-[60vw]' : 'md:w-[45vw] xs:w-[80vw]'} `}>
                    <AreaCharts height={height}></AreaCharts>
                </div>
                <div className={` ${isSideBarOpen ? 'md:w-[30vw] xs:w-[60vw]' : 'md:w-[45vw] xs:w-[80vw]'} `}>
                    <TrTable></TrTable>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-10 mt-6'>
                <PieCharts></PieCharts>
                <BarCharts height={barHeight}></BarCharts>
                <GeoCharts></GeoCharts>
            </div>
        </div>

    );
};

export default Dashboard;


