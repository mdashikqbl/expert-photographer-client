import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer-style'>
            <div className='footer-detail'>
                <div>
                    <p><small>© ALL Reserved by Expert Photographer.2022</small></p>
                </div>
                <div className='footer-link'>
                    <a typeof='/login'>Home</a>
                    <a href="">About Us</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;