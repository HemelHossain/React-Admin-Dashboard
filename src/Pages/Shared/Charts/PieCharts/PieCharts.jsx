import React from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const PieCharts = () => {
    return (
        <div className='box-shadow dark:shadow-none text-gray-500 dark:bg-gray-800 dark:text-white w-[100%] mx-auto'>
            <div className='flex justify-between items-center pt-2 px-2'>
                <h4 className='text-md'>Total Revenue</h4>
                <BsThreeDotsVertical className='text-gray-500 dark:text-white' size={16} />
            </div>
            <div className="pie-chart mb-1 relative mt-10 mx-auto">
                <p className='absolute ml-9 mt-9 text-lg text-[#3e98c7]'>70%</p>
            </div>
            <div>
                <p className='text-md text-center mt-8'>Total sales made today</p>
                <h3 className='text-lg text-center mt-6'>$420</h3>
            </div>
            <div className='flex justify-between xs:flex-col items-center mt-8 text-sm mx-8'>
                <div>
                    Target
                    <div className='flex items-center text-red-500'>
                        <FaAngleDown />
                        $12.4k
                    </div>
                </div>
                <div>
                    Last Week
                    <div className='flex items-center text-green-500'>
                        <FaAngleUp />
                        $12.4k
                    </div>
                </div>
                <div>
                    Last Month
                    <div className='flex items-center text-green-500'>
                        <FaAngleUp />
                        $12.4k
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieCharts;