import React from 'react';
import styles from '../styles/adverseEvents/AESource.scss';
import { Doughnut } from 'react-chartjs-2';

function AESource() {

  // 529141, 170966, 150966, 17966

  const chartData = {
      datasets: [
        {
          backgroundColor: ['#3DDAD7', '#2A93D5', '#135589', '#57E299', '#AED9DA'],
          data: [529141, 170966, 150966, 17966, 5000]
        }
      ],
      labels: [
        'Consumer or non-health professional',
        'Pysician',
        'Other health professional',
        'Pharmacist',
        'Lawyer'
      ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: false
    },
    legend:  {
      display: false,
    }
  };

  return (
    <div className="source-container">
      <p className="chart-title">Report Source</p>
      <div className="chart-legend-container">
        <div className="chart-container">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
        <div className="custom-legend">
          <div className="legend-item">
            <div className="legend-color color1"></div>
            <p className="legend-label">Consumer or non-health professional</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color2"></div>
            <p className="legend-label">Physician</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color3"></div>
            <p className="legend-label">Other health professional</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color4"></div>
            <p className="legend-label">Pharmacist</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color5"></div>
            <p className="legend-label">Lawyer</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AESource;
