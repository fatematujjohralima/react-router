import 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/mobiles">Mobiles</Link>
            <Link to="/laptop">Laptop</Link>
        </nav>
    );
};

export default Header;