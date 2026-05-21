import 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
        </nav>
    );
};

export default Header;