import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>this is service page {serviceId} </h1>
        </div>
    );
};

export default ServiceDetails;