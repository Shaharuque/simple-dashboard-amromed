import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass,count }) => {
    return (
        <div className={`card d-flex justify-between p-4 lg:card-side ${bgClass}`}>
            <figure className='pl-5'>
                <img className='w-10' src={img} alt="Album" />
            </figure>
            <div className=" text-white">
                <div className=' font-bold'>
                    <p className='text-end'>{count}</p>
                </div>
                <div>
                    <h2 className="card-title text-sm">{cardTitle}</h2>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;