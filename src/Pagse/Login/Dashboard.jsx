/* eslint-disable no-unused-vars */
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../../Hooks/UseCarts";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = UseCarts();

    // TODU: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex flex-col md:flex-row">
            {/* dashboard side bar*/}
            <div className="w-full md:w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 space-y-2">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to='/dashboard/adminhome'>
                                    <FaHome />
                                     Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaList />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUsers'>
                                    <FaUser />
                                    All User
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome'>
                                    <FaHome />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/reservation'>
                                    <FaCalendar />
                                    Reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/cart'>
                                    <FaShoppingCart />
                                    My Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'>
                                    <FaAd />
                                    Add Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaList />
                                    My Bookings
                                </NavLink>
                            </li>
                        </>
                    )}
                    <div className="divider">OR</div>
                    {/* shared navbar Links */}
                    <li>
                        <NavLink to='/'>
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <IoMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <FaEnvelope />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
