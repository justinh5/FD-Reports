import React from "react";
import styles from "../styles/adverseEvents/AESeriousness.scss";
import { Doughnut } from 'react-chartjs-2';

function AESeriousness() {

  const chartData = {
      datasets: [
        {
          backgroundColor: ["#3DDAD7", "#2A93D5"],
          data: [529141, 170966]
        }
      ],
      labels: [
        'Very serious',
        'None of the above'
      ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false
    },
    legend:  {
      display: false
    }
  };

  return (
    <div className="seriousness-container">
      <p className="chart-title">Adverse Event Seriousness</p>
      <div className="chart-legend-container">
        <div className="chart-container">
          <Doughnut data={chartData} options={chartOptions}/>
        </div>
        <div className="custom-legend">
          <div className="legend-item">
            <div className="legend-color color3"></div>
            <p className="legend-label">The event resulted in death, a life threatening condition, hospitalization, disability, congenital anomaly, or other serious condition</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color2"></div>
            <p className="legend-label">The adverse event did not result in any of the above</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AESeriousness;
