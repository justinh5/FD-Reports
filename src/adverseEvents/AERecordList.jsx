import React from "react";
import styles from "../styles/adverseEvents/AERecords.scss";
import { Doughnut } from 'react-chartjs-2';

function AERecordList() {

  const test =[
    {
      label: "Example one!",
      value: 4000
    },
    {
      label: "Example Two!",
      value: 2000
    },
    {
      label: "Example Three!",
      value: 180
    }
  ];

  // Save max value in state?


  return (
    <div className="record-container">
      {test.map(function(item, index) {
        if(index < 10) {
          let w = Math.round((item.value / test[0].value)*100);
          return <div className="record" key={index}>
            <h4 className="record-label">{item.label} <span className="record-amt">{item.value}</span></h4>
            <div className="count-bar" style={{width: `${w}%`}}></div>
          </div>;
        }
      })}
    </div>
  );
}



export default AERecordList;
