import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation.JSX';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DontationCart from './Components/DontationCart/DontationCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:"/Donation/:id",
        element: <Donation></Donation>, 
        loader: ()=> fetch('../public/Cart.json')
      },
      {
        path:"/Statistics",
        element: <Statistics></Statistics>,
        loader: ()=> fetch('../public/Cart.json')
        
      },
      {
        path: "/DontationCart",
        element: <DontationCart></DontationCart>
       
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
