import React, { useState } from 'react';
import { MdOutlinePeopleOutline, MdContacts, MdOutlineReceipt, MdOutlinePerson, MdOutlineCalendarToday, MdOutlineBarChart, MdOutlinePieChart, MdOutlineTimeline, MdOutlineMap } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(true);
    
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
    }

    const menu = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "pages", link: "/analyt", margin: true },
        { name: "Invoices Balances", link: "/invoicebalance", icon: MdOutlineReceipt},
        { name: "Calendar", link: "/calendar", icon: MdOutlineCalendarToday },
        { name: "Faq Page", link: "/faq", icon: AiOutlineHeart },
        { name: "Charts", link: "/", margin: true },
        { name: "Bar Chart", link: "/barchart", icon: MdOutlineBarChart },
        { name: "Pie Chart", link: "/piechart", icon: MdOutlinePieChart },
        { name: "Area Chart", link: "/areachart", icon: MdOutlineTimeline },
        { name: "Geography Chart", link: "/geoChart", icon: MdOutlineMap },
    ];

    return (
        <div className={`min-h-screen ${isSideBarOpen? 'w-52': 'w-16'} duration-500 bg-white md:static md:top-auto md:left-auto md:z-0 fixed z-10 border-r dark:border-gray-500 px-4 dark:bg-gray-800 dark:text-white text-indigo-700`}>
                    
                    <div className={`flex ${isSideBarOpen? 'justify-between': 'justify-end'}  items-center my-2 `}>
                        <h4 className={`text-2xl font-semibold ${isSideBarOpen? 'visible': 'hidden'}`}>Admin</h4>
                        <HiMenuAlt3 className='cursor-pointer' size={26} onClick={toggleSideBar} />
                    </div>
                    <div className={`my-4 ${isSideBarOpen? 'visible': 'hidden'}`}>
                    <img className='w-20 h-20 rounded-full mx-auto' src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/301612031_136682799086460_7382901443889000614_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnsvGdb1mhQ4JXOYpg0R7YU5O_dMFkA2RTk790wWQDZIcoQtZreBZEyOoVhiJC9B6nvBPWPhKs5Jg6Ib5QDhkL&_nc_ohc=Q_UMvFwffNwAX97D1ij&_nc_ht=scontent.fdac13-1.fna&oh=00_AfBFC1Gst2V1j-rxVz7sQZD2wOFETbXgACeJaTSUhmMI3g&oe=656109BF" alt="" />
                        <h4 className='text-2xl font-semibold mt-2'>Hemel Hossain</h4>
                    </div>

                    <div className='relative mt-4 flex flex-col item-center'>
                        {menu.map((item, i) =>
                            <Link 
                                key={i} 
                                to={item.link} 
                                className={`${item.icon && 'hover:bg-gray-300 '} group flex items-center gap-3.5 text-sm font-medium p-3 rounded-md ${item?.margin && isSideBarOpen? 'mt-5 pl-0': 'p-0'}`}>
                            <div className='text-indigo-700 dark:text-white '>
                                {item.icon && React.createElement(item?.icon, {size: 20})}
                            </div>
                            <h2 
                                style={{transitionDelay: `${i + 3}00ms`}} 
                                className={`whitespace-pre duration-500 ${!isSideBarOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                                    {isSideBarOpen && (item.name)}
                            </h2>
                            <h2 
                                className={`${isSideBarOpen && 'hidden'} ${item.icon && 'group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 drop-shadow-lg'} absolute left-48 bg-white
                                font-semibold whitespace-pre text-gray-900 rounded-md
                                  p-0 w-0 overflow-hidden  `}>
                                    {item.icon && (item.name)}
                            </h2>
                        </Link>)}
                    </div>
                </div>
    );
};

export default SideBar;