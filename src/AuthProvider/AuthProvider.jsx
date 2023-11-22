import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
    }
    const authInfo ={
        darkMode,
        setDarkMode,
        isSideBarOpen,
        toggleSideBar
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;