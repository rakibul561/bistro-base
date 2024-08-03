import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCarts from "../../../Hooks/UseCarts";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCarts();

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }

    const navLinks = (
        <div className="space-x-8">
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/menu'>Our Menu</Link></a>
            <a><Link to='/order/salad'>Order Food</Link></a>
            {/* <a><Link to='/secret'>Secret</Link></a> */}
            <Link to='/dashboard/cart'>
                <a className="btn btn-sm">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </a>
            </Link>
            
        </div>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Bistro Boss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {user ? (
                    <img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full" />
                ) : (
                    <a className="btn">Button</a>
                )} */}
                {user ? (
                <button onClick={handleLogout} className="btn btn-outline btn-sm btn-error">Logout</button>
            ) : (
                <a><Link to='/login' className="btn btn-outline btn-sm btn-success">Login</Link></a>
            )}
            </div>
        </div>
    );
};

export default Navbar;
