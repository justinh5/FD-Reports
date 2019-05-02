import React from 'react';
import PropTypes from 'prop-types';

function AERecordList(props) {

  return (
    <div className="record-container">
      <p className="description">{props.description}</p>
      {props.recordList.map(function(item, index) {
        if(index < 10) {
          let w = Math.round((item.count / props.recordList[0].count)*100);
          return <div className="record" key={index}>
            <h4 className="record-label">{item.term} <span className="record-amt">{item.count}</span></h4>
            <div className="count-bar" style={{width: `${w}%`}}></div>
          </div>;
        }
      })}
    </div>
  );
}

AERecordList.propTypes = {
  description: PropTypes.string,
  recordList: PropTypes.array
};

export default AERecordList;
