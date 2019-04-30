import React from 'react';
import styles from '../styles/recalls/recallsStatus.scss';

function recallStatus() {

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
            <td className="right-col status-amt first-row">2180</td>
          </tr>
          <tr>
            <td className="left-col status-label">Completed</td>
            <td className="right-col status-amt">314</td>
          </tr>
          <tr>
            <td className="left-col status-label">Terminated</td>
            <td className="right-col status-amt">7684</td>
          </tr>
          <tr>
            <td className="left-col status-label">Pending</td>
            <td className="right-col status-amt">0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default recallStatus;
