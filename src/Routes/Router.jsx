import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import BarChart from '../Pages/BarChart/BarChart';
import GeographyChart from '../Pages/GeographyChart/GeographyChart';
import AreaChart from '../Pages/AreaChart/AreaChart';
import Calendar from '../Pages/Calendar/Calendar';
import InvoiceBalances from '../Pages/InvoiceBalance/InvoiceBalances';
import FaqPage from '../Pages/FaqPage/FaqPage';
import PieChart from '../Pages/PieChart/PieChart';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/invoicebalance',
                element: <InvoiceBalances></InvoiceBalances>
            },
            {
                path: '/faq',
                element: <FaqPage></FaqPage>
            },
            {
                path: '/calendar',
                element: <Calendar></Calendar>
            },
            {
                path: '/barchart',
                element: <BarChart></BarChart>
            },
            {
                path: '/piechart',
                element: <PieChart></PieChart>
            },
            {
                path: '/geochart',
                element: <GeographyChart></GeographyChart>
            },
            {
                path: '/areachart',
                element: <AreaChart></AreaChart>
            }
        ]
    }
])

export default Router;