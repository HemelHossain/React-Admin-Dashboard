import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './Routes/Router.jsx'
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
