import React, { useState } from 'react';
import { UserData } from '../../../Utilities/FakeData';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const AreaChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),     //x-axis data
        datasets: [
          {
            fill: true,
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),  
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    return (
        <div>
        <Line data={userData}></Line>
        </div>
    );
};

export default AreaChart;