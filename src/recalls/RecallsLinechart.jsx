import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

function RecallsLinechart(props) {

  const chartData = {
    labels: props.labels,
    datasets: [{
      label: props.setB,
      backgroundColor: 'rgb(87, 226, 153, 0.3)',
      borderColor: 'rgb(87, 226, 153)',
      data: props.countsB,
    },
    {
      label: props.setA,
      backgroundColor: 'rgb(42, 147, 213, 0.2)',
      borderColor: 'rgb(42, 147, 213)',
      data: props.countsA
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true
    },
    title: {
        display: true,
        text: props.title
    },
    scales: {
        yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Recall enforcement reports"
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

RecallsLinechart.propTypes = {
  title: PropTypes.string,
  labels: PropTypes.array,
  counts: PropTypes.array
};


export default RecallsLinechart;
