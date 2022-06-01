import React from 'react';
import experts1 from '../../../images/experts/expert-1.jpg';
import experts2 from '../../../images/experts/expert-2.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';



const experts = [
    { id: 1, name: "width hade", img: experts1 },
    { id: 2, name: "Madrid khan", img: experts2 },
    { id: 3, name: "Messi Vai", img: experts3 },
    { id: 4, name: "Rolando Khan", img: experts4 },
    { id: 5, name: "Tareack Khan", img: experts5 },
    { id: 6, name: "Tanvir Vai", img: experts6 }
]

const Experts = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center text-primary '>Experts Section </h2>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                ></Expert>)
            }
        </div>
    );
};

export default Experts;