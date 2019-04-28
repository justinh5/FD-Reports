import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styles from "../styles/adverseEvents/AERecords.scss";
import { selectTab } from "./../actions";
import AERecordList from "./AERecordList";
import { Doughnut } from 'react-chartjs-2';

class AERecords extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.test =[
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
  }

  componentWillMount() {
    console.log("Is Mounting!");
  }

  handleChangeTab(event) {
    const { dispatch } = this.props;
    dispatch(selectTab(parseInt(event.target.attributes['data-tab'].value)));
  }

  render() {
    let tab1Class = this.props.selectedTab === 0 ? 'tab selected' : 'tab';
    let tab2Class = this.props.selectedTab === 1 ? 'tab selected' : 'tab';
    let tab3Class = this.props.selectedTab === 2 ? 'tab selected' : 'tab';

    return (
      <div>
        <div className="tabs">
          <div className={tab1Class} data-tab="0" onClick={this.handleChangeTab}>Product Types</div>
          <div className={tab2Class} data-tab="1" onClick={this.handleChangeTab}>Reported Outcomes</div>
          <div className={tab3Class} data-tab="2" onClick={this.handleChangeTab}>Reported Reactions</div>
        </div>
        <AERecordList recordList={this.test}/>
      </div>
    );
  }
};

AERecords.propTypes = {
  recordList: PropTypes.object,
  selectedTab: PropTypes.number
};

const mapStateToProps = state => {
  return {
    selectedTab: state.selectedTab,
    recordList: state.recordList
  };
};

export default connect(mapStateToProps)(AERecords);
