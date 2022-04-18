import React from 'react';
import CheckOut from '../CheckOut/CheckOut';
import './Service.css'

const Service = (props) => {
    const { img, name, price, time, descripation } = props.service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h1>{name}</h1>
                <p>{price}</p>
                <h4>{time}</h4>
                <p>{descripation}</p>

            </div>
            <button className='btn-cart'>
                <p>Buy Now</p>
            </button>
        </div>
    );
};

export default Service;