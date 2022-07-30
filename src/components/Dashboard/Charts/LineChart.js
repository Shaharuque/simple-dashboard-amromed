import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { UserData } from '../../../Utilities/FakeData';
import Chart from 'chart.js/auto'

const LineChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "Users Lost",
            data: UserData.map((data) => data.userLost),
            backgroundColor: [
              "#f3ba2f",
            ],
            borderColor: "black",
            borderWidth: 2,
          }
          
        ],
      });
      console.log(UserData)
    return (
       <Line data={userData}></Line>
    );
};

export default LineChart;