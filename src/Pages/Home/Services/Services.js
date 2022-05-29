import React from 'react';
import repaire1 from '../../../images/repaire1.png';


const services = [
    { id: 1, name: 'oil-change', price: '$1000', description: 'this service is very good', img: repaire1 }
]

const Services = () => {
    return (
        <div>
            <h2>This is services page </h2>
        </div>
    );
};

export default Services;