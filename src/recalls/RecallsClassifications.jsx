import React from 'react';
import styles from '../styles/recalls/recallsClassifications.scss';
import { Doughnut } from 'react-chartjs-2';

function RecallsClassifications(props) {

  const chartData = {
      datasets: [
        {
          backgroundColor: ['#2A93D5', '#135589', '#57E299', '#3DDAD7'],
          data: [529141, 170966, 150966, 17966]
        }
      ],
      labels: [
        'Class I',
        'Class II',
        'Class III',
        'Not Classified'
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
    <div className="classifications-container">
      <p className="chart-title">{props.title}</p>
      <div className="chart-legend-container">
        <div className="chart-container">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
        <div className="custom-legend">
          <div className="legend-item">
            <div className="legend-color color2"></div>
            <p className="legend-label">Class I - Dangerous or defective products that predictably could cause serious health problems or death</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color3"></div>
            <p className="legend-label">Class II - Products that might cause a temporary health problem, or pose only a slight threat of a serious nature</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color4"></div>
            <p className="legend-label">Class III - Products that are unlikely to cause any adverse health reaction, but that violate FDA labeling or manufacturing laws</p>
          </div>
          <div className="legend-item">
            <div className="legend-color color5"></div>
            <p className="legend-label">Not yet classified</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default RecallsClassifications;
