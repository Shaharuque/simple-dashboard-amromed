import React from 'react';
import AreaChart from './Charts/AreaChart';
import BarChart from './Charts/BarChart';
import LineChart from './Charts/LineChart';
import Info from './Info/Info';
import ReportCard from './ReportCard/ReportCard';

const DashBoard = () => {
    return (
        <div className='p-4'>
        <h1 className="font-bold mb-2 text-orange-500">Dashboard</h1>
            <Info></Info>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 mt-6'>
                <div style={{ width: '32vw', border: '2px solid gray', borderRadius: '3px' }}>
                    <h3 className=' text-white text-center bg-teal-700 font-serif'>User Gained</h3>
                    <div className='py-8'>
                        <AreaChart></AreaChart>
                    </div>
                </div>
                <div style={{ width: '32vw', border: '2px solid gray' }}>
                    <h3 className='text-white text-center bg-teal-700 font-serif'>User Gained vs User Lost</h3>
                    <div className='py-8'>
                        <LineChart></LineChart>
                    </div>
                </div>
                <div style={{ width: '32vw', border: '2px solid gray' }}>
                    <h3 className=' text-white text-center bg-teal-700 font-serif'>User Gained</h3>
                    <div className='py-8'>
                        <BarChart></BarChart>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <ReportCard title={'Scheduler'}></ReportCard>
                <ReportCard title={"Today's Task"}></ReportCard>
                <ReportCard title={'Billing'}></ReportCard>
                <ReportCard title={'Patients'}></ReportCard>
                <ReportCard title={'Stuffs'}></ReportCard>
                <ReportCard title={'Trending Reports'}></ReportCard>
            </div>
        </div>
    );
};

export default DashBoard;