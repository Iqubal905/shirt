import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './computent/Header/Header';
import Main from './computent/Layout/Main';
import Home from './computent/Home/Home';
import Orderreview from './computent/OrderReview/OrderReview';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('tshirts.json')
      },
      {
        path:'review',
        element:<Orderreview></Orderreview>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
