import React from 'react';
import useServices from '../../Hooks/useServices';
import Services from './../Home/Services/Services';

const ManageService = () => {
    const [Services, setServices] = useServices()
    const handleDelet = id => {
        const proceed = window.confirm("Are you sure want to delet?")
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    const remaining = Services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='text-center mt-5'>

            {
                Services.map(service => <div key={service._id}>
                    <h5>{service.name}<button onClick={() => handleDelet(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageService;