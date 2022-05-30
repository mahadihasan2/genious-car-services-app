import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='container'>
            <img src={img} alt="" />
            <h1>Service Name: {name}</h1>
            <p>Price: {price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;