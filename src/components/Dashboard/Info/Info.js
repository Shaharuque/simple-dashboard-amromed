import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <InfoCard cardTitle="Total No. of Patients" count={36} bgClass="bg-blue-500 " img={clock}></InfoCard>
            <InfoCard cardTitle="Total No. of Doctors" count={12} bgClass="bg-yellow-500" img={marker}></InfoCard>
            <InfoCard cardTitle="Total No. of Stuffs" count={18} bgClass="bg-orange-500" img={phone}></InfoCard>
            <InfoCard cardTitle="Total Client Served" count={360} bgClass="bg-purple-500" img={phone}></InfoCard>
        </div>
    );
};

export default Info;