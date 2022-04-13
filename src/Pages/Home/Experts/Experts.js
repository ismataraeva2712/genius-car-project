import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { name: 'will smith', id: 1, img: expert1 },
        { name: 'Rock donald', id: 2, img: expert2 },
        { name: 'smith jobs', id: 3, img: expert3 },
        { name: 'mileson perker', id: 4, img: expert4 },
        { name: 'jack donald', id: 5, img: expert5 },
        { name: 'mack willium', id: 6, img: expert6 }
    ]
    return (
        <div className='container'>
            <h2 className='text-primary text-center  mt-5'>Our Experts</h2>
            <div className='row container'>
                {

                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    ></Expert>)

                }
            </div>

        </div>
    );
};

export default Experts;