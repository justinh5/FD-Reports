import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../styles/adverseEvents/AERecords.scss';
import AERecordList from './AERecordList';

function AERecords(props) {

  let tab1Class = props.selectedTab === props.tabs[0].id ? 'tab selected' : 'tab';
  let tab2Class = props.selectedTab === props.tabs[1].id ? 'tab selected' : 'tab';
  let tab3Class = props.selectedTab === props.tabs[2].id ? 'tab selected' : 'tab';

  return (
    <div>
      <div className="tabs">
        <div className={tab1Class}
            data-tab={props.tabs[0].id}
            data-index="0"
            onClick={props.onTabChange}>
             {props.tabs[0].label}
        </div>
        <div className={tab2Class}
            data-tab={props.tabs[1].id}
            data-index="1"
            onClick={props.onTabChange}>
             {props.tabs[1].label}
        </div>
        <div className={tab3Class}
            data-tab={props.tabs[2].id}
            data-index="2"
            onClick={props.onTabChange}>
             {props.tabs[2].label}
        </div>
      </div>
      <AERecordList recordList={props.recordList}/>
    </div>
  );
}

AERecords.propTypes = {
  tabs: PropTypes.array,
  fetched: PropTypes.bool,
  recordList: PropTypes.array,
  selectedTab: PropTypes.string
};

export default connect()(AERecords);
