import React from 'react';
import './banner.css'
import banner1 from '../../images/banner/banner1.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner1} alt="" />
        </div>
    );
};

export default Banner;