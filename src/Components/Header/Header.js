import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/pro (1).png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='header' >
            <div>< img src={logo} alt="" /></div>
            <p> EXPERT PHOTOGRAPHER</p>
            <div className='link'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT US</Link>
                <Link to='/blog'>BLOG</Link>
                {user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to='/login'>LOG IN</Link>
                }
            </div>
        </nav >
    );
};

export default Header;