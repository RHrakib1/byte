import Home from '../Home/Home';
import Footer from '../Footter/Footer';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navbar;