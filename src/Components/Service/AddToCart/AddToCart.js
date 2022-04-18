import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddToCart.css'

const AddToCart = () => {
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <div className='text-tocart'>
            <h1 >Add to Cart Service:{serviceId}</h1>
            <button onClick={handleCheckOut} >Order Now</button>
        </div>

    );
};

export default AddToCart;