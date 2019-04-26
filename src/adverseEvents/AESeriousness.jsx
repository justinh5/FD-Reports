import React from "react";
import { Doughnut } from 'react-chartjs-2';

function AESeriousness() {

  const chartData = {
      labels: ["1", "2", "3", "N"],
      datasets: [
        {
          label: "Serious",
          backgroundColor: ["#3DDAD7", "#2A93D5", "#135589", "#57E299"],
          data: [529141, 170966, 150966, 17966 ]
        }
      ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false,
        text: 'Adverse Event Seriousness'
    },
    legend:  {
      display: false,
      position: 'top'
    }
  };

  return (
    <div className="seriousness-container">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
}


export default AESeriousness;
