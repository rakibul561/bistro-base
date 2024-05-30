/* eslint-disable no-unused-vars */
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import UseCarts from "../../Hooks/UseCarts";

const Dashboard = () => {

    const [cart] = UseCarts();

    // TODU: get isAdmin value from the database
    const isAdmin = true;



    return (
        <div className="flex">
            {/* dashboard side bar*/}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 space-y-2">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminhome'>
                                    <FaHome></FaHome>
                                     Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUsers'>
                                    <FaUser></FaUser>
                                    All User
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <FaList></FaList>
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider">OR</div>
                    {/* shared navbar Links */}
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
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
                        <NavLink to='/order/salad'>
                            <FaEnvelope></FaEnvelope>
                            Contract
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;