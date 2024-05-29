import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Meno from "../Pagse/Menu/Meno";
import Order from "../Pagse/OrderPagse/Order/Order";
import Login from "../Pagse/Login/Login";
import SignUp from "../Pagse/Login/SignUp";
import Secret from "../Pagse/Shaerd/Secret";
import PrivetRoutes from "./PrivetRoutes";  
import Dashboard from "../Pagse/Login/Dashboard";
import Cart from "../Pagse/DashboardPagse/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
          path:'/menu',
          element:<Meno></Meno>
        },
        {
          path:'order/:category',
          element: <Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivetRoutes><Secret></Secret></PrivetRoutes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>, 
      children: [
        {
          path:'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);