import React, { useState } from 'react';
import { UserData } from '../../../Utilities/FakeData';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const BarChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "lightblue",
            ],
            borderColor: "lightblue",
            borderWidth: 1,
          }, 
        ],
      });
    return (
        <div>
            <Bar data={userData}></Bar>
        </div>
    );
};

export default BarChart;