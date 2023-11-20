import React from 'react';

const TrTable = () => {
    return (
        // Dashboard Table 
    <div className="overflow-hidden dark:bg-gray-800 dark:text-white overflow-x-auto rounded box-shadow dark:shadow-none py-2 md:mt-0 mt-6 px-4">
            <div className='text-gray-500 dark:text-white pb-1'>
                Latest Transactions
                </div>
            <table className="min-w-full dark:bg-gray-800 bg-white border rounded-md border-gray-200 dark:border-gray-500">
                <thead>
                    <tr>
                        <th className="font-semibold py-2 px-3 text-left border-b dark:border-gray-500">Product</th>
                        <th className="font-semibold py-2 px-3 text-left border-b dark:border-gray-500">Amount</th>
                        <th className="font-semibold py-2 px-3 text-left border-b dark:border-gray-500">Status</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    <tr className='text-left border-b dark:border-gray-500'>
                        <td className="py-2 px-4">
                        Acer Nitro 5
                        </td>
                        <td className="py-2 px-4">$785</td>
                        <td className="py-2 px-4"><p className=' bg-[#00800027] dark:bg-[#9cf59c27] dark:text-green-500 text-green-700 text-center rounded px-2 py-1'>Approved</p></td>
                    </tr>
                    <tr className='text-left border-b dark:border-gray-500'>
                        <td className="py-2 px-4"> ASUS ROG Strix
                        </td>
                        <td className="py-2 px-4">$900</td>
                        <td className="py-2 px-4"><p className=' bg-[#bdbd031a] dark:bg-[#fdfd831a] text-yellow-600 text-center rounded px-2 py-1'>Pending</p></td>
                    </tr>
                    <tr className='text-left border-b dark:border-gray-500'>
                        <td className="py-2 px-4">
                         Playstation 5
                        </td>
                        <td className="py-2 px-4">$920</td>
                        <td className="py-2 px-4"><p className=' bg-[#00800027] dark:bg-[#9cf59c27] dark:text-green-500 text-green-700 text-center rounded px-2 py-1'>Approved</p></td>
                    </tr>
                    <tr className='text-left border-b dark:border-gray-500'>
                        <td className="py-2 px-4"> Iphone 14
                        </td>
                        <td className="py-2 px-4">$800</td>
                        <td className="py-2 px-4"><p className=' bg-[#bdbd031a] dark:bg-[#fdfd831a] text-yellow-600 text-center rounded px-2 py-1'>Pending</p></td>
                    </tr>
                    <tr className='text-left border-b dark:border-gray-500'>
                        <td className="py-2 px-4"> Airpod pro
                        </td>
                        <td className="py-2 px-4">$240</td>
                        <td className="py-2 px-4"><p className=' bg-[#00800027] dark:bg-[#9cf59c27] dark:text-green-500 text-green-700 text-center rounded  px-2 py-1'>Approved</p></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default TrTable;