import React, { useContext, } from 'react';
import { MdOutlineDashboard, MdOutlinePeopleOutline, MdContacts, MdOutlineReceipt, MdOutlinePerson, MdOutlineCalendarToday, MdOutlineBarChart, MdOutlinePieChart, MdOutlineTimeline, MdOutlineMap } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const { isSideBarOpen, toggleSideBar } = useContext(AuthContext)

    return (
        <div className={`min-h-screen ${isSideBarOpen ? 'w-52 p-[2%]' : 'w-16 p-[2%]'} dark:bg-gray-800 text-black dark:text-white border-r dark:border-gray-500 duration-300 text-xs`}>
            <div className={`flex items-center ${isSideBarOpen ? 'justify-between' : 'justify-center'}`}>
                <span className={`${isSideBarOpen ? '' : 'hidden'}`}> Admin </span> <HiMenuAlt3 onClick={() => { toggleSideBar() }} size={20} />
            </div>
            <div className={`flex flex-col items-center ${isSideBarOpen? '' : 'hidden'} mt-4`}>
                <img className='rounded-full w-16' src="https://i.ibb.co/DzynD2s/hemel1.jpg" alt="" />
                <span className='mt-2'>Hemel Hossain</span>
            </div>

            <div className='flex flex-col items-center'>
                <div>
                    <ul className='mt-6'>
                        <li className='list-none flex items-center group'>
                            <Link to='/' className='flex items-center'>
                                <MdOutlineDashboard size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Dashboad</span>
                                <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Dashboad</span>
                            </Link>
                        </li>
                    </ul>

                    <p className={`${isSideBarOpen ? 'my-6' : 'hidden'}`}>Pages</p>
                    <ul>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='/invoicebalance' className='flex items-center group'>
                                <MdOutlineReceipt size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Invoices Balances</span>
                            <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Invoices Balances</span>
                            </Link>
                        </li>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='faq' className='flex items-center group'>
                                <AiOutlineHeart size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>FAQ</span>
                                <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Faq</span>
                            </Link>
                        </li>
                    </ul>
                    <p className={` ${isSideBarOpen ? 'my-6' : 'hidden'}`}>Charts</p>
                    <ul>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='barchart' className='flex items-center group'>
                                <MdOutlineBarChart size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Bar Chart</span>
                                <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Bar Chart</span>
                            </Link>
                        </li>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='areachart' className='flex items-center group'>
                                <MdOutlineTimeline size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Area Chart</span>
                                
                            <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Area Chart</span>
                            </Link>
                        </li>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='piechart' className='flex items-center group'>
                                <MdOutlinePieChart size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Pie Chart</span>
                                <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Pie Chart</span>
                            </Link>
                            
                        </li>
                        <li className='list-none flex items-center mt-3'>
                            <Link to='geochart' className='flex items-center group'>
                                <MdOutlineMap size={20} className={`${isSideBarOpen ? 'mr-1' : 'mt-6'}`} />
                                <span className={` ${isSideBarOpen ? '' : 'hidden'}`}>Geography Chart</span>
                                <span className={`${isSideBarOpen && 'hidden'} group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14
                                 group-hover:duration-300 mt-8 drop-shadow-lg absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md ml-6
                                  p-0 w-0 overflow-hidden`}>Geograhy Chart</span>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default SideBar;