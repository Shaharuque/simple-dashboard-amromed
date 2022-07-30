import React from 'react';

const ReportCard = ({title}) => {
    return (
        <div className='mt-6 border-solid border-2 border-gray-500 rounded'>
        <h1 className='bg-teal-600 text-white p-2'>{title}</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Report</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-teal-500'>Cy Ganderton</td>
                            <td className='text-center'>5</td>
                        </tr>

                        <tr>
                            <td className='text-teal-500'>Hart Hagerty</td>
                            <td className='text-center'>8</td>
                        </tr>

                        <tr>
                            <td className='text-teal-500'>Brice Swyre</td>
                            <td className='text-center'>6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportCard;