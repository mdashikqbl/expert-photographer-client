import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/pro (1).png'

const Header = () => {
    return (
        <nav className='header' >

            < img src={logo} alt="" />
            <p> EXPERT PHOTOGRAPHER</p>
            <div className='link'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/blog'>BLOG</Link>
                <Link to='/login'>LOG IN</Link>
            </div>
        </nav >
    );
};

export default Header;