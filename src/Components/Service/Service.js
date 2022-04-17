import React from 'react';
import './Service.css'

const Service = (props) => {
    const { img, name, price, time } = props.service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <h4>{time}</h4>

        </div>
    );
};

export default Service;