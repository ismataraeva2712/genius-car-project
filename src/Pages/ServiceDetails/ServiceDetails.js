import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate(`/checkout/${serviceId}`)
    }
    const [service] = useServiceDetails(serviceId)
    return (
        <div className='text-center'>
            <h1>Booking for {service.name} </h1>
            <button className='bg-primary text-white border-0 p-3' onClick={handleCheckout} >Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetails;