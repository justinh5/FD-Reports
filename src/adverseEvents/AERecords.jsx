import React from "react";
import styles from "../styles/adverseEvents/AERecords.scss";
import { Doughnut } from 'react-chartjs-2';

function AERecords() {


  return (
    <div>
      <div className="tabs">
        <div className="tab selected">Product Types</div>
        <div className="tab">Reported Outcomes</div>
        <div className="tab">Reported Reactions</div>
      </div>
      <div className="record-container">
        <div className="record">
          <h4 className="record-label">This is an example [EPC] <span className="record-amt">45485</span></h4>
          <div className="count-bar"></div>
        </div>
        <div className="record">
          <h4 className="record-label">This is an example2 [EPC] <span className="record-amt">25485</span></h4>
          <div className="count-bar"></div>
        </div>
      </div>
    </div>
  );
}


export default AERecords;
