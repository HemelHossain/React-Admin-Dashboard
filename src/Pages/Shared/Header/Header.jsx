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
                <input className='border w-3/5 placeholder-text-xs md:w-full md:ml-0 ml-2 dark:bg-gray-700 dark:border-0 xs:placeholder  bg-white focus:outline-none rounded-sm p-1 pl-2' type="text" name="" id="" placeholder='Search...' />
                <i className='absolute text-gray-700 dark:text-white xs:hidden block visible left-24 md:left-auto md:right-1 top-1/2 transform -translate-y-1/2'> <MdOutlineSearch className='cursor-pointer w-6 md:w-8' /></i>

            </div>
            <div className='flex items-center space-x-2 dark:text-white'>
                <button onClick={toggleDarkMode}>
                    {darkMode ? <MdOutlineLightMode className='w-6 md:w-8' /> : <MdOutlineDarkMode className='w-6 md:w-8' />}
                </button>
                <button>
                    <MdOutlineNotificationAdd className='w-6 md:w-8' />
                </button>
                <button>
                    <MdOutlineSettings className='w-6 md:w-8' />
                </button>
                <button>
                    <MdOutlinePerson className='w-6 md:w-8' />
                </button>
            </div>
        </div>
    );
};

export default Header;