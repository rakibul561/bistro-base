
import { Outlet, useLocation } from 'react-router-dom';
import Fotter from '../Pagse/Shaerd/Fotter';
import Navbar from '../Pagse/Shaerd/Navbar/Navbar';

const Main = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Fotter></Fotter>}
        </div>
    );
};

export default Main;