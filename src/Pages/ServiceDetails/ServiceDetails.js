import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate('/checkout')
    }
    const [service, setService] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='text-center'>
            <h1>Booking for {service.name} </h1>
            <button className='bg-primary text-white border-0 p-3' onClick={handleCheckout} >Proceed Checkout</button>
        </div>
    );
};

export default ServiceDetails;