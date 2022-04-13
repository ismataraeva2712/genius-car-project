import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, description, img, price } = service
    const navigate = useNavigate()
    const handleNavigateServiceDetails = id => {
        navigate(`/serviceDetails/${id}`)
    }

    return (
        <div id='service' className='my-card'>
            <img src={img} alt="" />
            <h3 className='mt-2'>{name}</h3>
            <p>price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateServiceDetails(id)} className='btn btn-primary mb-3'>Book : {name}</button>
        </div>
    );
};

export default Service;