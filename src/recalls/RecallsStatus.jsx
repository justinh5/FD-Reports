import React from 'react';
import styles from '../styles/recalls/recallsStatus.scss';

function recallStatus(props) {

  return (
    <div className="status-container">
      <table>
        <thead>
          <tr>
            <th className="left-col chart-title">Report Status</th>
            <th className="right-col chart-title">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="left-col status-label first-row">Ongoing</td>
            <td className="right-col status-amt first-row">{props.status.ongoing}</td>
          </tr>
          <tr>
            <td className="left-col status-label">Completed</td>
            <td className="right-col status-amt">{props.status.completed}</td>
          </tr>
          <tr>
            <td className="left-col status-label">Terminated</td>
            <td className="right-col status-amt">{props.status.terminated}</td>
          </tr>
          <tr>
            <td className="left-col status-label">Pending</td>
            <td className="right-col status-amt">{props.status.pending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default recallStatus;
