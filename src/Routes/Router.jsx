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
import Users from "../Pagse/DashboardPagse/dashboard/All Users/Users";
import AddItem from "../Pagse/DashboardPagse/dashboard/Add Item/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../Pagse/DashboardPagse/ManageItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Meno></Meno>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/secret',
        element: <PrivetRoutes><Secret></Secret></PrivetRoutes>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
    children: [
      // normal user route
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      // admin only routes
      {
       path: 'addItems',
       element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
      },
      {
        path:'manageItems',
        element:<ManageItem></ManageItem>
      },
      {
        path: 'allUsers',
        element: <AdminRoutes><Users></Users></AdminRoutes>
      }
    ]
  }
]);