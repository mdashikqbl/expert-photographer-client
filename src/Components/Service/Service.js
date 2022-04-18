import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const navigate = useNavigate()
    const navigateAddToCart = id => {
        navigate(`/service/${id}`);
    }
    const { img, name, price, time, descripation, id } = props.service
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
                <p onClick={() => navigateAddToCart(id)}>Buy Now </p>
            </button>
        </div>
    );
};

export default Service;