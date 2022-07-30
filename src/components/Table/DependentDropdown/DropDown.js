import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { getDate } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const DropDown = ({setTableCall}) => {

    const options = [
        { label: 'Select', value: null },
        { label: 'Patient', value: 'patients' },
        { label: 'Doctor', value: 'doctors' },
        { label: 'Stuff', value: 'stuffs' },
    ];
    const options2 = [
        { label: 'Select', value: null },
        { label: 'Test1', value: 'test1' },
        { label: 'Test2', value: 'test2' },
        { label: 'Test3', value: 'test3' },
    ];

    const [value, setValue] = useState(null);
    const [value2, setValue2] = useState(null);
    const [date, setDate] = useState(new Date());
    

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    //React date picker(calender)
    const handleDateChange = date => setDate(date);
    const CustomInput = ({ value, onClick }) => (
        <button className='border-2 border-gray-300 rounded-sm px-2' onClick={onClick}>{value}</button>
    );

    const callTable = () => {
        setTableCall(true)
    }

    return (
        <div className='mt-4 mb-8'>
            <h1 className='text-orange-500 font-semibold text-xl mb-3'>Batching Claim(s)</h1>

            <div className='lg:flex '>
                <div className='mr-3'>
                    <div className='mb-2'>
                        <label className='font-semibold'>Sort By</label>
                    </div>
                    <select
                        className='font-semibold border-2 border-gray-200 rounded w-24'
                        value={value}
                        onChange={handleChange}>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                {
                    value ?
                        <div className='mr-3'>
                            <div className='mb-2'>
                                <label className='font-semibold'>Patient(s)</label>
                            </div>
                            <select
                                className='font-semibold border-2 border-gray-200 rounded w-24'
                                value={value2}
                                onChange={handleChange2}>
                                {options2.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        : null
                }

                {
                    value2 ?
                        <div className='mr-3'>
                            <div className='mb-2'>
                                <label className='font-semibold'>To Date</label>
                            </div>
                            <DatePicker
                                selected={date}
                                onChange={handleDateChange}
                                customInput={<CustomInput />}
                            />
                        </div>
                        : null
                }

                {
                    value && value2 && date ?
                        <div className='flex items-end'>
                            <button onClick={callTable} className='mr-1 bg-teal-600 px-2 py-1 rounded text-white'>Go</button>
                            <button className='mr-5 bg-red-600 px-2 py-1 rounded text-white'>Cancel</button>
                            <button className='mr-1 bg-gray-600 px-2 py-1 rounded text-white'>Generate Batch</button>
                            <button className='bg-teal-600 px-2 py-1 rounded text-white'>Generate CSV</button>
                        </div>
                        :
                        null
                }
            </div>

        </div >
    );
};

export default DropDown;