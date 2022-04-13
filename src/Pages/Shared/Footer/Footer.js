import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer>
            <p className='text-center my-5'><small>copyright @ || {year}</small></p>
        </footer>
    );
};

export default Footer;