import React from 'react';

const InvoiceBalances = () => {
    return (
        <div>
            <div className='mt-4  md:ml-4'>
                <h4 className='text-3xl'>Invoices</h4>
                <p className='text-sm'>List of Invoice Balances</p>
            </div>
            <div className="md:max-w-screen-lg w-[80vw] overflow-hidden overflow-x-auto mt-6 mx-auto">
                <div className="flex flex-col">
                    <div className="shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                ID
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Price
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Hemel Hossain</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">+97132572767</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">03/11/2023</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">2</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Ashik Rayhan</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">+971556011813</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$2999</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">06/11/2023</td>

                                        </tr>
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Adhir Amin</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">+9718003733467</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$999</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">11/11/2023</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">4</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Istiack Ratul</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">+97166882012</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$99</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">15/11/2023</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-5" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">5</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Rifat Hossain</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">+97166882012</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">17/11/2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceBalances;