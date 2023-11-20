import React from 'react';
import { FaAngleUp } from "react-icons/fa";
import { MdOutlinePerson, MdOutlineShoppingCart, MdOutlineMonetizationOn, MdOutlineAccountBalanceWallet } from "react-icons/md";


const Widget = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 my-6 mx-[4%] dark:text-white'>
            <div className='flex items-center justify-between dark:bg-gray-800 dark:shadow-none box-shadow-ii rounded-lg p-2 px-4'>
                <div>
                    <p className='text-md font-bold text-gray-400 dark:text-white'>USERS</p>
                    <p className='text-3xl mt-3'>100</p>
                    <p className='border-b mt-3 border-gray-700'>See all users</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <FaAngleUp className='mr-1' /> 20 %
                    </div>
                    <MdOutlinePerson className='text-red-500 bg-pink-200 p-1 dark:bg-[#4b4646a6] ml-6 rounded mt-14' size={26} />

                </div>
            </div>
            <div className='flex items-center justify-between box-shadow-ii rounded-lg dark:bg-gray-800 dark:shadow-none p-2 px-4'>
                <div>
                    <p className='text-md font-bold text-gray-400 dark:text-white'>ORDERS</p>
                    <p className='text-3xl mt-3'>100</p>
                    <p className='border-b mt-3 border-gray-700'>View all orders</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <FaAngleUp className='mr-1' /> 20 %
                    </div>
                    <MdOutlineShoppingCart className='text-yellow-600 bg-yellow-100 dark:bg-[#fdfd831a] p-1 ml-6 rounded mt-14' size={26} />

                </div>
            </div>
            <div className='flex items-center justify-between box-shadow-ii rounded-lg dark:bg-gray-800 dark:shadow-none da p-2 px-4'>
                <div>
                    <p className='text-md font-bold text-gray-400 dark:text-white'>EARNINGS</p>
                    <p className='text-3xl mt-3'>100</p>
                    <p className='border-b mt-3 border-gray-700'>View net earnings</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <FaAngleUp className='mr-1' /> 20 %
                    </div>
                    <MdOutlineMonetizationOn className='text-green-600 bg-green-100 dark:bg-[#5ff75f27] dark:text-green-500 p-1 ml-6 rounded mt-14' size={26} />

                </div>
            </div>
            <div className='flex items-center justify-between box-shadow-ii rounded-lg dark:bg-gray-800 dark:shadow-none p-2 px-4'>
                <div>
                    <p className='text-md font-bold text-gray-400 dark:text-white'>EARNINGS</p>
                    <p className='text-3xl mt-3'>100</p>
                    <p className='border-b mt-3 border-gray-700'>See details</p>
                </div>
                <div>
                    <div className='flex items-center'>
                        <FaAngleUp className='mr-1' /> 20 %
                    </div>
                    <MdOutlineAccountBalanceWallet className='text-purple-700 p-1 dark:bg-[#e9a2f427] bg-purple-200 dark:text-purple-500 ml-6 rounded mt-14' size={26} />

                </div>
            </div>
            
        </div>
    );
};

export default Widget;