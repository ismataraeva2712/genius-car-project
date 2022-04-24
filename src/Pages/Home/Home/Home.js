import React from 'react';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Genius car</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;