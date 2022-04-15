import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate('/checkout')
    }
    return (
        <div className='text-center'>
            <h1>this is service details page {serviceId} </h1>
            <button className='bg-primary text-white border-0 p-3' onClick={handleCheckout} >Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetails;