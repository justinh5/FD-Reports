import React from "react";
import PropTypes from 'prop-types';
import styles from "../styles/adverseEvents/AERecords.scss";
import { Doughnut } from 'react-chartjs-2';

function AERecordList(props) {

  // Save max value in state?

  return (
    <div className="record-container">
      {props.recordList.map(function(item, index) {
        if(index < 10) {
          let w = Math.round((item.value / props.recordList[0].value)*100);
          return <div className="record" key={index}>
            <h4 className="record-label">{item.label} <span className="record-amt">{item.value}</span></h4>
            <div className="count-bar" style={{width: `${w}%`}}></div>
          </div>;
        }
      })}
    </div>
  );
}

AERecordList.propTypes = {
  recordList: PropTypes.array
};

export default AERecordList;
