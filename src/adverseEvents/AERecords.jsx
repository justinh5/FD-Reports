import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from "../styles/adverseEvents/AERecords.scss";
import { selectTab } from "./../actions";
import AERecordList from "./AERecordList";
import { Doughnut } from 'react-chartjs-2';

function AERecords(props){

  function handleChangeTab(event) {
    const { dispatch } = props;
    dispatch(selectTab(parseInt(event.target.attributes['data-tab'].value)));
  }

  let tab1Class = props.selectedTab === 0 ? 'tab selected' : 'tab';
  let tab2Class = props.selectedTab === 1 ? 'tab selected' : 'tab';
  let tab3Class = props.selectedTab === 2 ? 'tab selected' : 'tab';

  return (
    <div>
      <div className="tabs">
        <div className={tab1Class} data-tab="0" onClick={handleChangeTab}>Product Types</div>
        <div className={tab2Class} data-tab="1" onClick={handleChangeTab}>Reported Outcomes</div>
        <div className={tab3Class} data-tab="2" onClick={handleChangeTab}>Reported Reactions</div>
      </div>
      <AERecordList/>
    </div>
  );
};

AERecords.propTypes = {
  recordList: PropTypes.array,
  selectedTab: PropTypes.number
};

const mapStateToProps = state => {
  return {
    selectedTab: state.selectedTab,
    recordList: state.recordList
  };
};

export default connect(mapStateToProps)(AERecords);
