import React from "react";
import { Line } from 'react-chartjs-2';

function AELinechart() {

    const d = [600, 700, 800, 835, 1100, 1005, 1250, 1150, 983, 976, 950, 945, 980, 1003, 1200, 1150];
    const db = [100, 100, 250, 200, 205, 320, 450, 500];

    const chartData = {
      labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
      datasets: [{
        backgroundColor: 'rgb(42, 147, 213, 0.2)',
        borderColor: 'rgb(42, 147, 213)',
        data: db
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
          text: 'Total Adverse Event Reports Since 2004'
      },
      scales: {
          yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Drug adverse event reports'
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


export default AELinechart;
