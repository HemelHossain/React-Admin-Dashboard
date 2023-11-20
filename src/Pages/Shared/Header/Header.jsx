import React, { useContext } from 'react';
import { MdOutlineNotificationAdd, MdOutlinePerson, MdOutlineSettings, MdOutlineLightMode, MdOutlineDarkMode, MdOutlineSearch, MdFullscreenExit, MdChatBubbleOutline, MdFormatListBulleted } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { darkMode, setDarkMode } = useContext(AuthContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    return (
        <div className='flex justify-between items-center dark:bg-gray-800 p-2 px-3 border-b dark:border-gray-500'>
            <div className='relative'>
                <input className='border dark:bg-gray-700 dark:border-0  bg-white focus:outline-none rounded-sm p-1 pl-2' type="text" name="" id="" placeholder='Search...' />
                <i className='absolute text-gray-700 dark:text-white right-3 top-1/2 transform -translate-y-1/2'> <MdOutlineSearch className='cursor-pointer' size={20} /></i>

            </div>
            <div className='flex items-center space-x-3 dark:text-white'>
                <button className='flex items-center'>
                    <HiOutlineGlobeAlt size={18} /> <span className='text-xs'>English</span>
                </button>
                <button onClick={toggleDarkMode}>
                    {darkMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={18} />}
                </button>
                <button className='flex items-center'>
                    <MdFullscreenExit size={18} />
                </button>
                <button>
                    <MdOutlineNotificationAdd size={18} />
                </button>
                <button>
                    <MdChatBubbleOutline size={18} />
                </button>
                <button>
                    <MdFormatListBulleted size={18} />
                </button>
                <button>
                    <img className='w-6 h-6 rounded-full' src="https://scontent.fdac13-1.fna.fbcdn.net/v/t39.30808-6/301612031_136682799086460_7382901443889000614_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnsvGdb1mhQ4JXOYpg0R7YU5O_dMFkA2RTk790wWQDZIcoQtZreBZEyOoVhiJC9B6nvBPWPhKs5Jg6Ib5QDhkL&_nc_ohc=Q_UMvFwffNwAX97D1ij&_nc_ht=scontent.fdac13-1.fna&oh=00_AfBFC1Gst2V1j-rxVz7sQZD2wOFETbXgACeJaTSUhmMI3g&oe=656109BF" alt="" />
                </button>
                <button>
                    <MdOutlineSettings size={20} />
                </button>
            </div>
        </div>
    );
};

export default Header;