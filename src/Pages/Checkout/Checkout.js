import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useServiceDetails from '../../Hooks/useServiceDetails';
import Service from './../Home/Service/Service';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetails(serviceId)
    const [user] = useAuthState(auth);
    // if (user) {
    //     console.log(user)
    // }
    // const [user, setUser] = useState({
    //     name: 'Akbar ali',
    //     emsil: 'akbar@gmail.com',
    //     address: 'nurjahan road',
    //     phone: '04545454'
    // })
    // const handleAddressChange = event => {
    //     const { address, ...rest } = user
    //     const newAddress = event.target.value
    //     const newUser = { address: newAddress, ...rest }
    //     setUser(newUser)
    // }
    const handleOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast('your order is booked')
                    event.target.reset()
                }
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Wellcome checkout page</h2>
            <p>please order {service.name}</p>

            <form onSubmit={handleOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='Name' required readOnly disabled />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" placeholder='email' required readOnly disabled />
                <input className='w-100 mb-2' type="text" name="service" value={service.name} placeholder='service' />
                {/* <input className='w-100 mb-2' onChange={handleAddressChange} value={user.address} type="text" name="address" placeholder='address' /> */}
                <input className='w-100 mb-2' value={user.address} type="text" autoComplete='off' name="address" placeholder='address' />
                <input className='w-100 mb-2' value={user.phone} type="text" name="phone" placeholder='phone' />
                <input className='btn-primary' type="submit" value="place order" />
            </form>

        </div>
    );
};

export default Checkout;