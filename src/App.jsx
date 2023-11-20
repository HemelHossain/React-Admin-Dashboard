import './App.css'

function App() {

  return (
    <>
{/* import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Main = () => {
    const menu = [
        { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
        { name: "User", link: "/", icon: AiOutlineUser },
        { name: "Messages", link: "/", icon: FiMessageSquare },
        { name: "Analytics", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "File Manager", link: "/", icon: FiFolder },
        { name: "Cart", link: "/", icon: FiShoppingCart },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
    ];
    const [isSideBarOpen, setSideBarOpen] = useState(true);
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
    }
    return (
        <div className='flex'>
                <div className={`flex flex-col bg-black min-h-screen ${isSideBarOpen? 'w-72': 'w-16'} duration-500 text-gray-100 px-4`}>
                    <div className='flex justify-end'>
                        <HiMenuAlt3 className='cursor-pointer' size={26} onClick={toggleSideBar} />
                    </div>
                    <div className='relative mt-4 flex flex-col gap-4'>
                        {menu.map((item, i) => <Link key={i} to={item.link} className={`${item?.margin && 'mt-6'} group flex items-center gap-3.5 text-md hover:bg-gray-800 font-medium p-2 rounded-md`}>
                            <div>{React.createElement(item?.icon, {size: 20})}</div>
                            <h2 style={{transitionDelay: `%{i + 3}00ms`}} className={`whitespace-pre duration-500 ${!isSideBarOpen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{item.name}</h2>
                            <h2 className={`${isSideBarOpen && 'hidden'} absolute left-48  font-semibold p-0 w-0 overflow-hidden drop-shadow-lg whitespace-pre text-gray-900 bg-white group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{item.name}</h2>
                        </Link>)}
                    </div>
                </div>
            <div className='flex-1'>

            </div>
        </div>
    );
};

export default Main; */}
    </>
  )
}

export default App
