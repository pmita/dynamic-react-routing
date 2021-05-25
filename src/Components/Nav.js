import React from 'react';
//Let's import everything route related
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <h2 className="logo">Furniture.co</h2>

            <ul className="nav-links">
                <Link to='/about'>
                    <li>About us</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                 
            </ul>
        </nav>
    );
}

export default Nav;