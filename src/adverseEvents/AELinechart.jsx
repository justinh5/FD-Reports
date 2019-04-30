import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

function AELinechart(props) {

    const chartData = {
      labels: props.labels,
      datasets: [{
        backgroundColor: 'rgb(42, 147, 213, 0.2)',
        borderColor: 'rgb(42, 147, 213)',
        data: props.counts
      }]
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
          display: true,
          text: props.title
      },
      scales: {
          yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Adverse event reports"
              },
              ticks: {
                  beginAtZero: true
              }
          }],
          xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Year'
              }
          }]
      }
    };

  return (
    <div className="linechart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

AELinechart.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  counts: PropTypes.array
};


export default AELinechart;
