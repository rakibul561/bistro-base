
import { Outlet } from 'react-router-dom';
import Fotter from '../Pagse/Shaerd/Fotter';
import Navbar from '../Pagse/Shaerd/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;