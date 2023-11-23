import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SideBar from '../Pages/Shared/SideBar/SideBar';

const Main = () => {
    const { darkMode } = useContext(AuthContext);

    return (
        <div className={`${darkMode ? 'dark' : ''} font-Nunito`}>
            <div className='flex dark:bg-gray-900'>
                <SideBar />
                <div className='flex-1 font-Nunito overflow-x-hidden dark:bg-gray-900'>
                    <Header></Header>

                    {/* Main Content  */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;