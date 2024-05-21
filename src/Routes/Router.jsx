import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Meno from "../Pagse/Menu/Meno";
import Order from "../Pagse/OrderPagse/Order/Order";

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
        }
      ]
    },
  ]);