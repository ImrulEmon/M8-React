import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import Search from '../Search/Search';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <Search></Search>
            </nav>
            
        </div>
    );
};

export default Header;